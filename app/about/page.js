import Link from 'next/link';
import { ArrowUpRight, GraduationCap, Building2, Calendar, Award } from 'lucide-react';
import { PageHero, SmartImage, SectionHeading } from '@/components/ui';
import { ConnectSocialsSection } from '@/components/Sections';
import { ASSETS, SITE, TIMELINE } from '@/lib/data';

export const metadata = {
  title: 'About Oluwatosin Oluwakoyejo',
  description:
    'Biography, executive education, and leadership milestones of Oluwatosin Oluwakoyejo, Founder & CEO of Chronicles Software and Convener of The CONFAB.',
};

export default function About() {
  return (
    <>
      <PageHero
        kicker="Biography &amp; Leadership"
        title="Developing the innate genius of African youth through systematic learning."
        intro="Oluwatosin Oluwakoyejo is an acclaimed African EdTech pioneer, software architect, investor, and youth champion. Founder &amp; CEO of Chronicles Software Development Company and Convener of The CONFAB."
      />

      {/* Biography In Depth with New Photo */}
      <section id="biography" className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden border border-slate-200 bg-[#0A1128] shadow-xl">
                <SmartImage
                  src={ASSETS.bossAbout}
                  alt={SITE.name}
                  fallbackLabel="OO"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/70 to-transparent p-6 text-white">
                  <p className="font-serif text-2xl font-light">{SITE.name}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-sky-400">
                    {SITE.role}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base lg:col-span-7">
              <p className="font-serif text-2xl leading-snug text-slate-950 sm:text-3xl">
                Founded on September 27, 2007 during his final undergraduate year in Computer Science at the University of Ado-Ekiti (UNAD).
              </p>
              <p>
                Under his leadership, Chronicles Software has grown to serve more than 220,000 active users globally, recognized as one of Nigeria’s top 50 emerging enterprises by Diamond Bank’s BET3 program.
              </p>
              <p>
                He created the <strong>SuccessBOX AI Engine</strong> (over 30,000 past questions for UTME, WAEC, BECE) and <strong>SuccessTAB</strong> (flagship secure learning tablet deployed across public school systems).
              </p>
              <p>
                Convening <strong>The CONFAB</strong> annually since 2011, Oluwatosin mentors thousands of ambitious African youth while serving on the Human Capital Development Commission of the Nigerian Economic Summit Group (NESG).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Education & Affiliations */}
      <section id="education" className="border-b border-slate-200 bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker="Executive Education"
            title="Institutional Rigor &amp; Continuous Learning"
            subtitle="Believing that leaders must be perpetual students, Oluwatosin has systematically invested in premier executive training programs."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="border border-slate-200 bg-white p-6 shadow-sm">
              <GraduationCap size={28} className="text-sky-500" />
              <h3 className="mt-4 font-serif text-lg font-normal text-slate-950">Stanford SEED</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">Stanford GSB · 2016</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Completed the Stanford Graduate School of Business Seed Transformation Program, focusing on regional scale.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-6 shadow-sm">
              <Building2 size={28} className="text-sky-500" />
              <h3 className="mt-4 font-serif text-lg font-normal text-slate-950">Ausso Leadership</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">ALA Masterclass · 2019</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Executive masterclass in corporate governance and institutional longevity under Austin Okere.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-6 shadow-sm">
              <Award size={28} className="text-sky-500" />
              <h3 className="mt-4 font-serif text-lg font-normal text-slate-950">LBS EDC &amp; FATE</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">Executive Fellow</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Enterprise Development Centre of Lagos Business School and FATE Foundation fellow.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-6 shadow-sm">
              <Calendar size={28} className="text-sky-500" />
              <h3 className="mt-4 font-serif text-lg font-normal text-slate-950">UNAD Computer Science</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">B.Sc. Foundations</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Computer Science degree from University of Ado-Ekiti (UNAD), where the journey began convening student developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section id="timeline" className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker="Milestones"
            title="The Leadership Journey"
            subtitle="From university student developer to pan-African EdTech pioneer and national policy commissioner."
          />

          <ol className="relative space-y-10 border-l border-slate-200 pl-8">
            {TIMELINE.map((t) => (
              <li key={t.title} className="relative">
                <span className="absolute -left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-4 border-white bg-sky-500 shadow-sm" />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-600">
                  {t.year} · {t.kicker}
                </span>
                <h3 className="mt-1 font-serif text-xl font-normal text-slate-950">
                  {t.title}
                </h3>
                <p className="mt-1 max-w-3xl text-xs sm:text-sm leading-relaxed text-slate-600">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ConnectSocialsSection />
    </>
  );
}
