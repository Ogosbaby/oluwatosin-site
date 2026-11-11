'use client';

import { PageHero, SectionHeading } from '@/components/ui';
import { AriseVideoSection, ConnectSocialsSection } from '@/components/Sections';
import { ExternalLink } from 'lucide-react';

export default function Speeches() {
  return (
    <>
      <PageHero
        kicker="Speeches &amp; Broadcasts"
        title="Keynotes, television broadcasts and executive masterclasses."
        intro="Watch Oluwatosin on global media and leadership stages discussing artificial intelligence, prompt engineering, EdTech scale, and youth empowerment."
      />

      {/* Arise News Broadcast with Quote */}
      <AriseVideoSection />

      {/* Ausso Leadership Academy Masterclass */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker="Executive Masterclass"
            title="Ausso Leadership Academy"
            subtitle="Oluwatosin Oluwakoyejo on corporate governance, scaling tech ventures, and leadership longevity."
          />

          <div className="grid gap-8 lg:grid-cols-12 items-center border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
            <div className="lg:col-span-7">
              <div className="relative aspect-video w-full overflow-hidden bg-black shadow-md">
                <iframe
                  src="https://www.youtube.com/embed/bYtVhhH3C0U"
                  title="Ausso Leadership Academy Masterclass"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            </div>

            <div className="space-y-4 lg:col-span-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-600">
                ALA Masterclass Takeaways
              </span>
              <h3 className="font-serif text-2xl font-normal text-slate-950">
                Scaling Businesses &amp; Institutional Governance
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                In this masterclass session, Oluwatosin reflects on institutional excellence, creating systems that outlive founders, and mentoring early-stage African tech builders.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.youtube.com/watch?v=bYtVhhH3C0U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-none bg-sky-500 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-sky-400"
                >
                  Watch on YouTube <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConnectSocialsSection />
    </>
  );
}
