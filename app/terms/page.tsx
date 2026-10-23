import type { Metadata } from 'next';
import { TermsView } from '@/components/terms/terms-view';
import './terms.css';

const title = 'Terms of Service | ITBS';
const description =
  'Read the terms explaining website use, proposals, project scope, delivery, payments, intellectual property and responsibilities when working with ITBS.';

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title,
  description,
  alternates: { canonical: '/terms' },
  openGraph: {
    title,
    description,
    url: 'https://infotechbusinesssolutions.com/terms',
    siteName: 'InfoTech Business Solutions',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description },
};

export default function TermsPage() {
  return <TermsView />;
}
