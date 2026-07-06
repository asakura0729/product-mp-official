import { ROUTES } from './routes';

export type NavItem = {
	href: string;
	label: string;
	external?: boolean;
	mobileOnly?: boolean;
	headerOnly?: boolean;
	footerOnly?: boolean;
};

export const navItems: NavItem[] = [
	{ href: ROUTES.home, label: 'ホーム', mobileOnly: true },
	{ href: ROUTES.about, label: '集客のチカラとは' },
	{ href: ROUTES.servicePro, label: 'プロ運用プラン' },
	{ href: ROUTES.serviceAdvisor, label: '専属顧問プラン' },
	{ href: ROUTES.pricing, label: '料金について' },
	{ href: ROUTES.contact, label: 'お問い合わせ', footerOnly: true },
	{ href: 'https://labu.co.jp/mission/', label: '会社概要', external: true },
	{ href: ROUTES.terms, label: '利用規約', mobileOnly: true },
	{ href: ROUTES.privacy, label: 'プライバシーポリシー', mobileOnly: true },
];

export const headerNavItems = navItems.filter(
	(item) => !item.mobileOnly && !item.footerOnly,
);

export const mobileNavItems = navItems.filter((item) => !item.footerOnly);

export const footerNavItems = navItems.filter((item) => item.href !== ROUTES.home);

export const SITE_NAME = '集客のチカラ'
export const SITE_URL = 'https://www.product-mp.com/';
export const PHONE_NUMBER = '03-6831-3209';
export const PHONE_HOURS = '[受付時間]　9:30～18:30（平日）';
export const EMAIL_CONTACT_PATH = ROUTES.contact;

export { ROUTES } from './routes';
