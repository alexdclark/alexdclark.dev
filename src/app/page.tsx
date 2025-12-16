import Link from 'next/link';
import { Navbar } from '../components/navbar';
import { ProjectCard } from '../components/project-card';
import { SectionTitle } from '../components/section-title';
import { ExperienceTimeline } from '../components/experience-timeline';
import { siteContent } from '../content/site';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-gray-900 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900" id="home">
      <Navbar />
      <main className="space-y-24 md:space-y-32">
        <section className="section-container grid gap-10 md:grid-cols-2 md:items-center" id="hero">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{siteContent.headline}</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {siteContent.name}
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-200">{siteContent.summary}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50"
              >
                {siteContent.cta}
              </Link>
              <a
                href={`mailto:${siteContent.email}`}
                className="rounded-full border border-gray-200/70 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800/70 dark:bg-gray-900/80 dark:text-white"
              >
                Email me
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-300">
              <span className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 dark:bg-gray-900/70">
                <span className="h-2 w-2 rounded-full bg-green-500" /> Available for engagements
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 dark:bg-gray-900/70">
                📍 {siteContent.location}
              </span>
            </div>
          </div>
          <div className="card grid gap-4 p-6">
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-white to-white p-6 dark:from-primary/10 dark:via-gray-900 dark:to-gray-900">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Core Focus</p>
              <h3 className="mt-2 text-2xl font-bold">Azure-first architectures</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Repeatable patterns for secure, observable, and cost-aware platforms that scale with your roadmap.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm font-semibold">
              {siteContent.skills.slice(0, 4).map((skill) => (
                <div key={skill} className="rounded-xl bg-white/60 px-4 py-3 text-gray-800 shadow-sm dark:bg-gray-900/60 dark:text-gray-100">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-container" id="about">
          <SectionTitle eyebrow="About" title="From strategy to secure delivery" />
          <div className="grid gap-8 md:grid-cols-3">
            <p className="md:col-span-2 text-lg text-gray-700 dark:text-gray-200">
              I partner with leaders and engineering teams to design cloud operating models that stick. Whether it&apos;s modernizing
              virtual desktops, codifying landing zones, or raising observability standards, I bring pragmatic patterns that teams can
              own and evolve.
            </p>
            <div className="card space-y-3 p-5 text-sm text-gray-700 dark:text-gray-200">
              <p className="font-semibold">What clients appreciate</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" /> Clear, risk-aware roadmaps</li>
                <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" /> Hands-on build alongside teams</li>
                <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" /> Automation-first delivery</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-container" id="skills">
          <SectionTitle eyebrow="Skills" title="What I work with" />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {siteContent.skills.map((skill) => (
              <div
                key={skill}
                className="card flex items-center justify-between gap-3 px-5 py-4 text-sm font-semibold text-gray-800 dark:text-gray-100"
              >
                <span>{skill}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Ready to deploy</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-container" id="projects">
          <SectionTitle eyebrow="Projects" title="Recent engagements" />
          <div className="grid gap-6 md:grid-cols-2">
            {siteContent.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="section-container" id="experience">
          <SectionTitle eyebrow="Experience" title="Track record" />
          <ExperienceTimeline experience={siteContent.experience} />
        </section>

        <section className="section-container" id="certifications">
          <SectionTitle eyebrow="Certifications" title="Proof points" />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {siteContent.certifications.map((certification) => (
              <div
                key={certification}
                className="card flex items-center gap-3 px-5 py-4 text-sm font-semibold text-gray-800 dark:text-gray-100"
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>{certification}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-container" id="contact">
          <SectionTitle eyebrow="Contact" title="Let&apos;s build the next milestone" />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card space-y-4 p-6 text-gray-700 dark:text-gray-200">
              <p>
                Share a bit about your goals and timeline. I typically reply within one business day with next steps and a short
                list of discovery questions.
              </p>
              <div className="space-y-2">
                <p className="font-semibold">Preferred channels</p>
                <div className="flex flex-wrap gap-3 text-sm font-semibold">
                  <a
                    href={`mailto:${siteContent.email}`}
                    className="rounded-full border border-gray-200/70 bg-white/70 px-4 py-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800/70 dark:bg-gray-900/70"
                  >
                    {siteContent.email}
                  </a>
                  {siteContent.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-gray-200/70 bg-white/70 px-4 py-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800/70 dark:bg-gray-900/70"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <form className="card space-y-4 p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Name
                  <input
                    type="text"
                    name="name"
                    className={inputClass}
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="space-y-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Work email
                  <input
                    type="email"
                    name="email"
                    className={inputClass}
                    placeholder="you@company.com"
                    required
                  />
                </label>
              </div>
              <label className="space-y-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                Project type
                <select name="project" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>Azure platform build</option>
                  <option>AVD modernization</option>
                  <option>Automation &amp; IaC</option>
                  <option>Observability uplift</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="space-y-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                How can I help?
                <textarea
                  name="message"
                  className={cn(inputClass, 'min-h-[140px]')}
                  placeholder="Share goals, timeline, and stakeholders"
                  required
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50"
              >
                Send message
              </button>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                This form is for demonstration only. It does not send data but shows the intended workflow.
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

const inputClass =
  'w-full rounded-xl border border-gray-200/70 bg-white/70 px-3 py-3 text-sm font-medium text-gray-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-800/70 dark:bg-gray-900/70 dark:text-gray-50';
