import type { Metadata } from 'next';
import { WebDevelopmentMainView } from '@/components/services/web-development-main-view';

export const metadata: Metadata = {
  alternates: { canonical: '/services/web-development' },
  title: 'Web Design & Development Services Company UK | ITBS',
  description:
    'We build custom websites with scalable front-end and back-end solutions customized for your needs, using modern languages and advanced tech stacks.',
};

export default function ServicesWebDevelopmentPage() {
  return <WebDevelopmentMainView />;
}
