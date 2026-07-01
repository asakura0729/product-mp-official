export const problems = [
	{
		image: '/images/illust-graph-down.png',
		text: '運用手数料を 20%\n取られるのは 正直つらい…',
	},
	{
		image: '/images/illust-two_buildings.png',
		text: '広告代理店に 運用を任せてるが、\n競合と横並びかも…',
	},
	{
		image: '/images/illust-abandoned_gear.png',
		text: '自動運用化で 配信が\n放置されていないか不安だ…',
	},
	{
		image: '/images/illust-cant_judge.png',
		text: '代理店レポート を見ても\n妥当性が 判断できない…',
	},
] as const;

export const solutions = [
	{ title: '完全定額', subtitle: '運用手数料ゼロ円！' },
	{ title: '貴社専用', subtitle: 'ポートフォリオ 配分設計' },
	{ title: '脱・自動化', subtitle: 'プロによる徹底監修' },
	{ title: 'プロの知見', subtitle: '勝ち筋を読み解く' },
] as const;

export type FeatureCard = {
	image: string;
	imageAlt: string;
	title: string;
	description: string;
	href?: string;
};

export const features: FeatureCard[] = [
	{
		image: '/images/illust-bar_graph-costdown.png',
		imageAlt: 'コストダウンのイラスト',
		title: '広告運用は完全定額',
		description: '広告費に連動しない 料金体系で、\n削減分を 貴社の成長投資へ',
		href: '/about#sec3',
	},
	{
		image: '/images/graph-portfolio_1.png',
		imageAlt: 'ポートフォリオ運用のイラスト',
		title: '貴社専用のポートフォリオ運用',
		description: '貴社の目的・目標に合わせて 媒体配分を\n「専用設計」いたします',
		href: '/about#sec6',
	},
	{
		image: '/images/illust-mushimegane.png',
		imageAlt: '脱・自動化のイラスト',
		title: '脱・自動化',
		description:
			'自動運用が生む横並びの広告から抜け出し、\n市場の主導権を握る専用設計',
	},
	{
		image: '/images/illust-human_gather.png',
		imageAlt: 'プロの知見のイラスト',
		title: 'プロの知見',
		description:
			'弊社の実務知見をもとに構築した専用AIと\n人の経験が組み合わさることで、\n高精度なアドバイスを実現',
	},
];

export const teamRoles = [
	{
		lead: 'Google認定資格を持つ',
		title: '広告運用スペシャリスト',
	},
	{
		lead: '戦略を設計する',
		title: 'マーケティングプロ',
	},
	{
		lead: '成果を可視化する',
		title: 'データアナリスト',
	},
] as const;
