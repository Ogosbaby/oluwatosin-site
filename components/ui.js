'use client';

import { useEffect, useRef, useState } from 'react';
import * as Icons from 'lucide-react';

export function Icon({ name, ...props }) {
  const C = Icons[name] || Icons.Circle;
  return <C {...props} />;
}

/* Image with graceful on-brand fallback when the URL is missing/broken */
export function SmartImage({ src, alt, className = '', fallbackLabel = 'OO' }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [src]);

  if (failed || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#0A1128] via-[#0D1B2A] to-[#1E293B] text-white ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="select-none font-serif text-3xl font-light tracking-widest text-sky-400 sm:text-5xl">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}

/* Editorial Section Heading with Light Blue accent */
export function SectionHeading({ kicker, title, subtitle, dark = false, align = 'left', children }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-12 ${alignClass} max-w-4xl`}>
      {kicker && (
        <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-sky-500">
          <span className="h-[2px] w-6 bg-sky-500" />
          {kicker}
        </p>
      )}
      <h2
        className={`mt-3 font-serif text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? 'text-white' : 'text-slate-950'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}

/* Inner Page Hero matching Dark Blue theme */
export function PageHero({ kicker, title, intro, dark = true }) {
  return (
    <section
      className={`relative border-b ${
        dark ? 'border-white/10 bg-[#0A1128] text-white' : 'border-slate-200 bg-slate-50 text-slate-900'
      } py-16 sm:py-24`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {kicker && (
          <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-sky-400">
            <span className="h-[2px] w-8 bg-sky-400" />
            {kicker}
          </p>
        )}
        <h1 className="max-w-4xl font-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

/* Video Player Modal for embedded YouTube playback */
export function VideoModal({ videoId, isOpen, onClose }) {
  if (!isOpen || !videoId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl bg-[#0A1128] border border-sky-400/30 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 flex items-center gap-1 text-xs uppercase tracking-widest text-white hover:text-sky-400"
        >
          Close <Icons.X size={18} />
        </button>
        <div className="relative aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
