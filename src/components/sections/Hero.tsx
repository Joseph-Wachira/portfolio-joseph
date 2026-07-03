import { motion } from 'framer-motion';
import { Download, Github } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { profile } from '@/config/profile';
import { Link } from 'react-router-dom';
import { ScrollIndicator } from '@/components/shared/ScrollIndicator';
import Antigravity from '@/components/animations/Antigravity';

export function Hero() {
  const { displayText } = useTypingAnimation(profile.headline, 40, 500);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      <div className="absolute inset-0 z-0 opacity-80">
        <Antigravity
          count={220}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#5227FF"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>
      <div className="relative z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Hi, I'm <span className="text-gradient">{profile.name}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" asChild>
            <Link to="/projects">View Projects</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={profile.cvUrl} download>
              <Download className="mr-2 h-4 w-4" /> Download CV
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="https://github.com/Joseph-Wachira" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}