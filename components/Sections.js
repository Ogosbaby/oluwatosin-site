'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Play,
  ExternalLink,
  Quote,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Layers,
  Tablet,
  Cpu,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
} from 'lucide-react';
import { SectionHeading, SmartImage, VideoModal } from '@/components/ui';
import {
  ASSETS,
  CHRONICLES_ECOSYSTEM,
  CONFAB_DATA,
  ARISE_FEATURE,
  SITE,
  STATS,
  SOCIALS,
} from '@/lib/data';

/* 1. HERO SECTION - Full Width with Vertically Centered Stats & Social Icons */
export function HeroSection({ onWatchVideo }) {
  return (
    <section className="relative min-h-[460px] sm:min-h-[820px] lg:min-h-[880px] flex flex-col justify-between overflow-hidden bg-[#0A1128] text-white">
      {/* Full Width Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.bossHeroFullwidth}
          alt="Oluwatosin Oluwakoyejo"
          className="h-full w-full object-cover object-[75%_center] lg:object-center"
        />
        {/* Dark Blue Overlay with Reduced Transparency for High Text Visibility */}
        <div className="absolute inset-0 bg-[#0A1128]/15 sm:bg-gradient-to-r sm:from-[#0A1128]/95 sm:via-[#0A1128]/80 sm:to-[#0A1128]/50" />
      </div>

      {/* Text & Socials on Top */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 pt-20 pb-8 sm:px-8 sm:pt-24 sm:pb-12 lg:pt-28 flex flex-col justify-between flex-1">
        <div className="max-w-xl lg:max-w-2xl my-auto">
          <p className="mb-4 inline-flex  gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-sky-400">
            <span className="h-[2px] w-8 bg-sky-400" />
            Founder &amp; CEO · Software Architect · Convener
          </p>

          <h1 className="font-serif text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
            Oluwatosin Oluwakoyejo
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-100 sm:text-lg drop-shadow-md">
            African tech entrepreneur, software architect, and youth development champion. Dedicated to unlocking the innate genius of Africa&apos;s youth through systematic learning, educational technology, and enterprise.
          </p>

          {/* Direct Social Media Icons */}
          <div className="mt-8 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/oluwatosin-oluwakoyejo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-sky-400/50 bg-[#0D1B2A]/90 text-sky-400 backdrop-blur transition hover:scale-110 hover:border-sky-300 hover:bg-sky-500 hover:text-slate-950 shadow-xl"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/confab_global/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-sky-400/50 bg-[#0D1B2A]/90 text-sky-400 backdrop-blur transition hover:scale-110 hover:border-sky-300 hover:bg-sky-500 hover:text-slate-950 shadow-xl"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-sky-400/50 bg-[#0D1B2A]/90 text-sky-400 backdrop-blur transition hover:scale-110 hover:border-sky-300 hover:bg-sky-500 hover:text-slate-950 shadow-xl"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://youtu.be/HtKqZbVGB88?si=wnwvZnFDfB4vzsOT"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Broadcast"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-sky-400/50 bg-[#0D1B2A]/90 text-sky-400 backdrop-blur transition hover:scale-110 hover:border-sky-300 hover:bg-sky-500 hover:text-slate-950 shadow-xl"
            >
              <Youtube size={20} />
            </a>
            <a
              href="#connect"
              aria-label="Direct Inquiry"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-sky-400/50 bg-[#0D1B2A]/90 text-sky-400 backdrop-blur transition hover:scale-110 hover:border-sky-300 hover:bg-sky-500 hover:text-slate-950 shadow-xl"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Stats Centered Vertically in Lower Section */}
        <div className="w-full border-t border-white/20 pt-8 pb-4 my-auto">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 text-center max-w-5xl mx-auto items-center">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center my-auto">
                <dt className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white drop-shadow-md">
                  {s.value}
                </dt>
                <dd className="mt-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* 2. ABOUT OLUWATOSIN OLUWAKOYEJO SECTION */
export function ExecutiveBioSection() {
  return (
    <section id="biography" className="border-b border-slate-200 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="aspect-square max-w-md mx-auto overflow-hidden border border-slate-200 bg-[#0A1128] shadow-lg">
              <SmartImage
                src={ASSETS.bossAbout}
                alt="Oluwatosin Oluwakoyejo"
                fallbackLabel="OO"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-3 text-center text-xs text-slate-500 italic">
              Oluwatosin Oluwakoyejo · Tech Entrepreneur, Investor &amp; Youth Champion
            </p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base lg:col-span-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky-600">
              About
            </p>
            <h2 className="font-serif text-3xl font-normal text-slate-950 sm:text-4xl">
              Oluwatosin Oluwakoyejo
            </h2>
            <p className="font-serif text-base italic text-slate-800">
              Founder &amp; CEO, Chronicles Software · Convener, The CONFAB
            </p>

            <p>
              Oluwatosin Oluwakoyejo is an acclaimed African software architect, investor, EdTech pioneer, and youth empowerment champion. In September 2007, during his final undergraduate year in Computer Science at the University of Ado-Ekiti (UNAD), he founded <strong>Chronicles Software Development Company</strong>.
            </p>
            <p>
              Today, the enterprise serves over 220,000 active users globally, driving educational inclusion through its flagship examination engine <strong>SuccessBOX</strong> and secure hardware tablet <strong>SuccessTAB</strong>.
            </p>
            <p>
              A passionate advocate for youth capital, he convenes <strong>The CONFAB</strong> annually to empower thousands of young Africans. An alumnus of the Stanford SEED Program and Ausso Leadership Academy, he serves on the Human Capital Development Commission of the Nigerian Economic Summit Group (NESG).
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-800">
                Stanford SEED Alumnus
              </span>
              <span className="border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-800">
                Ausso Leadership Academy
              </span>
              <span className="border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-800">
                NESG Human Capital Commission
              </span>
              <span className="border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-800">
                Diamond Bank BET3 Top 50
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 3. CHRONICLES SOFTWARE SECTION (Automatic 3-Second Slideshow with Large Images, Clear Tabs & Attached Logos) */
export function ChroniclesEcosystemSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 'umbrella',
      badge: 'Umbrella Platform',
      title: 'Chronicles Software Development Company',
      subtitle: 'The foundational software engine powering digital education across Africa since 2007.',
      icon: Layers,
      url: 'https://chroniclesoft.com/',
      urlLabel: 'chroniclesoft.com',
      image: ASSETS.chroniclesUmbrella,
      points: CHRONICLES_ECOSYSTEM.umbrella.highlights,
    },
    {
      id: 'succestab',
      badge: 'Flagship Hardware Device',
      title: 'SuccessTAB Digital Learning Device',
      subtitle: 'Secure, ruggedized learning tablet transforming public and private school classrooms.',
      icon: Tablet,
      url: 'https://www.successtabs.com/',
      urlLabel: 'successtabs.com',
      image: ASSETS.chroniclesSuccestab,
      points: CHRONICLES_ECOSYSTEM.succestab.achievements,
    },
    {
      id: 'successbox',
      badge: 'AI Examination Engine',
      title: 'SuccessBOX AI Engine',
      subtitle: 'Over 30,000 past questions turning exam prep into systematic mastery.',
      icon: Cpu,
      url: 'https://successbox.ng/',
      urlLabel: 'successbox.ng',
      image: ASSETS.chroniclesSuccessbox,
      points: CHRONICLES_ECOSYSTEM.successbox.achievements,
    },
  ];

  // Automatic slideshow transition every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[activeSlide];

  return (
    <section id="chronicles" className="border-b border-slate-200 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="border-b border-slate-200 pb-6 mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky-600">
            The Enterprise Ecosystem
          </p>
          <h2 className="mt-2 font-serif text-3xl font-normal text-slate-950 sm:text-4xl">
            Chronicles Software
          </h2>
        </div>

        {/* Side-by-Side Slide Content (Pure Automatic Transition, No Tabs or Indicators) */}
        <div className="border border-slate-200 bg-slate-50/70 p-6 sm:p-10 shadow-sm transition-all duration-500">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Visual Product/Enterprise Image Column - Extra Large Frame */}
            <div className="flex items-center justify-center border border-slate-200 bg-white p-4 sm:p-8 lg:col-span-7 shadow-inner min-h-[380px] sm:min-h-[460px] overflow-hidden">
              <img
                src={current.image}
                alt={current.title}
                className="max-h-[440px] w-auto max-w-full object-contain transition-all duration-700 hover:scale-105"
              />
            </div>

            {/* Details Column */}
            <div className="space-y-4 lg:col-span-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky-600">
                {current.badge}
              </span>
              <h3 className="font-serif text-2xl font-normal text-slate-950 sm:text-3xl">
                {current.title}
              </h3>
              <p className="text-sm font-medium text-slate-700">{current.subtitle}</p>

              <ul className="space-y-2.5 pt-2">
                {current.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-sky-500" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-600 hover:text-sky-700"
                >
                  Visit Platform <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Attached Official Logos Bar: Linked Directly to Respective Websites, NO Text Attached */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <a
              href="https://chroniclesoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chronicles Software Official Website"
              className="flex items-center justify-center border border-slate-200 bg-white p-8 shadow-sm transition hover:border-sky-500 hover:shadow-md"
            >
              <img
                src={ASSETS.logoChronicles}
                alt="Chronicles Software"
                className="h-12 w-auto object-contain"
              />
            </a>

            <a
              href="https://successbox.ng/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SuccessBOX Official Website"
              className="flex items-center justify-center border border-slate-200 bg-white p-8 shadow-sm transition hover:border-sky-500 hover:shadow-md"
            >
              <img
                src={ASSETS.logoSuccessbox}
                alt="SuccessBOX"
                className="h-12 w-auto object-contain"
              />
            </a>

            <a
              href="https://www.successtabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SuccessTAB Official Website"
              className="flex items-center justify-center border border-slate-200 bg-white p-8 shadow-sm transition hover:border-sky-500 hover:shadow-md"
            >
              <img
                src={ASSETS.logoSuccesstab}
                alt="SuccessTAB"
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 4. THE CONFAB UNIFIED CINEMATIC SLIDESHOW (Video + UGC Moments from the Movement) */
export function ConfabSection() {
  const [currentSlide, setCurrentSlide] = useState(0); // 0 = Video, 1-4 = UGC Images
  const [showOverlay, setShowOverlay] = useState(false);
  const videoRef = useRef(null);

  const moments = [
    {
      id: 1,
      image: '/images/confab-ugc-1.jpg',
      tag: '✨ The Gen-Z Builders',
      cornerTopRight: 'The CONFAB · Lagos',
      headline: 'Next-Gen Software Architects',
      quote: 'Equipping Africa’s brightest student developers and young entrepreneurs.',
    },
    {
      id: 2,
      image: '/images/confab-ugc-2.jpg',
      tag: '⚡ Electric Energy',
      cornerTopRight: '2,000+ Attendees',
      headline: 'Auditorium Standing Ovation',
      quote: 'Over 2,000 ambitious young minds united in purpose and boundless hope.',
    },
    {
      id: 3,
      image: '/images/confab-ugc-3.jpg',
      tag: '💡 Boundless Ambition',
      cornerTopRight: 'Mentorship in Action',
      headline: 'Bridging Potential to Opportunity',
      quote: 'Direct executive mentorship sessions with founders and industry pioneers.',
    },
    {
      id: 4,
      image: '/images/confab-ugc-4.jpg',
      tag: '🔥 Unstoppable Purpose',
      cornerTopRight: 'Faith & Tenacity',
      headline: 'Fearless Generation of Builders',
      quote: 'Believing in the innate genius of African youth to lead the future.',
    },
  ];

  // Automatic sequence: Video plays -> UGC Photo Slideshow -> Final Experience Slide -> Loop
  useEffect(() => {
    let timer;

    if (currentSlide === 0) {
      // Step 1: Video starts clean
      setShowOverlay(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => { });
      }

      // Step 2: Towards the end of the video clip (at 2s), overlay text slides in
      const overlayTimer = setTimeout(() => {
        setShowOverlay(true);
      }, 2000);

      // Step 3: At 4.5s, advance to the UGC photos slideshow (Slide 1)
      const nextSlideTimer = setTimeout(() => {
        setShowOverlay(false);
        setCurrentSlide(1);
      }, 4500);

      return () => {
        clearTimeout(overlayTimer);
        clearTimeout(nextSlideTimer);
      };
    } else if (currentSlide >= 1 && currentSlide <= moments.length) {
      // SLIDES 1 to 4: Each UGC moment photo displays for 2.5 seconds
      timer = setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
      }, 2500);

      return () => clearTimeout(timer);
    } else if (currentSlide === moments.length + 1) {
      // SLIDE 5: DEDICATED LAST SLIDE WITH "Experience The CONFAB" & CTA BUTTON
      // Stays on screen for 5 seconds before looping back to the video (Slide 0)
      timer = setTimeout(() => {
        setCurrentSlide(0);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [currentSlide, moments.length]);

  return (
    <section id="confab" className="relative border-b border-slate-200 bg-[#0A1128] text-white overflow-hidden">
      {/* Main Full-Width Cinematic Canvas */}
      <div className="relative w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[740px] flex items-center justify-center overflow-hidden bg-black">
        {/* SLIDE 0: The CONFAB Video */}
        <div
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
            currentSlide === 0 ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover pointer-events-none transition-all duration-700"
          >
            <source src="/videos/confab-reel.mp4" type="video/mp4" />
          </video>

          {/* Subtle Gradient Backdrop that deepens when overlay text slides in */}
          <div
            className={`absolute inset-0 transition-all duration-1000 ${
              showOverlay ? 'bg-[#0A1128]/75 backdrop-blur-[2px]' : 'bg-[#0A1128]/25'
            }`}
          />

          {/* Overlay Text that Slides In Towards the End of the Video */}
          <div
            className={`relative z-20 flex h-full w-full flex-col items-center justify-center px-6 text-center text-white transition-all duration-1000 ease-out transform ${
              showOverlay
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-16 scale-95 pointer-events-none'
            }`}
          >
            <span
              className={`mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-sky-400 drop-shadow-md transition-all duration-700 delay-100 transform ${
                showOverlay ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="h-[2px] w-6 bg-sky-400" />
              Youth Empowerment Movement · 15 Years
              <span className="h-[2px] w-6 bg-sky-400" />
            </span>

            <h2
              className={`font-serif text-3xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl drop-shadow-2xl transition-all duration-700 delay-200 transform ${
                showOverlay ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Experience The CONFAB
            </h2>

            <p
              className={`mt-4 max-w-2xl text-sm sm:text-base lg:text-lg text-slate-100 drop-shadow-md leading-relaxed transition-all duration-700 delay-300 transform ${
                showOverlay ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Convened annually since 2011 by Oluwatosin Oluwakoyejo, connecting thousands of ambitious young Africans with mentors, founders, and industry leaders.
            </p>

            <div
              className={`mt-8 flex justify-center transition-all duration-700 delay-400 transform ${
                showOverlay ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <a
                href="https://www.instagram.com/confab_global/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-none bg-sky-500 px-9 py-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-950 transition-all duration-300 hover:bg-sky-400 hover:scale-105 active:scale-95 shadow-2xl"
              >
                <Instagram size={18} /> Learn More on Instagram
              </a>
            </div>
          </div>
        </div>

        {/* SLIDES 1 to 4: Preloaded UGC Photo Moments with Cute Badges & Smooth Crossfades */}
        {moments.map((moment, idx) => {
          const isActive = currentSlide === idx + 1;
          return (
            <div
              key={moment.id}
              className={`absolute inset-0 h-full w-full transition-all duration-1000 transform ${
                isActive
                  ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                  : 'opacity-0 scale-105 z-0 pointer-events-none'
              }`}
            >
              {/* Background Attendee Photo */}
              <img
                src={moment.image}
                alt={moment.headline}
                className="h-full w-full object-cover transition-transform duration-1000 scale-100"
              />

              {/* Soft Ambient Vignette for Corner Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/90 via-transparent to-[#0A1128]/60 pointer-events-none" />

              {/* Corner 1: Top-Left Cute Badge */}
              <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/50 bg-[#0A1128]/85 backdrop-blur-md px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide text-sky-300 shadow-2xl">
                  {moment.tag}
                </span>
              </div>

              {/* Corner 2: Top-Right Location/Context Badge */}
              <div className="absolute top-6 right-6 sm:top-10 sm:right-10 z-20">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-4 py-2 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-slate-200 shadow-2xl">
                  📍 {moment.cornerTopRight}
                </span>
              </div>

              {/* Corner 3: Bottom-Left Cute Quote Card */}
              <div className="absolute bottom-20 left-6 sm:bottom-20 sm:left-10 max-w-md sm:max-w-lg z-20">
                <div className="rounded-2xl border border-white/15 bg-[#0A1128]/90 backdrop-blur-md p-5 sm:p-6 shadow-2xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400 mb-1">
                    {moment.headline}
                  </p>
                  <p className="font-serif text-lg sm:text-xl font-light text-white leading-snug">
                    “{moment.quote}”
                  </p>
                </div>
              </div>

              {/* Corner 4: Bottom-Right Social Pill */}
              <div className="absolute bottom-20 right-6 sm:bottom-20 sm:right-10 z-20">
                <a
                  href="https://www.instagram.com/confab_global/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-sky-400/50 bg-[#0D1B2A]/90 hover:bg-sky-500 hover:text-slate-950 backdrop-blur-md px-5 py-2.5 text-xs font-bold text-sky-300 shadow-2xl transition hover:scale-105"
                >
                  <Instagram size={14} /> Follow @confab_global
                </a>
              </div>
            </div>
          );
        })}

        {/* SLIDE 5: Dedicated Last Slide with "Experience The CONFAB" & Instagram CTA */}
        <div
          className={`absolute inset-0 h-full w-full transition-all duration-1000 transform ${
            currentSlide === moments.length + 1
              ? 'opacity-100 scale-100 z-10 pointer-events-auto'
              : 'opacity-0 scale-105 z-0 pointer-events-none'
          }`}
        >
          {/* Atmospheric Background Image */}
          <img
            src="/images/confab-ugc-2.jpg"
            alt="The CONFAB Lagos"
            className="h-full w-full object-cover transition-transform duration-1000 scale-105"
          />

          {/* Deep Dark Blue Overlay with Subtle Blur */}
          <div className="absolute inset-0 bg-[#0A1128]/85 backdrop-blur-[3px]" />

          {/* Centered High-Impact Experience Card */}
          <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-6 text-center text-white">
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-sky-400 drop-shadow-md">
              <span className="h-[2px] w-6 bg-sky-400" />
              Youth Empowerment Movement · 15 Years
              <span className="h-[2px] w-6 bg-sky-400" />
            </span>

            <h2 className="font-serif text-3xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl drop-shadow-2xl">
              Experience The CONFAB
            </h2>

            <p className="mt-4 max-w-2xl text-sm sm:text-base lg:text-lg text-slate-100 drop-shadow-md leading-relaxed">
              Convened annually since 2011 by Oluwatosin Oluwakoyejo, connecting thousands of ambitious young Africans with mentors, founders, and industry leaders.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="https://www.instagram.com/confab_global/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-none bg-sky-500 px-9 py-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-950 transition-all duration-300 hover:bg-sky-400 hover:scale-105 active:scale-95 shadow-2xl"
              >
                <Instagram size={18} /> Learn More on Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Slide Navigation Bar: Automatic Progression with Instant One-Click Jump */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 sm:gap-2">
          {['Reel Video', 'Moment 01', 'Moment 02', 'Moment 03', 'Moment 04', 'Experience CONFAB'].map((label, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Jump to slide: ${label}`}
              className={`rounded-full px-2.5 py-1 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                currentSlide === idx
                  ? 'bg-sky-400 text-slate-950 shadow-lg scale-105'
                  : 'bg-black/60 text-slate-300 hover:bg-black/90 hover:text-white backdrop-blur-md border border-white/15'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 5. ARISE NEWS VIDEO SECTION (Transparent Background Video, No Subtitles, Permanent Quote Overlay) */
export function AriseVideoSection() {
  return (
    <section id="arise-broadcast" className="border-b border-slate-200 bg-[#0A1128] text-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-sky-400">
            <span className="h-[2px] w-8 bg-sky-400" />
            Television &amp; Policy Feature
            <span className="h-[2px] w-8 bg-sky-400" />
          </p>
          <h2 className="mt-3 font-serif text-3xl font-normal text-white sm:text-4xl">
            Arise News Global Feature
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Oluwatosin Oluwakoyejo on Arise News discussing AI regulation in Nigeria, prompt engineering curricula, and educational disruption.
          </p>
        </div>

        {/* Video Container with Highly Transparent Overlay and Subtitles Disabled */}
        <div className="relative mx-auto max-w-5xl overflow-hidden border border-sky-400/30 bg-black shadow-2xl aspect-video">
          {/* YouTube Video Autoplaying in Background (Subtitles Disabled: cc_load_policy=0) */}
          <iframe
            src={`https://www.youtube.com/embed/${ARISE_FEATURE.videoId}?autoplay=1&mute=1&loop=1&playlist=${ARISE_FEATURE.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&cc_load_policy=0&iv_load_policy=3&disablekb=1`}
            title={ARISE_FEATURE.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="h-full w-full border-0 pointer-events-none scale-105"
          />

          {/* Highly Transparent Glass Overlay ON TOP of the Video */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/25 sm:bg-[#0A1128]/25 p-6 sm:p-12 text-center pointer-events-none">
            <Quote size={40} className="text-sky-400 mb-4 opacity-95 drop-shadow-lg" />

            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-light italic leading-relaxed text-white max-w-3xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              “{ARISE_FEATURE.quote}”
            </blockquote>

            <p className="mt-5 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-sky-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              — {ARISE_FEATURE.author}
            </p>
            <p className="text-[11px] uppercase tracking-widest text-slate-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Founder &amp; CEO, Chronicles Software · Convener, The CONFAB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 6. CONNECT WITH ME (Flexed Social Icons on Left + Contact Form on Right with "Contact executive office" Button) */
export function ConnectSocialsSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="connect" className="border-b border-slate-200 bg-[#0A1128] text-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Title, Intro & Flexed Social Icons */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-sky-400">
                Executive Channels
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-normal text-white">
                Connect With Me
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Direct channels for speaking invitations, board advisory, education policy dialogue, and youth mentorship.
              </p>
            </div>

            {/* Flexed Social Media List */}
            <div className="space-y-3 pt-2">
              <a
                href="https://www.linkedin.com/in/oluwatosin-oluwakoyejo/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-white/10 bg-[#0D1B2A] p-4 transition hover:border-sky-400 hover:bg-[#11243B]"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition">
                    <Linkedin size={18} />
                  </span>
                  <div>
                    <p className="font-serif text-base font-normal text-white">LinkedIn</p>
                    <p className="text-xs text-slate-400">Oluwatosin Oluwakoyejo</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-sky-400" />
              </a>

              <a
                href="https://www.instagram.com/confab_global/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-white/10 bg-[#0D1B2A] p-4 transition hover:border-sky-400 hover:bg-[#11243B]"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition">
                    <Instagram size={18} />
                  </span>
                  <div>
                    <p className="font-serif text-base font-normal text-white">Instagram</p>
                    <p className="text-xs text-slate-400">@confab_global</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-sky-400" />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-white/10 bg-[#0D1B2A] p-4 transition hover:border-sky-400 hover:bg-[#11243B]"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition">
                    <Twitter size={18} />
                  </span>
                  <div>
                    <p className="font-serif text-base font-normal text-white">X (Twitter)</p>
                    <p className="text-xs text-slate-400">@koyejo_tosin</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-sky-400" />
              </a>

              <a
                href="https://youtu.be/HtKqZbVGB88?si=wnwvZnFDfB4vzsOT"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-white/10 bg-[#0D1B2A] p-4 transition hover:border-sky-400 hover:bg-[#11243B]"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition">
                    <Youtube size={18} />
                  </span>
                  <div>
                    <p className="font-serif text-base font-normal text-white">YouTube</p>
                    <p className="text-xs text-slate-400">Broadcasts &amp; Keynotes</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-sky-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Contact Form with "Contact executive office" Submission Button */}
          <div className="lg:col-span-7 border border-sky-400/30 bg-[#0D1B2A] p-8 sm:p-10 shadow-2xl">
            <h3 className="font-serif text-2xl font-normal text-white">
              Direct Desk Inquiry
            </h3>
            <p className="mt-1 text-xs text-slate-300">
              Please provide details regarding your engagement request, advisory inquiry, or partnership.
            </p>

            {submitted ? (
              <div className="mt-6 border border-sky-400/50 bg-sky-950/40 p-6 text-center text-sky-300">
                <p className="font-serif text-lg text-white">Thank you for your message.</p>
                <p className="mt-1 text-xs">The executive office will review your inquiry and respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Adebayo Johnson"
                      className="w-full border border-white/15 bg-[#0A1128] px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      className="w-full border border-white/15 bg-[#0A1128] px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Organization / Institution
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. University / Enterprise"
                      className="w-full border border-white/15 bg-[#0A1128] px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Inquiry Type
                    </label>
                    <select className="w-full border border-white/15 bg-[#0A1128] px-4 py-3 text-xs text-white focus:border-sky-400 focus:outline-none">
                      <option>Keynote &amp; Speaking Engagement</option>
                      <option>Board Advisory &amp; Governance</option>
                      <option>EdTech &amp; Curriculum Partnership</option>
                      <option>The CONFAB Youth Delegation</option>
                      <option>Media &amp; Press Feature</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Brief details regarding date, audience, or collaboration scope..."
                    className="w-full border border-white/15 bg-[#0A1128] px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 rounded-none bg-sky-500 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-400 hover:scale-[1.02] shadow-xl w-full sm:w-auto justify-center"
                  >
                    <Mail size={16} /> Contact executive office
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
