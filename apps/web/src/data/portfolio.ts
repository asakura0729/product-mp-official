export type PortfolioItem = {
	image: string;
	imageAlt: string;
	title: string;
	lines: [string, string];
};

export const portfolioItems: PortfolioItem[] = [
	{
		image: '/images/graph-portfolio_1.png',
		imageAlt: '新規集客強化型のポートフォリオ配分',
		title: '新規集客強化型',
		lines: ['WEB 集客を', 'もっと増やしたい'],
	},
	{
		image: '/images/graph-portfolio_2.png',
		imageAlt: '検索最適化型のポートフォリオ配分',
		title: '検索最適化型',
		lines: ['広告費の無駄を', 'なくしたい'],
	},
	{
		image: '/images/graph-portfolio_3.png',
		imageAlt: '競合差別化型のポートフォリオ配分',
		title: '競合差別化型',
		lines: ['競合に埋もれず', '差をつけたい'],
	},
	{
		image: '/images/graph-portfolio_4.png',
		imageAlt: '全方位成長型のポートフォリオ配分',
		title: '全方位成長型',
		lines: ['ブランドも集客も', '強化したい'],
	},
];
