
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import { 
  Heart, Search, Trophy, ShieldCheck, Users, Globe, BookOpen,
  Monitor, FlaskConical, Library as LibraryIcon, Zap, Video, Bus,
  ArrowRight, CheckCircle2, MapPin, Phone
} from 'lucide-react';
import { ContactForm } from '@/components/shared/ContactForm';

const coreValues = [
  { icon: Heart, title: 'Compassion', desc: 'Empathy and kindness in every action.' },
  { icon: Search, title: 'Curiosity', desc: 'Fostering a lifelong love for learning.' },
  { icon: Trophy, title: 'Excellence', desc: 'Aspiring for high standards in all pursuits.' },
  { icon: ShieldCheck, title: 'Integrity', desc: 'Upholding honesty and strong moral principles.' },
  { icon: Users, title: 'Inclusivity', desc: 'Welcoming diversity and ensuring belonging.' },
  { icon: Globe, title: 'Social Responsibility', desc: 'Contributing positively to the community.' },
  { icon: BookOpen, title: 'Cultural Rootedness', desc: 'Connecting education with rich traditions.' },
];

const facilities = [
  { icon: Monitor, title: 'Smart Classrooms', desc: 'Interactive digital learning spaces.' },
  { icon: FlaskConical, title: 'Modern Labs', desc: 'Well-equipped science and computer labs.' },
  { icon: LibraryIcon, title: 'Vast Library', desc: 'Diverse collection for every curious mind.' },
  { icon: Zap, title: 'Playground', desc: 'Safe spaces for physical development.' },
  { icon: Video, title: 'CCTV Security', desc: '24/7 campus surveillance for safety.' },
  { icon: Bus, title: 'Transport', desc: 'Safe and reliable school bus services.' },
];

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');
const principalImg = PlaceHolderImages.find(img => img.id === 'principal');
const chairmanImg = PlaceHolderImages.find(img => img.id === 'chairman');
const gallery = PlaceHolderImages.filter(img => img.id.startsWith('gallery'));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <Image
          src={heroImage?.imageUrl || 'https://picsum.photos/seed/school-hero/1920/1080'}
          alt="School Campus"
          fill
          className="object-cover brightness-[0.4]"
          priority
          data-ai-hint="modern school campus"
        />
        <div className="relative z-10 text-center space-y-8 px-6 max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Canaan Christ Public School</h1>
          <p className="text-xl md:text-2xl font-medium text-white/90 italic">"Righteousness And Truth"</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 text-lg" asChild>
              <Link href="/admissions">Admissions Open 2026-27</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/10 hover:bg-white/20 border-white">
              <Link href="/contact">Book a Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
              Established 2001
            </div>
            <h2 className="text-4xl font-bold text-primary">Nurturing Minds Since Two Decades</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Canaan Christ Public School offers a holistic learning environment under the State Syllabus, catering to students from KG to 10th Grade. Our mission is to integrate academic excellence with moral character.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-xl shadow-sm border">
                <div className="text-3xl font-bold text-primary mb-1">KG-10</div>
                <div className="text-sm text-muted-foreground">Classes Offered</div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border">
                <div className="text-3xl font-bold text-primary mb-1">State</div>
                <div className="text-sm text-muted-foreground">Syllabus</div>
              </div>
            </div>
            <Button variant="link" className="p-0 text-primary font-bold group" asChild>
              <Link href="/about">
                Learn more about our journey <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src={gallery[0]?.imageUrl || 'https://picsum.photos/seed/class/600/400'} 
              alt="Classroom" 
              fill 
              className="object-cover"
              data-ai-hint="classroom students"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 bg-primary rounded-[2rem] text-primary-foreground space-y-6">
            <h3 className="text-3xl font-bold">Our Vision</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              To be a premier educational institution that fosters intellectual curiosity, moral integrity, and a spirit of service, empowering students to lead and excel in a dynamic world.
            </p>
          </div>
          <div className="p-12 bg-secondary rounded-[2rem] text-secondary-foreground space-y-6">
            <h3 className="text-3xl font-bold">Our Mission</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Providing a nurturing environment that encourages academic excellence, creativity, and social responsibility, grounded in the values of righteousness and truth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-primary">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The pillars that define the character and conduct of every student at Canaan.</p>
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

      {/* Facilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-primary">Modern Facilities</h2>
              <p className="text-muted-foreground max-w-md">Investing in world-class infrastructure for an immersive learning experience.</p>
            </div>
            <Button variant="outline" asChild><Link href="/contact">View All Facilities</Link></Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((f, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl bg-background hover:bg-white border hover:border-primary/20 transition-all">
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

      {/* Leadership */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <h2 className="text-4xl font-bold text-primary text-center">School Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-96">
                <Image src={chairmanImg?.imageUrl || 'https://picsum.photos/seed/chairman/400/500'} alt="Chairman" fill className="object-cover" />
              </div>
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold">Mr. David Samuel</h4>
                <p className="text-primary font-medium mb-4">Chairman</p>
                <p className="text-sm text-muted-foreground italic">"Education is the most powerful weapon which you can use to change the world."</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-96">
                <Image src={principalImg?.imageUrl || 'https://picsum.photos/seed/principal/400/500'} alt="Principal" fill className="object-cover" />
              </div>
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold">Mrs. Sarah Johnson</h4>
                <p className="text-primary font-medium mb-4">Principal</p>
                <p className="text-sm text-muted-foreground italic">"We focus on creating a balance between academic brilliance and character building."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Stat */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="text-6xl md:text-8xl font-black">100%</div>
            <div className="text-2xl md:text-3xl font-bold opacity-90 uppercase tracking-widest">Board Exam Results</div>
            <p className="max-w-xl opacity-75 mt-4">Consecutive excellence in academic performance reflects our commitment to high-quality teaching standards.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-12 text-center">
          <h2 className="text-4xl font-bold text-primary">Life at Canaan</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[600px]">
            {gallery.length > 0 ? gallery.slice(0, 6).map((img, i) => (
              <div key={i} className={cn("relative rounded-xl overflow-hidden group", i === 0 && "md:row-span-2", i === 3 && "md:col-span-2")}>
                <Image 
                  src={img.imageUrl} 
                  alt={img.description} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )) : (
              <div className="col-span-3 h-full bg-muted flex items-center justify-center rounded-xl">
                <p className="text-muted-foreground">Gallery is loading...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-secondary rounded-[3rem] p-12 md:p-24 text-center text-white space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold">Admissions Open 2026–27</h2>
            <div className="flex flex-wrap justify-center gap-6 text-xl">
              <span className="flex items-center gap-2"><CheckCircle2 className="text-white" /> No Donation Policy</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="text-white" /> State Syllabus</span>
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
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
                  <p className="text-muted-foreground">No.6 1st Cross, 9th Main Road, BTM 1st Stage, Bengaluru</p>
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
