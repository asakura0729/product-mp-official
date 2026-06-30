export type NavItem = {
	href: string;
	label: string;
	external?: boolean;
	mobileOnly?: boolean;
	headerOnly?: boolean;
	footerOnly?: boolean;
};

export const navItems: NavItem[] = [
	{ href: '/', label: 'ホーム', mobileOnly: true },
	{ href: '/about', label: '集客のチカラとは' },
	{ href: '/service/pro-light', label: 'プロ運用プラン' },
	{ href: '/service/advisor', label: '専属顧問プラン' },
	{ href: '/pricing', label: '料金について' },
	{ href: '/contact', label: 'お問い合わせ', footerOnly: true },
	{ href: 'https://labu.co.jp/mission/', label: '会社概要', external: true },
	{ href: '/info/terms', label: '利用規約', mobileOnly: true },
	{ href: '/info/privacy', label: 'プライバシーポリシー', mobileOnly: true },
];

export const headerNavItems = navItems.filter(
	(item) => !item.mobileOnly && !item.footerOnly,
);

export const mobileNavItems = navItems.filter((item) => !item.footerOnly);

export const footerNavItems = navItems.filter((item) => item.href !== '/');

export const PHONE_NUMBER = '03-5919-1170';
export const PHONE_HOURS = '[受付時間]　9:30～18:30（平日）';
export const EMAIL_CONTACT_PATH = '/contact';
