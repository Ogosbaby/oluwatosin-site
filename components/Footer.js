import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { FOOTER_SECTIONS, SITE } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#0A1128] text-white">
      {/* Main Footer Sitemap */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="font-sans text-lg font-bold uppercase tracking-[0.18em] text-white transition hover:text-sky-400"
            >
              {SITE.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Founder &amp; CEO of Chronicles Software Development Company Limited and Convener of The CONFAB. Member of the Human Capital Development Commission of the Nigerian Economic Summit Group (NESG).
            </p>
            <div className="mt-6 space-y-2 text-xs text-slate-400">
              <p>
                <strong className="text-white">Flagship EdTech:</strong> SuccessBOX AI &amp; SuccessTAB
              </p>
              <p>
                <strong className="text-white">Active Learners:</strong> 220,000+ Globally
              </p>
              <p>
                <strong className="text-white">Alumnus:</strong> Stanford SEED &amp; Ausso Leadership Academy
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-400">
                  {section.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-slate-300 transition hover:text-white"
                        >
                          {link.label}
                          <ExternalLink size={10} className="text-sky-400" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-xs text-slate-300 transition hover:text-white"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-[11px] uppercase tracking-[0.18em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="transition hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition hover:text-slate-300">
              Terms of Use
            </Link>
            <Link href="/contact" className="transition hover:text-slate-300">
              Media Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
