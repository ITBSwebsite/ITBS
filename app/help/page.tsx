import type { Metadata } from 'next';
import './help.css';
import { HelpCenterView } from '@/components/help-center/help-center-view';

const title = 'Help Center | ITBS';
const description =
  'Find clear answers about ITBS services, project timelines, revisions, billing, SEO reports and support. Contact our team if you need more help.';

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title,
  description,
  alternates: { canonical: '/help' },
  openGraph: {
    title,
    description,
    url: 'https://infotechbusinesssolutions.com/help',
    siteName: 'InfoTech Business Solutions',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description },
};

export default function HelpCenterPage() {
  return <HelpCenterView />;
}
