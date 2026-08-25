import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { locales, getDir, type Locale } from "@/lib/i18n/config";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from "@/components/ui/StructuredData";
import "@/app/globals.css";
import { inter, playfair } from "@/lib/fonts";

// YZLand-style fonts are kept for QSO FORGE via inter/playfair; using same variables

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  if (!locales.includes(locale)) notFound();
  const t = await getTranslations({ locale, namespace: "common" });
  return {
    title: {
      default: "QSO FORGE — Digital Revenue Systems",
      template: "%s | QSO FORGE",
    },
    description: t("heroSubheadline"),
    metadataBase: new URL("https://qso-forge.workers.dev"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        ar: "/ar",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_MA" : locale === "fr" ? "fr_MA" : "en_US",
      siteName: "QSO FORGE",
      title: "QSO FORGE — Digital Revenue Systems",
      description: t("heroSubheadline"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={getDir(locale)} className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <OrganizationSchema />
          <WebsiteSchema />
          <LocalBusinessSchema />
          <Header locale={locale} messages={(messages as any).common} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} messages={(messages as any).common} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
