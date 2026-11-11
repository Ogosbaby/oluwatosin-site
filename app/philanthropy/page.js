import Link from 'next/link';
import { ArrowUpRight, Users, Award, BookOpen } from 'lucide-react';
import { PageHero, SectionHeading } from '@/components/ui';
import { ConfabSection, ConnectSocialsSection } from '@/components/Sections';

export const metadata = {
  title: 'Youth Empowerment & The CONFAB | Oluwatosin Oluwakoyejo',
  description:
    'Empowering Africa’s youth through The CONFAB annual conference, public school digitization, and national education policy advisory.',
};

export default function Philanthropy() {
  return (
    <>
      <PageHero
        kicker="Youth Empowerment &amp; Impact"
        title="Investing in the innate genius of African youth."
        intro="Through The CONFAB, public education interventions, and the NESG Human Capital Development Commission, Oluwatosin builds platforms where young Africans discover, build, and lead."
      />

      {/* Flagship CONFAB Section */}
      <ConfabSection />

      {/* School Interventions & Platinum Awards */}
      <section id="schools" className="border-b border-slate-200 bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker="Educational Interventions"
            title="Digitizing the Public School Classroom"
            subtitle="Bridging the digital divide for underserved learners across Nigerian public and state school systems."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-slate-200 bg-white p-7 shadow-sm">
              <BookOpen size={28} className="text-sky-500" />
              <h3 className="mt-4 font-serif text-xl font-normal text-slate-950">
                Lagos Platinum Education Awards
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Partnering with state education authorities to celebrate top-performing students and teachers, providing subsidized SuccessTAB tablets and educational software grants.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-7 shadow-sm">
              <Users size={28} className="text-sky-500" />
              <h3 className="mt-4 font-serif text-xl font-normal text-slate-950">
                NESG Human Capital Commission
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Serving on the Human Capital Development Commission of the Nigerian Economic Summit Group (NESG), helping design policies that link national education to workforce productivity.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-7 shadow-sm">
              <Award size={28} className="text-sky-500" />
              <h3 className="mt-4 font-serif text-xl font-normal text-slate-950">
                Subsidized Student Hardware
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Deploying thousands of preloaded SuccessTAB devices with complete textbooks and offline CBT tests to students in low-income schools without internet connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConnectSocialsSection />
    </>
  );
}
