import { useRef, useEffect } from 'react';

export function useMagneticButton<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) * 0.3;
      const y = (e.clientY - top - height / 2) * 0.3;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const handleMouseLeave = () => {
      el.style.transform = '';
    };
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  return ref;
}