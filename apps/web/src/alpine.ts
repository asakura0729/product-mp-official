import type { Alpine } from 'alpinejs';

const LG_BREAKPOINT = 1024;

type LayoutStore = {
	menuOpen: boolean;
	contactModalOpen: boolean;
	openMenu: () => void;
	closeMenu: () => void;
	openContactModal: () => void;
	closeContactModal: () => void;
};

export default (Alpine: Alpine) => {
	Alpine.store('layout', {
		menuOpen: false,
		contactModalOpen: false,
		openMenu(this: LayoutStore) {
			this.menuOpen = true;
			document.body.style.overflow = 'hidden';
		},
		closeMenu(this: LayoutStore) {
			this.menuOpen = false;
			if (!this.contactModalOpen) {
				document.body.style.overflow = '';
			}
		},
		openContactModal(this: LayoutStore) {
			this.contactModalOpen = true;
			document.body.style.overflow = 'hidden';
		},
		closeContactModal(this: LayoutStore) {
			this.contactModalOpen = false;
			if (!this.menuOpen) {
				document.body.style.overflow = '';
			}
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
