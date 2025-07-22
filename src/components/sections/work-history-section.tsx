'use client';

import { useTranslations } from 'next-intl';
import { Briefcase } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/src/components/ui/card';
import WorkExperience from '@/src/components/work-experience';

interface Company {
  companyName: string;
  period: string;
  position: string;
  responsibilities: string[];
  projects: Array<{
    title: string;
    period: string;
    summary: string;
    details: string[];
    technologies: string[];
  }>;
}

interface WorkHistorySectionProps {
  mainJobs: Company[];
  sideProjects: Company[];
  sectionRef: (el: HTMLElement | null) => void;
}

export default function WorkHistorySection({ mainJobs, sideProjects, sectionRef }: WorkHistorySectionProps) {
  const t = useTranslations();

  return (
    <section id="work-history" aria-labelledby="work-history-heading" className="min-h-[70vh]" ref={sectionRef}>
      <Card className="shadow-sm bg-white dark:bg-neutral-800 border-slate-200 dark:border-neutral-700/50">
        <CardHeader className="pb-2 flex flex-row items-center bg-gradient-to-r from-slate-50 dark:from-blue-950/20 to-white dark:to-neutral-800">
          <Briefcase className="h-5 w-5 mr-2 flex-shrink-0 text-slate-500 dark:text-neutral-300" />
          <CardTitle id="work-history-heading" className="text-base text-slate-800 dark:text-neutral-100">
            {t('sections.workHistory')}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 space-y-8">
          {/* 本業セクション */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-neutral-100">
              {t('workHistory.mainJob')}
            </h3>
            <WorkExperience companies={mainJobs} type="main" />
          </div>

          {/* 副業セクション */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-neutral-100">
              {t('workHistory.sideProject')}
            </h3>
            <WorkExperience companies={sideProjects} type="side" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
