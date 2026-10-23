import type { Metadata } from 'next';
import { ContentMarketingView } from '@/components/services/content-marketing-view';
import '@/components/services/content-marketing.css';

const title = 'Content Marketing Services UK | Strategy & SEO Writing | ITBS';
const description =
  'Plan, create and improve useful content with a strategy shaped around your audience, search opportunities and business goals.';
const url = 'https://infotechbusinesssolutions.com/services/content-marketing';

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title,
  description,
  alternates: { canonical: '/services/content-marketing' },
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
      name: 'Content Marketing Services',
      serviceType: 'Content Marketing',
      description,
      url,
      provider: {
        '@type': 'Organization',
        name: 'InfoTech Business Solutions',
        url: 'https://infotechbusinesssolutions.com',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://infotechbusinesssolutions.com/' },
        { '@type': 'ListItem', position: 2, name: 'SEO & AI Search', item: 'https://infotechbusinesssolutions.com/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Content Marketing', item: url },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How often should we publish content?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on your goals, resources and the amount of useful work your audience needs. We help set a realistic publishing rhythm that your team can maintain, rather than chasing volume for its own sake.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long until content marketing shows results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Timing varies with your starting point, competition, topic and how consistently content is improved and supported. Search visibility can take time to build, so we focus on useful work and clear measurement instead of promising a fixed results date.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you only plan the content, or write it too?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We can discuss planning and content creation as part of your project. The agreed scope can include strategy, briefs, writing, editing and optimisation based on what your team needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you make sure content is original?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Content is developed around your agreed brief, audience and point of view. We confirm research sources, review steps and any originality checks as part of the project workflow.',
          },
        },
      ],
    },
  ],
};

export default function ContentMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <ContentMarketingView />
    </>
  );
}
