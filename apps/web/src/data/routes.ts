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

export function routeWithHash(path: RoutePath, hash: string): string {
	return `${path}#${hash}`;
}
