import { Metadata } from 'next';
import { PPCMarketingView } from '@/components/services/ppc-marketing-view';

export const metadata: Metadata = {
  alternates: { canonical: '/services/ppc' },
  title: 'PPC Management UK | Google Ads & Paid Search | ITBS',
  description:
    'Plan and manage PPC campaigns across Google Ads, Meta, Bing and shopping platforms. We set clear budgets, track relevant actions and report on what the data shows.',
};

export default function PPCPage() {
  return <PPCMarketingView />;
}
