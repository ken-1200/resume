'use client';

import { useTranslations } from 'next-intl';
import { Code } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/src/components/ui/card';
import SkillDetailCard from '@/src/components/skill-detail-card';
import { getCategoryName } from '@/src/lib/utils';

interface Skill {
  name: string;
  experience: string;
  details: string;
}

interface Skills {
  [category: string]: Skill[];
}

interface SkillsSectionProps {
  skills: Skills;
  locale: string;
  sectionRef: (el: HTMLElement | null) => void;
}

export default function SkillsSection({ skills, locale, sectionRef }: SkillsSectionProps) {
  const t = useTranslations();
  const skillCategories = Object.keys(skills);

  return (
    <section id="skills" aria-labelledby="skills-heading" ref={sectionRef}>
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
  );
}
