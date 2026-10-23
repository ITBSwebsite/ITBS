import { Metadata } from 'next';
import { UIUXDesignView } from '@/components/services/ui-ux-design-view';

export const metadata: Metadata = {
  alternates: { canonical: '/services/app-design-services' },
  title: 'Mobile App & UI/UX Design UK | iOS & Android | ITBS',
  description:
    'Mobile app and web UI/UX design for UK businesses. Intuitive iOS and Android apps, UX strategy, interactive prototypes, and developer-ready Figma files.',
};

export default function AppDesignServicesRootPage() {
  return <UIUXDesignView />;
}
