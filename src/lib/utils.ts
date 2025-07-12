import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCategoryName(category: string, locale: string) {
  if (locale === 'ja') {
    switch (category) {
      case 'programming':
        return 'プログラミング言語';
      case 'frameworks':
        return 'フレームワーク';
      case 'tools':
        return 'ツール';
      case 'others':
        return 'その他スキル';
      default:
        return '';
    }
  } else {
    switch (category) {
      case 'programming':
        return 'Programming Languages';
      case 'frameworks':
        return 'Frameworks';
      case 'tools':
        return 'Tools';
      case 'others':
        return 'Other Skills';
      default:
        return '';
    }
  }
}
