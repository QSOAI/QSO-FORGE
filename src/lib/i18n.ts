import type { Locale } from '@/types';
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import arMessages from '@/messages/ar.json';

export const locales: Locale[] = ['en', 'fr', 'ar'];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  ar: 'العربية',
};

export const rtlLocales: Locale[] = ['ar'];

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export function getLocaleFromPath(pathname: string): Locale | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return null;
  const maybeLocale = segments[0] as Locale;
  return locales.includes(maybeLocale) ? maybeLocale : null;
}

export function removeLocaleFromPath(pathname: string): string {
  const locale = getLocaleFromPath(pathname);
  if (!locale) return pathname;
  return pathname.replace(`/${locale}`, '') || '/';
}

export function addLocaleToPath(pathname: string, locale: Locale): string {
  const cleanPath = removeLocaleFromPath(pathname);
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
}

const messagesMap: Record<Locale, typeof enMessages> = {
  en: enMessages,
  fr: frMessages,
  ar: arMessages,
};

export async function getMessages(locale: Locale) {
  return messagesMap[locale] ?? messagesMap[defaultLocale];
}

export function getMessagesSync(locale: Locale) {
  return messagesMap[locale] ?? messagesMap[defaultLocale];
}
