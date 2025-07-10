import { useLocale } from "next-intl";

export function useProfileData() {
  const locale = useLocale();

  // 言語によって返すデータを切り替える
  const profileData = {
    ja: {
      name: "町田 健輔",
      birth: "1997/10/22",
      address: "東京都〇〇区〇〇町",
      phone: "090-xxxx-xxxx",
      email: "ken-1200@example.com",
      github: "ken-1200",
      linkedin: "kensuke-machida",
    },
    en: {
      name: "Kensuke Machida",
      birth: "10/22/1997",
      address: "XX Town, XX District, Tokyo",
      phone: "090-xxxx-xxxx",
      email: "ken-1200@example.com",
      github: "ken-1200",
      linkedin: "kensuke-machida",
    },
  };

  // 職務経歴とプロジェクト事例
  const workHistories = {
    ja: [
      {
        companyName: "A株式会社",
        period: "20XX/XX ～ 20XX/XX",
        position: "システムエンジニア",
        responsibilities: [
          "Webアプリケーションの設計・開発",
          "クライアントとの要件定義",
          "コードレビューとテストの実施",
          "新機能導入によりユーザ数を20%増加",
        ],
        projects: [
          {
            title: "Webサービス開発プロジェクト",
            period: "20XX/XX ～ 20XX/XX",
            summary: "ユーザ数〇〇万人規模のWebサービスを新規開発",
            details: [
              "要件定義、設計、実装、テスト",
              "チーム内での技術指導とレビュー",
            ],
            technologies: ["React", "TypeScript", "AWS"],
          },
          {
            title: "社内管理システム改修",
            period: "20XX/XX ～ 20XX/XX",
            summary: "既存システムの大規模改修プロジェクト",
            details: [
              "レガシーコードのリファクタリング",
              "パフォーマンス改善（ロード時間50%削減）",
            ],
            technologies: ["Vue.js", "Node.js", "SQL"],
          },
        ],
      },
      {
        companyName: "B株式会社",
        period: "20XX/XX ～ 20XX/XX",
        position: "プロジェクトリーダー",
        responsibilities: [
          "チームマネジメントとプロジェクト進行管理",
          "新規サービスの企画・実装",
          "プロジェクト完遂率100%を達成",
          "顧客満足度の向上に貢献",
        ],
        projects: [
          {
            title: "モバイルアプリ開発プロジェクト",
            period: "20XX/XX ～ 20XX/XX",
            summary: "iOS/Android対応のアプリケーション開発",
            details: ["バックエンドAPIの設計・実装", "外部API連携の実装"],
            technologies: ["Python", "Django", "React Native"],
          },
          {
            title: "データ分析基盤構築",
            period: "20XX/XX ～ 20XX/XX",
            summary: "社内データ活用のための分析基盤開発",
            details: ["データウェアハウス設計・構築", "ETLパイプライン開発"],
            technologies: ["Python", "BigQuery", "Airflow"],
          },
        ],
      },
    ],
    en: [
      {
        companyName: "Company A",
        period: "20XX/XX - 20XX/XX",
        position: "System Engineer",
        responsibilities: [
          "Web application design and development",
          "Requirements definition with clients",
          "Code review and testing",
          "Increased user base by 20% with new features",
        ],
        projects: [
          {
            title: "Web Service Development Project",
            period: "20XX/XX - 20XX/XX",
            summary: "New development of a web service with XX million users",
            details: [
              "Requirements definition, design, implementation, testing",
              "Technical guidance and review within the team",
            ],
            technologies: ["React", "TypeScript", "AWS"],
          },
          {
            title: "Internal Management System Renovation",
            period: "20XX/XX - 20XX/XX",
            summary: "Large-scale renovation of existing system",
            details: [
              "Legacy code refactoring",
              "Performance improvement (50% reduction in loading time)",
            ],
            technologies: ["Vue.js", "Node.js", "SQL"],
          },
        ],
      },
      {
        companyName: "Company B",
        period: "20XX/XX - 20XX/XX",
        position: "Project Leader",
        responsibilities: [
          "Team management and project progress management",
          "Planning and implementation of new services",
          "Achieved 100% project completion rate",
          "Contributed to improving customer satisfaction",
        ],
        projects: [
          {
            title: "Mobile App Development Project",
            period: "20XX/XX - 20XX/XX",
            summary: "Development of iOS/Android compatible applications",
            details: [
              "Design and implementation of backend API",
              "Implementation of external API integration",
            ],
            technologies: ["Python", "Django", "React Native"],
          },
          {
            title: "Data Analysis Platform Construction",
            period: "20XX/XX - 20XX/XX",
            summary:
              "Development of analysis platform for internal data utilization",
            details: [
              "Data warehouse design and construction",
              "ETL pipeline development",
            ],
            technologies: ["Python", "BigQuery", "Airflow"],
          },
        ],
      },
    ],
  };

  // スキル情報
  const skills = {
    ja: {
      programming: [
        {
          name: "Python",
          experience: "4年",
          details: "バックエンド開発、自動化スクリプト作成、AI関連開発（MCP Server）",
        },
        {
          name: "TypeScript",
          experience: "4年",
          details: "フロントエンド・バックエンド開発、型安全な実装",
        },
        {
          name: "SQL",
          experience: "4年",
          details: "Django ORM, Prisma, SQLAlchemy, BigQuery, PostgreSQLを用いたクエリ作成、ER図設計、パフォーマンス最適化、、データベース設計、正規化",
        },
      ],
      frameworks: [
        {
          name: "Django",
          experience: "4年",
          details: "REST API開発、認証システム実装、Django REST Framework",
        },
        {
          name: "FastAPI",
          experience: "4年",
          details: "REST API開発、マイクロサービス構築、非同期処理、並列処理",
        },
        {
          name: "Express",
          experience: "1年",
          details: "REST API開発",
        },
        {
          name: "React",
          experience: "4年",
          details: "SPAアプリケーション開発、カスタムフック実装、コンポーネント設計",
        },
        {
          name: "Next.js",
          experience: "1年",
          details: "SPAアプリケーション開発、App Router",
        },
        {
          name: "Vue.js",
          experience: "1年",
          details: "SPAアプリケーション開発、コンポーネント設計",
        },
        {
          name: "Nuxt.js",
          experience: "1年",
          details: "SPAアプリケーション開発、コンポーネント設計",
        },
      ],
      tools: [
        {
          name: "Docker",
          experience: "4年",
          details: "マルチコンテナ環境構築、CI/CDパイプライン統合、Docker Compose、マルチステージビルド",
        },
        {
          name: "GitHub",
          experience: "4年",
          details: "マージ戦略、ワークフロー設計、Pull Request管理、ブランチ戦略",
        },
        {
          name: "AWS",
          experience: "4年",
          details: "VPC, CloudFront, Route53, EC2, ECS, S3, Lambda, RDS, AWS Batch等の利用経験",
        },
        {
          name: "GCP",
          experience: "2年",
          details: "BigQuery, Datastream, GCS, Cloud Functions, Storage Transfer等の利用経験",
        },
      ],
      others: [
        {
          name: "CI/CD",
          experience: "4年",
          details: "CodeDeploy, GitHub Actions等の利用経験",
        },
        {
          name: "テスト自動化",
          experience: "4年",
          details: "テスト設計、単体テスト、統合テスト、カバレッジ管理",
        },
        {
          name: "マイクロサービス",
          experience: "4年",
          details: "サービス分割設計、API設計、サービス間通信、イベント駆動アーキテクチャ",
        },
        {
          name: "プロジェクト管理",
          experience: "2年",
          details: "プロジェクトリーダー経験、プロジェクト進行管理",
        },
        {
          name: "その他",
          experience: "1年",
          details: "カオスエンジニアリング, 負荷テスト, 監視・ログ分析, SRE",
        },
      ],
    },
    en: {
      programming: [
        {
          name: "Python",
          experience: "4 years",
          details: "Backend development, automation scripts, AI-related development (MCP Server)",
        },
        {
          name: "TypeScript",
          experience: "4 years",
          details: "Frontend and backend development, type-safe implementation",
        },
        {
          name: "SQL",
          experience: "4 years",
          details: "Django ORM, Prisma, SQLAlchemy, BigQuery, PostgreSQL query creation, ER diagram design, performance optimization, database design, normalization",
        },
      ],
      frameworks: [
        {
          name: "Django",
          experience: "4 years",
          details: "REST API development, authentication system implementation, Django REST Framework",
        },
        {
          name: "FastAPI",
          experience: "4 years",
          details: "REST API development, microservice construction, asynchronous processing, parallel processing",
        },
        {
          name: "Express",
          experience: "1 year",
          details: "REST API development",
        },
        {
          name: "Vue.js",
          experience: "1 year",
          details: "SPA application development, component design",
        },
        {
          name: "Nuxt.js",
          experience: "1 year",
          details: "SPA application development, component design",
        },
      ],
      tools: [
        {
          name: "Docker",
          experience: "4 years",
          details: "Multi-container environment setup, CI/CD pipeline integration, Docker Compose, multi-stage builds",
        },
        {
          name: "GitHub",
          experience: "4 years",
          details: "Merge strategies, workflow design, Pull Request management, branch strategies",
        },
        {
          name: "AWS",
          experience: "4 years",
          details: "Experience with VPC, CloudFront, Route53, EC2, ECS, S3, Lambda, RDS, AWS Batch, etc.",
        },
        {
          name: "GCP",
          experience: "2 years",
          details: "Experience with BigQuery, Datastream, GCS, Cloud Functions, Storage Transfer, etc.",
        },
      ],
      others: [
        {
          name: "CI/CD",
          experience: "4 years",
          details: "Experience with CodeDeploy, GitHub Actions, etc.",
        },
        {
          name: "Test Automation",
          experience: "4 years",
          details: "Test design, unit testing, integration testing, coverage management",
        },
        {
          name: "Microservices",
          experience: "4 years",
          details: "Service division design, API design, inter-service communication, event-driven architecture",
        },
        {
          name: "Project Management",
          experience: "2 years",
          details: "Project leader experience, project progress management",
        },
        {
          name: "Others",
          experience: "1 year",
          details: "Chaos engineering, load testing, monitoring and log analysis, SRE",
        },
      ],
    },
  };

  // アウトプット情報
  const outputs = {
    ja: [
      {
        title: "Python + BigQuery の始め方",
        type: "技術ブログ",
        url: "https://tech.revcomm.co.jp/get-started-bigquery-with-python",
        date: "2022/12/6",
        description:
          "BigQuery の環境構築に手こずった私自身の経験から、BigQuery テーブルの基本的な操作するまでの導入をご紹介します。",
      },
      {
        title: "Python × Salesforce CPQ APIで商談～見積品目登録プロセスの自動化",
        type: "技術ブログ",
        url: "https://tech.revcomm.co.jp/salesforce-cpq-api",
        date: "2024/12/20",
        description:
          "Salesforce CPQ API を利用し、「商談 → 見積 → 見積品目」までの流れを Python で自動化する手法をご紹介します。",
      },
      {
        title: "Pythonによる効率的なデータ処理パイプラインの構築",
        type: "Qiita",
        url: "https://qiita.com/username/items/xxxx",
        date: "20XX/XX/XX",
        description:
          "大規模データ処理を効率化するためのPythonパイプライン実装についての知見を共有。",
      },
      {
        title: "マイクロサービスアーキテクチャ導入の実践と課題",
        type: "Zenn",
        url: "https://zenn.dev/username/articles/xxxx",
        date: "20XX/XX/XX",
        description:
          "モノリスからマイクロサービスへの移行プロセスと、直面した課題および解決策について詳述。",
      },
    ],
    en: [
      {
        title: "Optimizing State Management with React Hooks",
        type: "Technical Blog",
        url: "https://example.com/blog/react-hooks",
        date: "20XX/XX/XX",
        description:
          "An article explaining efficient state management patterns using React's useReducer and useContext.",
      },
      {
        title: "Building Efficient Data Processing Pipelines with Python",
        type: "Qiita",
        url: "https://qiita.com/username/items/xxxx",
        date: "20XX/XX/XX",
        description:
          "Sharing insights on Python pipeline implementation for efficient large-scale data processing.",
      },
      {
        title: "Implementation and Challenges of Microservice Architecture",
        type: "Zenn",
        url: "https://zenn.dev/username/articles/xxxx",
        date: "20XX/XX/XX",
        description:
          "Detailing the migration process from monolith to microservices, challenges faced, and solutions.",
      },
    ],
  };

  // 自己PR文
  const selfPrText = {
    ja: `
課題解決に向けた柔軟な発想と実行力に自信があります。
チームでの協力を重視し、コミュニケーションを大切にしています。
常に最新技術のキャッチアップを心がけ、業務改善に努めています。
`,
    en: `
I am confident in my flexible thinking and execution skills for problem-solving.
I value teamwork and prioritize communication.
I always strive to keep up with the latest technologies and improve business operations.
`,
  };

  return {
    profile: profileData[locale as "ja" | "en"],
    workHistories: workHistories[locale as "ja" | "en"],
    skills: skills[locale as "ja" | "en"],
    outputs: outputs[locale as "ja" | "en"],
    selfPrText: selfPrText[locale as "ja" | "en"],
  };
}
