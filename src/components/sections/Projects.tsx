import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { projects } from '@/config/projects';
import { RevealText } from '@/components/animations/RevealText';
import { ParallaxSection } from '@/components/animations/ParallaxSection';

export function Projects({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const visibleProjects = featuredOnly ? projects.filter(project => project.featured) : projects;

  return (
    <section className="px-6 py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <ParallaxSection speed={0.2}>
        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 mb-4 rounded-full glass"
            >
              <span className="text-sm font-medium text-primary">Portfolio</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <RevealText>{featuredOnly ? 'Featured Projects' : 'All Projects'}</RevealText>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <RevealText delay={0.2}>
                A collection of my recent work and side projects
              </RevealText>
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
}
