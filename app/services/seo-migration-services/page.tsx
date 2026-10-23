import type { Metadata } from 'next';
import { SEOMigrationServicesView } from '@/components/services/seo-migration-services-view';
import '@/components/services/seo-migration-services.css';

const title = 'SEO Migration Services | Site Move SEO Support | ITBS';
const description =
  'Plan a domain change, redesign or platform move with careful URL mapping, redirect planning and SEO checks around launch.';
const url = 'https://infotechbusinesssolutions.com/services/seo-migration-services';

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title,
  description,
  alternates: { canonical: '/services/seo-migration-services' },
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
      name: 'SEO Migration Services',
      serviceType: 'SEO support for website migrations',
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
        { '@type': 'ListItem', position: 3, name: 'SEO Migration Services', item: url },
      ],
    },
  ],
};

export default function SEOMigrationServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <SEOMigrationServicesView />
    </>
  );
}
