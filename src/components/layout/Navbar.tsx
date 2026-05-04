'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const logo = PlaceHolderImages.find(img => img.id === 'school-logo');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-6',
        scrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/40 py-1.5 shadow-lg' 
          : 'bg-transparent py-3'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="transition-all duration-300 group-hover:scale-105 shrink-0">
            {logo?.imageUrl ? (
              <Image 
                src={logo.imageUrl} 
                alt="Canaan Christ Public School Logo" 
                width={45} 
                height={45} 
                className="object-contain"
                priority
              />
            ) : (
              <div className="w-9 h-9 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-lg">CC</div>
            )}
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-lg font-bold tracking-tight text-primary leading-tight hidden sm:block">Canaan Christ</span>
            <span className="text-[9px] font-bold text-muted-foreground tracking-widest uppercase hidden sm:block">Public School</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-4 py-1 text-sm font-bold transition-all relative group',
                  isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-[-2px] left-4 right-4 h-0.5 bg-primary rounded-full" />
                )}
                {!isActive && (
                  <span className="absolute bottom-[-2px] left-4 right-4 h-0.5 bg-primary rounded-full transform scale-x-0 transition-transform group-hover:scale-x-50" />
                )}
              </Link>
            );
          })}
          <div className="ml-6">
            <Button asChild variant="default" size="sm" className="rounded-full shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all font-bold px-6 h-8 text-xs">
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>
        </div>

        <button className="md:hidden text-primary p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-background z-50 animate-in slide-in-from-right duration-300">
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-lg">CC</div>
                <span className="font-bold text-lg text-primary">Canaan Christ</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-primary">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-2xl font-bold py-2 border-b transition-colors',
                    pathname === item.href ? 'text-primary border-primary' : 'text-foreground/80 border-transparent'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto pt-10">
              <Button asChild className="w-full h-14 text-lg rounded-full font-bold" size="lg">
                <Link href="/admissions" onClick={() => setIsOpen(false)}>Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
