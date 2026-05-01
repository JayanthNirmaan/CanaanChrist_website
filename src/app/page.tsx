import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Heart, Search, Trophy, ShieldCheck, Users, Globe, BookOpen,
  Monitor, FlaskConical, Library as LibraryIcon, Zap, Video, Bus,
  ArrowRight, CheckCircle2, MapPin, Phone, Cpu, Languages,
  Presentation, Activity, Droplets, Shield, Pencil, GraduationCap, 
  Palette, Music, Wind
} from 'lucide-react';
import { ContactForm } from '@/components/shared/ContactForm';

const coreValues = [
  { icon: Heart, title: 'Compassion', desc: 'We cultivate kindness and empathy in every student — teaching them to see, understand, and care for the world.' },
  { icon: Search, title: 'Curiosity', desc: 'We nurture a love for learning that goes beyond the classroom, encouraging students to ask questions and explore.' },
  { icon: Trophy, title: 'Excellence', desc: 'We hold ourselves to the highest standards, believing that every child is capable of achieving their best.' },
  { icon: ShieldCheck, title: 'Integrity', desc: 'We build character grounded in honesty, ethics, and a strong moral compass that guides students in life.' },
  { icon: Users, title: 'Inclusivity', desc: 'We welcome every child and create an environment where each one feels seen, valued, and empowered.' },
  { icon: Globe, title: 'Social Responsibility', desc: 'We raise aware citizens who contribute meaningfully to their community and society.' },
  { icon: BookOpen, title: 'Cultural Rootedness', desc: 'We take pride in our connection to the local culture of Bangalore, helping students grow with identity.' },
];

const facilities = [
  { icon: Monitor, title: 'Smart Classrooms', desc: 'Well-equipped with smart boards, projectors, and proper ventilation.' },
  { icon: FlaskConical, title: 'Science Laboratory', desc: 'Hands-on learning for physics, chemistry, and biology.' },
  { icon: Cpu, title: 'Robotics Lab', desc: 'Innovation and robotics lab for future-ready skills.' },
  { icon: LibraryIcon, title: 'Digital Library', desc: 'Resources including books, journals, and digital assets.' },
  { icon: Languages, title: 'Language Lab', desc: 'Focused training for communication and linguistic skills.' },
  { icon: Zap, title: 'Playpen & Playground', desc: 'Safe spaces for kindergarten and primary students.' },
  { icon: Video, title: 'Auditorium', desc: 'A hub for cultural activities, seminars, and events.' },
  { icon: Activity, title: 'First-Aid', desc: 'On-campus first-aid facility for student health and safety.' },
  { icon: Droplets, title: 'Clean Water', desc: 'Safe and clean drinking water facilities for everyone.' },
  { icon: Shield, title: 'Hygienic Restrooms', desc: 'Maintained and clean sanitation facilities.' },
  { icon: Bus, title: 'Transport', desc: 'Safe and reliable school transport facility.' },
];

const principalImg = PlaceHolderImages.find(img => img.id === 'principal');
const chairmanImg = PlaceHolderImages.find(img => img.id === 'chairman');
const gallery = PlaceHolderImages.filter(img => img.id.startsWith('gallery'));

const ScribbleBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
    <div className="scribble-bg opacity-40"></div>
    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100,200 Q250,50 400,200 T700,200" stroke="currentColor" strokeWidth="2" strokeDasharray="1000" className="text-primary animate-draw-line" />
      <path d="M50,800 Q300,950 600,800 T950,800" stroke="currentColor" strokeWidth="2" strokeDasharray="1000" className="text-secondary animate-draw-line" style={{ animationDelay: '1s' }} />
      <path d="M800,100 Q950,300 800,500 T800,900" stroke="currentColor" strokeWidth="2" strokeDasharray="1000" className="text-accent animate-draw-line" style={{ animationDelay: '2s' }} />
    </svg>
    <div className="absolute top-[15%] left-[10%] animate-float text-primary/20" style={{ animationDelay: '0s' }}>
      <Pencil size={64} />
    </div>
    <div className="absolute top-[20%] right-[15%] animate-float text-secondary/20" style={{ animationDelay: '1s' }}>
      <Wind size={80} />
    </div>
    <div className="absolute bottom-[20%] left-[15%] animate-float text-accent/20" style={{ animationDelay: '2s' }}>
      <GraduationCap size={72} />
    </div>
    <div className="absolute bottom-[25%] right-[20%] animate-float text-primary/20" style={{ animationDelay: '1.5s' }}>
      <BookOpen size={64} />
    </div>
    <div className="absolute top-[50%] right-[5%] animate-float text-secondary/20" style={{ animationDelay: '0.5s' }}>
      <Palette size={56} />
    </div>
    <div className="absolute top-[60%] left-[5%] animate-float text-accent/20" style={{ animationDelay: '3s' }}>
      <Music size={48} />
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        <ScribbleBackground />
        
        <div className="relative z-10 text-center space-y-8 px-6 max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-primary">Canaan Christ Public School</h1>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground italic">"Righteousness And Truth"</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full" asChild>
              <Link href="/admissions">Admissions Open 2026-27</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-primary text-primary hover:bg-primary/5" asChild>
              <Link href="/contact">Book a Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
              Established 2001
            </div>
            <h2 className="text-4xl font-bold text-primary">Affordable, Quality Education for Every Child</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Canaan Christ Public School offers a holistic learning environment under the State Syllabus, catering to students from Kindergarten to 10th Grade. Our mission is to empower every child—regardless of background—to grow intellectually, emotionally, and ethically.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-xl shadow-sm border">
                <div className="text-3xl font-bold text-primary mb-1">K-10</div>
                <div className="text-sm text-muted-foreground">Classes Offered</div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border">
                <div className="text-3xl font-bold text-primary mb-1">State</div>
                <div className="text-sm text-muted-foreground">Syllabus</div>
              </div>
            </div>
            <Button variant="link" className="p-0 text-primary font-bold group" asChild>
              <Link href="/about">
                Our vision and values <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            {gallery[0]?.imageUrl && (
              <Image 
                src={gallery[0].imageUrl} 
                alt="Classroom" 
                fill 
                className="object-cover"
                data-ai-hint="classroom students"
              />
            )}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 bg-primary rounded-[2rem] text-primary-foreground shadow-xl space-y-6">
            <h3 className="text-3xl font-bold">Our Vision</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              To nurture compassionate, curious, and confident learners who contribute meaningfully to society, while rooted in values, culture, and excellence.
            </p>
          </div>
          <div className="p-12 bg-secondary rounded-[2rem] text-secondary-foreground shadow-xl space-y-6">
            <h3 className="text-3xl font-bold">Our Mission</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Providing affordable, quality education that empowers every child—regardless of background—to grow intellectually, emotionally, and ethically. We aim to foster an inclusive learning environment that encourages creativity and critical thinking.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-primary">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The pillars that define the character and conduct of every student at Canaan Christ.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((v, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl shadow-sm border hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <v.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">{v.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-primary">Campus Facilities</h2>
              <p className="text-muted-foreground max-w-md">Investing in infrastructure to support intellectual and creative growth.</p>
            </div>
            <Button variant="outline" className="rounded-full" asChild><Link href="/contact">Inquire for Visit</Link></Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {facilities.map((f, i) => (
              <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl bg-white hover:border-primary/20 shadow-sm transition-all border">
                <div className="shrink-0 w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                  <f.icon size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{f.title}</h4>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <h2 className="text-4xl font-bold text-primary text-center">School Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-96">
                {chairmanImg?.imageUrl && (
                  <Image src={chairmanImg.imageUrl} alt="Chairman" fill className="object-cover" />
                )}
              </div>
              <CardContent className="p-8 text-center bg-white">
                <h4 className="text-2xl font-bold">Chairman's Vision</h4>
                <p className="text-primary font-medium mb-4">"Education is a right, not a privilege."</p>
                <p className="text-sm text-muted-foreground italic">"We don’t just prepare students for exams—we prepare them for life, leadership, and a future they can shape with their own hands."</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-96">
                {principalImg?.imageUrl && (
                  <Image src={principalImg.imageUrl} alt="Principal" fill className="object-cover" />
                )}
              </div>
              <CardContent className="p-8 text-center bg-white">
                <h4 className="text-2xl font-bold">Principal's Message</h4>
                <p className="text-primary font-medium mb-4">"Rooted in values, culture, and excellence."</p>
                <p className="text-sm text-muted-foreground italic">"We foster an inclusive environment that nurtures intellectual, emotional, and ethical growth for every child."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="text-6xl md:text-8xl font-black">100%</div>
            <div className="text-2xl md:text-3xl font-bold opacity-90 uppercase tracking-widest">Board Exam Record</div>
            <p className="max-w-xl opacity-75 mt-4">We are proud to have maintained a 100% pass record in the Grade 10 Board Examinations year after year.</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-secondary rounded-[3rem] p-12 md:p-24 text-center text-white space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold">Admissions Open 2026–27</h2>
            <div className="flex flex-wrap justify-center gap-6 text-xl">
              <span className="flex items-center gap-2"><CheckCircle2 className="text-white" /> No Admission Fee</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="text-white" /> No Donation Policy</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="text-white" /> KG to 10th Grade</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" variant="default" className="bg-white text-secondary hover:bg-gray-100 font-bold h-14 px-10 rounded-full" asChild>
                <Link href="/admissions">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-10 rounded-full" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-primary">Get in Touch</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about admissions or school policies? Our team is ready to help you. Fill out the form or reach out via our contact details.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-muted-foreground">No.6 1st Crs, 9th Mn Rd, BTM 1st Stage, Bengaluru, KA 560029</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg"><Phone size={24} /></div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-muted-foreground">+91 80 1234 5678</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-[2rem] shadow-xl border">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}