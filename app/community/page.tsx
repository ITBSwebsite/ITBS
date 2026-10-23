import type { Metadata } from 'next';
import { CommunityView } from '@/components/community/community-view';
import './community.css';

const title = 'Parent Community | ITBS';
const description = 'Join the ITBS Parent Community for practical digital guides, platform updates and shared experience from business owners and our team.';

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechbusinesssolutions.com'),
  title,
  description,
  alternates: { canonical: '/community' },
  openGraph: {
    title,
    description,
    url: 'https://infotechbusinesssolutions.com/community',
    siteName: 'InfoTech Business Solutions',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description },
};

export default function CommunityPage() {
  return <CommunityView />;
}

