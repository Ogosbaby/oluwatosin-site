import Link from 'next/link';
import { ArrowUpRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PageHero, SectionHeading } from '@/components/ui';
import { ChroniclesEcosystemSection, ConnectSocialsSection } from '@/components/Sections';
import { CHRONICLES_ECOSYSTEM } from '@/lib/data';

export const metadata = {
  title: 'Chronicles Software Ecosystem | SuccessBOX & SuccessTAB',
  description:
    'Explore the connected EdTech and enterprise portfolio founded by Oluwatosin Oluwakoyejo: Chronicles Software, SuccessBOX AI Engine, and SuccessTAB.',
};

export default function Business() {
  return (
    <>
      <PageHero
        kicker="Business &amp; Enterprises"
        title="Software frameworks and devices that make learning systematic."
        intro="Chronicles Software, the SuccessBOX AI Engine, and SuccessTAB form a unified pan-African EdTech ecosystem serving more than 220,000 active learners and public school systems."
      />

      {/* Main Interactive Ecosystem Section */}
      <ChroniclesEcosystemSection />

      <ConnectSocialsSection />
    </>
  );
}
