import Link from 'next/link';
import type { Locale } from '@/types';

interface FooterProps {
  locale: Locale;
  messages: {
    companyName: string;
    tagline: string;
    footerRights: string;
    footerPrivacy: string;
    footerTerms: string;
    navServices: string;
    navWork: string;
    navAbout: string;
    navContact: string;
  };
}

export function Footer({ locale, messages }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: `/${locale}/services`, label: messages.navServices },
    { href: `/${locale}/work`, label: messages.navWork },
    { href: `/${locale}/about`, label: messages.navAbout },
    { href: `/${locale}/contact`, label: messages.navContact },
  ];

  const legalLinks = [
    { href: `/${locale}/privacy`, label: messages.footerPrivacy },
    { href: `/${locale}/terms`, label: messages.footerTerms },
  ];

  return (
    <footer className="bg-ledger-dark border-t border-ledger-border text-ledger-light" role="contentinfo">
      <div className="container-custom py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2 text-xl font-serif font-medium tracking-tight mb-4" aria-label={`${messages.companyName} — Home`}>
              <span>{messages.companyName}</span>
            </Link>
            <p className="text-ledger-muted text-sm leading-relaxed mb-4">{messages.tagline}</p>
            <div className="space-y-2 mb-6">
              <a href="tel:+212619852591" className="flex items-center gap-2 text-sm font-mono text-ledger-muted hover:text-ledger-light transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +212 619-852591
              </a>
              <a href="https://wa.me/212619852591" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-ledger-muted hover:text-ledger-accent transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                WhatsApp
              </a>
              <a href="mailto:quantumshiftorg@gmail.com" className="flex items-center gap-2 text-sm font-mono text-ledger-muted hover:text-ledger-light transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                quantumshiftorg@gmail.com
              </a>
            </div>
            <p className="text-ledger-muted/60 text-sm font-mono">&copy; {currentYear} {messages.companyName}. {messages.footerRights}</p>
          </div>

          <nav aria-label="Main navigation">
            <h3 className="text-sm font-mono font-medium tracking-wide text-ledger-muted uppercase mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ledger-muted hover:text-ledger-light transition-colors text-sm font-mono">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="text-sm font-mono font-medium tracking-wide text-ledger-muted uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href={`/${locale}/services/diagnose`} className="text-ledger-muted hover:text-ledger-light transition-colors text-sm font-mono">Revenue Audit</Link></li>
              <li><Link href={`/${locale}/services/build`} className="text-ledger-muted hover:text-ledger-light transition-colors text-sm font-mono">Premium Experience</Link></li>
              <li><Link href={`/${locale}/services/convert`} className="text-ledger-muted hover:text-ledger-light transition-colors text-sm font-mono">Conversion Engine</Link></li>
              <li><Link href={`/${locale}/services/automate`} className="text-ledger-muted hover:text-ledger-light transition-colors text-sm font-mono">AI & Automation</Link></li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className="text-sm font-mono font-medium tracking-wide text-ledger-muted uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ledger-muted hover:text-ledger-light transition-colors text-sm font-mono">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-ledger-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ledger-muted/60 text-sm font-mono">Built with restraint. Designed for revenue.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/QSOAI" target="_blank" rel="noopener noreferrer" className="text-ledger-muted hover:text-ledger-light transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}