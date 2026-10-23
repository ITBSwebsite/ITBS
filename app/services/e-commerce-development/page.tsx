import type { Metadata } from 'next';
import { EcommerceDevView } from '@/components/services/ecommerce-dev-view';

export const metadata: Metadata = {
  alternates: { canonical: '/services/ecommerce-development' },
  title: 'E-commerce Store Development Services Agency UK | ITBS',
  description:
    'Leading UK eCommerce development agency delivering high-converting online stores across Shopify, WooCommerce, Magento, and custom headless platforms.',
};

export default function EcommerceDevHyphenPage() {
  return <EcommerceDevView />;
}
