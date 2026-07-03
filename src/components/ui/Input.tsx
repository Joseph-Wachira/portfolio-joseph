import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-foreground outline-none ring-offset-background transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20',
        className
      )}
      {...props}
    />
  )
);

Input.displayName = 'Input';
