
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AIAdmissionsTool } from '@/components/admissions/AIAdmissionsTool';
import { CheckCircle2, FileText, Calendar, Users, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <h1 className="text-5xl font-bold">Admissions 2026-27</h1>
          <p className="text-xl opacity-90">Join our vibrant academic community focused on righteousness and truth.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border space-y-8">
              <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                <FileText className="text-secondary" /> Admission Process
              </h2>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Inquiry & Visit', desc: 'Visit our campus for a tour and collect the application form from the office.' },
                  { step: '02', title: 'Application Submission', desc: 'Submit the filled application along with required documents (Birth Certificate, TC, Reports).' },
                  { step: '03', title: 'Interactive Session', desc: 'An age-appropriate interaction with the student and parents will be scheduled.' },
                  { step: '04', title: 'Fee Payment', desc: 'Once selected, complete the admission formalities by paying the required fees.' },
                ].map((s, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                      {s.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border shadow-sm">
                <Calendar className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Important Dates</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex justify-between border-b pb-2"><span>Form Release:</span> <span>Dec 1, 2025</span></li>
                  <li className="flex justify-between border-b pb-2"><span>Interviews Start:</span> <span>Jan 15, 2026</span></li>
                  <li className="flex justify-between border-b pb-2"><span>First List:</span> <span>Feb 10, 2026</span></li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl border shadow-sm">
                <Users className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Eligibility</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16} /> KG: 3+ Years</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16} /> Grade 1: 6+ Years</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16} /> Grades 2-10: Based on TC</li>
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="sticky top-24">
              <div className="bg-secondary p-8 rounded-3xl text-white mb-8">
                <HelpCircle className="mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Need Guidance?</h3>
                <p className="text-sm opacity-90 mb-6">Our AI assistant can answer common questions about our policies and process instantly.</p>
                <AIAdmissionsTool />
              </div>
              <div className="p-8 bg-white rounded-3xl border shadow-sm text-center">
                <h3 className="text-xl font-bold mb-4">Download Brochure</h3>
                <Button className="w-full" asChild><Link href="#">Download PDF</Link></Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
