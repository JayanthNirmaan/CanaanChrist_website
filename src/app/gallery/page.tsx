
import React from 'react';
import fs from 'fs';
import path from 'path';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GalleryClient } from './gallery-client';

export default async function GalleryPage() {
  // Define the path to the Gallery folder
  const galleryDirPath = path.join(process.cwd(), 'public', 'assets', 'Gallery');
  
  let galleryItems: { src: string; name: string; isVideo: boolean; id: string }[] = [];

  try {
    // Read files from the directory (Server Side)
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

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 scribble-bg opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 space-y-4 relative z-10 text-center">
          <h1 className="text-6xl text-primary drop-shadow-sm">Campus Snapshots</h1>
          <p className="text-xl text-muted-foreground italic max-w-2xl mx-auto">
            A playful wall of memories, laughter, and growth at Canaan Christ.
          </p>
        </div>
      </section>

      {/* Living Gallery Showcase */}
      <GalleryClient items={galleryItems} />

      {/* Closing Statement */}
      <section className="py-20 bg-white text-center relative border-t overflow-hidden">
        <div className="absolute inset-0 scribble-bg opacity-20 pointer-events-none" />
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <p className="text-2xl text-primary italic leading-relaxed font-brand">
            "Every snapshot is a story of a child finding their truth."
          </p>
          <div className="mt-8 flex justify-center gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-3 h-3 rounded-full bg-accent/30 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
