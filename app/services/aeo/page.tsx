import type { Metadata } from 'next';
import { AEOServiceView } from '@/components/services/aeo-service-view';

const title = 'Answer Engine Optimisation (AEO) Services UK | ITBS';
const description =
  'Help your business get discovered across AI-powered search with an AEO strategy built around clear content, technical SEO and brand authority.';
const url = 'https://infotechbusinesssolutions.com/services/aeo';

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title,
  description,
  alternates: { canonical: '/services/aeo' },
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

const faqs = [
  {
    question: 'What is Answer Engine Optimisation (AEO)?',
    answer:
      'Answer Engine Optimisation (AEO) helps your business get discovered when people use AI tools to find answers, compare products or research services. It focuses on making your content clear, useful and easy for AI systems to interpret, while building the credibility of your brand online.',
  },
  {
    question: 'What is the difference between AEO, SEO and GEO?',
    answer:
      'SEO helps your website appear in traditional search results. AEO focuses on making your content useful for direct answers, while GEO aims to improve your visibility in AI-generated responses. Since these approaches overlap, combining them can help your business reach customers across different search experiences.',
  },
  {
    question: 'How can AEO help my business appear in AI search results?',
    answer:
      "If potential customers are using ChatGPT, Google AI Overviews or Perplexity to research businesses like yours, AEO can help you compete for that visibility. At ITBS, we look at how your content answers customer questions, how search systems access it and how clearly your brand's expertise comes across.",
  },
  {
    question: 'Which AI platforms can AEO target?',
    answer:
      'Your AEO strategy can focus on Google AI Overviews, ChatGPT, Gemini, Perplexity and Microsoft Copilot. The best starting point depends on your industry and where your customers are looking for information. We recommend prioritising relevant platforms rather than spreading your efforts too thinly.',
  },
  {
    question: 'How long does AEO take to show results?',
    answer:
      'There is no set timeline. If your website already has strong SEO foundations and useful content, some improvements may be easier to build on. Other businesses may need more work on content, technical issues or brand credibility first. We recommend tracking progress over time instead of relying on a promised deadline.',
  },
  {
    question: 'How do you measure AI search visibility?',
    answer:
      'We look at whether your brand appears in relevant AI responses, which sources are cited and how your visibility compares with competitors. Where tracking data is available, referral visits and conversions help show whether that visibility is bringing potential customers to your business.',
  },
  {
    question: 'How much do AEO services cost in the UK?',
    answer:
      "The cost depends on your website's current condition, your competition and how much work is needed. Some businesses may need a focused audit and content improvements, while others require ongoing technical SEO and authority building. The best way to estimate the investment is to assess your current position and business goals first.",
  },
  {
    question: 'Can an agency guarantee my brand will appear in AI-generated answers?',
    answer:
      'No. AI platforms control which businesses and sources appear in their responses, and results can change between queries. What we can do is improve the factors within our control, from content quality and technical accessibility to brand credibility, then monitor the results and adjust the strategy accordingly.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Answer Engine Optimisation Services',
      serviceType: 'Answer Engine Optimisation',
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
        { '@type': 'ListItem', position: 3, name: 'Answer Engine Optimisation', item: url },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export default function AEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <AEOServiceView />
    </>
  );
}
