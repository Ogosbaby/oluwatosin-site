'use client';

import { useState } from 'react';
import {
  HeroSection,
  ExecutiveBioSection,
  ChroniclesEcosystemSection,
  ConfabSection,
  AriseVideoSection,
  ConnectSocialsSection,
} from '@/components/Sections';
import { VideoModal } from '@/components/ui';

export default function Home() {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <>
      {/* 1. Hero: Full Width with Dark Blue Overlay, High Contrast Text, and Social Media Icons */}
      <HeroSection onWatchVideo={(id) => setActiveVideoId(id)} />

      {/* 2. Executive Biography (With New Authentic Photo from Web) */}
      <ExecutiveBioSection />

      {/* 3. Chronicles Software Ecosystem (Automatic 3s Slideshow + Attached Logos With No Text) */}
      <ChroniclesEcosystemSection />

      {/* 4. The CONFAB (Full-Width Greeting Reel + Automatic 3s UGC Slideshow) */}
      <ConfabSection />

      {/* 5. Arise News Video (With Overlay Text of His Quote) */}
      <AriseVideoSection />

      {/* 6. Connect With Me (Socials Hub) */}
      <ConnectSocialsSection />

      {/* Interactive Video Modal */}
      <VideoModal
        videoId={activeVideoId}
        isOpen={Boolean(activeVideoId)}
        onClose={() => setActiveVideoId(null)}
      />
    </>
  );
}
