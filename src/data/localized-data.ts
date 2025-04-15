import { useLocale } from "next-intl";

export function useProfileData() {
  const locale = useLocale();

  // 言語によって返すデータを切り替える
  const profileData = {
    ja: {
      name: "山田 太郎",
      birth: "1990/01/01",
      address: "東京都〇〇区〇〇町",
      phone: "090-xxxx-xxxx",
      email: "example@example.com",
      github: "ken-1200",
      linkedin: "kensuke-machida",
    },
    en: {
      name: "Taro Yamada",
      birth: "01/01/1990",
      address: "XX Town, XX District, Tokyo",
      phone: "090-xxxx-xxxx",
      email: "example@example.com",
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
          experience: "5年",
          details: "データ分析、バックエンド開発、自動化スクリプト作成",
        },
        {
          name: "TypeScript",
          experience: "4年",
          details: "フロントエンド・バックエンド両方での開発経験あり",
        },
        {
          name: "JavaScript",
          experience: "6年",
          details: "ブラウザ/Node.js環境での開発、各種フレームワーク利用",
        },
        {
          name: "SQL",
          experience: "5年",
          details: "複雑なクエリ、パフォーマンスチューニング、複数DB経験",
        },
      ],
      frameworks: [
        {
          name: "React",
          experience: "4年",
          details: "SPAアプリケーション開発、カスタムフック設計",
        },
        {
          name: "Next.js",
          experience: "3年",
          details: "SSR/SSG実装、大規模アプリケーション構築",
        },
        {
          name: "Django",
          experience: "3年",
          details: "REST API開発、認証システム実装",
        },
        {
          name: "Express",
          experience: "2年",
          details: "マイクロサービス構築、APIゲートウェイ設計",
        },
        {
          name: "Vue.js",
          experience: "2年",
          details: "コンポーネント設計、状態管理",
        },
      ],
      tools: [
        {
          name: "Docker",
          experience: "4年",
          details: "マルチコンテナ環境構築、CI/CDパイプライン統合",
        },
        {
          name: "Git",
          experience: "6年",
          details: "複雑なマージ戦略、ワークフロー設計",
        },
        {
          name: "AWS",
          experience: "3年",
          details: "EC2, S3, Lambda, RDS等の利用経験",
        },
        {
          name: "GCP",
          experience: "2年",
          details: "Cloud Functions, BigQuery, GKE活用",
        },
        {
          name: "Kubernetes",
          experience: "2年",
          details: "クラスター管理、デプロイメント構成",
        },
      ],
      others: [
        {
          name: "CI/CD",
          experience: "3年",
          details: "GitHub Actions, Jenkins活用実績",
        },
        {
          name: "アジャイル開発",
          experience: "4年",
          details: "スクラムマスター経験、カンバン方式実践",
        },
        {
          name: "テスト自動化",
          experience: "3年",
          details: "Jest, Cypress, PyTestでのテスト設計",
        },
        {
          name: "マイクロサービス",
          experience: "2年",
          details: "サービス分割設計、API設計",
        },
        {
          name: "データモデリング",
          experience: "3年",
          details: "ER図設計、正規化、パフォーマンス最適化",
        },
      ],
    },
    en: {
      programming: [
        {
          name: "Python",
          experience: "5 years",
          details: "Data analysis, backend development, automation scripts",
        },
        {
          name: "TypeScript",
          experience: "4 years",
          details: "Experience in both frontend and backend development",
        },
        {
          name: "JavaScript",
          experience: "6 years",
          details:
            "Development in browser/Node.js environments, using various frameworks",
        },
        {
          name: "SQL",
          experience: "5 years",
          details:
            "Complex queries, performance tuning, experience with multiple DBs",
        },
      ],
      frameworks: [
        {
          name: "React",
          experience: "4 years",
          details: "SPA application development, custom hook design",
        },
        {
          name: "Next.js",
          experience: "3 years",
          details:
            "SSR/SSG implementation, large-scale application construction",
        },
        {
          name: "Django",
          experience: "3 years",
          details: "REST API development, authentication system implementation",
        },
        {
          name: "Express",
          experience: "2 years",
          details: "Microservice construction, API gateway design",
        },
        {
          name: "Vue.js",
          experience: "2 years",
          details: "Component design, state management",
        },
      ],
      tools: [
        {
          name: "Docker",
          experience: "4 years",
          details:
            "Multi-container environment setup, CI/CD pipeline integration",
        },
        {
          name: "Git",
          experience: "6 years",
          details: "Complex merge strategies, workflow design",
        },
        {
          name: "AWS",
          experience: "3 years",
          details: "Experience with EC2, S3, Lambda, RDS, etc.",
        },
        {
          name: "GCP",
          experience: "2 years",
          details: "Utilizing Cloud Functions, BigQuery, GKE",
        },
        {
          name: "Kubernetes",
          experience: "2 years",
          details: "Cluster management, deployment configuration",
        },
      ],
      others: [
        {
          name: "CI/CD",
          experience: "3 years",
          details: "GitHub Actions, Jenkins utilization experience",
        },
        {
          name: "Agile Development",
          experience: "4 years",
          details: "Scrum master experience, Kanban method practice",
        },
        {
          name: "Test Automation",
          experience: "3 years",
          details: "Test design with Jest, Cypress, PyTest",
        },
        {
          name: "Microservices",
          experience: "2 years",
          details: "Service division design, API design",
        },
        {
          name: "Data Modeling",
          experience: "3 years",
          details: "ER diagram design, normalization, performance optimization",
        },
      ],
    },
  };

  // アウトプット情報
  const outputs = {
    ja: [
      {
        title: "React Hooksを使った状態管理の最適化",
        type: "技術ブログ",
        url: "https://example.com/blog/react-hooks",
        date: "20XX/XX/XX",
        description:
          "ReactのuseReducerとuseContextを活用した効率的な状態管理パターンについて解説した記事。",
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
