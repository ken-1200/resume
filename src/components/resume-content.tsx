'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef, useMemo } from 'react';
import { Mail, Code, Sparkles, FileText, Briefcase } from 'lucide-react';
import Header from '@/src/components/header';
import Sidebar from '@/src/components/sidebar';
import Footer from '@/src/components/footer';
import ProfileSection from '@/src/components/sections/profile-section';
import StrengthsSection from '@/src/components/sections/strengths-section';
import SkillsSection from '@/src/components/sections/skills-section';
import WorkHistorySection from '@/src/components/sections/work-history-section';
import OutputsSection from '@/src/components/sections/outputs-section';

import useMediaQuery from '@/src/hooks/use-media-query';
import { useProfileData } from '@/src/data/localized-data';

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
  const [mounted, setMounted] = useState(false);
  const { profile, mainJobs, sideProjects, skills, outputs, selfPrText } = useProfileData();
  const locale = t('locale') as string;

  // スマホでの目次表示制御
  const [showMobileNav, setShowMobileNav] = useState(false);

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

  // SSR時のチラつき防止
  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-neutral-900 text-slate-800 dark:text-neutral-200">
      {/* ヘッダー */}
      <Header
        sections={sections}
        activeSection={activeSection}
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
        handleNavClick={handleNavClick}
      />

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
          <Sidebar sections={sections} activeSection={activeSection} handleNavClick={handleNavClick} />

          {/* メインコンテンツ */}
          <main className="space-y-6 min-w-0" style={{ overflowWrap: 'anywhere' }}>
            {/* 個人情報 */}
            <ProfileSection
              profile={profile}
              locale={locale}
              sectionRef={(el) => {
                sectionRefs.current['profile'] = el;
              }}
            />

            {/* 専門分野・強み */}
            <StrengthsSection
              selfPrText={selfPrText}
              sectionRef={(el) => {
                sectionRefs.current['strengths'] = el;
              }}
            />

            {/* スキル・知識 */}
            <SkillsSection
              skills={skills}
              locale={locale}
              sectionRef={(el) => {
                sectionRefs.current['skills'] = el;
              }}
            />

            {/* 職務経歴 */}
            <WorkHistorySection
              mainJobs={mainJobs}
              sideProjects={sideProjects}
              sectionRef={(el) => {
                sectionRefs.current['work-history'] = el;
              }}
            />

            {/* アウトプット */}
            <OutputsSection
              outputs={outputs}
              sectionRef={(el) => {
                sectionRefs.current['outputs'] = el;
              }}
            />
          </main>
        </div>
      </div>

      {/* フッター */}
      <Footer profileName={profile.name} />
    </div>
  );
}
