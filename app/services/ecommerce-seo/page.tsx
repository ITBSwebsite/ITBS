import type { Metadata } from 'next';
import { EcommerceSEOView } from '@/components/services/ecommerce-seo-view';
import '@/components/services/ecommerce-seo.css';

const title = 'Ecommerce SEO Agency UK | ITBS';
const description =
  'Ecommerce SEO for UK online stores. Improve technical foundations, category and product pages, site structure and product data with a practical, store-focused plan.';
const url = 'https://infotechbusinesssolutions.com/services/ecommerce-seo';

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title,
  description,
  alternates: { canonical: '/services/ecommerce-seo' },
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
      name: 'Ecommerce SEO',
      serviceType: 'Ecommerce search engine optimisation',
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
        { '@type': 'ListItem', position: 3, name: 'Ecommerce SEO', item: url },
      ],
    },
  ],
};

export default function EcommerceSEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <EcommerceSEOView />
    </>
  );
}
