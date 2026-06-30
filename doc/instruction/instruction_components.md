# HTML/CSS 実装指示書

## 1. 概要
添付のデザインをベースに、コンポーネント（HTML）を作成してください。

## 2. 技術スタック
- HTML: HTML5（header, main, section, footerを適切に使用）
- CSS: Tailwind CSS
- javaScript：Alpine.js
- レスポンシブ: モバイルファースト（SPサイズ基準、PCサイズでも崩れないように）

## 3. コーディング規約・デザインシステム
- **フォント:**
  - 日本語: 'Noto Sans JP', sans-serif
  - 商品価格・電話番号（文字サイズ20px以上）:impact
- **コンポーネント構造:**
  - Tailwindのクラスで完結させてください。
  - 画像（SVG）は、apps/web/public/svg　内の画像を使用してください。
  - それ以外の画像は、apps/web/public/images　内の画像を使用してください。
  - 画像が見つからない場合はプレースホルダーを使用してください。