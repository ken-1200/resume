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
          '実機を用いたモバイルアプリのテスト実施',
          '他チームとの調整と品質管理スキルの習得',
          '網羅性の高いテストケースの作成と管理',
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
        companyName: '株式会社RevComm',
        period: '2021/07 ～ 現在',
        position: 'ソフトウェアエンジニア',
        responsibilities: [
          'プロジェクトマネージャーとして複数プロジェクトの推進と管理',
          'チームメンバーのタスク管理と技術的リーダーシップの発揮',
          '他部門との連携と調整',
          'システムアーキテクチャ設計と技術選定',
          '利用者のニーズを理解し、改善提案と業務効率化の実現',
        ],
        projects: [
          {
            title: 'インフラ基盤移行プロジェクト',
            period: '2024/11 ～ 2025/06',
            summary: 'PM/PLとして3名のチームを管理し、アカウント・VPC・DB移行を含むインフラ改善を実施',
            details: [
              'プロジェクト管理・インフラ構成改善・アカウント移行・データベース移行・ネットワーク移行を主導',
              '週次MTGを通じた進捗管理と課題解決',
              'メンバーの退職にも柔軟に対応し、プロジェクトを予定通り完了',
            ],
            technologies: [
              'Amazon VPC',
              'Amazon ECS',
              'Amazon S3',
              'Amazon CloudFront',
              'Amazon Route 53',
              'Amazon EC2',
              'Amazon RDS',
              'Amazon CloudWatch',
              'Amazon API Gateway',
              'Amazon Cognito',
              'Amazon SQS',
              'Amazon ECR',
              'AWS Lambda',
              'AWS IAM',
              'AWS KMS',
              'AWS Batch',
              'AWS Secrets Manager',
              'AWS Systems Manager',
              'AWS CodePipeline',
              'AWS CodeDeploy',
              'AWS CodeBuild',
              'Datastream',
              'BigQuery',
              'GCS',
              'Cloud Functions',
              'Storage Transfer',
              'Cloud Pub/Sub',
              'Cloud Scheduler',
              'Terraform',
              'Docker',
              'PostgreSQL',
              'Python',
              'Django',
              'TypeScript',
              'React',
              'Microservices',
              'CI/CD',
              'GitHub Actions',
              'Datadog',
              'Project Management',
              'Team Leadership',
            ],
          },
          {
            title: '料金計算システム開発プロジェクト',
            period: '2021/10 ～ 2025/04',
            summary: '開発メンバーから始まり、PM/PLとして複数の新機能開発をリード',
            details: [
              '初期は開発メンバーとしてレガシーシステムのリプレイスを担当',
              'AWS Batchを活用した効率的なバッチ処理システムの構築',
              '徐々にPM/PLの役割を担い、2-3名のチームで複数の新機能開発をリード',
              '海外展開、新サービス対応、特殊課金体系など多様な機能開発を管理',
              '複雑な課金ロジックの自動化により経理チームの作業時間を大幅削減',
              'ナレッジトランスファーとコードリーディング会で属人化解消',
            ],
            technologies: [
              'Amazon VPC',
              'Amazon CloudWatch',
              'Amazon EventBridge',
              'AWS Batch',
              'AWS Lambda',
              'AWS IAM',
              'AWS Secrets Manager',
              'AWS Systems Manager',
              'AWS CodePipeline',
              'AWS CodeDeploy',
              'AWS CodeBuild',
              'Datastream',
              'BigQuery',
              'Terraform',
              'Docker',
              'Python',
              'Django',
              'TypeScript',
              'React',
              'Microservices',
              'CI/CD',
              'GitHub Actions',
              'Datadog',
              'Project Management',
              'Team Leadership',
            ],
          },
          {
            title: '請求書発行システム開発プロジェクト',
            period: '2023/03 ～ 2023/06',
            summary: 'テックチーム横断プロジェクトのリーダーとして新システムを開発',
            details: [
              '要件定義から運用までの全工程を担当',
              'API・インフラ設計とクリーンアーキテクチャの採用',
              'チーム内外とのコミュニケーション調整（デザイン依頼等）',
              'ナレッジトランスファーとコードレビューによる品質確保',
            ],
            technologies: [
              'Project Management',
              'Team Leadership',
              'Python',
              'FastAPI',
              'Salesforce API',
              'Amazon VPC',
              'Amazon ECS',
              'Amazon S3',
              'Amazon CloudFront',
              'Amazon Route 53',
              'Amazon CloudWatch',
              'Amazon ECR',
              'AWS Lambda',
              'AWS IAM',
              'AWS Secrets Manager',
              'AWS Systems Manager',
              'AWS CodePipeline',
              'AWS CodeDeploy',
              'AWS CodeBuild',
              'Terraform',
              'Docker',
              'Microservices',
              'CI/CD',
              'GitHub Actions',
              'Datadog',
            ],
          },
        ],
      },
      {
        companyName: '株式会社find（副業）',
        period: '2023/02 ～ 2023/04',
        position: 'ソフトウェアエンジニア',
        responsibilities: [
          'Atomic Design原則に基づくコンポーネントの再設計と一貫性確保',
          'ビジネスロジックの分離によるクリーンなコード構造の実現',
          '保守性向上のための一貫性のあるコンポーネント構造の確立',
        ],
        projects: [
          {
            title: 'UIコンポーネント再設計プロジェクト',
            period: '2023/02 ～ 2023/04',
            summary: 'Atomic Design原則に基づくコンポーネント再設計とビジネスロジックの分離',
            details: [
              'コンポーネントの再利用性と保守性の向上',
              'ビジネスロジックの分離によるクリーンなコード構造の実現',
              '効率的な開発プロセスの確立',
            ],
            technologies: ['TypeScript', 'Next.js', 'Nuxt.js'],
          },
        ],
      },
      {
        companyName: 'Pathfinder株式会社（副業）',
        period: '2023/12 ～ 2024/12',
        position: 'ソフトウェアエンジニア',
        responsibilities: [
          'eKYCを活用した本人確認システムの実装',
          'AWSイベント駆動アーキテクチャの設計と実装',
          'データベース・API設計およびフロントエンド開発',
          '外部API連携とビジネスロジック実装',
          'ビジネスチームとの協業による運用効率化',
        ],
        projects: [
          {
            title: 'eKYC申請機能開発プロジェクト',
            period: '2024/01 ～ 2024/02',
            summary: '外部eKYCサービスを活用した本人確認システムの構築',
            details: [
              'eKYC機能のフロントエンドおよびバックエンド開発',
              '外部eKYCサービスを用いた免許証登録機能の実装',
              'データベース設計、ステータス管理およびロジック設計の実施',
              'eKYC申請データの処理および確認フローの設計',
            ],
            technologies: ['TypeScript', 'React', 'Node.js', 'Prisma', 'PostgreSQL'],
          },
          {
            title: '予約通知・メール配信システム構築プロジェクト',
            period: '2024/03 ～ 2024/04',
            summary: 'イベント駆動アーキテクチャを用いた通知システムの構築',
            details: [
              'AWSを使用したインフラの設計と管理',
              'TypeScriptによるフロントエンド・バックエンド開発',
              'ビジネス部門との要件定義と調整',
              'メール送信機能の設計と実装',
              'メールテンプレートの作成と管理',
            ],
            technologies: [
              'AWS EventBridge',
              'AWS Lambda',
              'Amazon SES',
              'Amazon SNS',
              'Amazon DynamoDB',
              'Amazon RDS',
              'Amazon S3',
              'TypeScript',
              'Express',
              'React',
            ],
          },
        ],
      },
      {
        companyName: '株式会社PORTAMENT（副業）',
        period: '2024/09 ～ 2024/12',
        position: 'ソフトウェアエンジニア',
        responsibilities: [
          'プロジェクトの要件定義と設計',
          'フロントエンドとバックエンドの開発',
          'システムのテストとデプロイメント',
        ],
        projects: [
          {
            title: 'ポートフォリオサイト開発',
            period: '2024/09 ～ 2024/12',
            summary: '個人のポートフォリオサイトを開発',
            details: [
              'Reactを使用したフロントエンド開発',
              'Djangoを使用したバックエンド開発',
              'データベース設計とAPIの実装',
            ],
            technologies: ['React', 'Django', 'PostgreSQL', 'Docker'],
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
          'Mobile application testing using actual devices',
          'Inter-team coordination and quality management skills development',
          'Comprehensive test case creation and management',
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
        companyName: 'RevComm Inc.',
        period: '2021/07 - Present',
        position: 'Software Engineer',
        responsibilities: [
          'Leading and managing multiple projects as Project Manager',
          'Providing technical leadership and managing team member tasks',
          'Coordinating and collaborating with other departments',
          'Designing system architecture and making technology decisions',
          'Understanding user needs and realizing improvement proposals and operational efficiency',
        ],
        projects: [
          {
            title: 'Infrastructure Migration Project',
            period: '2024/11 - 2025/06',
            summary:
              'Managed a 3-person team as PM/PL, implementing account, VPC, and DB migration including infrastructure improvements',
            details: [
              'Led project management, infrastructure improvement, account migration, database migration, and network migration',
              'Conducted progress management and issue resolution through weekly meetings',
              'Flexibly handled member transitions and completed project on schedule',
            ],
            technologies: [
              'Amazon VPC',
              'Amazon ECS',
              'Amazon S3',
              'Amazon CloudFront',
              'Amazon Route 53',
              'Amazon EC2',
              'Amazon RDS',
              'Amazon CloudWatch',
              'Amazon API Gateway',
              'Amazon Cognito',
              'Amazon SQS',
              'Amazon ECR',
              'AWS Lambda',
              'AWS IAM',
              'AWS KMS',
              'AWS Batch',
              'AWS Secrets Manager',
              'AWS Systems Manager',
              'AWS CodePipeline',
              'AWS CodeDeploy',
              'AWS CodeBuild',
              'Datastream',
              'BigQuery',
              'GCS',
              'Cloud Functions',
              'Storage Transfer',
              'Cloud Pub/Sub',
              'Cloud Scheduler',
              'Terraform',
              'Docker',
              'PostgreSQL',
              'Python',
              'Django',
              'TypeScript',
              'React',
              'Microservices',
              'CI/CD',
              'GitHub Actions',
              'Datadog',
              'Project Management',
              'Team Leadership',
            ],
          },
          {
            title: 'Billing System Development Project',
            period: '2021/10 - 2025/04',
            summary: 'Started as a developer and evolved to PM/PL, leading multiple new feature developments',
            details: [
              'Initially worked as a developer on legacy system replacement',
              'Built efficient batch processing system using AWS Batch',
              'Gradually took on PM/PL responsibilities, leading teams of 2-3 members for multiple features',
              'Managed diverse feature developments including international expansion, new services, and special billing systems',
              'Significantly reduced accounting team workload through automation of complex billing logic',
              'Eliminated knowledge silos through knowledge transfer and code reading sessions',
            ],
            technologies: [
              'Amazon VPC',
              'Amazon CloudWatch',
              'Amazon EventBridge',
              'AWS Batch',
              'AWS Lambda',
              'AWS IAM',
              'AWS Secrets Manager',
              'AWS Systems Manager',
              'AWS CodePipeline',
              'AWS CodeDeploy',
              'AWS CodeBuild',
              'Datastream',
              'BigQuery',
              'Terraform',
              'Docker',
              'Python',
              'Django',
              'TypeScript',
              'React',
              'Microservices',
              'CI/CD',
              'GitHub Actions',
              'Datadog',
              'Project Management',
              'Team Leadership',
            ],
          },
          {
            title: 'Invoice Issuance System Development Project',
            period: '2023/03 - 2023/06',
            summary: 'Led cross-tech team project to develop new system',
            details: [
              'Handled entire process from requirements definition to operation',
              'Designed API and infrastructure with clean architecture adoption',
              'Coordinated internal and external communications including design requests',
              'Ensured quality through knowledge transfer and code reviews',
            ],
            technologies: [
              'Project Management',
              'Team Leadership',
              'Python',
              'FastAPI',
              'Salesforce API',
              'Amazon VPC',
              'Amazon ECS',
              'Amazon S3',
              'Amazon CloudFront',
              'Amazon Route 53',
              'Amazon CloudWatch',
              'Amazon ECR',
              'AWS Lambda',
              'AWS IAM',
              'AWS Secrets Manager',
              'AWS Systems Manager',
              'AWS CodePipeline',
              'AWS CodeDeploy',
              'AWS CodeBuild',
              'Terraform',
              'Docker',
              'Microservices',
              'CI/CD',
              'GitHub Actions',
              'Datadog',
            ],
          },
        ],
      },
      {
        companyName: 'find Inc. (Side Project)',
        period: '2023/02 - 2023/04',
        position: 'Software Engineer',
        responsibilities: [
          'Component redesign and consistency assurance based on Atomic Design principles',
          'Clean code structure implementation through business logic separation',
          'Establishing consistent component structure for improved maintainability',
        ],
        projects: [
          {
            title: 'UI Component Redesign Project',
            period: '2023/02 - 2023/04',
            summary: 'Component redesign based on Atomic Design principles and business logic separation',
            details: [
              'Improved component reusability and maintainability',
              'Clean code structure implementation through business logic separation',
              'Established efficient development process',
            ],
            technologies: ['TypeScript', 'Next.js', 'Nuxt.js'],
          },
        ],
      },
      {
        companyName: 'Pathfinder Inc. (Side Project)',
        period: '2023/12 - 2024/12',
        position: 'Software Engineer',
        responsibilities: [
          'Identity verification system implementation using eKYC',
          'AWS event-driven architecture design and implementation',
          'Database and API design with frontend development',
          'External API integration and business logic implementation',
          'Collaboration with business teams for operational efficiency',
        ],
        projects: [
          {
            title: 'eKYC Application Feature Development',
            period: '2024/01 - 2024/02',
            summary: 'Identity verification system development using external eKYC service',
            details: [
              'Frontend and backend development for eKYC functionality',
              'License registration feature implementation using external eKYC service',
              'Database design, status management and logic design implementation',
              'eKYC application data processing and verification flow design',
            ],
            technologies: ['TypeScript', 'React', 'Node.js', 'Prisma', 'PostgreSQL'],
          },
          {
            title: 'Reservation Notification and Email Delivery System Development Project',
            period: '2024/03 - 2024/04',
            summary: 'Notification system development using event-driven architecture',
            details: [
              'Infrastructure design and management using AWS',
              'Frontend and backend development using TypeScript',
              'Requirements definition and coordination with business departments',
              'Email sending functionality design and implementation',
              'Email template creation and management',
            ],
            technologies: [
              'AWS EventBridge',
              'AWS Lambda',
              'Amazon SES',
              'Amazon SNS',
              'Amazon DynamoDB',
              'Amazon RDS',
              'Amazon S3',
              'TypeScript',
              'Express',
              'React',
            ],
          },
        ],
      },
      {
        companyName: 'PORTAMENT Inc. (Side Project)',
        period: '2024/09 - 2024/12',
        position: 'Software Engineer',
        responsibilities: [
          'Project requirements definition and design',
          'Frontend and backend development',
          'System testing and deployment',
        ],
        projects: [
          {
            title: 'Portfolio Site Development',
            period: '2024/09 - 2024/12',
            summary: 'Development of personal portfolio site',
            details: [
              'Frontend development using React',
              'Backend development using Django',
              'Database design and API implementation',
            ],
            technologies: ['React', 'Django', 'PostgreSQL', 'Docker'],
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
