// lib/i18n/config.ts
// Central source of truth for locale configuration — mirrored from YZLand for consistency.

export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Locales that render right-to-left
export const rtlLocales: Locale[] = ["ar"];

// Human-readable locale labels (LocaleSwitcher UI)
export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

// Locale to HTML lang attribute
export const localeLang: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  ar: "ar",
};

// Helper: is this locale RTL?
export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

// Helper: get direction attribute for HTML element
export function getDir(locale: Locale): "ltr" | "rtl" {
  return isRtl(locale) ? "rtl" : "ltr";
}
