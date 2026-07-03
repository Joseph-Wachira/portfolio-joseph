import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Badge({
  children,
  className,
  variant = 'default',
}: {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outline';
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
        variant === 'outline' ? 'border-white/15 text-muted-foreground' : 'bg-brand-500/15 text-brand-400',
        className
      )}
    >
      {children}
    </span>
  );
}
