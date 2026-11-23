import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectGrid } from "@/components/project-grid";

export const metadata: Metadata = pageMetadata(
  "Selected work",
  "Frontend engineering contributions to JioInsure and Bimastreet, and independent development of VidyaPulse.",
  "/projects",
);

export default function ProjectsPage() {
  return (
    <main tabIndex={-1} id="main" className="shell page-main">
      <div className="page-heading">
        <p className="eyebrow">A FEW THINGS I’VE HELPED BUILD</p>
        <h1>
          Selected <span className="serif-word">work.</span>
        </h1>
        <p>
          Real projects. Practical problems. Interfaces that bring it all
          together.
        </p>
      </div>
      <ProjectGrid />
      <div className="page-bottom-callout">
        <p>Your idea could be next.</p>
        <Link href="/contact" className="text-link">
          Let’s talk <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
