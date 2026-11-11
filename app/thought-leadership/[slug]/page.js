import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { ConnectSocialsSection } from '@/components/Sections';
import { ARTICLES, formatDate } from '@/lib/data';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const a = ARTICLES.find((x) => x.slug === params.slug);
  return {
    title: a ? `${a.title} | Oluwatosin Oluwakoyejo` : 'Article | Oluwatosin Oluwakoyejo',
    description: a?.excerpt,
  };
}

export default function Article({ params }) {
  const a = ARTICLES.find((x) => x.slug === params.slug);
  if (!a) notFound();

  return (
    <>
      <article className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            href="/thought-leadership"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 transition hover:text-sky-600"
          >
            <ArrowLeft size={14} /> Back to Thought Leadership
          </Link>

          <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.25em] text-sky-600">
            {a.category} · {formatDate(a.date)} · {a.readTime}
          </p>

          <h1 className="mt-3 font-serif text-3xl font-normal leading-tight text-slate-950 sm:text-4xl">
            {a.title}
          </h1>

          <div className="mt-8 space-y-5 text-sm sm:text-base leading-relaxed text-slate-700">
            {a.body.map((p, i) => (
              <p key={i} className={i === 0 ? 'text-base sm:text-lg font-normal text-slate-900 leading-relaxed' : ''}>
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 border-t border-slate-200 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-serif text-lg font-normal text-slate-950">— Oluwatosin Oluwakoyejo</p>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                Founder &amp; CEO, Chronicles Software · Convener, The CONFAB
              </p>
            </div>
            <Link
              href="/thought-leadership"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-600 hover:text-sky-800"
            >
              More Articles <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </article>

      <ConnectSocialsSection />
    </>
  );
}
