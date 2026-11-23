import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/portfolio";

export function ProjectCard({
  project,
  index,
  headingLevel = 3,
}: {
  project: Project;
  index: number;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const detailHref = project.contributions
    ? `/projects/${project.id}`
    : project.href;
  const external = !project.contributions;
  return (
    <article className="project-card">
      {project.image ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`project-visual ${project.color}`}
          aria-label={`Visit ${new URL(project.href).hostname} — ${project.name} (opens in a new tab)`}
        >
          <div className="project-browser">
            <div className="browser-toolbar" aria-hidden="true">
              <span />
              <span />
              <span />
              <span className="browser-url">
                {new URL(project.href).hostname}
              </span>
            </div>
            <Image
              src={project.image}
              alt={project.imageAlt ?? project.name}
              width={1440}
              height={693}
              sizes="(max-width: 760px) 80vw, 40vw"
            />
          </div>
          <span className="project-visit">
            <ArrowUpRight size={23} aria-hidden="true" />
          </span>
        </a>
      ) : (
        <div className={`project-editorial ${project.color}`}>
          <span className="mono-label">
            {project.category === "Professional"
              ? "TEAM PRODUCT · FRONTEND CONTRIBUTION"
              : "INDEPENDENT APPLICATION"}
          </span>
          <p>{project.summary}</p>
          <span>{project.name}</span>
        </div>
      )}
      <div className="project-info">
        <span className="project-number">0{index + 1}</span>
        <div>
          <div className="project-title-row">
            <Heading>
              <Link
                href={detailHref}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {project.name}
                {external && (
                  <span className="sr-only"> (opens in a new tab)</span>
                )}
              </Link>
            </Heading>
            <span className="project-category">{project.category}</span>
          </div>
          <p>{project.description}</p>
          <ul className="tags" aria-label={`${project.name} technologies`}>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          {project.contributions && (
            <Link className="text-link" href={detailHref}>
              Read my contribution <ArrowRight size={17} aria-hidden="true" />
              <span className="sr-only"> to {project.name}</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
