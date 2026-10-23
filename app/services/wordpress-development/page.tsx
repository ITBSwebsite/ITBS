import type { Metadata } from 'next';
import { WordPressDevView } from '@/components/services/wordpress-dev-view';

export const metadata: Metadata = {
  alternates: { canonical: '/services/wordpress-development' },
  title: 'WordPress Website Development Services Company UK | ITBS',
  description:
    'Custom WordPress website development company in the UK. Bespoke Gutenberg themes, WooCommerce development, API integrations, and 95+ PageSpeed scores.',
};

export default function WordPressDevelopmentPage() {
  return <WordPressDevView />;
}
