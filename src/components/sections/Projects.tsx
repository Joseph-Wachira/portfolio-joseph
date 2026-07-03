import { ProjectCard } from '@/components/sections/ProjectCard';
import { projects } from '@/config/projects';

export function Projects({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const visibleProjects = featuredOnly ? projects.filter(project => project.featured) : projects;

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visibleProjects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
