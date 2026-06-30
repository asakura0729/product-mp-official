export type AdvisorConcern = {
	lines: [string, string];
};

export const advisorConcerns: AdvisorConcern[] = [
	{ lines: ['代理店に任せてるが、', '妥当性が判断できない…'] },
	{ lines: ['専門人材を雇うほどの、', '固定費はかけられない…'] },
	{ lines: ['運用の方向性が正しいか、', 'プロの裏付けが欲しい…'] },
];

export type ServiceFeature = {
	image: string;
	imageAlt: string;
	title: string;
	subtitle: string;
};

export const serviceFeatures: ServiceFeature[] = [
	{
		image: '/images/illust-mushimegane.png',
		imageAlt: '数値レビューのイラスト',
		title: '数値レビューと\n改善提案',
		subtitle: '運用実態の見える化',
	},
	{
		image: '/images/illust-human_advice.png',
		imageAlt: '運用アドバイスのイラスト',
		title: '運用アドバイス\n質問対応',
		subtitle: '運用効率の最大化',
	},
	{
		image: '/images/illust-report.png',
		imageAlt: 'レポート評価のイラスト',
		title: '代理店レポートの\n評価・解説',
		subtitle: '改善点の明確化',
	},
	{
		image: '/images/illust-computer.png',
		imageAlt: 'オンラインコンサルのイラスト',
		title: 'オンライン\nコンサルMTG',
		subtitle: '改善サイクルの定着化',
	},
];
