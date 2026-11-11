'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { LIBRARY } from '@/lib/data';

export default function Library() {
  const rail = useRef(null);
  const scroll = (dir) => rail.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="mb-12 flex items-end justify-between gap-6 border-b border-white/10 pb-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-400 sm:text-xs">Thought Leadership</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">The Library</h2>
        </div>
        <div className="flex gap-2">
          <button onClick={() => scroll(-1)} aria-label="Previous" className="rounded-full border border-white/20 p-3 text-white transition hover:border-cyan-400 hover:text-cyan-400">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => scroll(1)} aria-label="Next" className="rounded-full border border-white/20 p-3 text-white transition hover:border-cyan-400 hover:text-cyan-400">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={rail}
        className="-mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {LIBRARY.map(({ title, kind, tone, accent }) => (
          <article key={title} className="group w-56 shrink-0 snap-start sm:w-64">
            <div className={`relative flex aspect-[3/4] flex-col justify-between overflow-hidden border border-white/10 bg-gradient-to-br ${tone} p-5 shadow-2xl transition duration-500 group-hover:-translate-y-2 group-hover:border-cyan-400`}>
              <div className="absolute inset-y-0 left-0 w-3 bg-black/40" aria-hidden />
              <div className="pl-3">
                <BookOpen className={accent} size={22} strokeWidth={1.5} />
                <p className={`mt-4 text-[10px] font-semibold uppercase tracking-[0.25em] ${accent}`}>{kind}</p>
              </div>
              <h3 className="pl-3 font-serif text-xl leading-snug text-white">{title}</h3>
              <p className="pl-3 text-[10px] uppercase tracking-[0.2em] text-slate-400">Oluwatosin Oluwakoyejo</p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em]">
              <Link href="/thought-leadership" className="inline-flex items-center gap-1.5 text-white transition hover:text-cyan-400">
                Visit Library <ArrowUpRight size={14} />
              </Link>
              <Link href="/contact" aria-label={`Request ${title}`} className="text-slate-500 transition hover:text-amber-400">
                <Download size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
