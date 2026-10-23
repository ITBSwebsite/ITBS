import { Metadata } from 'next';
import { GraphicDesignView } from '@/components/services/graphic-design-view';

export const metadata: Metadata = {
  alternates: { canonical: '/services/graphic-design' },
  title: 'Graphic Design Agency UK | Branding, Figma & Print | ITBS',
  description:
    'ITBS provides logo, brand identity, digital and print design for UK businesses, with final exports and agreed source files supplied to match your project scope.',
};

export default function GraphicDesignRootPage() {
  return <GraphicDesignView />;
}
