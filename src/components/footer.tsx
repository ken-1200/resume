'use client';

import { useTranslations } from 'next-intl';

interface FooterProps {
  profileName: string;
}

export default function Footer({ profileName }: FooterProps) {
  const t = useTranslations();

  return (
    <footer className="w-full mt-auto py-4 text-center text-sm text-slate-500 dark:text-neutral-400 border-t border-slate-200 dark:border-neutral-700/50">
      <div className="container mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} {profileName}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}
