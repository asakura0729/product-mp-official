# HTML/CSS 実装指示書

## 1. 概要
Figmaをベースに、Layout.astroを作成してください。

### スマートフォン表示（SP表示）：
@https://www.figma.com/design/SAW0s0j2FlsyfHTwa7E9kb/%E9%9B%86%E5%AE%A2%E3%81%AE%E3%83%81%E3%82%AB%E3%83%A9_%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%E3%82%B5%E3%82%A4%E3%83%88?node-id=195-2054&m=dev
### タブレット表示（TAB表示）：
@https://www.figma.com/design/SAW0s0j2FlsyfHTwa7E9kb/%E9%9B%86%E5%AE%A2%E3%81%AE%E3%83%81%E3%82%AB%E3%83%A9_%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%E3%82%B5%E3%82%A4%E3%83%88?node-id=216-1448&m=dev
### パソコン表示（PC表示）：
@https://www.figma.com/design/SAW0s0j2FlsyfHTwa7E9kb/%E9%9B%86%E5%AE%A2%E3%81%AE%E3%83%81%E3%82%AB%E3%83%A9_%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%E3%82%B5%E3%82%A4%E3%83%88?node-id=195-1897&m=dev
### TAB表示 + SP表示：ハンバーガーメニュー押下時
@https://www.figma.com/design/SAW0s0j2FlsyfHTwa7E9kb/%E9%9B%86%E5%AE%A2%E3%81%AE%E3%83%81%E3%82%AB%E3%83%A9_%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%E3%82%B5%E3%82%A4%E3%83%88?node-id=195-2346&m=dev

## 2. 技術スタック
- HTML: HTML5（header, main, section, footerを適切に使用）
- CSS: Tailwind CSS
- javaScript：Alpine.js
- レスポンシブ: モバイルファースト（SPサイズ基準、PCサイズでも崩れないように）

## 3. コーディング規約・デザインシステム
### フォント:
  - 日本語: 'Noto Sans JP', sans-serif
  - 商品価格・電話番号（文字サイズ20px以上）:impact
  
### コンポーネント構造:
  - Figmaに合わせて、忠実にデザインしてください
  - Figmaのインスタンスを取得した場合、Astroコンポーネント化してください
  - 原則、Tailwindのクラスで完結させてください。困難であればFLOCSSを用いて独自のクラスを作成してください。
  - 画像（SVG）は、apps/web/public/svg　内の画像を参照してください。
  - それ以外の画像は、apps/web/public/images　内の画像を参照してください。
  - 画像が見つからない場合はプレースホルダーを使用してください。

## 4. 各セクションの実装指示
### 1.ヘッダー
  -高さ60px
  - スクロール操作時、追尾します。
  - TAB表示 + SP表示：右側にハンバーガーメニュー
### 2.メイン
  -  min-height:1000pxを指定 
### 3.コンバージョンエリア
  - 1段目、水色の背景。見出しは「まずはお気軽にご連絡ください」。
  - 2段目、紺色の背景。見出しは「ご相談・お問い合わせはこちら」。
  - PC表示：画面中央に電話番号と「メールでのお問い合わせ」リンクが表示される。
  - TAB表示 + SP表示：「電話のお問い合わせはこちら」ボタンと「メールでのお問い合わせ」リンクが表示される。
### 4.フッター
  - PC表示：左側に「集客のチカラ」ロゴ。右側上段に各ページへのハイパーリンク、右側下段にコピーライトが入ります。
  - TAB表示 + SP表示：「集客のチカラ」ロゴ、各ページへのハイパーリンク、コピーライトが縦に並びます。
