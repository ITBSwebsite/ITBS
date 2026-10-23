import type { Metadata } from 'next';
import { CRMLeadManagementView } from '@/components/services/crm-lead-management-view';

const title = 'CRM & Lead Management | Lead Routing and Automation | ITBS';
const description =
  'Capture every enquiry, organise leads and automate timely follow-ups with ITBS CRM and lead management solutions for growing UK businesses.';
const pageUrl = 'https://infotechbusinesssolutions.com/services/crm-lead-management';

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title,
  description,
  alternates: { canonical: '/services/crm-lead-management' },
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

const faqItems = [
  {
    question: 'Why Sales Teams Rely on ITBS CRM Every Day',
    answer:
      'Our CRM is designed as a simple lead management system that delivers enterprise-level lead management software features, built-in CRM with call recording, and automation at an affordable price. Our customer lead management software combines the power of CRM and lead management into one unified platform.',
  },
  {
    question: 'Can I track lead sources and conversion rates in real time?',
    answer:
      'Absolutely! ITBS provides real-time tracking of lead sources and conversion rates. You can see exactly where your leads are coming from and how they are progressing through the pipeline, helping you make data-driven decisions and optimise your sales strategies.',
  },
  {
    question: 'How can lead analytics help improve my sales performance?',
    answer:
      'Lead analytics provide valuable insights into how your sales team is performing, where leads are getting stuck, and what is driving conversions. By analysing these metrics, you can identify bottlenecks, optimise your sales process, and make informed decisions to increase conversions and revenue.',
  },
  {
    question: 'What industries does ITBS CRM and Lead Generation Platform serve?',
    answer:
      'Our CRM solutions are designed for businesses across all industries, from retailers to growing companies looking to overcome sales challenges, manage leads more effectively and accelerate business growth.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'CRM & Lead Management',
      serviceType: 'CRM, lead routing and follow-up automation',
      description,
      url: pageUrl,
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
        { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://infotechbusinesssolutions.com/#solutions' },
        { '@type': 'ListItem', position: 3, name: 'CRM & Lead Management', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
};

export default function CRMLeadManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <CRMLeadManagementView faqItems={faqItems} />
    </>
  );
}
