import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AnimatedBackground } from '@/components/animations/AnimatedBackground';
import { InteractiveCursor } from '@/components/animations/InteractiveCursor';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-brand-500/30">
      <AnimatedBackground />
      <InteractiveCursor />
      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
}