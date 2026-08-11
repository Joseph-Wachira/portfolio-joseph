import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const MagneticCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <motion.div
          className="pointer-events-none fixed z-50 hidden md:block"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 200,
            mass: 0.5,
          }}
        >
          <div className="h-8 w-8 rounded-full border-2 border-primary-500 dark:border-primary-400 opacity-50" />
        </motion.div>
      )}
    </>
  );
};
