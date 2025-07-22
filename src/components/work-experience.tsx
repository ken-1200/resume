'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronDown, ChevronUp, Briefcase, Code } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Badge } from '@/src/components/ui/badge';
import { Separator } from '@/src/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/src/components/ui/collapsible';

interface Project {
  title: string;
  period: string;
  summary: string;
  details: string[];
  technologies: string[];
}

interface Company {
  companyName: string;
  period: string;
  position: string;
  responsibilities: string[];
  projects: Project[];
}

interface WorkExperienceProps {
  companies: Company[];
  type: 'main' | 'side';
}

export default function WorkExperience({ companies, type }: WorkExperienceProps) {
  const t = useTranslations();
  const [openProjects, setOpenProjects] = useState<Record<string, boolean>>({});

  // テーマカラーの設定
  const themeColors = {
    main: {
      border: 'border-blue-600/30 dark:border-blue-800/70',
      text: 'text-blue-600 dark:text-blue-300',
      dotActive: 'bg-blue-500 dark:bg-blue-400',
    },
    side: {
      border: 'border-green-600/30 dark:border-green-800/70',
      text: 'text-green-600 dark:text-green-300',
      dotActive: 'bg-green-500 dark:bg-green-400',
    },
  };

  const colors = themeColors[type];

  return (
    <div className="space-y-8">
      {companies.map((company, companyIdx) => (
        <div key={`${type}-${companyIdx}`} className="space-y-5">
          {/* 会社情報 */}
          <div className={`border-l-2 pl-4 py-1 ${colors.border}`}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <h4 className="font-semibold text-lg text-slate-800 dark:text-neutral-100">{company.companyName}</h4>
              <Badge variant="secondary" className="shrink-0 dark:variant-outline">
                {company.period}
              </Badge>
            </div>
            <p className={`text-sm mt-1 ${colors.text}`}>{company.position}</p>
          </div>

          {/* 2カラムレイアウト（職務内容と詳細） */}
          <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-5 pl-2">
            {/* 職務内容 */}
            <div>
              <h5 className="text-sm font-medium mb-3 flex items-center text-slate-500 dark:text-neutral-400">
                <Briefcase className="h-4 w-4 mr-2 flex-shrink-0" />
                {t('workHistory.responsibilities')}
              </h5>
              <ul className="list-disc ml-5 space-y-2 text-slate-700 dark:text-neutral-300">
                {company.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>

            {/* プロジェクト事例 */}
            <div>
              <h5 className="text-sm font-medium mb-3 flex items-center text-slate-500 dark:text-neutral-400">
                <Code className="h-4 w-4 mr-2 flex-shrink-0" />
                {t('workHistory.projects')}
              </h5>

              <div className="space-y-3 relative">
                {/* タイムライン縦線 */}
                <div className="absolute left-[7px] top-[24px] bottom-2 w-[1px] bg-slate-200 dark:bg-neutral-700"></div>

                {company.projects.map((project, projIdx) => {
                  const projectKey = `${type}-${companyIdx}-${projIdx}`;
                  const isOpen = openProjects[projectKey] || false;

                  return (
                    <Collapsible
                      key={projIdx}
                      open={isOpen}
                      onOpenChange={() =>
                        setOpenProjects((prev) => ({
                          ...prev,
                          [projectKey]: !prev[projectKey],
                        }))
                      }
                      className="border rounded-md overflow-hidden bg-white dark:bg-neutral-800/30 border-slate-200 dark:border-neutral-700/50"
                    >
                      <CollapsibleTrigger asChild>
                        <div
                          className="flex justify-between items-center p-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-neutral-700/50"
                          role="button"
                          aria-expanded={isOpen}
                          aria-controls={`project-content-${type}-${companyIdx}-${projIdx}`}
                        >
                          <div className="flex items-center flex-1 min-w-0">
                            <div
                              className={`
                              w-3 h-3 rounded-full mr-3 flex-shrink-0 relative z-2
                              ${isOpen ? colors.dotActive : 'bg-slate-300 dark:bg-neutral-600'}
                            `}
                            ></div>
                            <div className="min-w-0">
                              <h6 className="font-medium truncate text-slate-800 dark:text-neutral-200">
                                {project.title}
                              </h6>
                              <p className="text-xs text-slate-500 dark:text-neutral-400">{project.period}</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 w-7 p-0 rounded-full flex-shrink-0 ml-2 dark:hover:bg-neutral-700"
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                          </Button>
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent
                        id={`project-content-${type}-${companyIdx}-${projIdx}`}
                        className="animate-in fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
                      >
                        <div className="p-4 pt-2 border-t border-slate-200 dark:border-neutral-700/50 bg-slate-50/50 dark:bg-neutral-800/50">
                          <div className="mb-3">
                            <p className="text-sm text-slate-700 dark:text-neutral-300">{project.summary}</p>
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

          {companyIdx < companies.length - 1 && <Separator className="bg-slate-200 dark:bg-neutral-700/50" />}
        </div>
      ))}
    </div>
  );
}
