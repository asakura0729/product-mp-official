export type IconCard = {
	image: string;
	imageAlt: string;
	title: string;
	titleHighlight?: string;
	titleSuffix?: string;
	body: string;
};

export const choiceProblems: IconCard[] = [
	{
		image: '/images/pic-advertising_agency.png',
		imageAlt: '広告代理店のイラスト',
		title: '広告代理店',
		body: '・広告費の 約 20% が、中間マージンとして消える。\n・広告費が増えるほど、コストも比例して膨らむ。',
	},
	{
		image: '/images/illust-computer.png',
		imageAlt: '自社運用のイラスト',
		title: '自社運用',
		body: '・専門人材の雇用が固定費として圧迫している。\n・ナレッジの蓄積と教育に、時間とコストがかる。',
	},
];

export const costSolutions: (IconCard & { titleHighlight: string; titleSuffix: string })[] = [
	{
		image: '/images/illust-int_zero.png',
		imageAlt: 'ゼロのイラスト',
		title: '中間マージン不要、',
		titleHighlight: 'ゼロ',
		titleSuffix: 'に！',
		body: '広告費に比例して増える 手数料を排除し、\n運用コストを大幅削減。',
	},
	{
		image: '/images/illust-calendar.png',
		imageAlt: 'カレンダーのイラスト',
		title: '毎月の運用費を、',
		titleHighlight: '定額制',
		titleSuffix: 'に！',
		body: '広告費に連動しない 料金体系で、\n削減分を 貴社の成長投資へ。',
	},
];

export const growthCycleSteps = ['削減', '投資', '成果', '成長'] as const;

export const marginQaAnswer = [
	'いいえ、必要ありません',
	'中間マージンは、元々「マスメディア時代のモデル」。 広告費に比例して手数料が増えるコスト構造は、「世界の常識」とかけ離れた仕組みです。',
	'旧時代の仕組みを、根本から変えます',
] as const;
