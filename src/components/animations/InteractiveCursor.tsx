import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function InteractiveCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    const handleMouseLeave = () => setHidden(true);
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[999] h-6 w-6 rounded-full border border-brand-400/40 mix-blend-difference"
      animate={{ x: position.x - 12, y: position.y - 12, opacity: hidden ? 0 : 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    />
  );
}