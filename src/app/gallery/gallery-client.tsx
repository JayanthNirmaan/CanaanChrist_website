'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface GalleryItem {
  id: string;
  src: string;
  name: string;
  isVideo: boolean;
}

export function GalleryClient({ items }: { items: GalleryItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const lastInteractionTime = useRef(Date.now());
  const scrollAmount = useRef(0);

  useEffect(() => {
    if (!scrollRef.current) return;

    let animationFrameId: number;
    const scrollContainer = scrollRef.current;

    const animate = () => {
      const now = Date.now();
      const timeSinceLastInteraction = now - lastInteractionTime.current;

      // Resume auto-scroll after 4 seconds of inactivity
      if (timeSinceLastInteraction > 4000) {
        setIsAutoScrolling(true);
      }

      if (isAutoScrolling) {
        scrollAmount.current += 0.4; // Very slow speed
        if (scrollAmount.current >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
          scrollAmount.current = 0; // Reset to top for continuous feel (optional loop)
        }
        scrollContainer.scrollTop = scrollAmount.current;
      } else {
        // Sync scrollAmount with manual scroll
        scrollAmount.current = scrollContainer.scrollTop;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleInteraction = () => {
      setIsAutoScrolling(false);
      lastInteractionTime.current = Date.now();
    };

    const container = scrollContainer;
    container.addEventListener('wheel', handleInteraction, { passive: true });
    container.addEventListener('touchmove', handleInteraction, { passive: true });
    container.addEventListener('scroll', handleInteraction, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('wheel', handleInteraction);
      container.removeEventListener('touchmove', handleInteraction);
      container.removeEventListener('scroll', handleInteraction);
    };
  }, [isAutoScrolling]);

  if (items.length === 0) {
    return (
      <div className="py-24 text-center text-muted-foreground">
        <p>No media files found in assets/Gallery.</p>
      </div>
    );
  }

  return (
    <section className="bg-[#fafafa] relative h-[80vh] border-y overflow-hidden group">
      {/* Decorative scribbles in the background */}
      <div className="absolute top-10 left-10 w-32 h-32 text-primary/10 -rotate-12 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10,50 Q30,10 50,50 T90,50" />
        </svg>
      </div>

      <div 
        ref={scrollRef}
        className="h-full overflow-y-auto no-scrollbar scroll-smooth"
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
            {items.map((item, index) => {
              // Procedural rotation for variety
              const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-0'];
              const rotation = rotations[index % rotations.length];
              
              return (
                <div 
                  key={item.id}
                  className={cn(
                    "break-inside-avoid relative group cursor-pointer transition-all duration-500",
                    "hover:scale-[1.03] hover:z-20",
                    rotation
                  )}
                >
                  <div className={cn(
                    "relative overflow-hidden rounded-[2rem] bg-white p-3",
                    "shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
                    "border-4 border-white group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]",
                    "transition-all duration-500"
                  )}>
                    <div className="relative aspect-auto rounded-[1.5rem] overflow-hidden bg-muted">
                      {item.isVideo ? (
                        <video 
                          src={item.src}
                          className="w-full h-auto object-cover"
                          muted
                          loop
                          playsInline
                          autoPlay
                        />
                      ) : (
                        <img 
                          src={item.src} 
                          alt={item.name} 
                          className="w-full h-auto object-cover"
                        />
                      )}
                      
                      {/* Hover Caption */}
                      <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center text-white">
                        <span className="text-xs uppercase tracking-[0.2em] mb-2 opacity-70">Moment</span>
                        <h3 className="text-xl md:text-2xl font-brand capitalize">
                          {item.name}
                        </h3>
                        <div className="w-8 h-1 bg-accent mt-4 rounded-full" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative tape effect on some items */}
                  {index % 3 === 0 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 backdrop-blur-sm border border-white/20 -rotate-3 z-10 hidden md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Auto-scroll indicator/fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#fafafa] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafafa] to-transparent pointer-events-none z-10" />
      
      {/* Scroll Hint */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border text-xs font-bold text-primary/60 transition-opacity duration-500 group-hover:opacity-100 opacity-30">
        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
        {isAutoScrolling ? 'Living Showcase Mode' : 'Paused - Inactive to Resume'}
      </div>
    </section>
  );
}
