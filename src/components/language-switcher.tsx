'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Globe } from 'lucide-react';

import { Button } from '@/src/components/ui/button';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const pathnameWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;

    const newPath = `/${newLocale}${pathnameWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => switchLocale(locale === 'ja' ? 'en' : 'ja')}
      className="cursor-pointer dark:hover:bg-neutral-800"
    >
      <Globe className="h-5 w-5" />
    </Button>
  );
}
