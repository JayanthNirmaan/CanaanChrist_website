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
      
      <section className="pt-24 pb-12 bg-background text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <h1 className="text-5xl font-bold text-primary">About Our School</h1>
          <p className="text-xl text-muted-foreground">"Righteousness And Truth" - Since 2001</p>
        </div>
      </section>

      {/* Sticky Layout Section */}
      <section className="pb-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Left: Sticky Image Container */}
            <div className="lg:sticky lg:top-32 self-start h-fit">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-muted/20">
                {gallery[1]?.imageUrl && (
                  <Image 
                    src={gallery[1].imageUrl} 
                    alt="School Campus" 
                    fill 
                    className="object-cover"
                    data-ai-hint="school campus"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold">Our Campus</h3>
                  <p className="opacity-80">BTM 1st Stage, Bengaluru</p>
                </div>
              </div>
            </div>

            {/* Right: Scrollable Content */}
            <div className="space-y-16">
              {/* Our Journey */}
              <div className="space-y-8">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                  <History size={32} />
                </div>
                <h2 className="text-4xl font-bold">Our Journey</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Canaan Christ Public School was established in 2001 with a dream to create a place where education isn’t a privilege, but a right.
                  </p>
                  <p>
                    Born out of a dream to provide quality education to children from all walks of life, we have spent over two decades ensuring that no child is left behind due to their circumstances.
                  </p>
                  <p>
                    Today, CCPS stands as a beacon of inclusive learning in Bangalore, known for its academic excellence and a consistent 100% pass record in board examinations.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-background p-10 rounded-3xl shadow-sm border space-y-6 group hover:shadow-xl hover:border-primary/20 transition-all">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <Eye size={28} />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To nurture compassionate, curious, and confident learners who contribute meaningfully to society, while rooted in values, culture, and excellence.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-background p-10 rounded-3xl shadow-sm border space-y-6 group hover:shadow-xl hover:border-secondary/20 transition-all">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To provide affordable, quality education that empowers every child to grow intellectually, emotionally, and ethically while staying connected to the local culture of Bangalore.
                </p>
              </div>

              {/* Inclusivity */}
              <div className="bg-background p-10 rounded-3xl shadow-sm border space-y-6 group hover:shadow-xl hover:border-primary/20 transition-all">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <Shield size={28} />
                </div>
                <h3 className="text-2xl font-bold">Inclusivity</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  We welcome every child, regardless of background, and create an environment where each one feels seen, valued, and empowered to grow.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Chairman's Message</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  "Canaan Christ Public School was born out of a dream—to create a place where education isn’t a privilege, but a right. A place where every child, no matter their background, has the chance to learn, grow, and thrive."
                </p>
                <p>
                  "We don’t just prepare students for exams—we prepare them for life, for leadership, and for a future they can shape with their own hands. Thank you for being part of this mission."
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold">Mr. Chairman</h4>
                <p className="text-primary">Chairman / Director</p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-xl">
              {chairmanImg?.imageUrl && (
                <Image src={chairmanImg.imageUrl} alt="Chairman" fill className="object-cover" />
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-xl md:order-last">
              {principalImg?.imageUrl && (
                <Image src={principalImg.imageUrl} alt="Principal" fill className="object-cover" />
              )}
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Principal's Message</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  "At Canaan Christ Public School, we envision every child growing into a compassionate, curious, and confident learner — rooted in values, culture, and a genuine desire to contribute to society."
                </p>
                <p>
                  "We are proud to have maintained a 100% pass record in the Grade 10 Board Examinations year after year — proof that our vision and mission translate into real, lasting results."
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold">Mrs. Principal</h4>
                <p className="text-primary">Principal / HM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
