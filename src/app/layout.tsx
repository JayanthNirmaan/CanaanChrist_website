import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Canaan Christ Public School | Excellence in Education',
  description: 'Canaan Christ Public School (Canaan Connect) offers state syllabus education from KG to 10th grade in BTM Layout, Bengaluru.',
  icons: {
    icon: "/assets/Canaan Christ logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Love+Ya+Like+A+Sister&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-white">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
