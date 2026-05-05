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
  Cloud, Activity, Droplets, Shield, Eye, Target
} from 'lucide-react';
import { ContactForm } from '@/components/shared/ContactForm';
import { Counter } from '@/components/home/Counter';
import { TypingEffect } from '@/components/home/TypingEffect';
import { cn } from '@/lib/utils';

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
    desc: 'Well-equipped with smart boards, projectors, and proper ventilation for an interactive learning experience.',
    imageId: 'facility-smart-classroom'
  },
  { 
    icon: FlaskConical, 
    title: 'Science Laboratory', 
    desc: 'Hands-on learning for physics, chemistry, and biology with modern equipment and safety standards.',
    imageId: 'facility-science-lab'
  },
  { 
    icon: Cpu, 
    title: 'Robotics Lab', 
    desc: 'Innovation and robotics lab equipped with the latest technology to foster future-ready STEM skills.',
    imageId: 'facility-robotics'
  },
  { 
    icon: LibraryIcon, 
    title: 'Digital Library', 
    desc: 'A vast collection of resources including traditional books, academic journals, and modern digital assets.',
    imageId: 'facility-library'
  },
  { 
    icon: Languages, 
    title: 'Language Lab', 
    desc: 'Focused training for communication and linguistic skills to excel in a globalized environment.',
    imageId: 'facility-language'
  },
  { 
    icon: Zap, 
    title: 'Playground', 
    desc: 'Safe, colorful, and engaging spaces designed specifically for kindergarten and primary students to play and grow.',
    imageId: 'facility-playground'
  },
  { 
    icon: Video, 
    title: 'Auditorium', 
    desc: 'A vibrant hub for cultural activities, academic seminars, student performances, and school events.',
    imageId: 'facility-auditorium'
  },
  { 
    icon: Bus, 
    title: 'Transport', 
    desc: 'Safe, reliable, and well-monitored school transport facility covering major routes in the BTM Layout area.',
    imageId: 'facility-transport'
  },
];

const gallery = PlaceHolderImages.filter(img => img.id.startsWith('gallery'));
const achievementImages = PlaceHolderImages.filter(img => img.id.startsWith('achievement-'));
const chairmanImg = PlaceHolderImages.find(img => img.id === 'chairman');
const principalImg = PlaceHolderImages.find(img => img.id === 'principal');

const ScribbleBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
    <div className="scribble-bg opacity-100"></div>
    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100,200 Q250,50 400,200 T700,200" stroke="currentColor" strokeWidth="1" strokeDasharray="1000" className="text-primary animate-draw-line" />
      <path d="M50,800 Q300,950 600,800 T950,800" stroke="currentColor" strokeWidth="1" strokeDasharray="1000" className="text-secondary animate-draw-line" style={{ animationDelay: '1s' }} />
      <path d="M800,100 Q950,300 800,500 T800,900" stroke="currentColor" strokeWidth="1" strokeDasharray="1000" className="text-accent animate-draw-line" style={{ animationDelay: '2s' }} />
    </svg>
    
    <div className="absolute top-[15%] left-[10%] animate-float text-primary opacity-25" style={{ animationDelay: '0s' }}>
      <Pencil className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24" strokeWidth={1} />
    </div>
    <div className="absolute top-[20%] right-[15%] animate-float text-secondary opacity-25" style={{ animationDelay: '1s' }}>
      <Rocket className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" strokeWidth={1} />
    </div>
    <div className="absolute bottom-[20%] left-[15%] animate-float text-accent opacity-25" style={{ animationDelay: '2s' }}>
      <GraduationCap className="w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28" strokeWidth={1} />
    </div>
    <div className="absolute bottom-[25%] right-[20%] animate-float text-primary opacity-25" style={{ animationDelay: '1.5s' }}>
      <BookOpen className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24" strokeWidth={1} />
    </div>
    <div className="absolute top-[50%] right-[5%] animate-float text-secondary opacity-25" style={{ animationDelay: '0.5s' }}>
      <Palette className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24" strokeWidth={1} />
    </div>
    <div className="absolute top-[60%] left-[5%] animate-float text-accent opacity-25" style={{ animationDelay: '3.5s' }}>
      <Music className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" strokeWidth={1} />
    </div>
    <div className="absolute top-[10%] right-[40%] animate-float text-accent opacity-25" style={{ animationDelay: '4.5s' }}>
      <Wind className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24" strokeWidth={1} />
    </div>
    <div className="absolute top-[5%] left-[30%] animate-float text-primary opacity-25" style={{ animationDelay: '2.5s' }}>
      <Cloud className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28" strokeWidth={1} />
    </div>
    <div className="absolute bottom-[10%] left-[40%] animate-float text-secondary opacity-25" style={{ animationDelay: '1.2s' }}>
      <Shapes className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24" strokeWidth={1} />
    </div>
    <div className="absolute bottom-[5%] right-[10%] animate-float text-primary opacity-25" style={{ animationDelay: '0.8s' }}>
      <Smile className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24" strokeWidth={1} />
    </div>
    <div className="absolute top-[35%] left-[12%] animate-float text-secondary opacity-25" style={{ animationDelay: '4s' }}>
      <Trophy className="w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28" strokeWidth={1} />
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        <ScribbleBackground />
        
        <div className="relative z-10 text-center space-y-4 px-6 max-w-4xl">
          <div className="space-y-4">
            <h1 className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="text-5xl md:text-8xl lg:text-9xl font-brand tracking-widest uppercase text-primary leading-[0.8]">
                Canaan Christ
              </span>
              <span className="text-lg md:text-2xl lg:text-3xl font-brand tracking-[0.4em] uppercase text-muted-foreground/60 mt-4">
                Public School
              </span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-muted-foreground italic animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              "Righteousness And Truth"
            </p>
            <TypingEffect />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000">
            <Button size="lg" className="h-12 px-8 text-lg rounded-full shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-1" asChild>
              <Link href="/admissions">Admissions Open 2026-27</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-12 px-8 text-lg rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all" 
              asChild
            >
              <Link href="/contact">Book a Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative aspect-video rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-[6px] md:border-[12px] border-white ring-1 ring-border/20">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/PE4r5NmBrVM"
              title="Canaan Christ Public School Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-white relative group/section transition-all duration-700 overflow-hidden">
        <div className="absolute top-1/2 right-[25%] -translate-y-1/2 translate-x-1/2 w-0 h-0 bg-primary rounded-full transition-all duration-1000 ease-in-out group-has-[.image-trigger:hover]/section:w-[300vw] group-has-[.image-trigger:hover]/section:h-[300vw] pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-500 group-has-[.image-trigger:hover]/section:bg-white group-has-[.image-trigger:hover]/section:text-primary">
              Established 2001
            </div>
            <h2 className="text-3xl md:text-5xl font-brand font-bold text-primary transition-colors duration-500 group-has-[.image-trigger:hover]/section:text-white">Affordable, Quality Education for Every Child</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed transition-colors duration-500 group-has-[.image-trigger:hover]/section:text-white/90">
              Canaan Christ Public School offers a holistic learning environment under the State Syllabus, catering to students from Kindergarten to 10th Grade. Our mission is to empower every child—regardless of background—to grow intellectually, emotionally, and ethically.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-2xl shadow-sm border hover:border-primary/20 transition-all duration-500 group-has-[.image-trigger:hover]/section:bg-white/10 group-has-[.image-trigger:hover]/section:border-white/20 group-has-[.image-trigger:hover]/section:shadow-none">
                <div className="text-3xl font-bold text-primary mb-1 transition-colors duration-500 group-has-[.image-trigger:hover]/section:text-white">K-10</div>
                <div className="text-xs text-muted-foreground font-bold transition-colors duration-500 group-has-[.image-trigger:hover]/section:text-white/80 uppercase">Classes Offered</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border hover:border-primary/20 transition-all duration-500 group-has-[.image-trigger:hover]/section:bg-white/10 group-has-[.image-trigger:hover]/section:border-white/20 group-has-[.image-trigger:hover]/section:shadow-none">
                <div className="text-3xl font-bold text-primary mb-1 transition-colors duration-500 group-has-[.image-trigger:hover]/section:text-white">State</div>
                <div className="text-xs text-muted-foreground font-bold transition-colors duration-500 group-has-[.image-trigger:hover]/section:text-white/80 uppercase">Syllabus</div>
              </div>
            </div>
            <Button variant="link" className="p-0 text-primary font-bold group text-lg transition-colors duration-500 group-has-[.image-trigger:hover]/section:text-white" asChild>
              <Link href="/about">
                Our vision and values <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
          </div>
          <div className="image-trigger relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 hover:scale-105 hover:shadow-primary/40 hover:border-white/50 cursor-pointer">
            <Image 
              src="/assets/CanaanChristSchool.png" 
              alt="School Campus" 
              fill 
              className="object-cover transition-transform duration-700"
              data-ai-hint="school building"
            />
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 md:p-10 bg-primary rounded-[2.5rem] text-primary-foreground shadow-xl space-y-4 hover:-translate-y-2 transition-all relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 text-white/40 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 pointer-events-none rotate-12">
              <Eye size={240} strokeWidth={1} />
            </div>
            <h2 className="text-2xl md:text-3xl font-brand font-bold relative z-10">Our Vision</h2>
            <p className="text-base md:text-lg opacity-90 leading-relaxed relative z-10">
              To nurture compassionate, curious, and confident learners who contribute meaningfully to society, while rooted in values, culture, and excellence.
            </p>
          </div>
          <div className="p-8 md:p-10 bg-secondary rounded-[2.5rem] text-secondary-foreground shadow-xl space-y-4 hover:-translate-y-2 transition-all relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 text-white/40 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 pointer-events-none -rotate-12">
              <Target size={240} strokeWidth={1} />
            </div>
            <h2 className="text-2xl md:text-3xl font-brand font-bold relative z-10">Our Mission</h2>
            <p className="text-base md:text-lg opacity-90 leading-relaxed relative z-10">
              Our mission is to provide affordable, quality education that empowers every child—regardless of background—to grow intellectually, emotionally, and ethically. We aim to foster an inclusive learning environment that encourages creativity, critical thinking, and a deep sense of social responsibility, while staying connected to the local community and culture of Bangalore.
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-brand font-bold text-primary">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">The pillars that define the character and conduct of every student at Canaan Christ.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValues.map((v, i) => (
              <div key={i} className="p-6 bg-white rounded-[1.5rem] shadow-sm border hover:shadow-xl hover:border-primary/20 transition-all group flex flex-col gap-3 text-left hover:-rotate-1 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:animate-wiggle shrink-0">
                    <v.icon size={20} strokeWidth={1} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{v.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-brand font-bold text-primary">Campus Facilities</h2>
              <p className="text-muted-foreground max-md text-sm md:text-base">Investing in infrastructure to support intellectual and creative growth.</p>
            </div>
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all" asChild>
              <Link href="/contact">Inquire for Visit</Link>
            </Button>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[350px]">
              {facilities.slice(0, 4).map((f, i) => {
                const facilityImage = PlaceHolderImages.find(img => img.id === f.imageId);
                return (
                  <div key={i} className="group relative flex-1 overflow-hidden rounded-[2.5rem] border bg-white transition-all duration-700 ease-in-out md:hover:flex-[2.5] shadow-sm hover:shadow-2xl cursor-pointer">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                      {facilityImage?.imageUrl && (
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

                    <div className="relative h-full p-8 flex flex-col justify-between z-10 transition-all duration-500">
                      <div className="shrink-0 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-white group-hover:text-primary transition-all duration-300">
                        <f.icon size={24} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold text-foreground group-hover:text-white transition-colors whitespace-nowrap">
                          {f.title}
                        </h4>
                        <div className="overflow-hidden">
                          <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-white/90 transition-all duration-500 line-clamp-2 md:line-clamp-3 group-hover:line-clamp-none max-w-sm">
                            {f.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[350px]">
              {facilities.slice(4, 8).map((f, i) => {
                const facilityImage = PlaceHolderImages.find(img => img.id === f.imageId);
                return (
                  <div key={i} className="group relative flex-1 overflow-hidden rounded-[2.5rem] border bg-white transition-all duration-700 ease-in-out md:hover:flex-[2.5] shadow-sm hover:shadow-2xl cursor-pointer">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                      {facilityImage?.imageUrl && (
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

                    <div className="relative h-full p-8 flex flex-col justify-between z-10 transition-all duration-500">
                      <div className="shrink-0 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-white group-hover:text-primary transition-all duration-300">
                        <f.icon size={24} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold text-foreground group-hover:text-white transition-colors whitespace-nowrap">
                          {f.title}
                        </h4>
                        <div className="overflow-hidden">
                          <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-white/90 transition-all duration-500 line-clamp-2 md:line-clamp-3 group-hover:line-clamp-none max-w-sm">
                            {f.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-brand font-bold text-primary">Campus Moments</h2>
              <p className="text-muted-foreground max-w-md text-sm md:text-base">Captured joy, learning, and growth in our school gallery and campus tour.</p>
            </div>
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all" asChild>
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            <div className="relative col-span-2 md:col-span-3 aspect-video rounded-xl overflow-hidden shadow-lg border-4 border-white group">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Kk4pM6j1uZs"
                title="Canaan Christ Campus Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {gallery.slice(0, 3).map((img, idx) => {
              const tilts = ["rotate-1", "-rotate-2", "rotate-2"];
              return (
                <div key={img.id} className={cn(
                  "relative rounded-xl overflow-hidden group shadow-lg border-4 border-white transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-20 cursor-pointer aspect-square md:aspect-auto",
                  idx === 0 ? "md:col-span-1" : "md:col-span-1",
                  tilts[idx]
                )}>
                  <Image 
                    src={img.imageUrl} 
                    alt={img.description} 
                    fill 
                    className="object-cover transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                    <span className="text-white text-xs md:text-sm font-bold">{img.description}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl md:text-4xl font-brand font-bold text-primary text-center">School Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden border-none shadow-2xl rounded-[2.5rem]">
              <div className="relative h-80 md:h-96">
                {chairmanImg?.imageUrl && (
                  <Image src={chairmanImg.imageUrl} alt="Founders" fill className="object-cover" />
                )}
              </div>
              <CardContent className="p-8 text-center bg-white">
                <h4 className="text-2xl font-bold">Founders' Vision</h4>
                <p className="text-primary font-bold mb-3">"Education is a right, not a privilege."</p>
                <p className="text-sm text-muted-foreground italic leading-relaxed">"We don’t just prepare students for exams—we prepare them for life and leadership."</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none shadow-2xl rounded-[2.5rem]">
              <div className="relative h-80 md:h-96">
                {principalImg?.imageUrl && (
                  <Image src={principalImg.imageUrl} alt="Principal" fill className="object-cover" />
                )}
              </div>
              <CardContent className="p-8 text-center bg-white">
                <h4 className="text-2xl font-bold">Principal's Message</h4>
                <p className="text-primary font-bold mb-3">"Rooted in values, culture, and excellence."</p>
                <p className="text-sm text-muted-foreground italic leading-relaxed">"We foster an inclusive environment that nurtures intellectual and emotional growth."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden flex items-center h-[350px] md:h-[450px]">
        <div className="absolute inset-0 z-0 pointer-events-none flex flex-col justify-center overflow-hidden bg-black">
          <div className="flex animate-marquee whitespace-nowrap min-w-full items-center gap-0">
            {achievementImages.map((img, idx) => (
              <div key={`scroll-1-${idx}`} className="relative h-[350px] md:h-[450px] aspect-[16/9] min-w-[400px] md:min-w-[800px] overflow-hidden">
                <Image src={img.imageUrl} alt="" fill className="object-cover grayscale opacity-60" />
              </div>
            ))}
            {achievementImages.map((img, idx) => (
              <div key={`scroll-1-dup-${idx}`} className="relative h-[350px] md:h-[450px] aspect-[16/9] min-w-[400px] md:min-w-[800px] overflow-hidden">
                <Image src={img.imageUrl} alt="" fill className="object-cover grayscale opacity-60" />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full py-6 md:py-10">
          <div className="flex flex-col items-center gap-2">
            <div className="text-7xl md:text-[12rem] font-black text-white leading-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
              <Counter end={100} />
            </div>
            <div className="text-2xl md:text-5xl font-black text-accent uppercase tracking-wider drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
              Board Exam Record
            </div>
            <p className="max-w-2xl text-white mt-4 text-base md:text-2xl font-bold leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,1)] px-4">
              We are proud to have maintained a 100% pass record in the Grade 10 Board Examinations year after year.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-secondary rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 text-center text-white space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-brand font-bold tracking-normal">Admissions Open 2026–27</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-lg font-medium">
              <span className="flex items-center gap-2"><CheckCircle2 className="text-accent" size={20} /> No Admission Fee</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="text-accent" size={20} /> No Donation Policy</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="text-accent" size={20} /> KG to 10th Grade</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" variant="default" className="bg-white text-secondary hover:bg-gray-100 font-bold h-12 md:h-14 px-8 md:px-12 text-lg rounded-full shadow-xl" asChild>
                <Link href="/admissions">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-secondary h-12 md:h-14 px-8 md:px-12 text-lg rounded-full font-bold transition-colors" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-brand font-bold text-primary">Get in Touch</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Have questions about admissions or school policies? Our team is ready to help you.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl shadow-sm"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Address</h4>
                  <p className="text-muted-foreground text-base">No.6 1st Crs, 9th Mn Rd, BTM 1st Stage, Bengaluru, KA 560029</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl shadow-sm"><Phone size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-muted-foreground text-base">+91 80 1234 5678</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-muted/50">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
