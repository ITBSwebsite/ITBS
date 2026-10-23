import type { Metadata } from 'next';
import './about.css';
import { AboutView } from '@/components/about/about-view';

const title = 'About ITBS | Digital Growth for UK Businesses';
const description =
  'Get to know ITBS, a UK-based digital solutions agency helping businesses grow through tailored SEO, high-performing websites and growth-focused marketing.';
const pageUrl = 'https://infotechbusinesssolutions.com/about';

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title,
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: 'InfoTech Business Solutions',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About InfoTech Business Solutions',
  description,
  url: pageUrl,
  about: {
    '@type': 'Organization',
    name: 'InfoTech Business Solutions',
    url: 'https://infotechbusinesssolutions.com',
    description,
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <AboutView />
    </>
  );
}
