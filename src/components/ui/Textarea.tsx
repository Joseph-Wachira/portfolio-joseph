import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-[120px] w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-foreground outline-none ring-offset-background transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20',
        className
      )}
      {...props}
    />
  )
);

Textarea.displayName = 'Textarea';
