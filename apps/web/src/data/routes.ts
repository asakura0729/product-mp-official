export const ROUTES = {
	home: '/',
	about: '/about',
	servicePro: '/service/pro',
	serviceAdvisor: '/service/advisor',
	pricing: '/pricing',
	contact: '/contact',
	terms: '/info/terms',
	privacy: '/info/privacy',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

export function normalizePath(path: string): string {
	const pathname = path.split(/[?#]/)[0] ?? path;
	if (pathname === '/' || pathname === '') return '/';
	return pathname.replace(/\/+$/, '');
}

export function isSamePath(a: string, b: string): boolean {
	return normalizePath(a) === normalizePath(b);
}

export function routeWithHash(path: RoutePath, hash: string): string {
	return `${path}#${hash}`;
}
