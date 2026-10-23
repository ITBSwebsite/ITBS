import type { Metadata } from 'next';
import { CookiePolicyView } from '@/components/cookies/cookie-policy-view';
import '../privacy-policy/privacy-policy.css';
import './cookies.css';

const title = 'Cookie Policy | ITBS';
const description =
  'Learn how the ITBS website uses cookies and similar technologies, what tracking is currently known, and how to manage cookies in your browser.';

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title,
  description,
  alternates: { canonical: '/cookies' },
  openGraph: {
    title,
    description,
    url: 'https://infotechbusinesssolutions.com/cookies',
    siteName: 'InfoTech Business Solutions',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description },
};

export default function CookiePolicyPage() {
  return <CookiePolicyView />;
}
