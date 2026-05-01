import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/shared/ContactForm';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const googleMapsUrl = "https://www.google.com/maps/place/Canaan+Christ+Public+School/data=!4m2!3m1!1s0x0:0x1307a77451053b3b?sa=X&ved=1t:2428&ictx=111";

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 bg-background text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <h1 className="text-5xl font-bold text-primary">Contact Us</h1>
          <p className="text-xl text-muted-foreground">Get in touch with the Canaan Christ family. We're here to help.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="bg-background p-10 rounded-[2.5rem] border shadow-sm space-y-8">
              <h2 className="text-3xl font-bold text-primary">School Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Our Location</h4>
                    <p className="text-muted-foreground leading-relaxed">No.6 1st Crs, 9th Mn Rd, BTM 1st Stage, New Gurappana Palya, Bengaluru, Karnataka 560029</p>
                    <Button variant="link" className="p-0 h-auto text-primary font-bold" asChild>
                      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps <ExternalLink size={14} className="ml-1" /></a>
                    </Button>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-muted-foreground">+91 80 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0"><Mail size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
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

            <div className="bg-muted rounded-[2.5rem] h-[400px] flex items-center justify-center overflow-hidden relative shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.0877881023!2d77.606706!3d12.922378!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150ecf543665%3A0x1307a77451053b3b!2sCanaan%20Christ%20Public%20School!5e0!3m2!1sen!2sin!4v1709500000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-2 border-primary/5">
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
