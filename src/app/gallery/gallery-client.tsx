'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GalleryItem {
  id: string;
  src: string;
  name: string;
  isVideo: boolean;
}

export function GalleryClient({ items }: { items: GalleryItem[] }) {
  if (items.length === 0) {
    return (
      <div className="py-24 text-center text-muted-foreground">
        <p>No media files found in assets/Gallery.</p>
      </div>
    );
  }

  return (
    <section className="bg-white relative min-h-screen pb-24">
      {/* Subtle decorative background elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-6 py-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {items.map((item, index) => {
            // Procedural slight rotations for a creative, kids-friendly "wall" feel
            const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-0'];
            const rotation = rotations[index % rotations.length];
            
            return (
              <div 
                key={item.id}
                className={cn(
                  "break-inside-avoid relative group cursor-pointer transition-all duration-500",
                  "hover:z-50",
                  rotation
                )}
              >
                <div className={cn(
                  "relative overflow-hidden rounded-[2rem] bg-muted",
                  "shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
                  "group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] group-hover:scale-[1.04]",
                  "transition-all duration-500 ease-out"
                )}>
                  {item.isVideo ? (
                    <video 
                      src={item.src}
                      className="w-full h-auto object-cover block brightness-[0.98] group-hover:brightness-110 transition-all duration-500"
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                  ) : (
                    <img 
                      src={item.src} 
                      alt={item.name} 
                      className="w-full h-auto object-cover block brightness-[0.98] group-hover:brightness-110 transition-all duration-500"
                    />
                  )}
                  
                  {/* Hover Caption Overlay - Isolated to this specific item */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-10 px-6 text-center text-white backdrop-blur-[1px]">
                    <span className="text-[10px] uppercase tracking-[0.3em] mb-2 opacity-70 font-bold">Canaan Snapshot</span>
                    <h3 className="text-xl md:text-2xl font-brand capitalize drop-shadow-lg">
                      {item.name}
                    </h3>
                    <div className="w-8 h-1 bg-accent mt-4 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
