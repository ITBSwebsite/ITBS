export type HelpCategory = {
  id: string;
  title: string;
  description: string;
};

export type HelpArticle = {
  question: string;
  answer: string;
  category: string;
  keywords: string;
  popular?: boolean;
};

export const HELP_CATEGORIES: HelpCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Request a quote, get prepared and know what happens next.',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Timelines, reviews, content, hosting and website launches.',
  },
  {
    id: 'seo-marketing',
    title: 'SEO & Digital Marketing',
    description: 'Reports, campaign updates, budgets and realistic timelines.',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'File formats, revision rounds and brand asset delivery.',
  },
  {
    id: 'billing-payments',
    title: 'Billing & Payments',
    description: 'Understand invoices, payment schedules and accepted methods.',
  },
  {
    id: 'account-support',
    title: 'Account & Support',
    description: 'Reach your project contact or let us know about an issue.',
  },
];

export const HELP_ARTICLES: HelpArticle[] = [
  {
    question: 'How do I request a quotation?',
    answer:
      'Send us a message through the contact form and tell us what you want to achieve, your budget and your preferred timeline. We will review the details and come back with a tailored proposal covering the scope, milestones and pricing.',
    category: 'getting-started',
    keywords: 'quote quotation estimate proposal price cost contact enquiry',
    popular: true,
  },
  {
    question: 'What should I prepare before starting a project?',
    answer:
      'A short brief is a useful start. Share your goals, audience, existing website or brand materials, any examples you like, and your budget and timing. If something is not ready yet, tell us and we can agree what is needed first.',
    category: 'getting-started',
    keywords: 'prepare brief goals audience logo brand files website project start',
    popular: true,
  },
  {
    question: 'How long does a website project usually take?',
    answer:
      'Timing depends on the project scope, content, integrations and review stages. Your proposal will set out the expected milestones and schedule, and we will keep you updated as the work progresses.',
    category: 'web-development',
    keywords: 'timeline duration launch website development days weeks',
    popular: true,
  },
  {
    question: 'How do revision rounds work?',
    answer:
      'You will review work at the milestones agreed for your project. The proposal sets out the included revision rounds; sharing clear, consolidated feedback helps us make each review useful.',
    category: 'graphic-design',
    keywords: 'revisions feedback changes design rounds review',
    popular: true,
  },
  {
    question: 'How do I share my logo, content and files with the team?',
    answer:
      'Your project contact will confirm the best way to share files, such as a shared project folder. Send original logo files where you have them, along with brand guidance and any copy or imagery that should be included.',
    category: 'graphic-design',
    keywords: 'share upload send logo content documents images assets files',
    popular: true,
  },
  {
    question: 'What happens after my website goes live?',
    answer:
      'We complete the launch checks and confirm the handover with you. Any ongoing website updates, SEO or marketing support can be discussed with the team and agreed around your needs.',
    category: 'web-development',
    keywords: 'after launch handover support updates maintenance hosting',
    popular: true,
  },
  {
    question: 'How do I read my monthly SEO report?',
    answer:
      'Your report gives you a view of search activity, progress against agreed goals and the work completed or planned. If a metric or recommendation is unclear, send it to your project contact and we will explain what it means for your business.',
    category: 'seo-marketing',
    keywords: 'SEO search monthly report rankings traffic campaign marketing',
    popular: true,
  },
  {
    question: 'How do I report a problem on my website?',
    answer:
      'Email our team with the page address, a short description of what happened and a screenshot if you can. Include the device or browser you were using and the steps that led to the issue. We aim to reply within one working day.',
    category: 'account-support',
    keywords: 'problem issue website error bug broken help support report',
    popular: true,
  },
  {
    question: 'How do invoices and payment schedules work?',
    answer:
      'Your proposal sets out the project scope, milestones and pricing. Invoice timing and payment dates are confirmed with the agreed proposal, so please contact us if you would like us to clarify any part of it.',
    category: 'billing-payments',
    keywords: 'invoice billing payment schedule due date milestone',
  },
  {
    question: 'Which payment methods do you accept?',
    answer:
      'The available payment methods are confirmed with your proposal or invoice. If you need those details before starting, contact our team and we will help.',
    category: 'billing-payments',
    keywords: 'payment methods accepted pay card bank transfer',
  },
];

export const HOW_WE_WORK = [
  {
    number: '01',
    title: 'Tell us your goal',
    text: 'Share your idea, budget and timeline through our contact form.',
  },
  {
    number: '02',
    title: 'Get a tailored plan',
    text: 'We send a clear proposal with scope, milestones and pricing.',
  },
  {
    number: '03',
    title: 'We build, you review',
    text: 'You see progress at each milestone and share your feedback.',
  },
  {
    number: '04',
    title: 'Launch and grow',
    text: 'We go live together, then support you with updates and marketing.',
  },
];
