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
  Pencil, GraduationCap, Palette, Music, Wind, Rocket, Smile, Shapes, 
  Cloud, Star, Activity, Droplets, Shield, Eye, Target
} from 'lucide-react';
import { ContactForm } from '@/components/shared/ContactForm';
import { Counter } from '@/components/home/Counter';

const coreValues = [
  { icon: Heart, title: 'Compassion', desc: 'We cultivate kindness and empathy in every student.' },
  { icon: Search, title: 'Curiosity', desc: 'We nurture a love for learning that goes beyond the classroom.' },
  { icon: Trophy, title: 'Excellence', desc: 'We hold high standards for every child.' },
  { icon: ShieldCheck, title: 'Integrity', desc: 'Character grounded in honesty and strong ethics.' },
  { icon: Users, title: 'Inclusivity', desc: 'An environment where each child feels seen and valued.' },
  { icon: Globe, title: 'Responsibility', desc: 'Raising citizens who contribute to their community.' },
  { icon: BookOpen, title: 'Cultural Pride', desc: 'Growth rooted in identity and connection to Bangalore.' },
  { icon: Smile, title: 'Happiness', desc: 'A joyful environment is the foundation of learning.' },
];

const facilities = [
  { 
    icon: Monitor, 
    title: 'Smart Classrooms', 
    desc: 'Well-equipped with smart boards, projectors, and proper ventilation.',
    imageId: 'facility-smart-classroom'
  },
  { 
    icon: FlaskConical, 
    title: 'Science Laboratory', 
    desc: 'Hands-on learning for physics, chemistry, and biology.',
    imageId: 'facility-science-lab'
  },
  { 
    icon: Cpu, 
    title: 'Robotics Lab', 
    desc: 'Innovation and robotics lab for future-ready skills.',
    imageId: 'facility-robotics'
  },
  { 
    icon: LibraryIcon, 
    title: 'Digital Library', 
    desc: 'Resources including books, journals, and digital assets.',
    imageId: 'facility-library'
  },
  { 
    icon: Languages, 
    title: 'Language Lab', 
    desc: 'Focused training for communication and linguistic skills.',
    imageId: 'gallery-5'
  },
  { 
    icon: Zap, 
    title: 'Playground', 
    desc: 'Safe spaces for kindergarten and primary students.',
    imageId: 'facility-playground'
  },
  { 
    icon: Video, 
    title: 'Auditorium', 
    desc: 'A hub for cultural activities, seminars, and events.',
    imageId: 'facility-auditorium'
  },
  { 
    icon: Bus, 
    title: 'Transport', 
    desc: 'Safe and reliable school transport facility.',
    imageId: 'facility-transport'
  },
];

const principalImg = PlaceHolderImages.find(img => img.id === 'principal');
const chairmanImg = PlaceHolderImages.find(img => img.id === 'chairman');
const gallery = PlaceHolderImages.filter(img => img.id.startsWith('gallery'));

const ScribbleBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
    <div className="scribble-bg opacity-100"></div>
    <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100,200 Q250,50 400,200 T700,200" stroke="currentColor" strokeWidth="10" strokeDasharray="1000" className="text-primary animate-draw-line" />
      <path d="M50,800 Q300,950 600,800 T950,800" stroke="currentColor" strokeWidth="10" strokeDasharray="1000" className="text-secondary animate-draw-line" style={{ animationDelay: '1s' }} />
      <path d="M800,100 Q950,300 800,500 T800,900" stroke="currentColor" strokeWidth="10" strokeDasharray="1000" className="text-accent animate-draw-line" style={{ animationDelay: '2s' }} />
    </svg>
    
    <div className="absolute top-[15%] left-[10%] animate-float text-primary opacity-90" style={{ animationDelay: '0s' }}>
      <Pencil size={85} />
    </div>
    <div className="absolute top-[20%] right-[15%] animate-float text-secondary opacity-90" style={{ animationDelay: '1s' }}>
      <Rocket size={110} />
    </div>
    <div className="absolute bottom-[20%] left-[15%] animate-float text-accent opacity-90" style={{ animationDelay: '2s' }}>
      <GraduationCap size={95} />
    </div>
    <div className="absolute bottom-[25%] right-[20%] animate-float text-primary opacity-90" style={{ animationDelay: '1.5s' }}>
      <BookOpen size={90} />
    </div>
    <div className="absolute top-[50%] right-[5%] animate-float text-secondary opacity-90" style={{ animationDelay: '0.5s' }}>
      <Palette size={80} />
    </div>
    <div className="absolute top-[60%] left-[5%] animate-float text-accent opacity-90" style={{ animationDelay: '3.5s' }}>
      <Music size={75} />
    </div>
    <div className="absolute top-[10%] right-[40%] animate-float text-accent opacity-90" style={{ animationDelay: '4.5s' }}>
      <Wind size={85} />
    </div>

    <div className="absolute top-[5%] left-[30%] animate-float text-primary opacity-90" style={{ animationDelay: '2.5s' }}>
      <Cloud size={95} />
    </div>
    <div className="absolute bottom-[10%] left-[40%] animate-float text-secondary opacity-90" style={{ animationDelay: '1.2s' }}>
      <Shapes size={85} />
    </div>
    <div className="absolute bottom-[5%] right-[10%] animate-float text-primary opacity-90" style={{ animationDelay: '0.8s' }}>
      <Smile size={80} />
    </div>
    <div className="absolute top-[70%] right-[45%] animate-float text-accent opacity-90" style={{ animationDelay: '2.2s' }}>
      <Star size={70} />
    </div>
    <div className="absolute top-[35%] left-[12%] animate-float text-secondary opacity-90" style={{ animationDelay: '4s' }}>
      <Trophy size={90} />
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        <ScribbleBackground />
        
        <div className="relative z-10 text-center space-y-8 px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-primary animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Canaan Christ Public School
          </h1>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground italic animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            "Righteousness And Truth"
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-1" asChild>
              <Link href="/admissions">Admissions Open 2026-27</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-lg rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all" 
              asChild
            >
              <Link href="/contact">Book a Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative group/section transition-all duration-700 overflow-hidden">
        {/* Immersive background bubble triggered only when image is hovered */}
        <div className="absolute top-1/2 right-[25%] -translate-y-1/2 translate-x-1/2 w-0 h-0 bg-primary rounded-full transition-all duration-1000 ease-in-out group-hover/image:w-[300vw] group-hover/image:h-[300vw] pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-500 group-hover/image:bg-white group-hover/image:text-primary">
              Established 2001
            </div>
            <h2 className="text-4xl font-bold text-primary transition-colors duration-500 group-hover/image:text-white">Affordable, Quality Education for Every Child</h2>
            <p className="text-lg text-muted-foreground leading-relaxed transition-colors duration-500 group-hover/image:text-primary-foreground/90">
              Canaan Christ Public School offers a holistic learning environment under the State Syllabus, catering to students from Kindergarten to 10th Grade. Our mission is to empower every child—regardless of background—to grow intellectually, emotionally, and ethically.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl shadow-sm border hover:border-primary/20 transition-all duration-500 group-hover/image:bg-white/10 group-hover/image:border-white/20 group-hover/image:shadow-none">
                <div className="text-3xl font-bold text-primary mb-1 transition-colors duration-500 group-hover/image:text-white">K-10</div>
                <div className="text-sm text-muted-foreground font-medium transition-colors duration-500 group-hover/image:text-white/80">Classes Offered</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border hover:border-primary/20 transition-all duration-500 group-hover/image:bg-white/10 group-hover/image:border-white/20 group-hover/image:shadow-none">
                <div className="text-3xl font-bold text-primary mb-1 transition-colors duration-500 group-hover/image:text-white">State</div>
                <div className="text-sm text-muted-foreground font-medium transition-colors duration-500 group-hover/image:text-white/80">Syllabus</div>
              </div>
            </div>
            <Button variant="link" className="p-0 text-primary font-bold group text-lg transition-colors duration-500 group-hover/image:text-white" asChild>
              <Link href="/about">
                Our vision and values <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
          </div>
          <div className="group/image relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 hover:scale-105 hover:shadow-primary/40 hover:border-white/50">
            {gallery[0]?.imageUrl && (
              <Image 
                src={gallery[0].imageUrl} 
                alt="Classroom" 
                fill 
                className="object-cover transition-transform duration-700"
                data-ai-hint="classroom students"
              />
            )}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 bg-primary rounded-[3rem] text-primary-foreground shadow-xl space-y-6 hover:-translate-y-2 transition-all relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 text-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 pointer-events-none rotate-12">
              <Eye size={240} strokeWidth={1} />
            </div>
            <h3 className="text-3xl font-bold relative z-10">Our Vision</h3>
            <p className="text-lg opacity-90 leading-relaxed relative z-10">
              To nurture compassionate, curious, and confident learners who contribute meaningfully to society, while rooted in values, culture, and excellence.
            </p>
          </div>
          <div className="p-12 bg-secondary rounded-[3rem] text-secondary-foreground shadow-xl space-y-6 hover:-translate-y-2 transition-all relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 text-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 pointer-events-none -rotate-12">
              <Target size={240} strokeWidth={1} />
            </div>
            <h3 className="text-3xl font-bold relative z-10">Our Mission</h3>
            <p className="text-lg opacity-90 leading-relaxed relative z-10">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <div key={i} className="p-5 bg-white rounded-[1.5rem] shadow-sm border hover:shadow-xl hover:border-primary/20 transition-all group flex flex-col gap-3 text-left hover:-rotate-1 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:animate-wiggle shrink-0">
                    <v.icon size={20} />
                  </div>
                  <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{v.title}</h4>
                </div>
                <p className="text-muted-foreground text-[11px] leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">{v.desc}</p>
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
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all" asChild>
              <Link href="/contact">Inquire for Visit</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {facilities.map((f, i) => {
              const facilityImage = PlaceHolderImages.find(img => img.id === f.imageId);
              return (
                <div key={i} className="group relative h-80 overflow-hidden rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                    {facilityImage && (
                      <Image 
                        src={facilityImage.imageUrl} 
                        alt={f.title} 
                        fill 
                        className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                        data-ai-hint={facilityImage.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
                  </div>

                  <div className="relative h-full p-10 flex flex-col justify-between z-10 transition-all duration-500">
                    <div className="shrink-0 w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-white group-hover:text-primary transition-all duration-300">
                      <f.icon size={28} />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-2xl font-bold text-foreground group-hover:text-white transition-colors">
                        {f.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-white/90 transition-all duration-300 line-clamp-2 group-hover:line-clamp-none">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <h2 className="text-4xl font-bold text-primary text-center">School Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="overflow-hidden border-none shadow-2xl rounded-[3rem]">
              <div className="relative h-96">
                {chairmanImg?.imageUrl && (
                  <Image src={chairmanImg.imageUrl} alt="Chairman" fill className="object-cover" />
                )}
              </div>
              <CardContent className="p-10 text-center bg-white">
                <h4 className="text-2xl font-bold">Chairman's Vision</h4>
                <p className="text-primary font-bold mb-4">"Education is a right, not a privilege."</p>
                <p className="text-sm text-muted-foreground italic leading-relaxed">"We don’t just prepare students for exams—we prepare them for life, leadership, and a future they can shape with their own hands."</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none shadow-2xl rounded-[3rem]">
              <div className="relative h-96">
                {principalImg?.imageUrl && (
                  <Image src={principalImg.imageUrl} alt="Principal" fill className="object-cover" />
                )}
              </div>
              <CardContent className="p-10 text-center bg-white">
                <h4 className="text-2xl font-bold">Principal's Message</h4>
                <p className="text-primary font-bold mb-4">"Rooted in values, culture, and excellence."</p>
                <p className="text-sm text-muted-foreground italic leading-relaxed">"We foster an inclusive environment that nurtures intellectual, emotional, and ethical growth for every child."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="text-7xl md:text-9xl font-black text-white">
              <Counter end={100} />
            </div>
            <div className="text-2xl md:text-3xl font-bold opacity-90 uppercase tracking-widest text-accent">Board Exam Record</div>
            <p className="max-w-xl opacity-75 mt-4 text-lg">We are proud to have maintained a 100% pass record in the Grade 10 Board Examinations year after year.</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-secondary rounded-[4rem] p-12 md:p-24 text-center text-white space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Admissions Open 2026–27</h2>
            <div className="flex flex-wrap justify-center gap-8 text-xl font-medium">
              <span className="flex items-center gap-3"><CheckCircle2 className="text-accent" /> No Admission Fee</span>
              <span className="flex items-center gap-3"><CheckCircle2 className="text-accent" /> No Donation Policy</span>
              <span className="flex items-center gap-3"><CheckCircle2 className="text-accent" /> KG to 10th Grade</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
              <Button size="lg" variant="default" className="bg-white text-secondary hover:bg-gray-100 font-bold h-16 px-12 text-lg rounded-full shadow-xl" asChild>
                <Link href="/admissions">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-secondary h-16 px-12 text-lg rounded-full font-bold transition-colors" asChild>
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
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 text-primary rounded-2xl shadow-sm"><MapPin size={28} /></div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Address</h4>
                  <p className="text-muted-foreground text-lg">No.6 1st Crs, 9th Mn Rd, BTM 1st Stage, Bengaluru, KA 560029</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 text-primary rounded-2xl shadow-sm"><Phone size={28} /></div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Call Us</h4>
                  <p className="text-muted-foreground text-lg">+91 80 1234 5678</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-2xl border border-muted/50">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
