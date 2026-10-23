import type { Metadata } from 'next';
import { CustomWebView } from '@/components/services/custom-web-view';

export const metadata: Metadata = {
  alternates: { canonical: '/services/custom-web-development' },
  title: 'Custom Web Development Services Firm UK | ITBS',
  description:
    'Bespoke web development agency specializing in React.js, Next.js, Node.js, and Laravel. Scalable frontend and backend engineering for UK businesses.',
};

export default function CustomWebDevelopmentPage() {
  return <CustomWebView />;
}
