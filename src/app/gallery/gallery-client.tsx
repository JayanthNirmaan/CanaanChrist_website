'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface GalleryItem {
  id: string;
  src: string;
  name: string;
  isVideo: boolean;
}

export function GalleryClient({ items }: { items: GalleryItem[] }) {
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
        scrollAmount.current += 0.35; // Gentle flow
        if (scrollAmount.current >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
          scrollAmount.current = 0; 
        }
        scrollContainer.scrollTop = scrollAmount.current;
      } else {
        // Sync scrollAmount with manual scroll position
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
    <section className="bg-white relative h-[85vh] overflow-hidden group">
      {/* Subtle decorative background element */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div 
        ref={scrollRef}
        className="h-full overflow-y-auto no-scrollbar scroll-smooth"
      >
        <div className="max-w-[1400px] mx-auto px-6 py-20">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
            {items.map((item, index) => {
              // Procedural rotation and slight scaling for the creative wall feel
              const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-0'];
              const rotation = rotations[index % rotations.length];
              
              return (
                <div 
                  key={item.id}
                  className={cn(
                    "break-inside-avoid relative group cursor-pointer transition-all duration-1000",
                    "hover:scale-[1.03] hover:z-20",
                    rotation
                  )}
                >
                  <div className={cn(
                    "relative overflow-hidden rounded-[2.5rem] bg-muted",
                    "shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.18)]",
                    "transition-all duration-700"
                  )}>
                    {item.isVideo ? (
                      <video 
                        src={item.src}
                        className="w-full h-auto object-cover block"
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                    ) : (
                      <img 
                        src={item.src} 
                        alt={item.name} 
                        className="w-full h-auto object-cover block"
                      />
                    )}
                    
                    {/* Hover Caption Overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center text-white backdrop-blur-[2px]">
                      <span className="text-[10px] uppercase tracking-[0.4em] mb-3 opacity-80 font-bold">Canaan Snapshots</span>
                      <h3 className="text-2xl md:text-3xl font-brand capitalize drop-shadow-md">
                        {item.name}
                      </h3>
                      <div className="w-12 h-1 bg-accent mt-6 rounded-full" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Auto-scroll Status Hint */}
      <div className="absolute bottom-8 right-8 z-30 flex items-center gap-3 bg-white/95 backdrop-blur-xl px-6 py-3 rounded-full shadow-2xl border text-[10px] font-bold tracking-widest text-primary uppercase transition-all duration-500 group-hover:opacity-100 opacity-20">
        <div className="relative flex h-2 w-2">
          <span className={cn(
            "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
            isAutoScrolling ? "bg-accent" : "bg-muted-foreground"
          )}></span>
          <span className={cn(
            "relative inline-flex rounded-full h-2 w-2",
            isAutoScrolling ? "bg-accent" : "bg-muted-foreground"
          )}></span>
        </div>
        {isAutoScrolling ? 'Live Showcase Active' : 'Showcase Paused'}
      </div>

      {/* Edge Fades for smoothness */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  );
}
