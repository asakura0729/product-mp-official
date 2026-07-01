type FeatureItem = {
	text: string;
};

export type ProPlan = {
	id: string;
	tabLabel: string;
	planLead?: string;
	planTitle: string;
	catchLine: string;
	price?: string;
	priceLabel?: string;
	description: string;
	features: FeatureItem[];
};

export const proPlans: ProPlan[] = [
	{
		id: 'light',
		tabLabel: 'ライトプラン',
		planLead: 'プロ運用',
		planTitle: 'ライトプラン',
		catchLine: '手数料ゼロで効果を最大化',
		price: '10',
		description: '広告手数料ゼロだから、 広告を増やし成果を引き上げる。 コストダウンで利益を出す。',
		features: [
			{ text: '広告アカウントの初期設定' },
			{ text: 'Google / Yahoo 広告の日常運用' },
			{ text: 'コンバージョン計測設定 (GA4 等 )' },
			{ text: '入札戦略の設計・調整' },
			{ text: '運用方針のアドバイス・質問対応　等' },
		],
	},
	{
		id: 'standard',
		tabLabel: 'スタンダードプラン',
		planLead: 'プロ運用',
		planTitle: 'スタンダードプラン',
		catchLine: 'さらなる利益最大化へ！',
		price: '30',
		description:
			'AD Portfolio Optimizer が、 貴社の WEB 広告成果を加速し、 事業成長の原動力に変える。',
		features: [
			{ text: 'ライトプランのサービスに加え' },
			{ text: ' HP/ 成果特化型 LP制作' },
			{ text: '広告アカウントの定期診断　等' },
		],
	},
	{
		id: 'enterprise',
		tabLabel: 'エンタープライズプラン',
		planLead: 'プロ運用',
		planTitle: 'エンタープライズプラン',
		catchLine: '全方位 WEB 戦略支援！',
		priceLabel: '案件規模見積',
		description:
			'貴社専用の戦略チームとして、 高度な WEB マーケとブランド戦略で、 事業成長に伴走します。',
		features: [
			{ text: 'スタンダードプランのサービスに加え' },
			{ text: ' SNS 広告 (Meta/Instagram) 運用' },
			{ text: '競合の出稿状況調査' },
			{ text: 'マーケティング戦略全体の設計' },
			{ text: 'ブランディング戦略の構築   等' },
		],
	},
];

export const apoSteps = [
	{
		step: 1,
		title: '貴社の\n"勝ち筋" を読む',
		body: '目標・予算・競合環境をプロが 分析し、最適な広告戦略の 土台を設計します。',
		image: '/images/illust-human_gather.png',
		imageAlt: 'チームで戦略を検討するイラスト',
	},
	{
		step: 2,
		title: '媒体の配分を\nプロが設計する',
		body: 'Google/Yahoo/YouTube など複数媒体の中から、貴社の 目標に最適化した配分を決定。',
		image: '/images/illust-tools.png',
		imageAlt: '金槌やペンチのイラスト',
	},
	{
		step: 3,
		title: '市場の変化を\n継続監視・改善',
		body: '運用開始後もプロが継続監視。データと直感を組み合わせて、成果を最大化し続けます。',
		image: '/images/illust-binoculars.png',
		imageAlt: '双眼鏡のイラスト',
	},
] as const;

export const onboardingSteps = [
	{
		step: 1,
		title: '「無料」診断\nヒアリング',
		body: '現在の貴社運用状況を診断し、 最適なプランを確定します。',
	},
	{
		step: 2,
		title: 'アカウント構築\n戦略設計',
		body: '手数料ゼロを前提に、 貴社専用の広告構造を設計します',
	},
	{
		step: 3,
		title: '運用開始\n利益最大化へ',
		body: '手数料ゼロの「新スタンダード」 で、広告運用を開始します。',
	},
] as const;

export const contractTable = {
	columns: ['プロ運用 ライトプラン', 'プロ運用 スタンダードプラン', 'エンタープライズ・プラン'],
	rows: [
		{ label: '最低ご契約期間', values: ['6 ヵ月', '6 ヵ月', '12 ヵ月'] },
		{ label: '広告費の支払い', values: ['広告実費一括請求', '広告実費一括請求', '広告実費一括請求'] },
		{ label: '支払いサイト', values: ['月末締 翌月末払', '月末締 翌月末払', '月末締 翌月末払'] },
		{ label: '上位プランへの移行', values: ['随時可能', '随時可能', '―'] },
	],
} as const;

export const proFaqs = [
	{
		question: '広告費を増やした場合、\n月額費用も上がりますか？',
		answer:
			'いいえ。各プランの広告投下予算 内であれば、広告費を増やしても、 月額費用は変わりません。',
	},
	{
		question: 'なぜ、これほど低価格で\n広告運用が可能なのですか？',
		answer:
			'運用実務の効率化で工数を削減し、 プロが『戦略設計』に注力できる スキームを構築しています。',
	},
	{
		question: '広告運用は、自動化で放置されませんか？',
		answer:
			'いいえ。プロが独自の 45 チェック 項目で継続監視・監修します。 透明性を担保した運用を提供します。',
	},
] as const;

export const traditionalComparison = [
	{
		num: 1,
		title: '設計：均質化する、自動運用',
		body: '自動運用は効率を優先し、他社と同じキーワードやターゲットに集中するため、入札単価の高騰を招く。',
	},
	{
		num: 2,
		title: '運用：ワンパターン運用になる',
		body: '過去の成功パターンだけをなぞり、 他社と似たような訴求になるため、ユーザーの目に留まらず埋没します。',
	},
	{
		num: 3,
		title: '戦略：全社共通、画一的な戦略',
		body: '自動運用は効率を優先し、他社と同 じキーワードやターゲットに集中す るため、入札単価の高騰を招く',
	},
] as const;

export const apoComparison = [
	{
		num: 1,
		title: '設計：貴社専用の、配分設計',
		body: '貴社の目的・目標・競合環境をプロが分析し、最適案な媒体配分を専用設計します。',
	},
	{
		num: 2,
		title: '運用：プロの知見が、差をつくる',
		body: '自動化では読めない競合の動きやユーザー心理をプロが洞察。横並びでは生まれない差を設計します。',
	},
	{
		num: 3,
		title: '戦略：貴社だけの、勝ち筋戦略',
		body: '過去のデータに固執せず、未開拓のターゲットや新訴求へ挑戦。自動化では描けない勝ち筋を実行します。',
	},
] as const;
