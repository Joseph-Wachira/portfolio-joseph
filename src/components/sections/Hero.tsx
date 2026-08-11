import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Github, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { profile } from '@/config/profile';
import { useRef, useEffect, useState } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 30,
          y: (e.clientY - rect.top - rect.height / 2) / 30,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 bg-[#0a0a0a]"
    >
      {/* Massive Red Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[150%] h-[150%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(127, 29, 29, 0.4) 0%, rgba(69, 10, 10, 0.2) 40%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        {/* Minimal Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-12"
        >
          <div className="px-6 py-2 rounded-full border border-red-900/30 bg-black/40 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-widest text-red-500 font-medium">Available for Work</span>
          </div>
        </motion.div>

        {/* Main Heading - Bold and Cinematic */}
        <motion.div
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-none"
          >
            <span className="block text-white">{profile.name.split(' ')[0]}</span>
            <span className="block text-gradient">{profile.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {profile.headline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white border-0 px-8 py-6 text-base font-semibold rounded-full"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="border-red-900/50 text-white hover:bg-red-950/30 px-8 py-6 text-base rounded-full backdrop-blur-sm" 
              asChild
            >
              <a href={profile.cvUrl} download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-gray-400 hover:text-white hover:bg-white/5 px-8 py-6 text-base rounded-full" 
              asChild
            >
              <a
                href="https://github.com/Joseph-Wachira"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => scrollToSection('skills')}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}