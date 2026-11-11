import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHero, SectionHeading } from '@/components/ui';
import { ConnectSocialsSection } from '@/components/Sections';
import { ARTICLES, formatDate } from '@/lib/data';

export const metadata = {
  title: 'Thought Leadership | Oluwatosin Oluwakoyejo',
  description:
    'Essays and commentaries by Oluwatosin Oluwakoyejo on EdTech innovation, AI in African classrooms, and youth enterprise.',
};

export default function ThoughtLeadership() {
  return (
    <>
      <PageHero
        kicker="Thought Leadership"
        title="Ideas on systematic learning, AI regulation and human capital."
        intro="Essays, opinion editorials, and strategic reflections on unleashing Africa’s youth through technology and enterprise."
      />

      <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker="Published Commentary"
            title="Articles &amp; Essays"
            subtitle="Thought leadership pieces addressing policy, classroom innovation, and enterprise building across Africa."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a) => (
              <Link
                key={a.slug}
                href={`/thought-leadership/${a.slug}`}
                className="group flex flex-col justify-between border border-slate-200 bg-white p-7 transition hover:border-sky-500 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.22em] text-sky-600">
                    <span>{a.category}</span>
                    <span className="text-slate-400 font-normal">{a.readTime}</span>
                  </div>
                  <h2 className="mt-3 font-serif text-xl font-normal leading-snug text-slate-950 transition group-hover:text-sky-600">
                    {a.title}
                  </h2>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {a.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs uppercase tracking-[0.16em] text-slate-500">
                  <span>{formatDate(a.date)}</span>
                  <span className="inline-flex items-center gap-1 font-bold text-slate-900 transition group-hover:text-sky-600">
                    Read <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConnectSocialsSection />
    </>
  );
}
