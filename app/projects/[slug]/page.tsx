import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/portfolio";
export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.id === slug);
  return project
    ? pageMetadata(
        `${project.name} — My contribution`,
        project.description,
        `/projects/${project.id}`,
      )
    : {};
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.id === slug);
  if (!project) notFound();
  return (
    <main tabIndex={-1} id="main" className="shell page-main case-study">
      <Link href="/projects" className="text-link">
        <ArrowLeft size={17} aria-hidden="true" /> All work
      </Link>
      <div className="page-heading">
        <p className="eyebrow">
          {project.category.toUpperCase()} / CONTRIBUTION NOTES
        </p>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
      </div>
      <div className="case-layout">
        <aside>
          <h2>My role</h2>
          <p>{project.role}</p>
          <h2>Technology stack</h2>
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <a
            className="text-link"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.category === "Independent"
              ? "Open application"
              : "Visit public product"}
            <ArrowUpRight size={17} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </aside>
        <div>
          <section>
            <h2>Problem & context</h2>
            <p>{project.problem}</p>
          </section>
          <section>
            <h2>My engineering contributions</h2>
            <ul className="case-contributions">
              {project.contributions?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>
              {project.id === "bimastreet"
                ? "Security & scope"
                : "Scope & considerations"}
            </h2>
            <p>{project.considerations}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
