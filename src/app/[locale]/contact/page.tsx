import { getMessages } from '@/lib/i18n';
import { Metadata } from 'next';
import type { Locale } from '@/types';
import { ContactForm } from '@/components/forms/ContactForm';

interface ContactPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return {
    title: messages.contact.headline,
    description: messages.contact.subheadline,
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const messages = await getMessages(locale);

  return <ContactForm locale={locale} messages={messages} />;
}