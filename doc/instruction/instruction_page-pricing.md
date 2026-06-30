## 1. 概要
Figmaをベースに、ページを作成してください。
### URL：/pricing

### スマートフォン表示（SP表示）：
@https://www.figma.com/design/SAW0s0j2FlsyfHTwa7E9kb/%E9%9B%86%E5%AE%A2%E3%81%AE%E3%83%81%E3%82%AB%E3%83%A9_%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%E3%82%B5%E3%82%A4%E3%83%88?node-id=165-1956&m=dev
### パソコン表示（PC表示）：
@https://www.figma.com/design/SAW0s0j2FlsyfHTwa7E9kb/%E9%9B%86%E5%AE%A2%E3%81%AE%E3%83%81%E3%82%AB%E3%83%A9_%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%E3%82%B5%E3%82%A4%E3%83%88?node-id=93-2646&m=dev
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
  - 見出しH1:料金について
### 3.ローカルナビゲーション
  - テキスト（PDef.astro使用）：貴社専用の戦略チームとして、 高度な WEB ～
  - ボタン：プロ運用プラン（第1セクションに遷移）
  - ボタン：専属顧問プラン（第2セクションに遷移）
### 4.第1セクション
  - 見出しH2（HeaderH2.astro使用）：プロ運用プラン広告代理 手数料を ゼロに！～
  - 各プランの詳細が表示
  - 見出しH3（HeaderH3.astro使用）：サービス内容・プラン詳細
  - テーブル（スマートフォン表示時、横スクロール）
  - 補足、備考のテキストを表示
### 5.第2セクション
  - 見出しH2（HeaderH2.astro使用）：専属顧問プランWEB 広告運用のプロフェッショナルによる～
  - 枠に囲まれた要素、プランの概要を表示
  - テーブル（スマートフォン表示時、横スクロール）
  - 補足、備考のテキストを表示
### 6.以降のコンテンツ（フッターなど）
  - /home/y-asakura/product-mp/apps/web/src/layouts/Layout.astro使用
