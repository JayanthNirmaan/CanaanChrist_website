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
        'fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4',
        scrolled ? 'bg-background/90 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="transition-all duration-300 group-hover:scale-105">
            {logo?.imageUrl ? (
              <Image 
                src={logo.imageUrl} 
                alt="Canaan Christ Public School Logo" 
                width={110} 
                height={110} 
                className="object-contain"
                priority
              />
            ) : (
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">CC</div>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-primary leading-none hidden sm:block">Canaan Christ</span>
            <span className="text-sm font-bold text-muted-foreground tracking-widest uppercase hidden sm:block">Public School</span>
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
                  'px-5 py-2 text-base font-bold transition-all relative group',
                  isActive ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-5 right-5 h-1 bg-primary rounded-full" />
                )}
                {!isActive && (
                  <span className="absolute bottom-0 left-5 right-5 h-1 bg-primary rounded-full transform scale-x-0 transition-transform group-hover:scale-x-50" />
                )}
              </Link>
            );
          })}
          <div className="ml-6">
            <Button asChild variant="default" size="lg" className="rounded-full shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all font-bold px-8">
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>
        </div>

        <button className="md:hidden text-primary p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-background z-50 animate-in slide-in-from-right duration-300">
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl">CC</div>
                <span className="font-bold text-xl text-primary">Canaan Christ</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-primary">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-3xl font-bold py-2 border-b-2 transition-colors',
                    pathname === item.href ? 'text-primary border-primary' : 'text-foreground/80 border-transparent'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto pt-12">
              <Button asChild className="w-full h-16 text-xl rounded-full font-bold" size="lg">
                <Link href="/admissions" onClick={() => setIsOpen(false)}>Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}