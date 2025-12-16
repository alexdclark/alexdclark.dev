import { ExternalLink, Github } from 'lucide-react';
import { cn } from '../lib/utils';

type Project = {
  title: string;
  description: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card flex h-full flex-col gap-4 p-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/20"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-3 text-sm font-semibold">
        {project.links.demo && (
          <a
            className={linkClass}
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink className="h-4 w-4" /> Demo
          </a>
        )}
        {project.links.github && (
          <a
            className={linkClass}
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        )}
      </div>
    </div>
  );
}

const linkClass = cn(
  'inline-flex items-center gap-2 rounded-full border border-gray-200/70 dark:border-gray-800/70 px-4 py-2 transition',
  'bg-white/60 hover:-translate-y-0.5 hover:shadow-sm dark:bg-gray-900/60'
);
