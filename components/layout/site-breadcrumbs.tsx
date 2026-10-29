'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

const home: BreadcrumbItem = { label: 'Home', href: '/' };
const solutions: BreadcrumbItem = { label: 'Solutions', href: '/#solutions' };
const webDevelopment: BreadcrumbItem = {
  label: 'Web Development',
  href: '/services/web-development',
};
const designCreative: BreadcrumbItem = {
  label: 'Design & Creative',
  href: '/#solutions',
};
const seoAiSearch: BreadcrumbItem = {
  label: 'SEO & AI Search',
  href: '/services/seo',
};

const routeBreadcrumbs: Record<string, BreadcrumbItem[]> = {
  '/about': [home, { label: 'About Us' }],
  '/blogs': [home, { label: 'Blogs' }],
  '/help': [home, { label: 'Help Center' }],
  '/app-design-services': [home, designCreative, { label: 'App Design & Development' }],
  '/custom-web-development': [home, webDevelopment, { label: 'Custom Web Development' }],
  '/e-commerce-development': [home, webDevelopment, { label: 'Ecommerce Development' }],
  '/figma-design': [home, designCreative, { label: 'Figma Design' }],
  '/graphic-design': [home, designCreative, { label: 'Graphic Design' }],
  '/ppc': [home, solutions, { label: 'Paid Advertising' }],
  '/ppc-marketing': [home, solutions, { label: 'PPC Marketing' }],
  '/services/app-design-services': [home, designCreative, { label: 'App Design & Development' }],
  '/services/custom-web-development': [home, webDevelopment, { label: 'Custom Web Development' }],
  '/services/e-commerce-development': [home, webDevelopment, { label: 'Ecommerce Development' }],
  '/services/ecommerce-development': [home, webDevelopment, { label: 'Ecommerce Development' }],
  '/services/figma-design': [home, designCreative, { label: 'Figma Design' }],
  '/services/graphic-design': [home, designCreative, { label: 'Graphic Design' }],
  '/services/ppc': [home, solutions, { label: 'Paid Advertising' }],
  '/services/ppc-marketing': [home, solutions, { label: 'PPC Marketing' }],
  '/services/seo-audits': [home, seoAiSearch, { label: 'SEO Audits' }],
  '/services/shopify-development': [home, webDevelopment, { label: 'Shopify Development' }],
  '/services/ui-ux-design': [home, designCreative, { label: 'UI/UX Design' }],
  '/services/web-development': [home, solutions, { label: 'Web Development' }],
  '/services/wordpress-development': [home, webDevelopment, { label: 'WordPress Development' }],
  '/shopify-development': [home, webDevelopment, { label: 'Shopify Development' }],
  '/ui-ux-design': [home, designCreative, { label: 'UI/UX Design' }],
  '/web-development-design': [home, solutions, { label: 'Web Development' }],
  '/wordpress-development': [home, webDevelopment, { label: 'WordPress Development' }],
};

export function SiteBreadcrumbs() {
  const pathname = usePathname();
  const normalizedPath = pathname?.replace(/\/$/, '') || '/';
  const items = routeBreadcrumbs[normalizedPath];

  if (!items) return null;

  return (
    <div className="site-breadcrumbs-band" style={{ backgroundColor: '#fff', border: 0 }}>
      <nav
        className="site-breadcrumbs"
        aria-label="Breadcrumb"
        style={{
          width: 'min(1680px, calc(100% - clamp(36px, 8vw, 72px)))',
          margin: '0 auto',
          color: '#73789b',
        }}
      >
        <ol
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            columnGap: 'clamp(7px, .65vw, 10px)',
            minHeight: 56,
            margin: 0,
            padding: 'clamp(22px, 3.2vw, 40px) 0 0',
            listStyle: 'none',
          }}
        >
          {items.map((item, index) => (
            <li
              key={`${item.label}-${index}`}
              style={{
                display: 'flex',
                flex: '0 0 auto',
                alignItems: 'center',
                gap: 'clamp(7px, .65vw, 10px)',
                whiteSpace: 'nowrap',
                fontSize: 'clamp(12px, .8vw, 13px)',
                letterSpacing: '.015em',
              }}
            >
              {index > 0 && <span className="site-breadcrumbs-separator" aria-hidden="true">/</span>}
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
