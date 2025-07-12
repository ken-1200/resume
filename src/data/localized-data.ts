import { useLocale } from 'next-intl';

export function useProfileData() {
  const locale = useLocale();

  // 言語によって返すデータを切り替える
  const profileData = {
    ja: {
      name: '町田 健輔',
      birth: '1997/10/22',
      address: '東京都',
      phone: '090-xxxx-xxxx',
      email: 'ken-1200@example.com',
      github: 'ken-1200',
      linkedin: 'kensuke-machida',
    },
    en: {
      name: 'Kensuke Machida',
      birth: '10/22/1997',
      address: 'Tokyo',
      phone: '090-xxxx-xxxx',
      email: 'ken-1200@example.com',
      github: 'ken-1200',
      linkedin: 'kensuke-machida',
    },
  };

  // 職務経歴とプロジェクト事例
  const workHistories = {
    ja: [
      {
        companyName: '株式会社システナ',
        period: '2020/04 ～ 2021/05',
        position: 'システムエンジニア（QAエンジニア）',
        responsibilities: [
          'モバイルアプリ・Webアプリケーションの品質保証',
          'テスト設計・計画立案',
          '品質管理プロセスの実践',
          'クロスファンクショナルチームでの協業',
          '不具合分析・改善提案',
        ],
        projects: [
          {
            title: 'デジタルコンテンツ配信アプリ',
            period: '2020/06 ～ 2020/12',
            summary: '大手通信キャリア向けコンテンツ配信モバイルアプリケーション',
            details: [
              '実機検証によるモバイルアプリテスト',
              '単体・結合テスト仕様書作成',
              '機能検証およびユーザビリティテスト',
            ],
            technologies: ['モバイルテスト', 'テスト仕様書作成', '実機検証'],
          },
          {
            title: 'レンタルサービスプラットフォーム',
            period: '2021/01 ～ 2021/03',
            summary: '大手通信キャリア向けWebベースレンタルサービス',
            details: ['Webアプリケーション機能テスト', 'クロスブラウザ検証', 'システム統合テスト'],
            technologies: ['Webテスト', 'クロスブラウザテスト', '統合テスト'],
          },
        ],
      },
      {
        companyName: 'B株式会社',
        period: '20XX/XX ～ 20XX/XX',
        position: 'プロジェクトリーダー',
        responsibilities: [
          'チームマネジメントとプロジェクト進行管理',
          '新規サービスの企画・実装',
          'プロジェクト完遂率100%を達成',
          '顧客満足度の向上に貢献',
        ],
        projects: [
          {
            title: 'モバイルアプリ開発プロジェクト',
            period: '20XX/XX ～ 20XX/XX',
            summary: 'iOS/Android対応のアプリケーション開発',
            details: ['バックエンドAPIの設計・実装', '外部API連携の実装'],
            technologies: ['Python', 'Django', 'React Native'],
          },
          {
            title: 'データ分析基盤構築',
            period: '20XX/XX ～ 20XX/XX',
            summary: '社内データ活用のための分析基盤開発',
            details: ['データウェアハウス設計・構築', 'ETLパイプライン開発'],
            technologies: ['Python', 'BigQuery', 'Airflow'],
          },
        ],
      },
      {
        companyName: 'C株式会社',
        period: '20XX/XX ～ 20XX/XX',
        position: 'ソフトウェアエンジニア',
        responsibilities: [
          '社内ツールや自動化スクリプトの開発',
          'クロスファンクショナルチームとの連携',
          '開発効率を30%向上',
        ],
        projects: [
          {
            title: '社内ツール開発',
            period: '20XX/XX ～ 20XX/XX',
            summary: '社内業務改善のためのツール開発',
            details: ['定型業務の自動化', 'データ可視化ツール'],
            technologies: ['Python', 'Flask', 'JavaScript'],
          },
          {
            title: 'API統合プロジェクト',
            period: '20XX/XX ～ 20XX/XX',
            summary: '外部APIを利用したデータ取得の統合',
            details: ['API設計と実装', 'エラーハンドリングとロギング'],
            technologies: ['Node.js', 'Express', 'PostgreSQL'],
          },
        ],
      },
      {
        companyName: 'D株式会社',
        period: '20XX/XX ～ 20XX/XX',
        position: 'データエンジニア',
        responsibilities: [
          'データパイプラインの設計・実装',
          'データサイエンティストとのモデル開発連携',
          'データ品質と整合性の確保',
        ],
        projects: [
          {
            title: 'データパイプライン開発',
            period: '20XX/XX ～ 20XX/XX',
            summary: 'リアルタイム分析用のデータパイプライン開発',
            details: ['ETLプロセスの自動化', 'データ変換とロード'],
            technologies: ['Apache Airflow', 'Spark', 'Kafka'],
          },
          {
            title: '機械学習モデルのデプロイメント',
            period: '20XX/XX ～ 20XX/XX',
            summary: '機械学習モデルを本番環境にデプロイメントするプロジェクト',
            details: ['モデルの監視とパフォーマンスチューニング', 'スケーラビリティの向上'],
            technologies: ['Docker', 'Kubernetes', 'TensorFlow'],
          },
        ],
      },
    ],
    en: [
      {
        companyName: 'Systena Inc.',
        period: '2020/04 - Present',
        position: 'System Engineer (QA Engineer)',
        responsibilities: [
          'Quality assurance for mobile and web applications',
          'Test design and planning',
          'Quality management process implementation',
          'Cross-functional team collaboration',
          'Defect analysis and improvement proposals',
        ],
        projects: [
          {
            title: 'Digital Content Distribution App',
            period: '2020/06 - 2020/12',
            summary: 'Content distribution mobile application for major telecommunications carrier',
            details: [
              'Mobile app testing with actual devices',
              'Unit and integration test specification creation',
              'Functional verification and usability testing',
            ],
            technologies: ['Mobile Testing', 'Test Specification Creation', 'Device Testing'],
          },
          {
            title: 'Rental Service Platform',
            period: '2021/01 - 2021/03',
            summary: 'Web-based rental service for major telecommunications carrier',
            details: ['Web application functional testing', 'Cross-browser verification', 'System integration testing'],
            technologies: ['Web Testing', 'Cross-browser Testing', 'Integration Testing'],
          },
        ],
      },
      {
        companyName: 'Company B',
        period: '20XX/XX - 20XX/XX',
        position: 'Project Leader',
        responsibilities: [
          'Team management and project progress management',
          'Planning and implementation of new services',
          'Achieved 100% project completion rate',
          'Contributed to improving customer satisfaction',
        ],
        projects: [
          {
            title: 'Mobile App Development Project',
            period: '20XX/XX - 20XX/XX',
            summary: 'Development of iOS/Android compatible applications',
            details: ['Design and implementation of backend API', 'Implementation of external API integration'],
            technologies: ['Python', 'Django', 'React Native'],
          },
          {
            title: 'Data Analysis Platform Construction',
            period: '20XX/XX - 20XX/XX',
            summary: 'Development of analysis platform for internal data utilization',
            details: ['Data warehouse design and construction', 'ETL pipeline development'],
            technologies: ['Python', 'BigQuery', 'Airflow'],
          },
        ],
      },
      {
        companyName: 'Company C',
        period: '20XX/XX - 20XX/XX',
        position: 'Software Engineer',
        responsibilities: [
          'Development of internal tools and automation scripts',
          'Collaboration with cross-functional teams',
          'Improved development efficiency by 30%',
        ],
        projects: [
          {
            title: 'Internal Tool Development',
            period: '20XX/XX - 20XX/XX',
            summary: 'Development of tools to improve internal operations',
            details: ['Automation of repetitive tasks', 'Data visualization tools'],
            technologies: ['Python', 'Flask', 'JavaScript'],
          },
          {
            title: 'API Integration Project',
            period: '20XX/XX - 20XX/XX',
            summary: 'Integration of external APIs for data retrieval',
            details: ['API design and implementation', 'Error handling and logging'],
            technologies: ['Node.js', 'Express', 'PostgreSQL'],
          },
        ],
      },
      {
        companyName: 'Company D',
        period: '20XX/XX - 20XX/XX',
        position: 'Data Engineer',
        responsibilities: [
          'Design and implementation of data pipelines',
          'Collaboration with data scientists for model development',
          'Ensured data quality and integrity',
        ],
        projects: [
          {
            title: 'Data Pipeline Development',
            period: '20XX/XX - 20XX/XX',
            summary: 'Development of data pipelines for real-time analytics',
            details: ['ETL process automation', 'Data transformation and loading'],
            technologies: ['Apache Airflow', 'Spark', 'Kafka'],
          },
          {
            title: 'Machine Learning Model Deployment',
            period: '20XX/XX - 20XX/XX',
            summary: 'Deployment of machine learning models into production',
            details: ['Model monitoring and performance tuning', 'Scalability improvements'],
            technologies: ['Docker', 'Kubernetes', 'TensorFlow'],
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
          name: 'Python',
          experience: '4年',
          details: 'バックエンド開発、自動化スクリプト作成、AI関連開発（MCP Server）',
        },
        {
          name: 'TypeScript',
          experience: '4年',
          details: 'フロントエンド・バックエンド開発、型安全な実装',
        },
        {
          name: 'SQL',
          experience: '4年',
          details:
            'Django ORM, Prisma, SQLAlchemy, BigQuery, PostgreSQLを用いたクエリ作成、ER図設計、パフォーマンス最適化、、データベース設計、正規化',
        },
      ],
      frameworks: [
        {
          name: 'Django',
          experience: '4年',
          details: 'REST API開発、認証システム実装、Django REST Framework',
        },
        {
          name: 'FastAPI',
          experience: '4年',
          details: 'REST API開発、マイクロサービス構築、非同期処理、並列処理',
        },
        {
          name: 'Express',
          experience: '1年',
          details: 'REST API開発',
        },
        {
          name: 'React',
          experience: '4年',
          details: 'SPAアプリケーション開発、カスタムフック実装、コンポーネント設計',
        },
        {
          name: 'Next.js',
          experience: '1年',
          details: 'SPAアプリケーション開発、App Router',
        },
        {
          name: 'Vue.js',
          experience: '1年',
          details: 'SPAアプリケーション開発、コンポーネント設計',
        },
        {
          name: 'Nuxt.js',
          experience: '1年',
          details: 'SPAアプリケーション開発、コンポーネント設計',
        },
      ],
      tools: [
        {
          name: 'Docker',
          experience: '4年',
          details: 'マルチコンテナ環境構築、CI/CDパイプライン統合、Docker Compose、マルチステージビルド',
        },
        {
          name: 'GitHub',
          experience: '4年',
          details: 'マージ戦略、ワークフロー設計、Pull Request管理、ブランチ戦略',
        },
        {
          name: 'AWS',
          experience: '4年',
          details: 'VPC, CloudFront, Route53, EC2, ECS, S3, Lambda, RDS, AWS Batch等の利用経験',
        },
        {
          name: 'GCP',
          experience: '2年',
          details: 'BigQuery, Datastream, GCS, Cloud Functions, Storage Transfer等の利用経験',
        },
      ],
      others: [
        {
          name: 'CI/CD',
          experience: '4年',
          details: 'CodeDeploy, GitHub Actions等の利用経験',
        },
        {
          name: 'テスト自動化',
          experience: '4年',
          details: 'テスト設計、単体テスト、統合テスト、カバレッジ管理',
        },
        {
          name: 'マイクロサービス',
          experience: '4年',
          details: 'サービス分割設計、API設計、サービス間通信、イベント駆動アーキテクチャ',
        },
        {
          name: 'プロジェクト管理',
          experience: '2年',
          details: 'プロジェクトリーダー経験、プロジェクト進行管理',
        },
        {
          name: 'その他',
          experience: '1年',
          details: 'カオスエンジニアリング, 負荷テスト, 監視・ログ分析, SRE',
        },
      ],
    },
    en: {
      programming: [
        {
          name: 'Python',
          experience: '4 years',
          details: 'Backend development, automation scripts, AI-related development (MCP Server)',
        },
        {
          name: 'TypeScript',
          experience: '4 years',
          details: 'Frontend and backend development, type-safe implementation',
        },
        {
          name: 'SQL',
          experience: '4 years',
          details:
            'Django ORM, Prisma, SQLAlchemy, BigQuery, PostgreSQL query creation, ER diagram design, performance optimization, database design, normalization',
        },
      ],
      frameworks: [
        {
          name: 'Django',
          experience: '4 years',
          details: 'REST API development, authentication system implementation, Django REST Framework',
        },
        {
          name: 'FastAPI',
          experience: '4 years',
          details: 'REST API development, microservice construction, asynchronous processing, parallel processing',
        },
        {
          name: 'Express',
          experience: '1 year',
          details: 'REST API development',
        },
        {
          name: 'Vue.js',
          experience: '1 year',
          details: 'SPA application development, component design',
        },
        {
          name: 'Nuxt.js',
          experience: '1 year',
          details: 'SPA application development, component design',
        },
      ],
      tools: [
        {
          name: 'Docker',
          experience: '4 years',
          details: 'Multi-container environment setup, CI/CD pipeline integration, Docker Compose, multi-stage builds',
        },
        {
          name: 'GitHub',
          experience: '4 years',
          details: 'Merge strategies, workflow design, Pull Request management, branch strategies',
        },
        {
          name: 'AWS',
          experience: '4 years',
          details: 'Experience with VPC, CloudFront, Route53, EC2, ECS, S3, Lambda, RDS, AWS Batch, etc.',
        },
        {
          name: 'GCP',
          experience: '2 years',
          details: 'Experience with BigQuery, Datastream, GCS, Cloud Functions, Storage Transfer, etc.',
        },
      ],
      others: [
        {
          name: 'CI/CD',
          experience: '4 years',
          details: 'Experience with CodeDeploy, GitHub Actions, etc.',
        },
        {
          name: 'Test Automation',
          experience: '4 years',
          details: 'Test design, unit testing, integration testing, coverage management',
        },
        {
          name: 'Microservices',
          experience: '4 years',
          details: 'Service division design, API design, inter-service communication, event-driven architecture',
        },
        {
          name: 'Project Management',
          experience: '2 years',
          details: 'Project leader experience, project progress management',
        },
        {
          name: 'Others',
          experience: '1 year',
          details: 'Chaos engineering, load testing, monitoring and log analysis, SRE',
        },
      ],
    },
  };

  // アウトプット情報
  const outputs = {
    ja: [
      {
        title: 'ネットワークスペシャリスト受けてきた',
        type: 'Qiita',
        url: 'https://qiita.com/ken-1200/items/6fd4c31c981c85badf1f',
        date: '2025/05/08',
        description: 'ネットワークスペシャリスト試験の受験体験と学習方法、試験対策についてまとめました。',
      },
      {
        title: 'データベース設計 E-R図とデータモデルの表現',
        type: 'Qiita',
        url: 'https://qiita.com/ken-1200/items/23c6984b11afe964b37f',
        date: '2024/12/20',
        description: 'データベース設計における E-R 図とデータモデルの表現方法について、具体例を交えて解説します。',
      },
      {
        title: 'Python × Salesforce CPQ APIで商談～見積品目登録プロセスの自動化',
        type: '技術ブログ',
        url: 'https://tech.revcomm.co.jp/salesforce-cpq-api',
        date: '2024/12/20',
        description:
          'Salesforce CPQ API を利用し、「商談 → 見積 → 見積品目」までの流れを Python で自動化する手法をご紹介します。',
      },
      {
        title: 'AWS CodeBuild で PR の差分を取得する',
        type: 'Zenn',
        url: 'https://zenn.dev/ken_1200/articles/d023cb41d21f6a',
        date: '2024/06/26',
        description: 'AWS CodeBuild を利用して、Pull Request の差分を取得する方法とその活用事例について解説します。',
      },
      {
        title: 'Python + BigQuery の始め方',
        type: '技術ブログ',
        url: 'https://tech.revcomm.co.jp/get-started-bigquery-with-python',
        date: '2022/12/6',
        description:
          'BigQuery の環境構築に手こずった私自身の経験から、BigQuery テーブルの基本的な操作するまでの導入をご紹介します。',
      },
    ],
    en: [
      {
        title: 'Taking the Network Specialist Exam',
        type: 'Qiita',
        url: 'https://qiita.com/ken-1200/items/6fd4c31c981c85badf1f',
        date: '2025/05/08',
        description: 'Summary of my experience taking the Network Specialist exam, study methods, and exam strategies.',
      },
      {
        title: 'Database Design: E-R Diagrams and Data Model Representation',
        type: 'Qiita',
        url: 'https://qiita.com/ken-1200/items/23c6984b11afe964b37f',
        date: '2024/12/20',
        description:
          'Explanation of E-R diagrams and data model representation methods in database design with concrete examples.',
      },
      {
        title: 'Automating Opportunity to Quote Line Item Process with Python × Salesforce CPQ API',
        type: 'Technical Blog',
        url: 'https://tech.revcomm.co.jp/salesforce-cpq-api',
        date: '2024/12/20',
        description:
          "Introduction to automating the flow from 'Opportunity → Quote → Quote Line Item' using Salesforce CPQ API with Python.",
      },
      {
        title: 'Getting PR Differences with AWS CodeBuild',
        type: 'Zenn',
        url: 'https://zenn.dev/ken_1200/articles/d023cb41d21f6a',
        date: '2024/06/26',
        description:
          'Explanation of how to retrieve Pull Request differences using AWS CodeBuild and practical use cases.',
      },
      {
        title: 'Getting Started with Python + BigQuery',
        type: 'Technical Blog',
        url: 'https://tech.revcomm.co.jp/get-started-bigquery-with-python',
        date: '2022/12/6',
        description:
          'Introduction to basic BigQuery table operations based on my experience struggling with BigQuery environment setup.',
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
    profile: profileData[locale as 'ja' | 'en'],
    workHistories: workHistories[locale as 'ja' | 'en'],
    skills: skills[locale as 'ja' | 'en'],
    outputs: outputs[locale as 'ja' | 'en'],
    selfPrText: selfPrText[locale as 'ja' | 'en'],
  };
}
