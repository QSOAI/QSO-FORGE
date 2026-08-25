import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-display font-medium text-primary-200 mb-4">404</h1>
        <h2 className="text-3xl font-display font-medium text-primary-950 mb-4">Page Not Found</h2>
        <p className="text-primary-600 mb-8">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/en" className="btn-primary">Back to Home</Link>
          <Link href="/en/contact" className="btn-secondary">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
