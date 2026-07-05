import en from './en.json';
import zh from './zh.json';

const translations: Record<string, typeof en> = { en, zh };

export const languages = ['en', 'zh'] as const;
export type Lang = (typeof languages)[number];

export function t(lang: Lang) {
  return translations[lang] ?? translations.en;
}

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  if (languages.includes(seg as Lang)) return seg as Lang;
  return 'en';
}

export function getOtherLang(lang: Lang): Lang {
  return lang === 'en' ? 'zh' : 'en';
}
