## 1. 概要
Figmaをベースに、ページを作成してください。
### URL：/service/advisor

### スマートフォン表示（SP表示）：
@https://www.figma.com/design/SAW0s0j2FlsyfHTwa7E9kb/%E9%9B%86%E5%AE%A2%E3%81%AE%E3%83%81%E3%82%AB%E3%83%A9_%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%E3%82%B5%E3%82%A4%E3%83%88?node-id=165-2467&m=dev
### パソコン表示（PC表示）：
@https://www.figma.com/design/SAW0s0j2FlsyfHTwa7E9kb/%E9%9B%86%E5%AE%A2%E3%81%AE%E3%83%81%E3%82%AB%E3%83%A9_%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%E3%82%B5%E3%82%A4%E3%83%88?node-id=51-598&m=dev
### タブレット表示（TAB表示）：
うまく調整してください

## 2. 技術スタック
instruction-page.md　参照

## 3. コーディング規約・デザインシステム
instruction-page.md　参照

## 4. 各セクションの実装指示
### 1.ヘッダー
  - /home/y-asakura/product-mp/apps/web/src/layouts/Layout.astroのヘッダー使用
### 1.キービジュアル
  - 横幅は100%
  - H1：専属顧問プランWEB
  - テキスト：広告運用のプロフェッショナルによる「専属顧問」という、新しい正解～
  - 男性の画像を配置
### 2.第1セクション
  - 見出しH2（HeaderH2.astro使用）：集客のチカラの広告費は実費のみ貴社の Web 広告運用は最善ですか？
  - テキスト（PDef.astro使用）：WEB広告運用は専門知識に加え、日々の運用・改善にも多くの時間と手間がかかります～
  - フキダシが3つ（Fukidashi.astro使用）：代理店に任せてるが、妥当性が判断できない…～
  - 画像：悩んでいるサラリーマン男性
  - 枠で囲まれた要素＞見出しH3（コンポーネント非使用）：”専属顧問プラン” におまかせください！
### 3.第2セクション
  - 見出しH2（HeaderH2.astro使用）：サービス概要
  - 4つの箱があり、それぞれ画像とテキストが存在
  - ボタン（BtnLink.astro／リンク先はまだ設定不要）：サービス・料金の詳細はこちら
### 4.第4セクション
  - 見出しH2（HeaderH2.astro使用）：「圧倒的なコストダウン」と「プロ運用」で貴社の WEB 広告の投資効率を、最大化します
  - 二つのプランを紹介。
  - 見出しH3（HeaderH3.astro使用）：WEB広告に特化したプロチームが集結
  - 背景に会議をする人々の画像を配置
### 5.以降のコンテンツ（フッターなど）
  - /home/y-asakura/product-mp/apps/web/src/layouts/Layout.astro使用

