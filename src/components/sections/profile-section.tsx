'use client';

import { useTranslations } from 'next-intl';
import { Mail, MapPin, Calendar, User, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/src/components/ui/card';
import Github from '@/src/components/icon/github';
import LinkedIn from '@/src/components/icon/linkedin';

interface ProfileData {
  name: string;
  birth: string;
  address: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
}

interface ProfileSectionProps {
  profile: ProfileData;
  locale: string;
  sectionRef: (el: HTMLElement | null) => void;
}

export default function ProfileSection({ profile, locale, sectionRef }: ProfileSectionProps) {
  const t = useTranslations();

  return (
    <section id="profile" aria-labelledby="profile-heading" ref={sectionRef}>
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
  );
}
