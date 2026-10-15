import Link from 'next/link';
import type { Locale } from '@/types';

interface CTAProps {
  locale: Locale;
  messages: {
    ctaPrimary: string;
  };
}

export function CTA({ locale, messages }: CTAProps) {
  return (
    <section className="section-padding bg-ledger-dark border-y border-ledger-border" aria-labelledby="cta-heading">
      <div className="container-custom text-center">
        <h2 id="cta-heading" className="heading-lg text-ledger-light kinetic">
          Ready to find the revenue your website is leaving on the table?
        </h2>
        <p className="mt-4 body-lg text-ledger-muted max-w-2xl mx-auto">
          Request a Revenue Audit. We'll diagnose the leakage, quantify the opportunity, and give you a prioritized action plan.
        </p>
        <div className="mt-10">
          <Link href={`/${locale}/contact`} className="btn-primary bg-ledger-accent text-ledger-light border border-ledger-accent hover:bg-primary-100">
            {messages.ctaPrimary}
          </Link>
        </div>
      </div>
    </section>
  );
}