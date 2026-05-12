import React from 'react';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

export default function GalleryPage() {
  // Define the path to the Gallery folder
  const galleryDirPath = path.join(process.cwd(), 'public', 'assets', 'Gallery');
  
  let galleryItems: { src: string; name: string; isVideo: boolean; id: string }[] = [];

  try {
    // Read files from the directory
    if (fs.existsSync(galleryDirPath)) {
      const files = fs.readdirSync(galleryDirPath);
      
      galleryItems = files
        .filter(file => /\.(jpe?g|png|webp|gif|mp4|webm|mov)$/i.test(file))
        .map((file, index) => {
          const extension = path.extname(file);
          const name = path.basename(file, extension);
          const isVideo = /\.(mp4|webm|mov)$/i.test(file);
          
          return {
            id: `dynamic-${index}`,
            src: `/assets/Gallery/${file}`,
            name: name,
            isVideo: isVideo
          };
        });
    }
  } catch (error) {
    console.error("Error reading Gallery directory:", error);
  }

  // Deterministic sizing logic for masonry feel
  const getSizeClass = (index: number) => {
    const layouts = [
      "lg:col-span-2 lg:row-span-2 aspect-[4/3]",
      "lg:col-span-1 lg:row-span-1 aspect-square",
      "lg:col-span-1 lg:row-span-2 aspect-[3/4]",
      "lg:col-span-2 lg:row-span-1 aspect-[2/1]",
      "lg:col-span-1 lg:row-span-1 aspect-[4/3]",
    ];
    return layouts[index % layouts.length];
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-background text-center relative overflow-hidden">
        <div className="absolute inset-0 scribble-bg opacity-100 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 space-y-4 relative z-10">
          <h1 className="text-6xl text-primary">Campus Snapshots</h1>
          <p className="text-xl text-muted-foreground italic">Captured moments of joy, learning, and growth at Canaan Christ.</p>
        </div>
      </section>

      {/* Grid Gallery Section - Dynamic and Tightly Packed */}
      <section className="bg-white">
        <div className="max-w-[100vw] overflow-hidden">
          {galleryItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 grid-flow-dense">
              {galleryItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={cn(
                    "group relative overflow-hidden transition-all duration-500 cursor-pointer",
                    "hover:scale-[1.02] hover:z-30 hover:shadow-2xl bg-muted",
                    getSizeClass(index)
                  )}
                >
                  <div className="relative w-full h-full min-h-[250px]">
                    {item.isVideo ? (
                      <video 
                        src={item.src}
                        className="absolute inset-0 w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                    ) : (
                      <Image 
                        src={item.src} 
                        alt={item.name} 
                        fill 
                        className="object-cover transition-all duration-500"
                      />
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                      <h3 className="text-white text-2xl md:text-3xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 capitalize">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center text-muted-foreground">
              <p>No media files found in assets/Gallery.</p>
            </div>
          )}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-12 bg-muted/20 text-center">
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
