import type { Metadata } from 'next';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage' });
const body = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument' });

export const metadata: Metadata = {
  title: 'InfoTech Business Solution | Web Design, SEO and Digital Marketing',
  description: 'Web development, SEO and digital marketing for UK businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${display.variable} ${body.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
