'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Locale } from '@/types';

interface HeaderProps {
  locale: Locale;
  messages: {
    companyName: string;
    tagline: string;
    navServices: string;
    navWork: string;
    navAbout: string;
    navContact: string;
    language: string;
    english: string;
    french: string;
    arabic: string;
    ctaPrimary: string;
  };
}

const locales: Locale[] = ['en', 'fr', 'ar'];
const localeLabels: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  ar: 'العربية',
};

export function Header({ locale, messages }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const navItems = [
    { href: `/${locale}/services`, label: messages.navServices },
    { href: `/${locale}/work`, label: messages.navWork },
    { href: `/${locale}/about`, label: messages.navAbout },
    { href: `/${locale}/contact`, label: messages.navContact },
  ];

  const getLocalePath = (targetLocale: Locale) => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith(`/${locale}`)) {
        return path.replace(`/${locale}`, `/${targetLocale}`);
      }
      return `/${targetLocale}${path}`;
    }
    return `/${targetLocale}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-primary-200">
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2 text-primary-900 hover:opacity-80 transition-opacity" aria-label={`${messages.companyName} — Home`}>
            <span className="text-xl font-display font-medium tracking-tight">{messages.companyName}</span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-primary-600 hover:text-primary-900 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:gap-4">
            <div className="relative" role="combobox" aria-label={messages.language} aria-expanded={langMenuOpen} aria-haspopup="listbox">
              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-primary-700 hover:text-primary-900 rounded-md transition-colors"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                aria-expanded={langMenuOpen}
              >
                <span>{localeLabels[locale]}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {langMenuOpen && (
                <ul className="absolute right-0 mt-1 w-36 bg-white border border-primary-200 rounded-md shadow-lg py-1" role="listbox">
                  {locales.map((l) => (
                    <li key={l} role="option" aria-selected={l === locale}>
                      <a
                        href={getLocalePath(l)}
                        className={`flex items-center gap-2 px-3 py-2 text-sm ${l === locale ? 'bg-primary-50 text-accent-600' : 'text-primary-700 hover:bg-primary-50'}`}
                        onClick={() => setLangMenuOpen(false)}
                      >
                        {localeLabels[l]}
                        {l === locale && <svg className="w-4 h-4 text-accent-600 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link
              href={`/${locale}/contact`}
              className="btn-primary whitespace-nowrap"
            >
              {messages.ctaPrimary}
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-primary-700 hover:text-primary-900 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-primary-200 animate-slide-up">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-base font-medium rounded-md text-primary-600 hover:bg-primary-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-primary-200 flex items-center justify-between">
                <span className="text-sm font-medium text-primary-700">{messages.language}</span>
                <select
                  value={locale}
                  onChange={(e) => {
                    const newLocale = e.target.value as Locale;
                    window.location.href = getLocalePath(newLocale);
                  }}
                  className="input-field w-auto py-2 text-sm"
                  aria-label={messages.language}
                >
                  {locales.map((l) => (
                    <option key={l} value={l}>{localeLabels[l]}</option>
                  ))}
                </select>
              </div>
              <Link href={`/${locale}/contact`} className="btn-primary text-center mt-2" onClick={() => setMobileMenuOpen(false)}>
                {messages.ctaPrimary}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
