
import Link from 'next/link';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-white p-2 rounded-lg text-primary">
              <GraduationCap size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight">CANAAN CONNECT</span>
          </div>
          <p className="text-primary-foreground/80 leading-relaxed">
            Established in 2001, providing excellence in education from KG to 10th Grade under the State Syllabus.
          </p>
          <div className="flex gap-4">
            <Facebook className="cursor-pointer hover:text-white transition-colors" size={20} />
            <Twitter className="cursor-pointer hover:text-white transition-colors" size={20} />
            <Instagram className="cursor-pointer hover:text-white transition-colors" size={20} />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-primary-foreground/80">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/admissions" className="hover:text-white">Admissions</Link></li>
            <li><Link href="/academics" className="hover:text-white">Academics</Link></li>
            <li><Link href="/facilities" className="hover:text-white">Facilities</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">School Info</h4>
          <ul className="space-y-4 text-primary-foreground/80">
            <li className="flex items-start gap-3">
              <MapPin className="shrink-0" size={18} />
              <span>No.6 1st Cross, 9th Main Road, BTM 1st Stage, Bengaluru</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="shrink-0" size={18} />
              <span>+91 80 1234 5678</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="shrink-0" size={18} />
              <span>admissions@canaanconnect.edu.in</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Admissions 2026-27</h4>
          <p className="text-primary-foreground/80 mb-4">Admissions are open. We follow a strict no-donation policy.</p>
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
