import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { ThemeToggle } from '@/components/shared/ThemeToggle';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/photography', label: 'Photography' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const progress = useScrollProgress();

  return (
    <nav className="fixed top-0 z-50 w-full">
      {/* Progress bar */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-brand-400 to-purple-400 origin-left"
        style={{ scaleX: progress }}
      />
      <div className="glass-strong mx-auto mt-4 max-w-5xl rounded-full px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight">
          <span className="text-gradient">JW</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-400',
                location.pathname === link.to ? 'text-brand-400' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="glass mx-4 mt-2 rounded-2xl p-4 md:hidden">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="block py-2 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}