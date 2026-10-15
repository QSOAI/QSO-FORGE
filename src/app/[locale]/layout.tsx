import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, defaultLocale, getMessages, isRtl } from "@/lib/i18n";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from "@/components/ui/StructuredData";
import type { Locale } from "@/types";


interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const locale = (params as any)?.locale ?? defaultLocale;
  const messages = await getMessages(locale);

  return {
    title: {
      default: "QSO FORGE — Digital Revenue Systems",
      template: "%s | QSO FORGE",
    },
    description: messages.homepage.problem.body,
    metadataBase: new URL("https://qsoforge.com"),
    openGraph: {
      type: "website",
      locale,
      url: `/${locale}`,
      siteName: "QSO FORGE",
      title: "QSO FORGE — Digital Revenue Systems",
      description: messages.common.heroSubheadline,
      alternateLocale: locales.filter((l) => l !== locale),
      images: [
        {
          url: "/images/hero-qso-forge.jpg",
          width: 1280,
          height: 720,
          alt: "QSO FORGE — precision-engineered revenue systems",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "QSO FORGE — Digital Revenue Systems",
      description: messages.common.heroSubheadline,
      images: ["/images/hero-qso-forge.jpg"],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = (params as any)?.locale ?? defaultLocale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);
  const dir = isRtl(locale) ? "rtl" : "ltr";

  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <LocalBusinessSchema />
      <div lang={locale} dir={dir} className="flex flex-col min-h-screen">
        <Header locale={locale} messages={messages.common} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} messages={messages.common} />
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="${locale}";document.documentElement.dir="${dir}";`,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function(){
  if(typeof window==='undefined') return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce) { document.querySelectorAll('.kinetic').forEach(function(el){ el.classList.add('is-visible'); }); return; }
  if(CSS.supports('animation-timeline: view()')) return;
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('is-visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });
  document.querySelectorAll('.kinetic').forEach(function(el){ obs.observe(el); });
})();
          `,
        }}
      />
    </>
  );
}
