import Link from 'next/link';
import { getMessages } from '@/lib/i18n';
import { defaultLocale } from '@/lib/i18n';
import type { Locale } from '@/types';


interface NotFoundProps {
  params?: { locale: Locale };
}

export default async function NotFound({ params }: NotFoundProps) {
  const locale = params?.locale ?? defaultLocale;
  const messages = await getMessages(locale);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ledger-dark px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-display font-medium text-primary-200 mb-4">404</h1>
        <h2 className="heading-lg text-ledger-light mb-4">Page Not Found</h2>
        <p className="body-md text-ledger-muted mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={`/${locale}`} className="btn-primary">
            Back to Home
          </Link>
          <Link href={`/${locale}/contact`} className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
