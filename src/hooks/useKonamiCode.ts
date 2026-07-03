import { useEffect } from 'react';

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export function useKonamiCode(callback: () => void) {
  useEffect(() => {
    let index = 0;
    const handler = (e: KeyboardEvent) => {
      if (e.key === KONAMI_CODE[index]) {
        index++;
        if (index === KONAMI_CODE.length) {
          callback();
          index = 0;
        }
      } else {
        index = 0;
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [callback]);
}