import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="glass rounded-xl overflow-hidden group"
    >
      <div className="aspect-video bg-gradient-to-br from-brand-500/20 to-purple-500/20 flex items-center justify-center text-4xl">
        {/* Placeholder if no thumbnail */}
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} className="h-full w-full object-cover" />
        ) : (
          <span className="text-white/30">📁</span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map(tech => (
            <Badge key={tech} variant="outline">{tech}</Badge>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <Button size="sm" asChild>
            <Link to={`/projects/${project.slug}`}>Details</Link>
          </Button>
          {project.githubUrl && (
            <Button size="sm" variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" /> Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button size="sm" variant="ghost" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" /> Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}