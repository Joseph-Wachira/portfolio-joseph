import { ThemeProvider } from '@/context/ThemeContext';
import { LenisProvider } from '@/components/animations/LenisProvider';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LenisProvider>
        {children}
      </LenisProvider>
    </ThemeProvider>
  );
}