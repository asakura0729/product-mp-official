export type ServicePlanVariant = 'pro' | 'advisor';

type FeatureItem = {
	text: string;
};

type ServicePlan = {
	variant: ServicePlanVariant;
	dataName: string;
	href: string;
	title: string;
	imageSrc: string;
	imageAlt: string;
	catchLines: string[];
	price: string;
	priceNote: string;
	featureGroups: FeatureItem[][];
	borderColorClass: string;
	headerBgClass: string;
	bulletColorClass: string;
	iconColorClass: string;
};

export const servicePlans: Record<ServicePlanVariant, ServicePlan> = {
	pro: {
		variant: 'pro',
		dataName: 'btn-service-pro',
		href: '/service/pro',
		title: 'プロ運用プラン',
		imageSrc: '/images/thum-service-pro_light.png',
		imageAlt: 'プロ運用プランのイメージ',
		catchLines: ['広告代理 手数料を ゼロに！', 'WEB広告運用をプロが全面サポート'],
		price: '10',
		priceNote: '（ライトプラン／税別）',
		featureGroups: [
			[
				{ text: '広告アカウントの初期設定' },
				{ text: 'Google / Yahoo 広告の日常運用' },
				{ text: 'コンバージョン計測設定 (GA4 等 )' },
				{ text: '入札戦略の設計・調整' },
				{ text: 'オンラインコンサルティング' },
				{ text: '運用方針のアドバイス・質問対応　等' },
			],
		],
		borderColorClass: 'border-(--service-pro)',
		headerBgClass: 'bg-(--service-pro)',
		bulletColorClass: 'text-(--service-pro)',
		iconColorClass: 'text-(--service-pro)',
	},
	advisor: {
		variant: 'advisor',
		dataName: 'btn-service-advisor',
		href: '/service/advisor',
		title: '専属顧問プラン',
		imageSrc: '/images/thum-service-exclusive_advisor.png',
		imageAlt: '専属顧問プランのイメージ',
		catchLines: [
			'WEB 広告運用のプロフェッショナルによる',
			'「専属顧問」という、新しい正解',
		],
		price: '5',
		priceNote: '（税別）',
		featureGroups: [
			[
				{ text: '毎月の数値レビュー' },
				{ text: '広告代理店レポートの評価・解説' },
			],
			[
				{ text: '運用方針のアドバイス・質問対応' },
				{ text: 'オンラインコンサルティング 専属　等' },
			],
		],
		borderColorClass: 'border-(--service-advisor)',
		headerBgClass: 'bg-(--service-advisor)',
		bulletColorClass: 'text-(--service-advisor)',
		iconColorClass: 'text-(--service-advisor)',
	},
};
