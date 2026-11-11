import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Oluwatosin Oluwakoyejo | Founder & CEO, Chronicles Software · Convener, The CONFAB',
    template: '%s | Oluwatosin Oluwakoyejo',
  },
  description:
    'Official website of Oluwatosin Oluwakoyejo: African tech entrepreneur, software architect, investor, and youth champion empowering Africa’s youth through systematic learning and enterprise.',
  keywords: [
    'Oluwatosin Oluwakoyejo',
    'Chronicles Software',
    'SuccessBOX',
    'SuccessTAB',
    'The CONFAB',
    'EdTech Africa',
    'Nigerian Economic Summit Group',
    'Stanford SEED',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-sky-400 selection:text-slate-950">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
