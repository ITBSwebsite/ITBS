import type { Metadata } from 'next';
import './seo-audits.css';
import { SEOAuditsView } from '@/components/services/seo-audits-view';

const title = 'SEO audit services | Technical SEO audits | ITBS';
const description =
  'Expert SEO audit services from ITBS, covering technical, ecommerce, local and enterprise SEO with a prioritised action plan.';
const url = 'https://infotechbusinesssolutions.com/services/seo-audits';

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title,
  description,
  alternates: { canonical: '/services/seo-audits' },
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
      name: 'SEO audit services',
      serviceType: 'Technical, ecommerce, local and enterprise SEO audits',
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
        { '@type': 'ListItem', position: 3, name: 'SEO Audits', item: url },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is an SEO audit?',
          acceptedAnswer: { '@type': 'Answer', text: 'An SEO audit is a structured review of your website’s technical health, content, keyword targeting and competitive position. It identifies what may be limiting organic performance and gives you clear actions to address it.' },
        },
        {
          '@type': 'Question',
          name: 'What is a technical SEO audit?',
          acceptedAnswer: { '@type': 'Answer', text: 'A technical SEO audit examines how search engines crawl, understand and index your website. It can review site structure, redirects, canonical tags, speed, mobile usability, structured data and other technical factors.' },
        },
        {
          '@type': 'Question',
          name: 'How much does an SEO audit cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'A basic SEO audit is free. Extensive custom audits, including a page-by-page review, start from £300. We confirm the scope and price before work begins.' },
        },
        {
          '@type': 'Question',
          name: 'How long does an SEO audit take?',
          acceptedAnswer: { '@type': 'Answer', text: 'Our agreed SEO audit is typically delivered within 3 days. Timing can depend on the size and complexity of your website and the scope of the review.' },
        },
        {
          '@type': 'Question',
          name: 'What will I receive from an SEO audit?',
          acceptedAnswer: { '@type': 'Answer', text: 'You receive validated findings, prioritised recommendations, affected URLs and examples, keyword and competitor opportunities, and a practical implementation roadmap.' },
        },
        {
          '@type': 'Question',
          name: 'Can we talk before commissioning an audit?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Contact our team to discuss your priorities, a suitable audit scope and the next steps for your website.' },
        },
        {
          '@type': 'Question',
          name: 'When should I commission an SEO audit?',
          acceptedAnswer: { '@type': 'Answer', text: 'An audit is useful when organic traffic drops, rankings stall, you plan a website redesign or migration, or you want a clear baseline before investing further in SEO.' },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a local and an enterprise SEO audit?',
          acceptedAnswer: { '@type': 'Answer', text: 'A local SEO audit focuses on visibility in the areas you serve, including Google Business Profile, citations, location pages and reviews. An enterprise audit considers larger, more complex websites, including crawl scale, international setup, templates, indexation and multi-team roadmaps.' },
        },
      ],
    },
  ],
};

export default function SEOAuditsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <SEOAuditsView />
    </>
  );
}
