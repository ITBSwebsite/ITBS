import { Metadata } from 'next';
import { FigmaDesignView } from '@/components/services/figma-design-view';

export const metadata: Metadata = {
  alternates: { canonical: '/services/figma-design' },
  title: 'Figma Website Design & Prototyping Agency UK | ITBS',
  description:
    'Figma UI/UX design and interactive prototyping services in the UK. Scalable component libraries, auto-layout frames, and developer-ready Figma architectures.',
};

export default function FigmaDesignRootPage() {
  return <FigmaDesignView />;
}
