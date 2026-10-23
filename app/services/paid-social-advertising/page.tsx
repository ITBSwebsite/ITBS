import type { Metadata } from 'next';
import { PaidSocialAdvertisingView } from '@/components/services/paid-social-advertising-view';

const title = 'Paid Social Advertising Services UK | ITBS';
const description =
  'Plan paid social campaigns around your audience and business goals across Meta, LinkedIn and TikTok. Discuss a clear, considered approach with ITBS.';
const url = 'https://infotechbusinesssolutions.com/services/paid-social-advertising';

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title,
  description,
  alternates: { canonical: '/services/paid-social-advertising' },
  openGraph: {
    title,
    description,
    url,
    siteName: 'InfoTech Business Solutions',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Paid Social Advertising',
      serviceType: 'Paid Social Advertising',
      description,
      url,
      provider: {
        '@type': 'Organization',
        name: 'InfoTech Business Solutions',
        url: 'https://infotechbusinesssolutions.com',
      },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://infotechbusinesssolutions.com/' },
        { '@type': 'ListItem', position: 2, name: 'Paid Advertising', item: 'https://infotechbusinesssolutions.com/services/ppc' },
        { '@type': 'ListItem', position: 3, name: 'Paid Social Advertising', item: url },
      ],
    },
  ],
};

export default function PaidSocialAdvertisingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <PaidSocialAdvertisingView />
    </>
  );
}
