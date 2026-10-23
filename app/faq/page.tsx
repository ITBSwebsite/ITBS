import type { Metadata } from 'next';
import { FaqView } from '@/components/faq/faq-view';
import { FAQ_ITEMS } from '@/components/faq/faq-data';
import './faq.css';

const title = 'Frequently Asked Questions | ITBS';
const description =
  'Answers about ITBS web development, SEO and marketing, design, pricing and getting started, organised by topic. Contact our team for more help.';
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title,
  description,
  alternates: { canonical: '/faq' },
  openGraph: {
    title,
    description,
    url: 'https://infotechbusinesssolutions.com/faq',
    siteName: 'InfoTech Business Solutions',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description },
};

export default function FaqPage() {
  const safeFaqSchema = JSON.stringify(faqSchema).replace(/</g, '\\u003c');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeFaqSchema }} />
      <FaqView />
    </>
  );
}

