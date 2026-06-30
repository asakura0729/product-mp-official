# Product MP

Astro + Tailwind CSS + Alpine.js のフロントエンドと、Node.js のバックエンド API で構成されたモノレポです。

## 技術スタック

| 領域 | 技術 |
|------|------|
| フロントエンド | [Astro](https://astro.build/) |
| CSS | [Tailwind CSS v4](https://tailwindcss.com/) |
| クライアント JS | [Alpine.js](https://alpinejs.dev/) |
| バックエンド | [Node.js](https://nodejs.org/) + Express |

## 必要環境

- **Node.js 22.12.0 以上**（`.nvmrc` 参照）

```bash
nvm use
```

## セットアップ

```bash
# 依存関係のインストール
npm install

# API 用の環境変数（任意）
cp apps/api/.env.example apps/api/.env
```

## 開発サーバーの起動

フロントエンドとバックエンドを同時に起動:

```bash
npm run dev
```

個別に起動する場合:

```bash
npm run dev:web   # http://localhost:4321
npm run dev:api   # http://localhost:3001
```

開発時、Astro は `/api/*` へのリクエストをバックエンドへプロキシします。

## プロジェクト構成

```
product-mp/
├── apps/
│   ├── web/          # Astro フロントエンド
│   └── api/          # Node.js API サーバー
├── package.json      # npm workspaces ルート
└── .nvmrc
```

## ビルド

```bash
npm run build
```

## API エンドポイント

| メソッド | パス | 説明 |
|----------|------|------|
| GET | `/api/health` | ヘルスチェック |
