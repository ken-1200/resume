import { routing } from '@/src/i18n/routing';
import messages from '@/src/i18n/messages/ja.json';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
