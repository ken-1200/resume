'use client';

import { useTranslations } from 'next-intl';
import { Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/src/components/ui/card';

interface StrengthsSectionProps {
  selfPrText: string[];
  sectionRef: (el: HTMLElement | null) => void;
}

export default function StrengthsSection({ selfPrText, sectionRef }: StrengthsSectionProps) {
  const t = useTranslations();

  return (
    <section id="strengths" aria-labelledby="strengths-heading" ref={sectionRef}>
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
  );
}
