import type { Metadata } from 'next';
import { GEOServiceView } from '@/components/services/geo-service-view';
import { geoFaqs } from '@/components/services/geo-data';

const title = 'Generative Engine Optimisation (GEO) Services | ITBS';
const description =
  'Generative Engine Optimisation helps make websites and content easier for AI systems to retrieve, understand, trust, and cite.';
const url = 'https://infotechbusinesssolutions.com/services/generative-engine-optimisation';

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title,
  description,
  alternates: { canonical: '/services/generative-engine-optimisation' },
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
      name: 'Generative Engine Optimisation Services',
      serviceType: 'Generative Engine Optimisation',
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
        { '@type': 'ListItem', position: 2, name: 'SEO & AI Search', item: 'https://infotechbusinesssolutions.com/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Generative Engine Optimisation', item: url },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: geoFaqs.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export default function GEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <GEOServiceView />
    </>
  );
}
