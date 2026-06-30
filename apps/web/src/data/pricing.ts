export type PlanMark = '●' | '△' | 'ー';

export type PricingPlanDetail = {
	id: string;
	planLead?: string;
	planTitle: string;
	catchLine: string;
	price?: string;
	priceLabel?: string;
	description: string;
	budgetLabel: string;
};

export const pricingIntro =
	'貴社専用の戦略チームとして、 高度な WEB マーケとブランド戦略で、 事業成長に伴走します。';

export const proPricingPlans: PricingPlanDetail[] = [
	{
		id: 'light',
		planLead: 'プロ運用',
		planTitle: 'ライトプラン',
		catchLine: '手数料ゼロで効果を最大化',
		price: '10',
		description: '広告手数料ゼロだから、 広告を増やし成果を引き上げる。 コストダウンで利益を出す。',
		budgetLabel: '～200万円/月',
	},
	{
		id: 'standard',
		planLead: 'プロ運用',
		planTitle: 'スタンダードプラン',
		catchLine: 'さらなる利益最大化へ！',
		price: '30',
		description:
			'AD Portfolio Optimizer が、 貴社の WEB 広告成果を加速し、 事業成長の原動力に変える。',
		budgetLabel: '200～500万円/月',
	},
	{
		id: 'enterprise',
		planTitle: 'エンタープライズプラン',
		catchLine: '全方位 WEB 戦略支援！',
		priceLabel: '案件規模見積',
		description:
			'貴社専用の戦略チームとして、 高度な WEB マーケとブランド戦略で、 事業成長に伴走します。',
		budgetLabel: '「要相談」',
	},
];

export const proPlanTableColumns = [
	'プロ運用\nライトプラン',
	'プロ運用\nスタンダードプラン',
	'エンタープライズ\nプラン',
] as const;

type ProTableRow =
	| { type: 'category'; label: string }
	| { type: 'item'; label: string; values: [PlanMark, PlanMark, PlanMark] };

export const proPlanTableRows: ProTableRow[] = [
	{ type: 'category', label: 'キーワード選定・除外設定' },
	{
		type: 'item',
		label: '広告アカウントの初期設定',
		values: ['●', '●', '●'],
	},
	{
		type: 'item',
		label: 'Google / Yahoo 広告の日常運用',
		values: ['●', '●', '●'],
	},
	{
		type: 'item',
		label: 'キーワード選定・除外設定',
		values: ['●', '●', '●'],
	},
	{
		type: 'item',
		label: '入札戦略の設計・調整',
		values: ['●', '●', '●'],
	},
	{
		type: 'item',
		label: 'コンバージョン計測設定 (GA4 等 )',
		values: ['●', '●', '●'],
	},
	{
		type: 'item',
		label: '広告文の作成・A/B テスト',
		values: ['●', '●', '●'],
	},
	{
		type: 'item',
		label: 'SNS 広告 (Meta/Instagram) 運用',
		values: ['ー', 'ー', '●'],
	},
	{
		type: 'item',
		label: 'HP/ 成果特化型 LP制作',
		values: ['ー', '●', '●'],
	},
	{ type: 'category', label: '透明性の高いレポート報告' },
	{
		type: 'item',
		label: '月次成果レポートの提出',
		values: ['●', '●', '●'],
	},
	{
		type: 'item',
		label: '改善施策の実施内容報告',
		values: ['●', '●', '●'],
	},
	{
		type: 'item',
		label: '広告アカウントの定期診断',
		values: ['ー', '●', '●'],
	},
	{
		type: 'item',
		label: '競合の出稿状況調査',
		values: ['ー', 'ー', '●'],
	},
	{ type: 'category', label: '事業成長へのパートナーシップ' },
	{
		type: 'item',
		label: 'オンライン MTG（月次）',
		values: ['●', '●', '●'],
	},
	{
		type: 'item',
		label: '運用方針のアドバイス・質問対応',
		values: ['●', '●', '●'],
	},
	{
		type: 'item',
		label: 'マーケティング戦略全体の設計',
		values: ['ー', 'ー', '●'],
	},
	{
		type: 'item',
		label: 'ブランディング戦略の構築',
		values: ['ー', 'ー', '●'],
	},
	{ type: 'category', label: '制作その他サービス' },
	{
		type: 'item',
		label: '・バナー・広告クリエイティブ制作',
		values: ['△', '△', '●'],
	},
];

export const proPlanTableNotes = {
	left: '※テンプレート以外の制作は別途お見積りとなります。',
	right: '●：標準対応（※プランにより内容は異なります） △：オプション　ー：対象外',
};

export const advisorPricingSummary = {
	price: '5',
	description: '複数アカウントの運用やスポット診断など、貴社に最適なプランをご提案します',
};

export const advisorPlanTableColumns = ['専属顧問プラン'] as const;

type AdvisorTableRow =
	| { type: 'category'; label: string }
	| { type: 'item'; label: string; values: [PlanMark] };

export const advisorPlanTableRows: AdvisorTableRow[] = [
	{ type: 'category', label: '診断・評価・アドバイス' },
	{ type: 'item', label: '広告アカウントの定期診断', values: ['●'] },
	{ type: 'item', label: '代理店レポートの第三者評価・解説', values: ['●'] },
	{ type: 'item', label: '競合の広告出稿状況の調査', values: ['●'] },
	{ type: 'item', label: '毎月の数値レビューと改善提案', values: ['●'] },
	{ type: 'item', label: '運用方針のアドバイス・質問対応', values: ['●'] },
	{ type: 'item', label: '代理店の継続 / 切替の中立判断', values: ['●'] },
	{ type: 'item', label: 'WEB 広告の初期設定相談', values: ['●'] },
	{ type: 'item', label: '定型作業 ( 広告レビュー )', values: ['●'] },
	{ type: 'category', label: '戦略・改善提案' },
	{ type: 'item', label: 'WEB 広告・HP・動画広告戦略提案', values: ['●'] },
	{ type: 'item', label: 'SEO 対策・コンテンツ戦略提案', values: ['●'] },
	{ type: 'item', label: 'ブランディング提案', values: ['●'] },
	{ type: 'item', label: 'その他制作物の改善提案 など', values: ['●'] },
	{ type: 'category', label: '事業成長へのパートナーシップ' },
	{ type: 'item', label: 'オンライン MTG（月次）', values: ['●'] },
	{ type: 'item', label: '運用方針のアドバイス・質問対応', values: ['●'] },
	{ type: 'item', label: 'マーケティング戦略全体の設計', values: ['●'] },
	{ type: 'item', label: 'ブランディング戦略の構築', values: ['●'] },
	{ type: 'category', label: '制作その他サービス' },
	{ type: 'item', label: '・バナー・広告クリエイティブ制作', values: ['△'] },
];

export const advisorPlanTableNotes = proPlanTableNotes;
