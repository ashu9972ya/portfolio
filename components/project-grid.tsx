"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/lib/portfolio";
import { ProjectCard } from "./project-card";

export function ProjectGrid() {
  const [category, setCategory] = useState<ProjectCategory | "All work">(
    "All work",
  );
  const visible = projects.filter(
    (project) => category === "All work" || project.category === category,
  );
  return (
    <>
      <div
        className="project-filters"
        role="group"
        aria-label="Filter projects"
      >
        {(
          ["All work", "Professional", "Independent", "Earlier work"] as const
        ).map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
            <span>
              {item === "All work"
                ? projects.length
                : projects.filter((project) => project.category === item)
                    .length}
            </span>
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>
      <div className="project-grid">
        {visible.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={projects.indexOf(project)}
            headingLevel={2}
          />
        ))}
      </div>
    </>
  );
}
