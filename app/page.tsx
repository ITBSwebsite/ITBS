import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us';
import { IndustriesSection } from '@/components/sections/industries-section';
import { ExpertQuotesSection } from '@/components/sections/expert-quotes-section';
import { BrandsSection } from '@/components/sections/brands-section';

export const metadata: Metadata = {
  title: 'ITBS | InfoTech Business Solution for Online Growth in the UK',
  description:
    'InfoTech Business Solution excels in providing businesses with innovation along with functionality. We help you enhance your business’s online presence, converting audiences to customers.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'ITBS | InfoTech Business Solution for Online Growth in the UK',
    description:
      'InfoTech Business Solution excels in providing businesses with innovation along with functionality. We help you enhance your business’s online presence, converting audiences to customers.',
    url: 'https://infotechbusinesssolutions.com/',
    siteName: 'InfoTech Business Solutions',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'ITBS | InfoTech Business Solution for Online Growth in the UK',
    description:
      'InfoTech Business Solution excels in providing businesses with innovation along with functionality. We help you enhance your business’s online presence, converting audiences to customers.',
  },
};

export default function Home() {
  return (
    <main id="top" className="w-full">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <BrandsSection />
      <IndustriesSection />
      <ExpertQuotesSection />
    </main>
  );
}
