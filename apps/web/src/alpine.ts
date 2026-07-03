import type { Alpine } from 'alpinejs';

const LG_BREAKPOINT = 1024;

type LayoutStore = {
	menuOpen: boolean;
	contactModalOpen: boolean;
	imageModalOpen: boolean;
	imageModalSrc: string;
	imageModalAlt: string;
	openMenu: () => void;
	closeMenu: () => void;
	openContactModal: () => void;
	closeContactModal: () => void;
	openImageModal: (src: string, alt: string) => void;
	closeImageModal: () => void;
};

const syncBodyOverflow = (store: LayoutStore) => {
	document.body.style.overflow =
		store.menuOpen || store.contactModalOpen || store.imageModalOpen ? 'hidden' : '';
};

export default (Alpine: Alpine) => {
	Alpine.store('layout', {
		menuOpen: false,
		contactModalOpen: false,
		imageModalOpen: false,
		imageModalSrc: '',
		imageModalAlt: '',
		openMenu(this: LayoutStore) {
			this.menuOpen = true;
			syncBodyOverflow(this);
		},
		closeMenu(this: LayoutStore) {
			this.menuOpen = false;
			syncBodyOverflow(this);
		},
		openContactModal(this: LayoutStore) {
			this.contactModalOpen = true;
			syncBodyOverflow(this);
		},
		closeContactModal(this: LayoutStore) {
			this.contactModalOpen = false;
			syncBodyOverflow(this);
		},
		openImageModal(this: LayoutStore, src: string, alt: string) {
			this.imageModalSrc = src;
			this.imageModalAlt = alt;
			this.imageModalOpen = true;
			syncBodyOverflow(this);
		},
		closeImageModal(this: LayoutStore) {
			this.imageModalOpen = false;
			this.imageModalSrc = '';
			this.imageModalAlt = '';
			syncBodyOverflow(this);
		},
	});

	if (typeof window !== 'undefined') {
		const desktopViewport = window.matchMedia(`(min-width: ${LG_BREAKPOINT}px)`);

		const closeMenuOnDesktop = () => {
			if (!desktopViewport.matches) return;

			const store = Alpine.store('layout') as LayoutStore;
			if (store.menuOpen) {
				store.closeMenu();
			}
		};

		desktopViewport.addEventListener('change', closeMenuOnDesktop);
		window.addEventListener('resize', closeMenuOnDesktop);
	}
};
