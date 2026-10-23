import type { Metadata } from 'next';
import { PrivacyPolicyView } from '@/components/privacy-policy/privacy-policy-view';
import './privacy-policy.css';

const title = 'Privacy Policy | ITBS';
const description =
  'Find out how InfoTech Business Solution uses personal information when you browse our website, contact us or work with our team.';

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title,
  description,
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title,
    description,
    url: 'https://infotechbusinesssolutions.com/privacy-policy',
    siteName: 'InfoTech Business Solutions',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView />;
}
