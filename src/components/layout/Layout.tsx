import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AnimatedBackground } from '@/components/animations/AnimatedBackground';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <AnimatedBackground />
      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
}