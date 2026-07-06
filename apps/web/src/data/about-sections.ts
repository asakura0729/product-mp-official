import { ROUTES, routeWithHash } from './routes';

export const ABOUT_SECTIONS = {
	fixedPricing: 'sec3',
	portfolio: 'sec6',
} as const;

export const aboutFixedPricingHref = routeWithHash(
	ROUTES.about,
	ABOUT_SECTIONS.fixedPricing,
);
export const aboutPortfolioHref = routeWithHash(
	ROUTES.about,
	ABOUT_SECTIONS.portfolio,
);
