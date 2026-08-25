interface StructuredDataProps {
  data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'QSO FORGE',
    url: 'https://qsoforge.com',
    logo: 'https://qsoforge.com/logo.png',
    sameAs: [
      'https://github.com/QSOAI',
      'https://linkedin.com/company/qsoforge',
      'https://twitter.com/qsoforge',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+212-6-XX-XX-XX-XX',
      contactType: 'customer service',
      availableLanguage: ['English', 'French', 'Arabic'],
    },
  };
  return <StructuredData data={data} />;
}

export function WebsiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'QSO FORGE',
    url: 'https://qsoforge.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://qsoforge.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
  return <StructuredData data={data} />;
}

export function ServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  priceRange: string;
  areaServed: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: 'QSO FORGE',
      url: 'https://qsoforge.com',
    },
    areaServed: service.areaServed,
    offers: {
      '@type': 'Offer',
      name: service.name,
      description: service.description,
      url: service.url,
      priceCurrency: 'MAD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'MAD',
      },
    },
  };
  return <StructuredData data={data} />;
}

export function BreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <StructuredData data={data} />;
}

export function LocalBusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'QSO FORGE',
    description: 'Digital revenue systems for businesses that have outgrown brochure websites.',
    url: 'https://qsoforge.com',
    telephone: '+212-6-XX-XX-XX-XX',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.6295,
      longitude: -7.9811,
    },
    priceRange: '$$$',
    currenciesAccepted: 'MAD',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    availableLanguage: ['English', 'French', 'Arabic'],
  };
  return <StructuredData data={data} />;
}