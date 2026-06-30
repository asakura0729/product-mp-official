## 1. 概要
Figmaをベースに、ページを作成してください。
### URL：/about

### スマートフォン表示（SP表示）：
@https://www.figma.com/design/SAW0s0j2FlsyfHTwa7E9kb/%E9%9B%86%E5%AE%A2%E3%81%AE%E3%83%81%E3%82%AB%E3%83%A9_%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%E3%82%B5%E3%82%A4%E3%83%88?node-id=165-2546&m=dev
### パソコン表示（PC表示）：
@https://www.figma.com/design/SAW0s0j2FlsyfHTwa7E9kb/%E9%9B%86%E5%AE%A2%E3%81%AE%E3%83%81%E3%82%AB%E3%83%A9_%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%E3%82%B5%E3%82%A4%E3%83%88?node-id=9-54&m=dev
### タブレット表示（TAB表示）：
うまく調整してください

## 2. 技術スタック
instruction-page.md　参照

## 3. コーディング規約・デザインシステム
instruction-page.md　参照

## 4. 各セクションの実装指示
### 1.ヘッダー
  - /home/y-asakura/product-mp/apps/web/src/layouts/Layout.astroのヘッダー使用
### 2.キービジュアル
  - 横幅は100%
  - 背景色： #294C7A
  - 見出しH1:「成長投資型」の広告運用へ
### 3.第1セクション
  -  見出しH2（HeaderH2.astro使用）：WEB 広告の運用 2 つの選択肢には大きな課題がありました
### 4.第2セクション
  - 見出しH2（HeaderH2.astro使用）：その課題を解決するため広告運用コストの「常識」を変えます！
### 5.第3セクション
  - 見出しH2（HeaderH2.astro使用）：圧倒的コスト差経営的に放置できないほどの差となります
  - 見出しH3（HeaderH3.astro使用）：集客のチカラの広告運用は 完全定額制
  - テキスト（PDef.astro使用）：広告代理店の中間マージン、自社運用の専人材などの～
  - 枠で囲まれた要素＞見出しH3：広告代理店の中間マージンは必要なのか？
  - 枠で囲まれた要素＞テキスト（段落ごとに、PDef.astro使用）：いいえ、必要ありません～
### 6.CTA
  - CtaSection.astro使用
### 7.第4セクション
  - 背景画像(background-image)が配置されている
  - 見出しH2（HeaderH2.astro使用）：削減額は、複利を生み出す成長エンジンへ
  - テキスト（PDef.astro使用）：集客のチカラなら、運用コストの削減分が次の 投資原資に。新たな成～
### 8.第5セクション
  - 見出しH2（HeaderH2.astro使用）：同じ広告予算でも、受注は増え続ける増えた利益で さらに事業成長へ
  - テキスト（PDef.astro使用）：広告代理店とのコストの差額が、そのまま広告投下費の増加分～
### 9.第6セクション
  - 見出しH2（HeaderH2.astro使用）：横並びの広告に、終止符を貴社専用のポートフォリオ運用へ
  - テキスト（PDef.astro使用）：「APO」（AD Portfolio Optimizer）は、貴社の目的・目標に合わせ～
  - ４つのグラフを配置(SecPortfolio.astro使用)
### 10.第7セクション
  - 見出しH2（HeaderH2.astro使用）：「圧倒的なコストダウン」と「プロ運用」で貴社の WEB 広告の投資効率を、最大化します
  - 二つのプランを紹介が存在。（ServicePlanButton.astro使用）
### 11.以降のコンテンツ（フッターなど）
  - /home/y-asakura/product-mp/apps/web/src/layouts/Layout.astro使用
