import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Code2,
  MapPin,
} from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { profile, featuredProjects } from "@/lib/portfolio";

export default function Home() {
  return (
    <main tabIndex={-1} id="main">
      <section className="shell hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot" /> REACT.JS · NEXT.JS · TYPESCRIPT
          </p>
          <h1 id="hero-title">
            Frontend
            <br />
            engineering.
            <br />
            <span className="serif-word">Built to scale.</span>
          </h1>
          <p className="hero-description">{profile.introduction}</p>
          <div className="hero-actions">
            <Link href="/projects" className="button button-dark">
              View Projects <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
            <a href={`mailto:${profile.email}`} className="text-link">
              Contact Me <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href={profile.resume} download className="text-link">
              Download Resume <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-note">
            <span className="tiny-line" /> Insurance technology · Microfrontends
            · CMS integrations
          </div>
        </div>
        <div className="hero-art">
          <div className="portrait-card">
            <span className="portrait-label">THE PERSON BEHIND THE PIXELS</span>
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <span className="portrait-initial" aria-hidden="true">
              ay.
            </span>
            <Image
              src="/about/developer.png"
              alt="Ashutosh Yadav"
              width={1080}
              height={1291}
              sizes="(max-width: 760px) 65vw, 35vw"
              priority
              className="portrait-image"
            />
            <div className="portrait-caption">
              <span>
                Ashutosh Yadav<small>Frontend Engineer</small>
              </span>
              <ArrowDownRight size={28} aria-hidden="true" />
            </div>
          </div>
          <div className="code-sticker">
            <Code2 size={27} strokeWidth={1.7} aria-hidden="true" />
            <span>
              From idea
              <br />
              <strong>to interface.</strong>
            </span>
          </div>
          <div className="location-sticker">
            <MapPin size={14} aria-hidden="true" /> Based in Uttar Pradesh,
            India
          </div>
        </div>
        <a className="hero-scroll" href="#work">
          <ArrowDown size={15} aria-hidden="true" /> SCROLL TO EXPLORE
        </a>
      </section>

      <div className="skills-strip" aria-label="Core technologies">
        <div className="shell">
          <span className="mono-label">MY EVERYDAY TOOLKIT</span>
          <div>
            {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
              <span key={skill}>
                <Asterisk size={17} aria-hidden="true" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section
        id="experience"
        className="shell section experience-section"
        aria-labelledby="experience-title"
      >
        <div className="experience-intro">
          <p className="eyebrow">01 / PROFESSIONAL EXPERIENCE</p>
          <h2 id="experience-title">
            Professional
            <br />
            <span className="serif-word">experience.</span>
          </h2>
        </div>
        <div className="experience-list">
          {profile.experience.map((experience, index) => (
            <article key={experience.company} className="experience-item">
              <span className="experience-index">0{index + 1}</span>
              <div>
                <p className="mono-label">{experience.period}</p>
                <h3>{experience.role}</h3>
                <p>{experience.company}</p>
                <ul className="experience-contributions">
                  {experience.contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <ArrowUpRight size={22} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section
        className="shell section work-section"
        id="work"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / SELECTED WORK</p>
            <h2 id="work-title">
              Selected work.
              <br />
              <span className="serif-word">Personal contributions.</span>
            </h2>
          </div>
          <Link href="/projects" className="text-link">
            All work <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <section
        id="about"
        className="about-section"
        aria-labelledby="about-title"
      >
        <div className="shell section about-grid">
          <div>
            <p className="eyebrow">03 / A LITTLE ABOUT ME</p>
            <h2 id="about-title">
              Curiosity meets
              <br />
              <span className="serif-word">craft.</span>
            </h2>
            <p className="about-lead">
              Frontend architecture for complex customer journeys.
            </p>
            <p className="body-copy">
              At Evervent, I work across insurance purchase journeys, policy
              management, and customer dashboards. My focus is reusable frontend
              architecture, REST API and Strapi CMS integrations, and
              performance optimization across microfrontends in a Turborepo
              monorepo.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Find me on GitHub <Code2 size={18} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
          <div className="about-details">
            {profile.skillGroups.map((group) => (
              <div className="skill-group" key={group.name}>
                <h3>{group.name}</h3>
                <ul className="skill-tags">
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="learning-note">
              <h3>Backend learning & fundamentals</h3>
              <p>{profile.learning}</p>
            </div>
            <div className="about-facts">
              <div>
                <span className="mono-label">BASED IN</span>
                <p>Pratapgarh, India</p>
              </div>
              <div>
                <span className="mono-label">LANGUAGES</span>
                <p>{profile.languages.join(" & ")}</p>
              </div>
            </div>
            <div className="education-note">
              <span className="mono-label">
                EDUCATION / {profile.education.period}
              </span>
              <h4>{profile.education.degree}</h4>
              <p>{profile.education.school}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="shell contact-banner"
        aria-labelledby="contact-banner-title"
      >
        <div>
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
          <h2 id="contact-banner-title">
            Let’s build something
            <br />
            <span className="serif-word">worth using.</span>
          </h2>
        </div>
        <Link
          href="/contact"
          className="contact-circle"
          aria-label="LET’S TALK about your project"
        >
          <ArrowUpRight size={38} strokeWidth={1.4} aria-hidden="true" />
          <span>LET’S TALK</span>
        </Link>
      </section>
    </main>
  );
}
