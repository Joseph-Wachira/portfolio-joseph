import { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  offset?: number;
  className?: string;
}

export const ParallaxSection = ({ 
  children, 
  speed = 0.5,
  offset, 
  className = '' 
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const parallaxOffset = offset ?? speed * 100;
  const y = useTransform(scrollYProgress, [0, 1], [0, parallaxOffset]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
