import {
  getContactFormVariant,
  normalizeContactFormValues,
  validateContactFormValues,
} from '../lib/contact-form';

const PARDOT_ENDPOINTS: Record<string, string> = {
  'pro-light': 'https://go.product-mp.com/l/1107302/2026-05-10/blrqmc',
  'exclusive-advisor': 'https://go.product-mp.com/l/1107302/2026-05-10/blrqmg',
};

type InitContactFlowOptions = {
  scrollToTopOnStepChange?: boolean;
};

type DataLayerWindow = Window & {
  dataLayer?: unknown[];
};

const pushFormCompleteEvent = () => {
  const dataLayerWindow = window as DataLayerWindow;
  dataLayerWindow.dataLayer = dataLayerWindow.dataLayer || [];
  dataLayerWindow.dataLayer.push({ event: 'form_complete' });
};

export const initContactFlow = (root: HTMLElement, options: InitContactFlowOptions = {}) => {
  const variant = getContactFormVariant({ variant: root.dataset.contactVariant });
  const contactForm = root.querySelector('[data-contact-form]');
  const panels = {
    input: root.querySelector<HTMLElement>('[data-form-panel="input"]'),
    confirm: root.querySelector<HTMLElement>('[data-form-panel="confirm"]'),
    thanks: root.querySelector<HTMLElement>('[data-form-panel="thanks"]'),
  };
  const indicators = Array.from(root.querySelectorAll<HTMLElement>('[data-step-indicator]'));
  const formStatus = root.querySelector<HTMLElement>('[data-form-status]');
  const confirmStatus = root.querySelector<HTMLElement>('[data-confirm-status]');
  const backButton = root.querySelector<HTMLButtonElement>('[data-form-back]');
  const sendButton = root.querySelector<HTMLButtonElement>('[data-form-send]');
  const submitButton = root.querySelector<HTMLButtonElement>('[data-form-submit]');
  const consentCheckbox = root.querySelector<HTMLInputElement>('[data-personal-info-consent]');
  const confirmValueNodes = Array.from(root.querySelectorAll<HTMLElement>('[data-confirm-value]'));
  const fieldWrappers = Array.from(root.querySelectorAll<HTMLElement>('[data-field-id]'));

  if (
    !(contactForm instanceof HTMLFormElement) ||
    !(panels.input instanceof HTMLElement) ||
    !(panels.confirm instanceof HTMLElement) ||
    !(panels.thanks instanceof HTMLElement) ||
    !(formStatus instanceof HTMLElement) ||
    !(confirmStatus instanceof HTMLElement) ||
    !(backButton instanceof HTMLButtonElement) ||
    !(sendButton instanceof HTMLButtonElement) ||
    !(submitButton instanceof HTMLButtonElement) ||
    !(consentCheckbox instanceof HTMLInputElement)
  ) {
    return;
  }

  const updateSubmitState = () => {
    submitButton.disabled = !consentCheckbox.checked;
  };

  const scrollToTop = () => {
    if (!options.scrollToTopOnStepChange) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getValues = () => {
    const formData = new FormData(contactForm);
    const rawValues = Object.fromEntries(formData.entries());
    return normalizeContactFormValues(rawValues);
  };

  const setActiveStep = (step: 'input' | 'confirm' | 'thanks') => {
    panels.input.hidden = step !== 'input';
    panels.confirm.hidden = step !== 'confirm';
    panels.thanks.hidden = step !== 'thanks';

    indicators.forEach((indicator) => {
      indicator.classList.toggle('is-current', indicator.getAttribute('data-step-indicator') === step);
    });

    scrollToTop();
  };

  const setStatus = (node: HTMLElement, message: string) => {
    node.textContent = message;
    node.classList.toggle('hidden', !message);
  };

  const clearFieldErrors = () => {
    fieldWrappers.forEach((wrapper) => {
      const fieldId = wrapper.getAttribute('data-field-id');
      const errorNode = fieldId ? wrapper.querySelector(`[data-field-error="${fieldId}"]`) : null;

      wrapper.classList.remove('has-error');
      if (errorNode instanceof HTMLElement) {
        errorNode.textContent = '';
        errorNode.classList.add('hidden');
      }
    });
  };

  const setFieldError = (fieldId: string, message: string) => {
    const wrapper = root.querySelector(`[data-field-id="${fieldId}"]`);
    const errorNode = root.querySelector(`[data-field-error="${fieldId}"]`);

    if (wrapper instanceof HTMLElement) {
      wrapper.classList.add('has-error');
    }

    if (errorNode instanceof HTMLElement) {
      errorNode.textContent = message;
      errorNode.classList.remove('hidden');
    }
  };

  const validateValues = () => {
    const values = getValues();
    const errors = validateContactFormValues(values, variant);

    Object.keys(errors).forEach((fieldId) => {
      const wrapper = root.querySelector(`[data-field-id="${fieldId}"]`);
      const label = wrapper?.getAttribute('data-field-label');
      if (label && !values[fieldId as keyof typeof values]) {
        errors[fieldId as keyof typeof errors] = `※${label}を入力してください`;
      }
    });

    return { values, errors };
  };

  const populateConfirm = (values: ReturnType<typeof getValues>) => {
    confirmValueNodes.forEach((node) => {
      const fieldId = node.getAttribute('data-confirm-value');
      if (!fieldId) return;

      const value = values[fieldId as keyof typeof values];
      node.textContent = value || (fieldId === 'message' ? 'ご入力なし' : '-');
    });
  };

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    clearFieldErrors();
    setStatus(formStatus, '');
    setStatus(confirmStatus, '');

    if (!consentCheckbox.checked) {
      setStatus(formStatus, '個人情報の取り扱いへの同意が必要です。');
      consentCheckbox.focus();
      updateSubmitState();
      return;
    }

    const { values, errors } = validateValues();

    if (Object.keys(errors).length > 0) {
      Object.entries(errors).forEach(([fieldId, message]) => {
        if (typeof message === 'string') {
          setFieldError(fieldId, message);
        }
      });

      const firstInvalidField = root.querySelector('.has-error [data-contact-input]');
      if (firstInvalidField instanceof HTMLElement) {
        firstInvalidField.focus();
      }
      setStatus(formStatus, '入力内容をご確認ください。');
      return;
    }

    populateConfirm(values);
    setActiveStep('confirm');
  });

  fieldWrappers.forEach((wrapper) => {
    const input = wrapper.querySelector('[data-contact-input]');
    const fieldId = wrapper.getAttribute('data-field-id');

    if (!(input instanceof HTMLElement) || !fieldId) return;

    const resetFieldState = () => {
      wrapper.classList.remove('has-error');
      const errorNode = wrapper.querySelector(`[data-field-error="${fieldId}"]`);
      if (errorNode instanceof HTMLElement) {
        errorNode.textContent = '';
        errorNode.classList.add('hidden');
      }
      setStatus(formStatus, '');
    };

    input.addEventListener('input', resetFieldState);
    input.addEventListener('change', resetFieldState);
  });

  consentCheckbox.addEventListener('change', () => {
    setStatus(formStatus, '');
    updateSubmitState();
  });

  backButton.addEventListener('click', () => {
    setStatus(confirmStatus, '');
    setActiveStep('input');
    updateSubmitState();
  });

  sendButton.addEventListener('click', async () => {
    const values = getValues();

    const pardotEndpoint = PARDOT_ENDPOINTS[variant];
    if (pardotEndpoint) {
      const pardotFormData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        pardotFormData.append(key, value);
      });
      fetch(pardotEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: pardotFormData,
      }).catch(() => {});
    }

    sendButton.disabled = true;
    sendButton.textContent = '送信中...';
    setStatus(confirmStatus, '');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, variant }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (result && typeof result === 'object' && 'errors' in result && result.errors) {
          clearFieldErrors();
          Object.entries(result.errors).forEach(([fieldId, message]) => {
            if (typeof message === 'string') {
              setFieldError(fieldId, message);
            }
          });
          setActiveStep('input');
          setStatus(formStatus, (result as { message?: string }).message || '入力内容をご確認ください。');
          return;
        }

        setStatus(
          confirmStatus,
          (result as { message?: string }).message || '送信に失敗しました。時間をおいて再度お試しください。',
        );
        return;
      }

      contactForm.reset();
      clearFieldErrors();
      setStatus(formStatus, '');
      setStatus(confirmStatus, '');
      updateSubmitState();
      setActiveStep('thanks');
      pushFormCompleteEvent();
    } catch (_error) {
      setStatus(confirmStatus, '通信エラーが発生しました。時間をおいて再度お試しください。');
    } finally {
      sendButton.disabled = false;
      sendButton.textContent = '送信する';
    }
  });

  updateSubmitState();
};
