import type { Metadata } from 'next';
import { ContactQuoteView } from '@/components/contact/contact-quote-view';

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'Contact ITBS | Request a Quote',
  description:
    'Tell ITBS about your business goals and the digital services you need. Our UK team will review your enquiry and get back to you.',
};

export default function ContactPage() {
  return <ContactQuoteView />;
}
