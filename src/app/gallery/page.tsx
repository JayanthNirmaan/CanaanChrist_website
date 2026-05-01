
'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function GalleryPage() {
  const gallery = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  // Deterministic rotations based on index to avoid hydration mismatch
  const getRotation = (index: number) => {
    const rotations = [
      'rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 
      'rotate-3', '-rotate-3', 'rotate-[1.5deg]', '-rotate-[1.5deg]'
    ];
    return rotations[index % rotations.length];
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-background text-center relative overflow-hidden">
        <div className="absolute inset-0 scribble-bg opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 space-y-4 relative z-10">
          <h1 className="text-6xl font-bold text-primary">Campus Snapshots</h1>
          <p className="text-xl text-muted-foreground italic">Captured moments of joy, learning, and growth at Canaan Christ.</p>
        </div>
      </section>

      {/* Fun Stack Gallery Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-20">
            {gallery.map((item, index) => (
              <div 
                key={item.id}
                className={cn(
                  "group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer",
                  "hover:scale-110 hover:rotate-0 hover:z-30 hover:shadow-2xl border-4 border-white bg-white",
                  getRotation(index)
                )}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={item.imageUrl} 
                    alt={item.description} 
                    fill 
                    className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                    data-ai-hint={item.imageHint}
                  />
                  
                  {/* Hover Overlay with Gaegu Font */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                    <h3 className="text-white text-3xl md:text-4xl font-headline font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.description}
                    </h3>
                  </div>
                </div>
                
                {/* Visual Decorative Edge (Tape effect) */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 backdrop-blur-sm -rotate-2 z-10 pointer-events-none group-hover:opacity-0 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-muted/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-lg text-muted-foreground italic leading-relaxed">
            "Every snapshot is a story of a child finding their truth and walking the path of righteousness."
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
