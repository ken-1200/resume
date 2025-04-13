# Resume Website

A modern, internationalized personal resume website built with Next.js.

## Features

- **Multilingual Support**: Automatically detects and serves content in the user's preferred language
- **Responsive Design**: Optimized for all device sizes
- **Component-Based Architecture**: Built with reusable React components
- **Internationalization (i18n)**: Supports content in multiple languages
- **Modern Tech Stack**: Next.js, TypeScript, and Tailwind CSS

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn UI](https://ui.shadcn.com/) - UI components
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd resume
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/`: Next.js app router
- `app/[locale]/`: Locale-specific pages
- `components/`: Reusable UI components
- `data/`: Resume data and content
- `hooks/`: Custom React hooks
- `i18n/`: Internationalization configuration
- `lib/`: Utility functions
- `messages/`: Translation messages

## i18n Support

The website supports multiple languages with automatic language detection.

To add a new language:
1. Create a new translation file in the `messages/` directory
2. Add the language code to the supported locales in the i18n configuration

## Deployment

This project can be deployed on GitHub Pages using GitHub Actions workflow.

```bash
# For local build and testing
pnpm build
```

---

# レジュメウェブサイト

Next.jsで構築された、多言語対応の現代的な個人レジュメウェブサイトです。

## 特徴

- **多言語サポート**: ユーザーの優先言語を自動検出してコンテンツを提供
- **レスポンシブデザイン**: あらゆるデバイスサイズに最適化
- **コンポーネントベースのアーキテクチャ**: 再利用可能なReactコンポーネントで構築
- **国際化（i18n）**: 複数言語でのコンテンツ提供をサポート
- **最新のテックスタック**: Next.js、TypeScript、Tailwind CSSを使用

## 技術スタック

- [Next.js](https://nextjs.org/) - Reactフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全性
- [Tailwind CSS](https://tailwindcss.com/) - スタイリング
- [Shadcn UI](https://ui.shadcn.com/) - UIコンポーネント
- [next-intl](https://next-intl-docs.vercel.app/) - 国際化

## 始め方

### 前提条件

- Node.js (v18以降)
- pnpm

### インストール

1. リポジトリをクローン:
   ```bash
   git clone <repository-url>
   cd resume
   ```

2. 依存関係のインストール:
   ```bash
   pnpm install
   ```

3. 開発サーバーの起動:
   ```bash
   pnpm dev
   ```

4. ブラウザで[http://localhost:3000](http://localhost:3000)を開く。

## プロジェクト構造

- `app/`: Next.jsアプリルーター
- `app/[locale]/`: ロケール固有のページ
- `components/`: 再利用可能なUIコンポーネント
- `data/`: レジュメデータとコンテンツ
- `hooks/`: カスタムReactフック
- `i18n/`: 国際化の設定
- `lib/`: ユーティリティ関数
- `messages/`: 翻訳メッセージ

## i18nサポート

このウェブサイトは自動言語検出機能付きで複数言語をサポートしています。

新しい言語を追加するには:
1. `messages/`ディレクトリに新しい翻訳ファイルを作成
2. i18n設定のサポート対象ロケールに言語コードを追加

## デプロイメント

このプロジェクトはGitHub Actionsワークフローを使用してGitHub Pagesにデプロイできます。

```bash
# ローカルでのビルドとテスト
pnpm build
```
