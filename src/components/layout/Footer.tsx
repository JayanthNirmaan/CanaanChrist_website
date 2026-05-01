import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Youtube, Instagram } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const logo = PlaceHolderImages.find(img => img.id === 'school-logo');

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-xl shadow-md flex items-center justify-center">
              {logo?.imageUrl ? (
                <Image 
                  src={logo.imageUrl} 
                  alt="Canaan Christ Public School Logo" 
                  width={100} 
                  height={100} 
                  className="object-contain"
                />
              ) : (
                <div className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center text-primary font-bold text-xl">CC</div>
              )}
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">Canaan Christ</span>
          </div>
          <p className="text-primary-foreground/80 leading-relaxed">
            "Righteousness And Truth" - Providing quality education from Kindergarten to 10th Grade under the State Syllabus since 2001.
          </p>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@CANAANCHRISTPUBLICSCHOOL" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Youtube size={20} />
            </a>
            <a href="https://www.instagram.com/canaanchristpublicschool" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-primary-foreground/80">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/admissions" className="hover:text-white">Admissions</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">School Info</h4>
          <ul className="space-y-4 text-primary-foreground/80">
            <li className="flex items-start gap-3">
              <MapPin className="shrink-0" size={18} />
              <span>No.6 1st Crs, 9th Mn Rd, BTM 1st Stage, New Gurappana Palya, Bengaluru, 560029</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="shrink-0" size={18} />
              <span>+91 80 1234 5678</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="shrink-0" size={18} />
              <span>info@canaanconnect.edu.in</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Admissions 2026-27</h4>
          <p className="text-primary-foreground/80 mb-4">Admissions are open. No Admission Fee / No Donation Policy.</p>
          <Link 
            href="/admissions" 
            className="inline-block bg-white text-primary px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/20 text-center text-primary-foreground/60 text-sm">
        <p>&copy; {new Date().getFullYear()} Canaan Christ Public School. All rights reserved.</p>
      </div>
    </footer>
  );
}
