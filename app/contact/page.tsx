import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import { ArrowUpRight, Code2, MapPin, Phone } from "lucide-react";
import { ContactForm, CopyEmail } from "@/components/contact-form";
import { profile } from "@/lib/portfolio";

export const metadata: Metadata = pageMetadata(
  "Get in touch",
  "Contact Ashutosh Yadav about frontend development, React, Next.js, and Frontend Engineer opportunities.",
  "/contact",
);

export default function ContactPage() {
  return (
    <main tabIndex={-1} id="main" className="shell page-main">
      <div className="page-heading">
        <p className="eyebrow">GOOD THINGS START WITH A CONVERSATION</p>
        <h1>
          Let’s make
          <br />
          <span className="serif-word">something.</span>
        </h1>
        <p>
          A project, an opportunity, or a simple hello — I’d love to hear from
          you.
        </p>
      </div>
      <div className="contact-layout">
        <div className="contact-details">
          <p className="mono-label">DROP ME A LINE</p>
          <a href={`mailto:${profile.email}`} className="contact-email">
            {profile.email}
            <ArrowUpRight size={22} aria-hidden="true" />
          </a>
          <CopyEmail />
          <div className="contact-detail">
            <MapPin size={19} aria-hidden="true" />
            <div>
              <span className="mono-label">FIND ME IN</span>
              <p>{profile.location}</p>
            </div>
          </div>
          <div className="contact-detail">
            <Phone size={19} aria-hidden="true" />
            <div>
              <span className="mono-label">GIVE ME A CALL</span>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </div>
          </div>
          <a
            className="text-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight size={17} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a className="text-link" href={profile.resume} download>
            Download Resume <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            <Code2 size={18} aria-hidden="true" /> Explore my GitHub{" "}
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
