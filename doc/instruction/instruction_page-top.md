## 1. 概要
### URL：WEBサイトのトップページ
  - 既にページが存在する場合は、内容を上書きしてください

### スマートフォン表示（SP表示）：
@https://www.figma.com/design/SAW0s0j2FlsyfHTwa7E9kb/%E9%9B%86%E5%AE%A2%E3%81%AE%E3%83%81%E3%82%AB%E3%83%A9_%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%E3%82%B5%E3%82%A4%E3%83%88?node-id=165-2322&m=dev
### タブレット表示（TAB表示）：
@https://www.figma.com/design/SAW0s0j2FlsyfHTwa7E9kb/%E9%9B%86%E5%AE%A2%E3%81%AE%E3%83%81%E3%82%AB%E3%83%A9_%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%E3%82%B5%E3%82%A4%E3%83%88?node-id=230-2942&m=dev
### パソコン表示（PC表示）：
@https://www.figma.com/design/SAW0s0j2FlsyfHTwa7E9kb/%E9%9B%86%E5%AE%A2%E3%81%AE%E3%83%81%E3%82%AB%E3%83%A9_%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%E3%82%B5%E3%82%A4%E3%83%88?node-id=6-391&m=dev

## 2. 技術スタック
instruction-page.md　参照

## 3. コーディング規約・デザインシステム
instruction-page.md　参照

## 4. 各セクションの実装指示
### 1.ヘッダー
  - /home/y-asakura/product-mp/apps/web/src/layouts/Layout.astroのヘッダー使用
### 1.キービジュアル
  - 横幅は100%
  - ”Web広告運用の新しい時代へ」というテキストと、女性の写真が入る予定。
  - ただし、今回は#294C7Aのベタ塗りで対応。詳細な指示・実装は後で行います。
### 2.第2セクション
  -  見出しH2（HeaderH2.astro使用）：「貴社の WEB 広告運用の悩みや不安を解決します!」 
  -  見出しH3：このようなお悩みありませんか？
  -  見出しH3：”集客のチカラ” におまかせください
### 3.第3セクション
  - 見出しH2（HeaderH2.astro使用）：集客のチカラ４つの特徴
  - 4つのカード要素があり、それぞれ画像とテキストが存在。カード要素はCardDef.astro使用
### 4.第4セクション
  - 見出しH2（HeaderH2.astro使用）：「圧倒的なコストダウン」と「プロ運用」で貴社の WEB 広告の投資効率を、最大化します
  - 二つのプランを紹介が存在。（ServicePlanButton.astro使用）
  - 見出しH3（HeaderH3.astro使用）：WEB広告に特化したプロチームが集結
  - テキスト（PDef.astro使用）：上場企業から個人経営まで。多業種での豊富な運用実績を持つ精鋭チーム。AI任せではない、経験に基づいた「生きた知見」で貴社を支えます。
  - 背景に会議をする人々の画像を配置


