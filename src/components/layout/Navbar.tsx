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
        'fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-white p-1 rounded-lg group-hover:scale-110 transition-transform shadow-sm">
            {logo?.imageUrl && (
              <Image 
                src={logo.imageUrl} 
                alt="Canaan Christ Public School Logo" 
                width={40} 
                height={40} 
                className="object-contain"
                data-ai-hint="school logo"
              />
            )}
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">Canaan Christ Public School</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href ? 'text-primary' : 'text-foreground/80'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild variant="default" size="sm">
            <Link href="/admissions">Apply Now</Link>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b shadow-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-medium py-2',
                  pathname === item.href ? 'text-primary' : 'text-foreground/80'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4">
              <Link href="/admissions" onClick={() => setIsOpen(false)}>Apply Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}