
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/shared/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-xl opacity-90">We are here to assist you with your queries.</p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="bg-white p-10 rounded-3xl border shadow-sm space-y-8">
              <h2 className="text-3xl font-bold text-primary">School Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Our Location</h4>
                    <p className="text-muted-foreground">No.6 1st Cross, 9th Main Road, BTM 1st Stage, Bengaluru, KA - 560068</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-muted-foreground">+91 80 1234 5678 / +91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0"><Mail size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Email Support</h4>
                    <p className="text-muted-foreground">info@canaanconnect.edu.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0"><Clock size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Office Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 8:30 AM - 4:00 PM<br/>Saturday: 8:30 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-3xl h-[400px] flex items-center justify-center border-2 border-dashed">
              <div className="text-center space-y-2">
                <MapPin size={48} className="mx-auto text-muted-foreground" />
                <p className="text-muted-foreground">Google Maps View<br/>BTM Layout 1st Stage</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-primary/5">
              <h2 className="text-3xl font-bold text-primary mb-6">Send an Enquiry</h2>
              <p className="text-muted-foreground mb-10">Fill in the details below and our admissions office will contact you within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
