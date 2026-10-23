export const FAQ_CATEGORIES = ['All', 'General', 'Web', 'SEO & Marketing', 'Design', 'Pricing'] as const;

export type FaqCategory = Exclude<(typeof FAQ_CATEGORIES)[number], 'All'>;
export type FaqCategoryFilter = (typeof FAQ_CATEGORIES)[number];

export type FaqItem = {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-does-itbs-do',
    category: 'General',
    question: 'What does ITBS do?',
    answer: 'We are a digital agency offering web design and development, SEO, PPC, social media marketing, email marketing and graphic design, all under one roof.',
  },
  {
    id: 'which-businesses',
    category: 'General',
    question: 'Which businesses do you work with?',
    answer: 'Startups, small and medium businesses, online stores and service providers across many industries. Every project is planned around your goals.',
  },
  {
    id: 'work-remotely',
    category: 'General',
    question: 'Can you work with me remotely?',
    answer: 'Yes. We collaborate through email, video calls and chat, so location is rarely a barrier.',
  },
  {
    id: 'get-started',
    category: 'General',
    question: 'How do I get started?',
    answer: 'Send us a message through the contact page. We’ll discuss your goals, budget and timeline, then share a tailored proposal.',
  },
  {
    id: 'website-timeline',
    category: 'Web',
    question: 'How long does it take to build a website?',
    answer: 'It depends on size and features. A simple business website usually takes a few weeks, while custom features and online stores take longer. Your proposal includes a clear timeline.',
  },
  {
    id: 'platforms',
    category: 'Web',
    question: 'Which platforms do you build on?',
    answer: 'Shopify, WooCommerce, Magento, WordPress and fully custom development, whichever fits your business best.',
  },
  {
    id: 'website-redesign',
    category: 'Web',
    question: 'Can you redesign my existing website?',
    answer: 'Yes. We can refresh the design, add new features and move your content across while protecting your existing search visibility.',
  },
  {
    id: 'post-launch-support',
    category: 'Web',
    question: 'Do you support the website after launch?',
    answer: 'Yes. We offer post-launch support and maintenance so your site stays fast, secure and up to date.',
  },
  {
    id: 'seo-results',
    category: 'SEO & Marketing',
    question: 'How long until I see SEO results?',
    answer: 'SEO is gradual. Many businesses notice early movement within a few months, with stronger results building over time.',
  },
  {
    id: 'ranking-guarantee',
    category: 'SEO & Marketing',
    question: 'Do you guarantee the #1 ranking on Google?',
    answer: 'No, and be careful with anyone who does. Search engines make the final call. What we promise is transparent work, honest reporting and a strategy built around your goals.',
  },
  {
    id: 'geo',
    category: 'SEO & Marketing',
    question: 'What is Generative Engine Optimisation (GEO)?',
    answer: 'GEO helps your brand get understood and mentioned by AI-powered search tools and assistants, working alongside traditional SEO.',
  },
  {
    id: 'ppc-ad-spend',
    category: 'SEO & Marketing',
    question: 'Is ad spend included in your PPC fee?',
    answer: 'No. Ad budget is paid directly to the advertising platform, and our management fee is separate. This keeps your spending fully transparent.',
  },
  {
    id: 'design-files',
    category: 'Design',
    question: 'What files will I receive for my design work?',
    answer: 'Final exports such as PNG, JPG, SVG and PDF, plus source files (Figma, Photoshop or Illustrator) where included in your package.',
  },
  {
    id: 'project-cost',
    category: 'Pricing',
    question: 'How much does a project cost?',
    answer: 'Every project is different, so we quote based on scope and goals. Your proposal lists exactly what’s included, with no surprise charges.',
  },
  {
    id: 'payments',
    category: 'Pricing',
    question: 'How do payments work?',
    answer: 'Projects are usually split into milestone payments, and ongoing marketing services are billed monthly.',
  },
];

