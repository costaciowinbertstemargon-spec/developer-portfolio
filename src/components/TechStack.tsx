"use client";

import {
  Braces,
  Database,
  GitBranch,
  Globe,
  Layers3,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    number: "01",
    title: "Programming",
    description: "Languages and fundamentals I use to build applications.",
    icon: Braces,
    technologies: [
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    number: "02",
    title: "Frontend & Web",
    description: "Building responsive and interactive user experiences.",
    icon: Globe,
    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  },
  {
    number: "03",
    title: "Backend & APIs",
    description: "Developing server-side systems and connecting applications.",
    icon: Layers3,
    technologies: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    number: "04",
    title: "Database",
    description: "Designing and working with structured application data.",
    icon: Database,
    technologies: [
      "MySQL",
      "Database Design",
      "Data Modeling",
    ],
  },
  {
    number: "05",
    title: "Machine Learning",
    description: "Applying data-driven approaches to practical problems.",
    icon: BrainCircuit,
    technologies: [
      "Scikit-learn",
      "K-Means Clustering",
      "Random Forest Classification",
      "Predictive Modeling",
      "Model Evaluation",
      "Data Cleaning",
      "Feature Engineering",
      "Data Analysis",
    ],
  },
  {
    number: "06",
    title: "Tools & Workflow",
    description: "Tools that support development, design, and collaboration.",
    icon: GitBranch,
    technologies: [
      "Git",
      "GitHub",
      "Firebase",
      "Figma",
      "Canva",
      "Version Control",
      "Object-Oriented Programming",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28 text-white md:px-10 lg:px-16"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
              <span className="h-px w-8 bg-white/30" />
              Technologies
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              Tools I use
              <br />
              <span className="text-white/30">to bring ideas to life.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/40 md:text-right">
            A growing collection of technologies I&apos;ve worked with across
            web development, backend systems, databases, and machine learning.
          </p>
        </div>

        {/* Categories */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.number}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/[0.04] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top */}
                <div className="relative mb-12 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Icon
                      size={19}
                      strokeWidth={1.5}
                      className="text-white/50 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <span className="text-xs text-white/20">
                    {category.number}
                  </span>
                </div>

                {/* Title */}
                <div className="relative">
                  <h3 className="text-xl font-medium tracking-tight">
                    {category.title}
                  </h3>

                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-white/35">
                    {category.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="relative mt-7 flex flex-wrap gap-2">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/45 transition-all duration-300 group-hover:border-white/[0.14] group-hover:text-white/60"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom stack summary */}
        <div className="mt-5 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl md:p-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                Current Stack
              </span>

              <h3 className="mt-3 text-2xl font-medium tracking-tight">
                My preferred development stack
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 lg:max-w-2xl lg:justify-end">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "Python",
                "FastAPI",
                "MySQL",
                "Tailwind CSS",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/55 transition-colors hover:border-white/25 hover:text-white"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                Philosophy
              </span>

              <p className="mt-4 max-w-2xl text-xl leading-8 text-white/55 md:text-2xl">
                Tools are only useful when they help solve the right problem.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
            >
              Let&apos;s build something
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:translate-x-1 group-hover:border-white/30">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}