'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useState, useEffect, useRef, useMemo } from 'react';
import {
  Moon,
  Sun,
  Mail,
  MapPin,
  // Phone,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Code,
  Calendar,
  Sparkles,
  User,
  FileText,
  Briefcase,
  AlignLeft,
} from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/src/components/ui/card';
import { ScrollArea } from '@/src/components/ui/scroll-area';
import { Separator } from '@/src/components/ui/separator';
import { Badge } from '@/src/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/src/components/ui/collapsible';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/src/components/ui/sheet';
import LanguageSwitcher from '@/src/components/language-switcher';
import SkillDetailCard from '@/src/components/skill-detail-card';
import Github from '@/src/components/icon/github';
import LinkedIn from '@/src/components/icon/linkedin';

import useMediaQuery from '@/src/hooks/use-media-query';
import { useProfileData } from '@/src/data/localized-data';
import { getCategoryName } from '@/src/lib/utils';

/**
 * セクションごとのIDと表示名を定義
 * → 目次リンクと実際のセクションの対応に使う
 */
const getSections = (t: (key: string) => string) => [
  {
    id: 'profile',
    label: t('sections.profile'),
    icon: <Mail className="h-4 w-4 mr-2" />,
  },
  {
    id: 'strengths',
    label: t('sections.strengths'),
    icon: <Sparkles className="h-4 w-4 mr-2" />,
  },
  {
    id: 'skills',
    label: t('sections.skills'),
    icon: <Code className="h-4 w-4 mr-2" />,
  },
  {
    id: 'work-history',
    label: t('sections.workHistory'),
    icon: <Briefcase className="h-4 w-4 mr-2" />,
  },
  {
    id: 'outputs',
    label: t('sections.outputs'),
    icon: <FileText className="h-4 w-4 mr-2" />,
  },
];

export default function ResumeContent() {
  const t = useTranslations();
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const { profile, workHistories, skills, outputs, selfPrText } = useProfileData();
  const locale = t('locale') as string;

  // スマホでの目次表示制御
  const [showMobileNav, setShowMobileNav] = useState(false);

  // プロジェクト表示の開閉状態管理
  const [openProjects, setOpenProjects] = useState<Record<string, boolean>>({});

  // トグル関数
  const toggleProject = (companyIndex: number, projectIndex: number) => {
    const key = `${companyIndex}-${projectIndex}`;
    setOpenProjects((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // スクロール監視用: セクションごとに ref を確保
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // 現在アクティブなセクションID
  const [activeSection, setActiveSection] = useState('profile');

  // モバイル判定
  const isMobile = useMediaQuery('(max-width: 768px)');

  // セクション定義を取得
  const sections = useMemo(() => getSections(t as (key: string) => string), [t]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // モバイルナビ開閉時のスクロール制御
  useEffect(() => {
    if (isMobile) {
      if (showMobileNav) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [showMobileNav, isMobile]);

  // スクロール検知と目次アクティブ化の処理
  useEffect(() => {
    if (!mounted) return;

    // クリック操作の追跡用
    let userClicked = false;
    let clickTimeout: NodeJS.Timeout;

    // 各セクションの位置情報を取得する関数
    const getSectionPositions = () => {
      return sections.map(({ id }) => {
        const element = sectionRefs.current[id];
        return {
          id,
          offsetTop: element?.offsetTop || 0,
          height: element?.offsetHeight || 0,
          // 各セクションの下端位置も計算
          offsetBottom: (element?.offsetTop || 0) + (element?.offsetHeight || 0),
        };
      });
    };

    // 現在のスクロール位置に基づいてアクティブセクションを更新
    const updateActiveSection = () => {
      // クリック操作中はスキップ
      if (userClicked) return;

      const scrollPos = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // ページ最下部チェック
      if (scrollPos + winHeight >= docHeight - 50) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      // 現在のビューポート中央付近の位置
      const viewportMiddle = scrollPos + winHeight / 3;

      // 各セクションの位置を取得
      const sectionPositions = getSectionPositions();

      // ビューポート内に表示されているセクションを探す
      let activeId = null;

      // 下から上へ（最後のセクションから）チェック
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        const { id, offsetTop, offsetBottom } = sectionPositions[i];

        // セクションがビューポート内に入っているか確認
        // 上端がビューポート中央より上、または下端がビューポート中央より下
        if (
          (offsetTop <= viewportMiddle && offsetBottom >= viewportMiddle) ||
          (i === 0 && viewportMiddle < offsetTop) // 最初のセクションより上
        ) {
          activeId = id;
          break;
        }
      }

      // どのセクションも該当しない場合は、最も近いセクションを選択
      if (!activeId) {
        let closestSection = null;
        let minDistance = Infinity;

        sectionPositions.forEach(({ id, offsetTop }) => {
          const distance = Math.abs(viewportMiddle - offsetTop);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = id;
          }
        });

        activeId = closestSection || sections[0].id;
      }

      if (activeId) {
        setActiveSection(activeId);
      }
    };

    // スクロールイベントハンドラー
    const handleScroll = () => {
      // 連続したスクロールイベントを間引く
      requestAnimationFrame(() => {
        updateActiveSection();
      });
    };

    // クリック時の処理
    const setUserClicked = () => {
      userClicked = true;

      clearTimeout(clickTimeout);
      clickTimeout = setTimeout(() => {
        userClicked = false;
        // クリック後、位置が安定したらアクティブセクションを更新
        updateActiveSection();
      }, 800);
    };

    // イベントリスナーを設定
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 目次のクリックイベント監視
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
      link.addEventListener('click', setUserClicked);
    });

    // 初期値を設定
    updateActiveSection();

    // クリーンアップ
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(clickTimeout);
      navLinks.forEach((link) => {
        link.removeEventListener('click', setUserClicked);
      });
    };
  }, [mounted, sections]);

  // 目次クリック時のスムーズスクロール処理
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    // クリック対象となる要素のrefを取得
    const targetElement = sectionRefs.current[id];

    if (targetElement) {
      // アクティブセクションを即座に更新（視覚的フィードバック）
      setActiveSection(id);

      // ヘッダーの高さを考慮
      const headerHeight = 80;

      // 要素の位置を取得し、ヘッダー高さを引いた位置にスクロール
      const targetPosition = targetElement.offsetTop - headerHeight;

      // スマホナビゲーションを閉じる
      setShowMobileNav(false);

      // スムーズスクロール
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  // キャッシュされたカテゴリリスト
  const skillCategories = useMemo(() => Object.keys(skills), [skills]);

  // SSR時のチラつき防止
  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-neutral-900 text-slate-800 dark:text-neutral-200">
      {/* シンプルなヘッダー */}
      <header className="w-full py-4 px-4 border-b sticky top-0 z-20 flex justify-between items-center bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-slate-200 dark:border-neutral-700/50 shadow-sm dark:shadow-none">
        <h1 className="font-bold text-xl">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
            className="cursor-pointer hover:text-slate-700 dark:hover:text-neutral-300 transition-colors"
            aria-label={t('navigation.scrollToTop')}
          >
            {t('common.resume')}
          </a>
        </h1>

        <div className="flex items-center gap-2">
          {/* スマホ用目次トグルボタン */}
          <Sheet open={showMobileNav} onOpenChange={setShowMobileNav}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="cursor-pointer lg:hidden flex items-center gap-1.5"
                aria-label={showMobileNav ? t('navigation.close') : t('navigation.open')}
              >
                {showMobileNav ? <ChevronUp className="h-4 w-4" /> : <AlignLeft className="h-4 w-4" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] lg:hidden">
              <SheetHeader>
                <SheetTitle>{t('navigation.toc')}</SheetTitle>
                <SheetDescription>{t('navigation.instruction')}</SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <nav className="flex flex-col" aria-label={t('navigation.aria')}>
                  {sections.map(({ id, label, icon }) => {
                    const isActive = activeSection === id;
                    return (
                      <SheetClose asChild key={id}>
                        <a
                          href={`#${id}`}
                          className={`
                            flex items-center p-3 rounded-md transition-colors
                            ${
                              isActive
                                ? 'bg-slate-100 dark:bg-blue-900/20 text-slate-900 dark:text-blue-300 dark:border-l-2 dark:border-blue-400 font-medium'
                                : 'text-slate-600 dark:text-neutral-300 hover:bg-slate-50 dark:hover:bg-neutral-700/50'
                            }
                          `}
                          onClick={(e) => handleNavClick(e, id)}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          <span className={isActive ? 'dark:text-blue-300' : ''}>{icon}</span>
                          <span className="ml-2">{label}</span>
                          {isActive && (
                            <Badge
                              variant="outline"
                              className="ml-auto text-xs bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-300"
                            >
                              {t('navigation.current')}
                            </Badge>
                          )}
                        </a>
                      </SheetClose>
                    );
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          {/* 言語切り替えボタン */}
          <LanguageSwitcher />

          {/* テーマ切り替えボタン */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
            className="cursor-pointer dark:hover:bg-neutral-800"
          >
            <Sun className="h-5 w-5 transition-all dark:rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
            <span className="sr-only">{t('common.toggleTheme')}</span>
          </Button>
        </div>
      </header>

      {/* 作成中バナー - ヘッダー直後に配置 */}
      {/* <div className="w-full bg-amber-100 dark:bg-amber-900/30 border-b border-amber-200 dark:border-amber-800/50 py-2 sticky top-[69px] z-10">
        <div className="container mx-auto px-4 text-center text-amber-800 dark:text-amber-300 font-medium">
          <div className="flex items-center justify-center gap-2">
            <span className="animate-pulse">⚠️</span>
            {t('common.underConstruction')}
            <span className="animate-pulse">⚠️</span>
          </div>
        </div>
      </div> */}
      {/* ウォーターマーク - 固定配置 */}
      {/* <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-5 opacity-[0.08]">
        <div className="transform rotate-[-30deg] text-7xl font-black border-8 border-current p-6 text-slate-900 dark:text-white">
          {t('common.draft')}
        </div>
      </div> */}

      {/* メインコンテンツ + サイドバー */}
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6">
          {/* サイドバー（目次）- デスクトップのみ表示 */}
          <aside className="hidden lg:block sticky self-start top-28">
            <Card className="shadow-sm bg-white dark:bg-neutral-800 border-slate-200 dark:border-neutral-700/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base dark:text-neutral-100">{t('navigation.toc')}</CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <ScrollArea className="max-h-[calc(100vh-200px)]">
                  <nav className="flex flex-col" aria-label={t('navigation.aria')}>
                    {sections.map(({ id, label, icon }) => {
                      const isActive = activeSection === id;
                      return (
                        <a
                          key={id}
                          href={`#${id}`}
                          className={`
                            flex items-center p-2 rounded-md transition-colors
                            ${
                              isActive
                                ? 'bg-slate-100 dark:bg-blue-900/20 text-slate-900 dark:text-blue-300 dark:border-l-2 dark:border-blue-400 font-medium'
                                : 'text-slate-600 dark:text-neutral-300 hover:bg-slate-50 dark:hover:bg-neutral-700/50'
                            }
                          `}
                          onClick={(e) => handleNavClick(e, id)}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          <span className={isActive ? 'dark:text-blue-300' : ''}>{icon}</span>
                          <span className="ml-2">{label}</span>
                        </a>
                      );
                    })}
                  </nav>
                </ScrollArea>
              </CardContent>
            </Card>
          </aside>

          {/* メインコンテンツ */}
          <main className="space-y-6">
            {/* 個人情報 */}
            <section
              id="profile"
              aria-labelledby="profile-heading"
              ref={(el) => {
                sectionRefs.current['profile'] = el;
              }}
            >
              <Card className="shadow-sm bg-white dark:bg-neutral-800 border-slate-200 dark:border-neutral-700/50">
                <CardHeader className="pb-2 flex flex-row items-center bg-gradient-to-r from-slate-50 dark:from-blue-950/20 to-white dark:to-neutral-800">
                  <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-slate-500 dark:text-neutral-300" />
                  <CardTitle id="profile-heading" className="text-base text-slate-800 dark:text-neutral-100">
                    {t('sections.profile')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span
                          className={`${
                            locale === 'en' ? 'w-32' : 'w-24'
                          } flex-shrink-0 flex items-center text-slate-500 dark:text-neutral-400`}
                        >
                          <User className="h-4 w-4 mr-2 flex-shrink-0" />
                          {t('profile.name')}:
                        </span>
                        <span className="font-medium">{profile.name}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span
                          className={`${
                            locale === 'en' ? 'w-32' : 'w-24'
                          } flex-shrink-0 flex items-center text-slate-500 dark:text-neutral-400`}
                        >
                          <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                          {t('profile.birth')}:
                        </span>
                        <span>{profile.birth}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span
                          className={`${locale === 'en' ? 'w-32' : 'w-24'} flex-shrink-0 flex items-center text-slate-500 dark:text-neutral-400`}
                        >
                          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                          {t('profile.address')}:
                        </span>
                        <span>{profile.address}</span>
                      </div>
                      {/* <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className={`${locale === 'en' ? 'w-32' : 'w-24'} flex-shrink-0 flex items-center text-slate-500 dark:text-neutral-400`}>
                          <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                          {t("profile.phone")}:
                        </span>
                        <span>{profile.phone}</span>
                      </div> */}
                      {/* <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span
                          className={`${
                            locale === "en" ? "w-32" : "w-24"
                          } flex-shrink-0 flex items-center text-slate-500 dark:text-neutral-400`}
                        >
                          <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                          {t("profile.email")}:
                        </span>
                        <span>{profile.email}</span>
                      </div> */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span
                          className={`${
                            locale === 'en' ? 'w-32' : 'w-24'
                          } flex-shrink-0 flex items-center text-slate-500 dark:text-neutral-400`}
                        >
                          <Github className="h-4 w-4 mr-2 flex-shrink-0" />
                          GitHub:
                        </span>
                        <a
                          href={`https://github.com/${profile.github}`}
                          className="flex items-center transition-colors text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {profile.github}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span
                          className={`${
                            locale === 'en' ? 'w-32' : 'w-24'
                          } flex-shrink-0 flex items-center text-slate-500 dark:text-neutral-400`}
                        >
                          <LinkedIn className="h-4 w-4 mr-2 flex-shrink-0" />
                          LinkedIn:
                        </span>
                        <a
                          href={`https://linkedin.com/in/${profile.linkedin}`}
                          className="flex items-center transition-colors text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {profile.linkedin}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 専門分野・強み */}
            <section
              id="strengths"
              aria-labelledby="strengths-heading"
              ref={(el) => {
                sectionRefs.current['strengths'] = el;
              }}
            >
              <Card className="shadow-sm bg-white dark:bg-neutral-800 border-slate-200 dark:border-neutral-700/50">
                <CardHeader className="pb-2 flex flex-row items-center bg-gradient-to-r from-slate-50 dark:from-blue-950/20 to-white dark:to-neutral-800">
                  <Sparkles className="h-5 w-5 mr-2 flex-shrink-0 text-slate-500 dark:text-neutral-300" />
                  <CardTitle id="strengths-heading" className="text-base text-slate-800 dark:text-neutral-100">
                    {t('sections.strengths')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="p-4 rounded-md border bg-slate-50 dark:bg-neutral-800/30 border-slate-200 dark:border-neutral-700/50">
                    <ul className="list-disc ml-5 space-y-2 text-slate-700 dark:text-neutral-300">
                      {selfPrText.map((text, i) => (
                        <li key={i} className="leading-relaxed">
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* スキル・知識 */}
            <section
              id="skills"
              aria-labelledby="skills-heading"
              ref={(el) => {
                sectionRefs.current['skills'] = el;
              }}
            >
              <Card className="shadow-sm bg-white dark:bg-neutral-800 border-slate-200 dark:border-neutral-700/50">
                <CardHeader className="pb-2 flex flex-row items-center bg-gradient-to-r from-slate-50 dark:from-blue-950/20 to-white dark:to-neutral-800">
                  <Code className="h-5 w-5 mr-2 flex-shrink-0 text-slate-500 dark:text-neutral-300" />
                  <CardTitle id="skills-heading" className="text-base text-slate-800 dark:text-neutral-100">
                    {t('sections.skills')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {skillCategories.map((category) => (
                      <div key={category}>
                        <h3 className="text-sm font-medium mb-3 text-slate-500 dark:text-neutral-400">
                          {getCategoryName(category, locale)}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {skills[category as keyof typeof skills].map((skill, idx) => (
                            <SkillDetailCard key={idx} skill={skill} category={category} locale={locale} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 職務経歴 */}
            <section
              id="work-history"
              aria-labelledby="work-history-heading"
              className="min-h-[70vh]"
              ref={(el) => {
                sectionRefs.current['work-history'] = el;
              }}
            >
              <Card className="shadow-sm bg-white dark:bg-neutral-800 border-slate-200 dark:border-neutral-700/50">
                <CardHeader className="pb-2 flex flex-row items-center bg-gradient-to-r from-slate-50 dark:from-blue-950/20 to-white dark:to-neutral-800">
                  <Briefcase className="h-5 w-5 mr-2 flex-shrink-0 text-slate-500 dark:text-neutral-300" />
                  <CardTitle id="work-history-heading" className="text-base text-slate-800 dark:text-neutral-100">
                    {t('sections.workHistory')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-8">
                  {workHistories.map((company, companyIdx) => (
                    <div key={companyIdx} className="space-y-5">
                      {/* 会社情報 */}
                      <div className="border-l-2 pl-4 py-1 border-blue-600/30 dark:border-blue-800/70">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <h3 className="font-semibold text-lg text-slate-800 dark:text-neutral-100">
                            {company.companyName}
                          </h3>
                          <Badge variant="secondary" className="shrink-0 dark:variant-outline">
                            {company.period}
                          </Badge>
                        </div>
                        <p className="text-sm mt-1 text-blue-600 dark:text-blue-300">{company.position}</p>
                      </div>

                      {/* 2カラムレイアウト（職務内容と詳細） */}
                      <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-5 pl-2">
                        {/* 職務内容 */}
                        <div>
                          <h4 className="text-sm font-medium mb-3 flex items-center text-slate-500 dark:text-neutral-400">
                            <Briefcase className="h-4 w-4 mr-2 flex-shrink-0" />
                            {t('workHistory.responsibilities')}
                          </h4>
                          <ul className="list-disc ml-5 space-y-2 text-slate-700 dark:text-neutral-300">
                            {company.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                        </div>

                        {/* プロジェクト事例 */}
                        <div>
                          <h4 className="text-sm font-medium mb-3 flex items-center text-slate-500 dark:text-neutral-400">
                            <Code className="h-4 w-4 mr-2 flex-shrink-0" />
                            {t('workHistory.projects')}
                          </h4>

                          <div className="space-y-3 relative">
                            {/* タイムライン縦線 */}
                            <div className="absolute left-[7px] top-[24px] bottom-2 w-[1px] bg-slate-200 dark:bg-neutral-700"></div>

                            {company.projects.map((project, projIdx) => {
                              const projectKey = `${companyIdx}-${projIdx}`;
                              const isOpen = openProjects[projectKey] || false;

                              return (
                                <Collapsible
                                  key={projIdx}
                                  open={isOpen}
                                  onOpenChange={() => toggleProject(companyIdx, projIdx)}
                                  className="border rounded-md overflow-hidden bg-white dark:bg-neutral-800/30 border-slate-200 dark:border-neutral-700/50"
                                >
                                  <CollapsibleTrigger asChild>
                                    <div
                                      className="flex justify-between items-center p-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-neutral-700/50"
                                      role="button"
                                      aria-expanded={isOpen}
                                      aria-controls={`project-content-${companyIdx}-${projIdx}`}
                                    >
                                      <div className="flex items-center flex-1 min-w-0">
                                        <div
                                          className={`
                                          w-3 h-3 rounded-full mr-3 flex-shrink-0 relative z-2
                                          ${
                                            isOpen ? 'bg-blue-500 dark:bg-blue-400' : 'bg-slate-300 dark:bg-neutral-600'
                                          }
                                        `}
                                        ></div>
                                        <div className="min-w-0">
                                          <h5 className="font-medium truncate text-slate-800 dark:text-neutral-200">
                                            {project.title}
                                          </h5>
                                          <p className="text-xs text-slate-500 dark:text-neutral-400">
                                            {project.period}
                                          </p>
                                        </div>
                                      </div>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-7 w-7 p-0 rounded-full flex-shrink-0 ml-2 dark:hover:bg-neutral-700"
                                        aria-hidden="true"
                                        tabIndex={-1}
                                      >
                                        {isOpen ? (
                                          <ChevronUp className="h-4 w-4" />
                                        ) : (
                                          <ChevronDown className="h-4 w-4" />
                                        )}
                                      </Button>
                                    </div>
                                  </CollapsibleTrigger>
                                  <CollapsibleContent
                                    id={`project-content-${companyIdx}-${projIdx}`}
                                    className="animate-in fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
                                  >
                                    <div className="p-4 pt-2 border-t border-slate-200 dark:border-neutral-700/50 bg-slate-50/50 dark:bg-neutral-800/50">
                                      <div className="mb-3">
                                        <p className="text-sm text-slate-700 dark:text-neutral-300">
                                          {project.summary}
                                        </p>
                                      </div>

                                      <div className="mb-3">
                                        <h6 className="text-xs font-medium mb-2 text-slate-500 dark:text-neutral-400">
                                          {t('project.responsibilities')}
                                        </h6>
                                        <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700 dark:text-neutral-300">
                                          {project.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div>
                                        <h6 className="text-xs font-medium mb-2 text-slate-500 dark:text-neutral-400">
                                          {t('project.technologies')}
                                        </h6>
                                        <div className="flex flex-wrap gap-2">
                                          {project.technologies.map((tech, i) => (
                                            <Badge
                                              key={i}
                                              variant="outline"
                                              className="text-xs bg-white dark:bg-neutral-800/50 border-slate-200 dark:border-neutral-700 text-slate-700 dark:text-neutral-300"
                                            >
                                              {tech}
                                            </Badge>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </CollapsibleContent>
                                </Collapsible>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {companyIdx < workHistories.length - 1 && (
                        <Separator className="bg-slate-200 dark:bg-neutral-700/50" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            {/* アウトプット */}
            <section
              id="outputs"
              aria-labelledby="outputs-heading"
              className="min-h-[60vh]"
              ref={(el) => {
                sectionRefs.current['outputs'] = el;
              }}
            >
              <Card className="shadow-sm bg-white dark:bg-neutral-800 border-slate-200 dark:border-neutral-700/50">
                <CardHeader className="pb-2 flex flex-row items-center bg-gradient-to-r from-slate-50 dark:from-blue-950/20 to-white dark:to-neutral-800">
                  <FileText className="h-5 w-5 mr-2 flex-shrink-0 text-slate-500 dark:text-neutral-300" />
                  <CardTitle id="outputs-heading" className="text-base text-slate-800 dark:text-neutral-100">
                    {t('sections.outputs')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    {outputs.map((output, idx) => (
                      <a
                        key={idx}
                        href={output.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                        aria-label={`${output.title} - ${output.type}`}
                      >
                        <div className="p-4 border rounded-md transition-colors border-slate-200 dark:border-neutral-700/50 hover:border-blue-300 dark:hover:border-blue-700/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/10">
                          <div className="md:flex md:justify-between md:items-start gap-3 mb-3">
                            <div className="flex items-center min-w-0 mb-2 md:mb-0">
                              {output.type === '技術ブログ' || output.type === 'Technical Blog' ? (
                                <FileText className="h-4 w-4 mr-2 flex-shrink-0 text-slate-500 dark:text-neutral-300" />
                              ) : null}
                              {output.type === 'Qiita' && (
                                <span className="mr-2 font-bold flex-shrink-0 text-slate-500 dark:text-neutral-300">
                                  Q
                                </span>
                              )}
                              {output.type === 'Zenn' && (
                                <span className="mr-2 font-bold flex-shrink-0 text-slate-500 dark:text-neutral-300">
                                  Z
                                </span>
                              )}
                              <h3 className="font-medium truncate transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-300">
                                {output.title}
                              </h3>
                            </div>
                            <div className="flex items-center gap-2 text-xs flex-shrink-0 text-neutral-500 dark:text-neutral-400">
                              <Badge variant="secondary" className="text-xs dark:variant-outline">
                                {output.type}
                              </Badge>
                              <span>{output.date}</span>
                            </div>
                          </div>
                          <p className="text-sm line-clamp-2 mb-3 text-slate-700 dark:text-neutral-300">
                            {output.description}
                          </p>
                          <div className="flex justify-end">
                            <span className="text-xs flex items-center opacity-70 group-hover:opacity-100 text-blue-600 dark:text-blue-400">
                              {t('outputs.openLink')} <ExternalLink className="h-3 w-3 ml-1" />
                            </span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </main>
        </div>
      </div>

      {/* フッター */}
      <footer className="w-full mt-auto py-4 text-center text-sm text-slate-500 dark:text-neutral-400 border-t border-slate-200 dark:border-neutral-700/50">
        <div className="container mx-auto px-4">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. {t('footer.rights')}
          </p>
        </div>
      </footer>
    </div>
  );
}
