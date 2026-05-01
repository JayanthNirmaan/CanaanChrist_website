
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { History, Target, Eye, Shield } from 'lucide-react';

const principalImg = PlaceHolderImages.find(img => img.id === 'principal');
const chairmanImg = PlaceHolderImages.find(img => img.id === 'chairman');
const gallery = PlaceHolderImages.filter(img => img.id.startsWith('gallery'));

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 bg-background text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <h1 className="text-5xl font-bold text-primary">About Our School</h1>
          <p className="text-xl text-muted-foreground">Dedicated to fostering a culture of excellence and integrity since 2001.</p>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src={gallery[1]?.imageUrl || 'https://picsum.photos/seed/library/600/400'} 
              alt="School Campus" 
              fill 
              className="object-cover"
              data-ai-hint="library"
            />
          </div>
          <div className="space-y-8">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
              <History size={32} />
            </div>
            <h2 className="text-4xl font-bold">Our Legacy</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Canaan Christ Public School was founded in 2001 with a singular vision: to provide high-quality education that is accessible and grounded in strong moral values.
              </p>
              <p>
                What started as a small community school in BTM Stage 1 has now grown into a premier institution recognized for its academic rigor and holistic development approach.
              </p>
              <p>
                Over the past 23 years, we have nurtured thousands of students who have gone on to excel in various fields, always carrying with them the values of Righteousness and Truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Details */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-sm border space-y-6">
            <Eye className="text-primary" size={40} />
            <h3 className="text-2xl font-bold">Vision</h3>
            <p className="text-muted-foreground">To empower students to become compassionate global citizens who lead with integrity and innovate for a better future.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border space-y-6">
            <Target className="text-secondary" size={40} />
            <h3 className="text-2xl font-bold">Mission</h3>
            <p className="text-muted-foreground">Integrating modern pedagogy with traditional values to create a balanced learning ecosystem for every child.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border space-y-6">
            <Shield className="text-primary" size={40} />
            <h3 className="text-2xl font-bold">Values</h3>
            <p className="text-muted-foreground">Righteousness, Truth, Empathy, and Social Responsibility are the cornerstones of our educational philosophy.</p>
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Chairman's Message</h2>
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "Our goal at Canaan is not just to produce graduates, but to nurture responsible human beings who can make a meaningful difference in the world. We believe in providing a platform where every child can discover their unique potential."
              </p>
              <div>
                <h4 className="text-xl font-bold">Mr. David Samuel</h4>
                <p className="text-primary">Chairman</p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-xl">
              <Image src={chairmanImg?.imageUrl || 'https://picsum.photos/seed/chairman/400/500'} alt="Chairman" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-xl md:order-last">
              <Image src={principalImg?.imageUrl || 'https://picsum.photos/seed/principal/400/500'} alt="Principal" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Principal's Message</h2>
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "As we move further into the 21st century, education must evolve to meet new challenges. At Canaan, we blend digital-first learning tools with character-focused mentoring to prepare our students for the complexities of tomorrow."
              </p>
              <div>
                <h4 className="text-xl font-bold">Mrs. Sarah Johnson</h4>
                <p className="text-primary">Principal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
