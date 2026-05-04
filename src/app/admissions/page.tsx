import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CheckCircle2, FileText, GraduationCap, Backpack, BookOpen, Smile, Baby, User, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RegistrationForm } from '@/components/admissions/RegistrationForm';

export default function AdmissionsPage() {
  const classes = [
    { 
      icon: Baby, 
      title: 'Kindergarten', 
      desc: 'Nursery, LKG, UKG', 
      color: 'text-pink-500', 
      bg: 'bg-pink-100',
    },
    { 
      icon: Backpack, 
      title: 'Primary School', 
      desc: 'Grades 1 to 4', 
      color: 'text-blue-500', 
      bg: 'bg-blue-100',
    },
    { 
      icon: UserRound, 
      title: 'Higher Primary', 
      desc: 'Grades 5 to 7', 
      color: 'text-orange-500', 
      bg: 'bg-orange-100',
    },
    { 
      icon: GraduationCap, 
      title: 'High School', 
      desc: 'Grades 8 to 10', 
      color: 'text-primary', 
      bg: 'bg-primary/10',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 bg-background text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <h1 className="text-5xl text-primary">Admissions 2026-27</h1>
          <p className="text-xl text-muted-foreground">Join the Canaan Christ family. Quality education for all walks of life.</p>
        </div>
      </section>

      {/* Policies Highlight */}
      <section className="py-10 bg-muted/30 border-y">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-green-100 text-green-600 rounded-full shrink-0"><CheckCircle2 size={24} /></div>
            <div>
              <h3 className="font-bold">No Admission Fee</h3>
              <p className="text-sm text-muted-foreground">We believe education should be accessible to everyone.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-green-100 text-green-600 rounded-full shrink-0"><CheckCircle2 size={24} /></div>
            <div>
              <h3 className="font-bold">No Donation Policy</h3>
              <p className="text-sm text-muted-foreground">Merit and inclusivity are our only criteria for selection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-7 space-y-12">
            <div className="bg-background p-10 rounded-[2.5rem] shadow-sm border space-y-8">
              <h2 className="text-3xl text-primary flex items-center gap-3">
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
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg">
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
              <div className="bg-background p-8 rounded-[2rem] border shadow-sm">
                <GraduationCap className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Academic Record</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We are proud of our consistent 100% pass record in the Grade 10 Board Examinations, proof of our teaching standards and student dedication.
                </p>
              </div>
              <div className="bg-background p-8 rounded-[2rem] border shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <UserRound className="text-primary" size={32} />
                  <h3 className="text-xl font-bold">Classes Offered</h3>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {classes.map((cls, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className={`p-3 rounded-2xl ${cls.bg} ${cls.color} transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                        <cls.icon size={24} />
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

          <aside className="lg:col-span-5 space-y-8">
            <div className="sticky top-32">
              <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-2 border-primary/5">
                <h2 className="text-2xl text-primary mb-2">Admission Inquiry</h2>
                <p className="text-sm text-muted-foreground mb-8">Start your child's journey with us today.</p>
                <RegistrationForm />
              </div>

              <div className="mt-8 p-8 bg-primary rounded-[2.5rem] text-primary-foreground shadow-2xl text-center space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Visit Campus</h3>
                  <p className="text-sm opacity-80 leading-relaxed">No.6 1st Crs, 9th Mn Rd, BTM 1st Stage, Bengaluru</p>
                </div>
                <Button className="w-full h-14 rounded-full font-bold bg-white text-primary hover:bg-white/90 shadow-lg text-lg" asChild>
                  <Link href="/contact">Get Directions</Link>
                </Button>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-xs opacity-70">Office Hours: 8:30 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
