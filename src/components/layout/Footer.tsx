import { socials } from '@/config/socials';
import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  instagram: <Instagram size={18} />,
};

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-4">
          {socials.map(social => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-brand-400 transition-colors"
              aria-label={social.name}
            >
              {iconMap[social.icon]}
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Joseph Wachira. Built with React & TypeScript.
        </p>
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full glass hover:bg-white/10 transition"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}