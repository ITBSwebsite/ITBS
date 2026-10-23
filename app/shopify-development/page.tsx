import type { Metadata } from 'next';
import { ShopifyDevView } from '@/components/services/shopify-dev-view';

export const metadata: Metadata = {
  alternates: { canonical: '/services/shopify-development' },
  title: 'Shopify Store Development Services Company UK | ITBS',
  description:
    'Official Shopify & Shopify Plus specialists delivering bespoke Liquid themes, private app development, checkout extensibility, and speed optimization.',
};

export default function RootShopifyDevelopmentPage() {
  return <ShopifyDevView />;
}
