import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHero, SectionHeading, SmartImage } from '@/components/ui';
import { ConnectSocialsSection } from '@/components/Sections';
import { ASSETS, LIFESTYLE_PILLARS, SITE } from '@/lib/data';

export const metadata = {
  title: 'Lifestyle & Mentorship | Oluwatosin Oluwakoyejo',
  description:
    'Insights into the personal routine, intellectual disciplines, mentorship, and reflections of Oluwatosin Oluwakoyejo.',
};

export default function Lifestyle() {
  return (
    <>
      <PageHero
        kicker="Lifestyle &amp; Mentorship"
        title="Discipline, intellectual curiosity and living with generational intent."
        intro="A closer look at how Oluwatosin balances executive leadership at Chronicles Software, convening The CONFAB, and mentoring the next generation of African builders."
      />

      {/* Routine & Pillars */}
      <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker="Executive Habits"
            title="The Daily Discipline"
            subtitle="Great institutions are built through quiet daily habits of reading, reflection, and rigorous execution."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {LIFESTYLE_PILLARS.map((item, i) => (
              <div
                key={item.title}
                className="flex flex-col justify-between border border-slate-200 bg-white p-6 shadow-sm transition hover:border-sky-500 hover:shadow-md"
              >
                <div>
                  <span className="font-serif text-2xl font-light text-sky-600">0{i + 1}</span>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-sky-600">
                    {item.category}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-normal text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes & Mentorship */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden border border-slate-200 bg-[#0A1128] shadow-lg">
                <SmartImage
                  src={ASSETS.bossAbout}
                  alt={SITE.name}
                  fallbackLabel="OO"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky-600">
                Mentorship in Practice
              </span>
              <h2 className="font-serif text-3xl font-normal text-slate-950 sm:text-4xl">
                Holding the Door Open for the Next Cohort
              </h2>
              <p>
                “When you have experienced the friction of starting with limited capital in a university dormitory, you understand that opportunity is the greatest equalizer in Africa.”
              </p>
              <p>
                Through weekly mentorship hours and private advising, Oluwatosin actively reviews product architectures, business models, and governance strategies with emerging Nigerian software engineers.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-none bg-sky-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-400"
                >
                  Connect with Executive Office <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConnectSocialsSection />
    </>
  );
}
