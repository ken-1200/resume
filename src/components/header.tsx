'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { ChevronUp, AlignLeft } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/src/components/ui/sheet';
import { Badge } from '@/src/components/ui/badge';
import LanguageSwitcher from '@/src/components/language-switcher';
import ThemeSwitch from '@/src/components/icon/theme-switch';

interface Section {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface HeaderProps {
  sections: Section[];
  activeSection: string;
  showMobileNav: boolean;
  setShowMobileNav: (show: boolean) => void;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Header({
  sections,
  activeSection,
  showMobileNav,
  setShowMobileNav,
  handleNavClick,
}: HeaderProps) {
  const t = useTranslations();
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
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
          {/* <Sun className="h-5 w-5 transition-all dark:rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" /> */}
          <ThemeSwitch className="h-5 w-5" />
          <span className="sr-only">{t('common.toggleTheme')}</span>
        </Button>
      </div>
    </header>
  );
}
