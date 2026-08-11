import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: expanded ? 0 : rotateX,
        rotateY: expanded ? 0 : rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
    >
      {/* Gradient Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(45deg, #dc2626, #991b1b, #7f1d1d, #dc2626)',
          backgroundSize: '200% 200%',
          padding: '1px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
        }}
        animate={{
          backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%',
        }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-red-950/30 to-black">
        <motion.div
          style={{ transform: 'translateZ(20px)' }}
          className="h-full w-full"
        >
          {project.thumbnail ? (
            <motion.img
              src={project.thumbnail}
              alt={project.title}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              <div className="text-center">
                <div className="text-6xl mb-2">💻</div>
                <p>No preview available</p>
              </div>
            </div>
          )}
        </motion.div>
        
        {/* Overlay Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 0.9 }}
          transition={{ duration: 0.3 }}
        />

        {/* Quick Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute top-4 right-4 flex gap-2"
        >
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full glass-strong backdrop-blur-xl"
              aria-label="View on GitHub"
            >
              <Github className="h-4 w-4" />
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full glass-strong backdrop-blur-xl"
              aria-label="View demo"
            >
              <ExternalLink className="h-4 w-4" />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="p-6"
        style={{ transform: 'translateZ(30px)' }}
      >
        <motion.h3
          className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
        >
          {project.title}
        </motion.h3>

        <motion.p 
          className={cn(
            'mb-4 text-sm text-muted-foreground leading-relaxed',
            expanded ? '' : 'line-clamp-2'
          )}
        >
          {expanded ? project.longDescription : project.description}
        </motion.p>

        {/* Tech Stack */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, expanded ? project.technologies.length : 4).map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <Badge
                variant="secondary"
                className="glass text-xs font-medium"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
          {!expanded && project.technologies.length > 4 && (
            <Badge variant="secondary" className="glass">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        {/* Show More/Less Button */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="outline"
            size="sm"
            className="w-full glass-strong group/btn"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="flex items-center justify-center gap-2">
              {expanded ? 'Show Less' : 'View Details'}
              <motion.span
                animate={{ x: expanded ? 0 : [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: expanded ? 0 : Infinity }}
              >
                {expanded ? '↑' : '→'}
              </motion.span>
            </span>
          </Button>
        </motion.div>
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at center, rgba(220, 38, 38, 0.4), transparent 70%)',
        }}
      />
    </motion.div>
  );
}
