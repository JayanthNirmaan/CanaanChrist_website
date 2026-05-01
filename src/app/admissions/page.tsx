import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CheckCircle2, FileText, Calendar, Users, GraduationCap, Smile, Backpack, BookOpen, School } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AdmissionsPage() {
  const classes = [
    { icon: Smile, title: 'Kindergarten', desc: 'Nursery, LKG, UKG', color: 'text-pink-500', bg: 'bg-pink-100' },
    { icon: Backpack, title: 'Primary School', desc: 'Grades 1 to 4', color: 'text-blue-500', bg: 'bg-blue-100' },
    { icon: BookOpen, title: 'Higher Primary', desc: 'Grades 5 to 7', color: 'text-orange-500', bg: 'bg-orange-100' },
    { icon: School, title: 'High School', desc: 'Grades 8 to 10', color: 'text-primary', bg: 'bg-primary/10' },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <h1 className="text-5xl font-bold">Admissions 2026-27</h1>
          <p className="text-xl opacity-90">Join the Canaan Christ family. Quality education for all walks of life.</p>
        </div>
      </section>

      {/* Policies Highlight */}
      <section className="py-12 bg-muted/50 border-b">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-green-100 text-green-600 rounded-full"><CheckCircle2 size={24} /></div>
            <div>
              <h3 className="font-bold">No Admission Fee</h3>
              <p className="text-sm text-muted-foreground">We believe education should be accessible.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-green-100 text-green-600 rounded-full"><CheckCircle2 size={24} /></div>
            <div>
              <h3 className="font-bold">No Donation Policy</h3>
              <p className="text-sm text-muted-foreground">Merit and inclusivity are our only criteria.</p>
            </div>
          </div>
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
                  { step: '01', title: 'Inquiry & Visit', desc: 'Visit our campus in BTM 1st Stage to see our well-equipped classrooms and facilities.' },
                  { step: '02', title: 'Application', desc: 'Collect and submit the application form with required documents at the school office.' },
                  { step: '03', title: 'Interaction', desc: 'An age-appropriate interaction session with the student and parents.' },
                  { step: '04', title: 'Confirmation', desc: 'Complete the simple admission formalities. Remember: No Admission Fee or Donation is charged.' },
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
                <GraduationCap className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Academic Record</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We are proud of our consistent 100% pass record in the Grade 10 Board Examinations, proof of our teaching standards.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl border shadow-sm">
                <Users className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold mb-6">Classes Offered</h3>
                <div className="grid grid-cols-1 gap-4">
                  {classes.map((cls, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className={`p-2.5 rounded-xl ${cls.bg} ${cls.color} transition-transform group-hover:scale-110`}>
                        <cls.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground leading-none mb-1">{cls.title}</h4>
                        <p className="text-xs text-muted-foreground">{cls.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="sticky top-24">
              <div className="p-8 bg-white rounded-3xl border shadow-sm text-center">
                <h3 className="text-xl font-bold mb-4">Visit Campus</h3>
                <p className="text-sm text-muted-foreground mb-6">No.6 1st Crs, 9th Mn Rd, BTM 1st Stage</p>
                <Button className="w-full" asChild><Link href="/contact">Get Directions</Link></Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
