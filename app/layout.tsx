import type { Metadata } from 'next';
import Script from 'next/script';
import { Cardo } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SiteBreadcrumbs } from '@/components/layout/site-breadcrumbs';

const cardo = Cardo({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title: 'ITBS | InfoTech Business Solution for Online Growth in the UK',
  description:
    'InfoTech Business Solution excels in providing businesses with innovation along with functionality. We help you enhance your business’s online presence, converting audiences to customers.',
  openGraph: {
    title: 'ITBS | InfoTech Business Solution for Online Growth in the UK',
    description:
      'InfoTech Business Solution excels in providing businesses with innovation along with functionality. We help you enhance your business’s online presence, converting audiences to customers.',
    siteName: 'InfoTech Business Solutions',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'ITBS | InfoTech Business Solution for Online Growth in the UK',
    description:
      'InfoTech Business Solution excels in providing businesses with innovation along with functionality. We help you enhance your business’s online presence, converting audiences to customers.',
  },
  robots: { index: true, follow: true },
};

const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://infotechbusinesssolutions.com/#organization',
      name: 'InfoTech Business Solutions',
      url: 'https://infotechbusinesssolutions.com/',
      logo: 'https://infotechbusinesssolutions.com/images/itbs-logo.webp',
      description:
        'A UK digital agency providing web design and development, SEO, paid advertising and digital marketing.',
      sameAs: [
        'https://www.linkedin.com/company/infotech-business-solution/posts/',
        'https://www.facebook.com/InfoTechBusinessSolutionsOfficial/',
        'https://www.instagram.com/infotech_business_solutions/',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+447496296333',
        contactType: 'customer support',
        areaServed: 'GB',
        availableLanguage: 'English',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://infotechbusinesssolutions.com/#website',
      name: 'InfoTech Business Solutions',
      url: 'https://infotechbusinesssolutions.com/',
      inLanguage: 'en-GB',
      publisher: { '@id': 'https://infotechbusinesssolutions.com/#organization' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={cardo.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData).replace(/</g, '\\u003c') }}
        />
      </head>
      <body
        className="antialiased bg-[#F5F5F5] text-[#202938] min-h-screen flex flex-col font-serif"
        suppressHydrationWarning
      >
        <Header />
        <div className="flex-1" suppressHydrationWarning>
          <SiteBreadcrumbs />
          {children}
        </div>
        <Footer />
        <Script
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_1e222265e1594025b0858ca1cdfdef96"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
