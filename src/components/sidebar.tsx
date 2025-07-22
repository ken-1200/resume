'use client';

import { useTranslations } from 'next-intl';
import { Card, CardHeader, CardTitle, CardContent } from '@/src/components/ui/card';
import { ScrollArea } from '@/src/components/ui/scroll-area';

interface Section {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  sections: Section[];
  activeSection: string;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Sidebar({ sections, activeSection, handleNavClick }: SidebarProps) {
  const t = useTranslations();

  return (
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
  );
}
