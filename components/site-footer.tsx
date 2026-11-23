import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import { profile } from "@/lib/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <Link href="/" className="footer-signature">
          Ashutosh Yadav<span>Thoughtful interfaces. Built with care.</span>
        </Link>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <Code2 size={16} aria-hidden="true" /> GitHub{" "}
            <span className="sr-only">(opens in a new tab)</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href={`mailto:${profile.email}`}>
            Email <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
        <span className="copyright">
          © {new Date().getFullYear()} Ashutosh Yadav
        </span>
      </div>
    </footer>
  );
}
