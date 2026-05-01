
'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function GalleryPage() {
  const gallery = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  // Deterministic sizing logic to create a "random" but stable masonry-like feel
  const getSizeClass = (index: number) => {
    // Patterns of spans: [col, row, aspect]
    const layouts = [
      "lg:col-span-2 lg:row-span-2 aspect-[4/3]", // Large
      "lg:col-span-1 lg:row-span-1 aspect-square", // Small Square
      "lg:col-span-1 lg:row-span-2 aspect-[3/4]", // Vertical
      "lg:col-span-2 lg:row-span-1 aspect-[2/1]", // Horizontal
      "lg:col-span-1 lg:row-span-1 aspect-[4/3]", // Medium
    ];
    return layouts[index % layouts.length];
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-background text-center relative overflow-hidden">
        <div className="absolute inset-0 scribble-bg opacity-100 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 space-y-4 relative z-10">
          <h1 className="text-6xl font-bold text-primary">Campus Snapshots</h1>
          <p className="text-xl text-muted-foreground italic">Captured moments of joy, learning, and growth at Canaan Christ.</p>
        </div>
      </section>

      {/* Grid Gallery Section */}
      <section className="py-12 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-min">
            {gallery.map((item, index) => (
              <div 
                key={item.id}
                className={cn(
                  "group relative rounded-xl overflow-hidden shadow-md transition-all duration-500 cursor-pointer",
                  "hover:scale-[1.02] hover:z-30 hover:shadow-xl bg-muted",
                  getSizeClass(index)
                )}
              >
                <div className="relative w-full h-full min-h-[200px]">
                  <Image 
                    src={item.imageUrl} 
                    alt={item.description} 
                    fill 
                    className="object-cover transition-all duration-500"
                    data-ai-hint={item.imageHint}
                  />
                  
                  {/* Hover Overlay with Gaegu Font */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                    <h3 className="text-white text-2xl md:text-3xl font-headline font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.description}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-muted/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-lg text-muted-foreground italic leading-relaxed font-headline">
            "Every snapshot is a story of a child finding their truth and walking the path of righteousness."
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
