'use client';

import { useTranslations } from 'next-intl';
import { FileText, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';

interface Output {
  title: string;
  type: string;
  url: string;
  date: string;
  description: string;
}

interface OutputsSectionProps {
  outputs: Output[];
  sectionRef: (el: HTMLElement | null) => void;
}

export default function OutputsSection({ outputs, sectionRef }: OutputsSectionProps) {
  const t = useTranslations();

  return (
    <section id="outputs" aria-labelledby="outputs-heading" className="min-h-[60vh]" ref={sectionRef}>
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
                        <span className="mr-2 font-bold flex-shrink-0 text-slate-500 dark:text-neutral-300">Q</span>
                      )}
                      {output.type === 'Zenn' && (
                        <span className="mr-2 font-bold flex-shrink-0 text-slate-500 dark:text-neutral-300">Z</span>
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
                  <p className="text-sm line-clamp-2 mb-3 text-slate-700 dark:text-neutral-300">{output.description}</p>
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
  );
}
