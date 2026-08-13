import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/shared/ThemeToggle';

const links = [
  { to: '#home', label: 'Home' },
  { to: '#skills', label: 'Skills' },
  { to: '#projects', label: 'Projects' },
  { to: '#experience', label: 'Experience' },
  { to: '#testimonials', label: 'Testimonials' },
  { to: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = links.map(link => link.to.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(`#${current}`);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    const element = document.querySelector(to);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 z-50 w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={cn(
        'mx-auto px-6 py-4 transition-all duration-300',
        scrolled ? 'max-w-full backdrop-blur-xl border-b border-border bg-background/70' : 'max-w-7xl'
      )}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#home" 
              onClick={(e) => handleClick(e, '#home')}
              className="text-xl font-black tracking-tight"
            >
              <span className="text-gradient">
                JOE.dev
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={link.to}
                  onClick={(e) => handleClick(e, link.to)}
                  className={cn(
                    'relative text-sm font-medium transition-colors',
                    activeSection === link.to
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                  {activeSection === link.to && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden glass p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <motion.div
              animate={{ rotate: mobileOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: mobileOpen ? 'auto' : 0,
            opacity: mobileOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden md:hidden"
        >
          <div className="glass-strong rounded-2xl p-6 mt-4">
            {links.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={link.to}
                  onClick={(e) => handleClick(e, link.to)}
                  className={cn(
                    'block py-3 text-base font-medium transition-colors',
                    activeSection === link.to 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                </a>
              </motion.div>
            ))}
            <div className="mt-4 pt-4 border-t border-border/50">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}