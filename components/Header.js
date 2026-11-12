'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ExternalLink } from 'lucide-react';
import { NAV, SITE } from '@/lib/data';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-white'
          } border-b border-slate-100`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="group flex flex-col font-sans tracking-[0.18em] font-bold text-slate-950 transition hover:text-sky-600"
          >
            <span className="text-sm sm:text-base lg:text-lg">
              OLUWATOSIN OLUWAKOYEJO
            </span>
          </Link>

          {/* Desktop Navigation: Only Core Sections, NO About/Lifestyle/Thought Leadership, NO Menu button on Desktop */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main Navigation">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:text-sky-600"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#connect"
              className="rounded-none bg-sky-500 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-400"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile Right Controls: MENU only appears on smaller screens / responsive design */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 p-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-950"
              aria-label="Open Mobile Menu"
            >
              <span>MENU</span>
              <div className="flex flex-col gap-1.5">
                <span className="block h-[2px] w-5 bg-slate-900" />
                <span className="block h-[2px] w-5 bg-slate-900" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Only for smaller screens) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#0A1128] text-white animate-in fade-in duration-200 lg:hidden">
          {/* Header of Drawer */}
          <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between border-b border-white/10 px-5 sm:px-8">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm sm:text-base font-bold tracking-[0.18em] text-white"
            >
              OLUWATOSIN OLUWAKOYEJO
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 hover:text-white"
              aria-label="Close Menu"
            >
              <span>CLOSE</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sky-400/40 transition group-hover:border-white">
                <X size={16} />
              </span>
            </button>
          </div>

          {/* Body of Drawer */}
          <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between overflow-y-auto px-5 py-8 sm:px-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-400">Navigation</p>
              <nav className="mt-6 flex flex-col space-y-5">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl font-light tracking-wide text-white transition hover:text-sky-400"
                >
                  Home
                </Link>
                <a
                  href="#chronicles"
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl font-light tracking-wide text-white transition hover:text-sky-400"
                >
                  Chronicles Software
                </a>
                <a
                  href="#confab"
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl font-light tracking-wide text-white transition hover:text-sky-400"
                >
                  The CONFAB
                </a>
                <a
                  href="#arise-broadcast"
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl font-light tracking-wide text-white transition hover:text-sky-400"
                >
                  Broadcast
                </a>
                <a
                  href="#connect"
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl font-light tracking-wide text-white transition hover:text-sky-400"
                >
                  Connect With Me
                </a>
              </nav>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-400">Ecosystem</p>
                <div className="mt-3 space-y-2 text-xs text-slate-300">
                  <a href="https://chroniclesoft.com/" target="_blank" rel="noopener noreferrer" className="block py-1 hover:text-sky-400">
                    Chronicles Software Development Company →
                  </a>
                  <a href="https://successbox.ng/" target="_blank" rel="noopener noreferrer" className="block py-1 hover:text-sky-400">
                    SuccessBOX AI Engine →
                  </a>
                  <a href="https://www.successtabs.com/" target="_blank" rel="noopener noreferrer" className="block py-1 hover:text-sky-400">
                    SuccessTAB Digital Device →
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.2em] text-slate-500">
              <p>© {new Date().getFullYear()} {SITE.name}. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
