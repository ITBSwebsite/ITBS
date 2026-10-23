import type { Metadata } from 'next';
import { AIAutomationView } from '@/components/services/ai-automation-view';

const title = 'AI Automation & AI CRM Solutions | ITBS';
const description =
  'Connect your customer workflows, automate repetitive tasks and support your teams with practical AI automation and CRM solutions from ITBS.';
const pageUrl = 'https://infotechbusinesssolutions.com/services/ai-automation';

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title,
  description,
  alternates: { canonical: '/services/ai-automation' },
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
    question: 'Which business tasks can be automated using AI?',
    answer:
      'Customer support (chatbots and ticket routing), sales and marketing (email campaigns, social posting and ad optimisation), finance and administration (invoice processing, data entry and reporting), HR (CV screening and interview scheduling), operations (inventory forecasting and workflow approvals), content creation, and data analysis. Repetitive, high-volume, rule-based tasks are often good candidates for automation.',
  },
  {
    question: 'Can I customise AI automation according to my business needs?',
    answer:
      'Yes. AI workflows can be tailored to your data and documents, brand voice, approval rules and existing tools, such as your CRM, email, messaging and accounting software. You can begin with one process and expand over time.',
  },
  {
    question: 'Can AI automatically capture leads from my website and social media?',
    answer:
      'Yes. AI chatbots and smart forms can collect visitor details on your website. Automated replies and lead-ad connections can capture enquiries from social media. Captured details can then flow into your CRM or another connected system without manual entry.',
  },
  {
    question: 'Can AI qualify leads before assigning them to my sales team?',
    answer:
      'Yes. AI can ask qualifying questions about budget, timeline and needs, then help score and categorise leads using their answers and activity. Your routing rules can send suitable prospects to the right salesperson and place others into an appropriate follow-up sequence.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'AI Automation',
      serviceType: 'AI CRM, workflow automation and lead management',
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
        { '@type': 'ListItem', position: 3, name: 'AI Automation', item: pageUrl },
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

export default function AIAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <AIAutomationView faqItems={faqItems} />
    </>
  );
}
