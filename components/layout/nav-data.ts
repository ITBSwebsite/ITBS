export interface NavLinkItem {
  title: string;
  href: string;
  subtitle?: string;
}

export interface NavColumn {
  heading: string;
  items: NavLinkItem[];
  hasDivider?: boolean;
}

export interface MegaMenuConfig {
  id: string;
  label: string;
  columns?: NavColumn[];
  featuredCard?: {
    text: string;
  };
  customLayout?: 'seo' | 'two-column' | 'single-column' | 'solutions';
}

export const HEADER_NAV_ITEMS: MegaMenuConfig[] = [
  {
    id: 'seo-ai-search',
    label: 'SEO & AI Search',
    customLayout: 'seo',
    columns: [
      {
        heading: 'SEO Services',
        items: [
          { title: 'SEO', href: '/services/seo' },
          { title: 'Ecommerce SEO', href: '/services/ecommerce-seo' },
          { title: 'SEO Audits', href: '/services/seo-audits' },
          { title: 'SEO Migration Services', href: '/services/seo-migration-services' },
          { title: 'Content Marketing', href: '/services/content-marketing' },
        ],
      },
      {
        heading: 'AI Search',
        hasDivider: true,
        items: [
          {
            title: 'Answer Engine Optimisation (AEO)',
            href: '/services/aeo',
            subtitle: 'Content structured for answer engines',
          },
          {
            title: 'Generative Engine Optimisation (GEO)',
            href: '/services/generative-engine-optimisation',
            subtitle: 'Visibility in generative AI search',
          },
        ],
      },
    ],
  },
  {
    id: 'web-development',
    label: 'Web Development',
    customLayout: 'two-column',
    columns: [
      {
        heading: 'Development Services',
        items: [
          { title: 'Custom Web Development', href: '/services/custom-web-development' },
          { title: 'Ecommerce Development', href: '/services/ecommerce-development' },
        ],
      },
      {
        heading: 'Platforms',
        items: [
          { title: 'WordPress Development', href: '/services/wordpress-development' },
          { title: 'Shopify Development', href: '/services/shopify-development' },
        ],
      },
    ],
  },
  {
    id: 'design-creative',
    label: 'Design & Creative',
    customLayout: 'single-column',
    columns: [
      {
        heading: 'Design',
        items: [
          { title: 'Graphic Design', href: '/services/graphic-design' },
          { title: 'UI/UX Design', href: '/services/ui-ux-design' },
          { title: 'Figma Design', href: '/services/figma-design' },
        ],
      },
    ],
  },
  {
    id: 'paid-advertising',
    label: 'Paid Advertising',
    customLayout: 'single-column',
    columns: [
      {
        heading: 'Advertising',
        items: [
          { title: 'PPC', href: '/services/ppc' },
          { title: 'Paid Social Advertising', href: '/services/paid-social-advertising' },
        ],
      },
    ],
  },
  {
    id: 'solutions',
    label: 'Solutions',
    customLayout: 'solutions',
    columns: [
      {
        heading: 'Solutions',
        items: [
          { title: 'CRM & Lead Management', href: '/services/crm-lead-management' },
          { title: 'AI Automation', href: '/services/ai-automation' },
        ],
      },
    ],
    featuredCard: {
      text: 'Digital solutions built around your business goals.',
    },
  },
];
