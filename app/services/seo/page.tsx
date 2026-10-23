import type { Metadata } from 'next';
import { SEOServiceView } from '@/components/services/seo-service-view';

const seoTitle = 'SEO Services UK | Technical, Local & Ecommerce SEO | ITBS';
const seoDescription =
  'Grow organic visibility with tailored SEO services from ITBS. Technical, on-page, local and ecommerce SEO built around your goals and customers.';
const seoUrl = 'https://infotechbusinesssolutions.com/services/seo';

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title: seoTitle,
  description: seoDescription,
  alternates: { canonical: '/services/seo' },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: seoUrl,
    siteName: 'InfoTech Business Solutions',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: seoTitle, description: seoDescription },
};

const seoStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'SEO Services',
      serviceType: 'Search engine optimisation',
      description: seoDescription,
      url: seoUrl,
      provider: { '@type': 'Organization', name: 'InfoTech Business Solutions', url: 'https://infotechbusinesssolutions.com' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://infotechbusinesssolutions.com/' },
        { '@type': 'ListItem', position: 2, name: 'SEO', item: seoUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much do SEO services cost in the UK?',
          acceptedAnswer: { '@type': 'Answer', text: 'SEO costs depend on your website, industry, competition and the work involved. After understanding your goals and reviewing your site, we can recommend a suitable scope and provide clear pricing.' },
        },
        {
          '@type': 'Question',
          name: 'What does your SEO service include?',
          acceptedAnswer: { '@type': 'Answer', text: 'Our SEO work can include a technical audit, keyword and search-intent research, on-page optimisation, content planning, local SEO, link building and ongoing performance reporting. The exact mix is based on your needs.' },
        },
        {
          '@type': 'Question',
          name: 'Why choose ITBS as your SEO agency?',
          acceptedAnswer: { '@type': 'Answer', text: 'We combine technical SEO, useful content and practical strategy, with transparent communication and reporting. We can also help your brand prepare for changing search behaviour, including answer engines and generative AI results.' },
        },
        {
          '@type': 'Question',
          name: 'How long does SEO take to show results?',
          acceptedAnswer: { '@type': 'Answer', text: 'SEO is a long-term investment. Some technical or local improvements may show earlier, while broader ranking and traffic growth often takes several months. Timing depends on your starting point, competition and the work completed.' },
        },
        {
          '@type': 'Question',
          name: 'Do you offer local and e-commerce SEO?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. We support local visibility, Google Business Profile optimisation and location pages, as well as e-commerce SEO for product pages, category structures, technical health and organic shopping journeys.' },
        },
      ],
    },
  ],
};

export default function SEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoStructuredData).replace(/</g, '\\u003c') }}
      />
      <SEOServiceView />
    </>
  );
}
