"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="wordmark">
          <span className="monogram" aria-hidden="true">
            ay<span>.</span>
          </span>
          <span className="wordmark-name">
            Ashutosh Yadav<span>Frontend Engineer</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="main-nav">
          {[
            { href: "/#experience", label: "Experience" },
            { href: "/projects", label: "Work" },
            { href: "/#about", label: "About" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link
            href="/contact"
            className="header-contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Let’s talk <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}
