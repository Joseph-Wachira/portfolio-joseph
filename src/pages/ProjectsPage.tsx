import { ProjectCard } from '@/components/sections/ProjectCard';
import { projects } from '@/config/projects';

export default function ProjectsPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold">Projects</h1>
        <p className="mt-3 text-muted-foreground">
          A selection of projects I’ve built and shipped across frontend, backend, and creative tooling.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
