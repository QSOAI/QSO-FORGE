import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function RootPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-50">
      <div className="text-center">
        <h1 className="heading-lg text-primary-950 mb-4">QSO FORGE</h1>
        <p className="body-md text-primary-600 mb-8">Choose your language</p>
        <div className="flex gap-4 justify-center">
          <Link href="/en" className="btn-primary">English</Link>
          <Link href="/fr" className="btn-secondary">Français</Link>
          <Link href="/ar" className="btn-secondary">العربية</Link>
        </div>
      </div>
    </div>
  );
}
