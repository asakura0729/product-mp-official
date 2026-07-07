export const contactFieldIds = [
  'name',
  'furigana',
  'email',
  'phone',
  'company',
  'position',
  'material',
  'message',
] as const;

export type ContactFieldId = (typeof contactFieldIds)[number];
export type ContactInputFieldType = 'text' | 'email' | 'tel';
export type ContactFormVariant = 'pro-light' | 'exclusive-advisor';

type BaseContactField = {
  id: ContactFieldId;
  label: string;
  placeholder: string;
  required: boolean;
};

export type ContactInputField = BaseContactField & {
  type: ContactInputFieldType;
};

export type ContactSelectField = BaseContactField & {
  type: 'select';
  options: string[];
};

export type ContactTextareaField = BaseContactField & {
  type: 'textarea';
};

export type ContactField = ContactInputField | ContactSelectField | ContactTextareaField;

export type ContactFormValues = Record<ContactFieldId, string>;
export type ContactFormErrors = Partial<Record<ContactFieldId, string>>;

const baseFieldMap: Record<Exclude<ContactFieldId, 'material'>, ContactField> = {
  name: { id: 'name', label: '氏名', placeholder: '山田 太郎', type: 'text', required: true },
  furigana: { id: 'furigana', label: 'フリガナ', placeholder: 'ヤマダ タロウ', type: 'text', required: true },
  email: { id: 'email', label: 'メールアドレス', placeholder: 'example@company.co.jp', type: 'email', required: true },
  phone: { id: 'phone', label: '電話番号', placeholder: '03-1234-5678', type: 'tel', required: true },
  company: { id: 'company', label: '会社名', placeholder: '株式会社〇〇', type: 'text', required: true },
  position: { id: 'position', label: '部署・役職', placeholder: '営業部 部長', type: 'text', required: true },
  message: { id: 'message', label: 'お問い合わせ内容', placeholder: 'ご要望やご質問などをご記入ください', type: 'textarea', required: false },
};

const variantFieldOrderMap: Record<ContactFormVariant, ContactFieldId[]> = {
  'pro-light': ['name', 'furigana', 'email', 'phone', 'company', 'position', 'material', 'message'],
  'exclusive-advisor': ['name', 'furigana', 'email', 'phone', 'company', 'position', 'material', 'message'],
};

const variantMaterialOptionsMap: Record<ContactFormVariant, string[]> = {
  'pro-light': ['プロ運用ライトプラン', '相談予約'],
  'exclusive-advisor': ['専属顧問プラン', '相談予約'],
};

export const getContactFormVariant = (input: Record<string, unknown>): ContactFormVariant =>
  input.variant === 'exclusive-advisor' ? 'exclusive-advisor' : 'pro-light';

export const getContactFields = (variant: ContactFormVariant): ContactField[] =>
  variantFieldOrderMap[variant].map((fieldId) => {
    if (fieldId === 'material') {
      return {
        id: 'material',
        label: '資料の種類',
        placeholder: '選択してください',
        type: 'select',
        required: true,
        options: variantMaterialOptionsMap[variant],
      };
    }

    return baseFieldMap[fieldId];
  });

export const getContactFormRows = (variant: ContactFormVariant): ContactField[][] => {
  const fields = getContactFields(variant);

  return [
    fields.filter((field) => field.id === 'name' || field.id === 'furigana'),
    fields.filter((field) => field.id === 'email' || field.id === 'phone'),
    fields.filter((field) => field.id === 'company' || field.id === 'position'),
    fields.filter((field) => field.id === 'material'),
    fields.filter((field) => field.id === 'message'),
  ];
};

export const getRequiredFieldIds = (variant: ContactFormVariant): ContactFieldId[] =>
  getContactFields(variant)
    .filter((field) => field.required)
    .map((field) => field.id);

export const createEmptyContactFormValues = (): ContactFormValues => ({
  name: '',
  furigana: '',
  email: '',
  phone: '',
  company: '',
  position: '',
  material: '',
  message: '',
});

export const normalizeContactFormValues = (input: Record<string, unknown>): ContactFormValues => {
  const values = createEmptyContactFormValues();

  for (const fieldId of contactFieldIds) {
    const rawValue = input[fieldId];
    values[fieldId] = typeof rawValue === 'string' ? rawValue.trim() : '';
  }

  return values;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\-() ]+$/;

export const validateContactFormValues = (
  values: ContactFormValues,
  variant: ContactFormVariant = 'pro-light',
): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  for (const field of getContactFields(variant)) {
    if (field.required && !values[field.id]) {
      errors[field.id] = `${field.label}は必須です。`;
    }
  }

  if (values.email && !emailPattern.test(values.email)) {
    errors.email = 'メールアドレスの形式が正しくありません。';
  }

  if (values.phone && (!phonePattern.test(values.phone) || values.phone.replace(/[^0-9]/g, '').length < 10)) {
    errors.phone = '電話番号の形式が正しくありません。';
  }

  if (values.message.length > 2000) {
    errors.message = 'お問い合わせ内容は2000文字以内で入力してください。';
  }

  return errors;
};
