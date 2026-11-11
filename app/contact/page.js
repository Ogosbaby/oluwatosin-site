'use client';

import { useState } from 'react';
import { PageHero } from '@/components/ui';
import { Mail, ArrowUpRight, CheckCircle2, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { SOCIALS } from '@/lib/data';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        kicker="Executive Office"
        title="Connect with Oluwatosin Oluwakoyejo."
        intro="For speaking invitations, educational ministry partnerships, press interviews, and youth empowerment initiatives, please submit your inquiry below."
      />

      <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky-600">
                Direct Inquiry
              </span>
              <h2 className="mt-2 font-serif text-3xl font-normal text-slate-950 sm:text-4xl">
                Send an Executive Message
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Please provide details regarding your organization, date requests, and the nature of your inquiry.
              </p>

              <div className="mt-8 border border-slate-200 bg-slate-50/60 p-6 sm:p-10 shadow-sm">
                {submitted ? (
                  <div className="flex items-center gap-3 border border-sky-400 bg-sky-50 p-6 text-slate-900">
                    <CheckCircle2 size={24} className="text-sky-600" />
                    <div>
                      <p className="font-serif text-lg font-medium">Thank You</p>
                      <p className="text-xs text-slate-600">Your message has been received by the executive desk.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <input
                        required
                        type="text"
                        placeholder="First Name"
                        className="w-full border-b border-slate-300 bg-transparent py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500"
                      />
                      <input
                        required
                        type="text"
                        placeholder="Last Name"
                        className="w-full border-b border-slate-300 bg-transparent py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500"
                      />
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <input
                        required
                        type="email"
                        placeholder="Email Address"
                        className="w-full border-b border-slate-300 bg-transparent py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500"
                      />
                      <input
                        type="text"
                        placeholder="Organization / Ministry"
                        className="w-full border-b border-slate-300 bg-transparent py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500"
                      />
                    </div>
                    <textarea
                      required
                      rows={4}
                      placeholder="Details of your request"
                      className="w-full border-b border-slate-300 bg-transparent py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500"
                    />
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="rounded-none bg-sky-500 px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-400"
                      >
                        Submit Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Socials & Focus Areas */}
            <aside className="space-y-8 lg:col-span-5 lg:border-l lg:border-slate-200 lg:pl-12">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky-600">
                  Focus Areas
                </span>
                <h3 className="mt-2 font-serif text-2xl font-normal text-slate-950">
                  Inquiry Categories
                </h3>
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="border-b border-slate-100 pb-2">
                    <strong className="text-slate-900">Keynote Addresses:</strong> AI in education, prompt engineering, and youth capital.
                  </li>
                  <li className="border-b border-slate-100 pb-2">
                    <strong className="text-slate-900">Public School Systems:</strong> SuccessTAB and CBT software deployments.
                  </li>
                  <li className="border-b border-slate-100 pb-2">
                    <strong className="text-slate-900">The CONFAB:</strong> Corporate partnerships and student cohort sponsorships.
                  </li>
                  <li className="pb-2">
                    <strong className="text-slate-900">Media &amp; Press:</strong> TV broadcasts, print features, and interviews.
                  </li>
                </ul>
              </div>

              {/* Connect Socials Card */}
              <div className="border border-slate-200 bg-[#0A1128] p-6 sm:p-8 text-white">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400">
                  Connect Directly
                </span>
                <h3 className="mt-2 font-serif text-xl font-normal text-white">
                  Social Channels
                </h3>
                <div className="mt-4 space-y-3">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between border-b border-white/10 pb-2 text-xs text-slate-300 hover:text-sky-400"
                    >
                      <span className="font-semibold text-white">{s.platform}</span>
                      <span className="flex items-center gap-1 font-mono text-[11px] text-sky-300">
                        {s.handle} <ArrowUpRight size={12} />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
