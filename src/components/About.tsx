"use client";

import { ArrowUpRight, Code2, Layers3, BrainCircuit, Rocket } from "lucide-react";

const highlights = [
  {
    number: "01",
    title: "Full-Stack Development",
    description:
      "I enjoy working across the stack — from designing interfaces and building APIs to managing databases and connecting everything into a reliable application.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Product-Minded Thinking",
    description:
      "I build with the user in mind. My goal is not simply to make something work, but to create experiences that are clear, useful, responsive, and intuitive.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    description:
      "My academic work introduced me to machine learning and data-driven applications, giving me an interest in combining intelligent systems with practical software.",
    icon: BrainCircuit,
  },
];

const journey = [
  {
    year: "01",
    title: "Computer Science",
    description:
      "Built my foundation in programming, software development, databases, algorithms, and system design through academic and personal projects.",
  },
  {
    year: "02",
    title: "Building Real Systems",
    description:
      "Moved from classroom exercises into practical applications involving POS systems, scheduling platforms, websites, games, and management systems.",
  },
  {
    year: "03",
    title: "Full-Stack + ML",
    description:
      "Expanded into backend architecture, APIs, databases, and machine learning while working on my thesis project, MedSort.",
  },
  {
    year: "04",
    title: "Ready to Build",
    description:
      "Now looking for opportunities where I can contribute, keep learning, and turn ideas into polished digital products.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28 text-white md:px-10 lg:px-16"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-[-15%] top-[15%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[120px]" />
      <div className="pointer-events-none absolute right-[-15%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
              <span className="h-px w-8 bg-white/30" />
              About Me
            </div>

            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              I build things
              <br />
              <span className="text-white/35">to understand them.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/45 md:text-right">
            A Computer Science graduate focused on turning ideas into
            functional, thoughtful, and scalable digital experiences.
          </p>
        </div>

        {/* Main introduction */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Story */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl md:p-10 lg:col-span-7">
            <div className="mb-10 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">
                My Approach
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40">
                2026
              </span>
            </div>

            <div className="space-y-6 text-lg leading-8 text-white/65 md:text-xl md:leading-9">
              <p>
                I&apos;m a Computer Science graduate who enjoys building
                applications from the ground up — especially projects where
                frontend experience, backend logic, databases, and APIs all
                come together.
              </p>

              <p>
                Most of my learning has happened through actually building.
                Instead of stopping at tutorials, I like taking an idea,
                figuring out what it needs, and turning it into something
                functional.
              </p>

              <p>
                Along the way, I&apos;ve worked with web applications,
                WordPress, game development, backend systems, and machine
                learning. Each project has pushed me to think beyond just
                writing code and consider how the entire product works.
              </p>
            </div>

            <div className="mt-10 border-t border-white/10 pt-7">
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                  "MySQL",
                  "FastAPI",
                  "Tailwind CSS",
                  "Machine Learning",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50 transition-colors hover:border-white/20 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats / identity */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.055]">
              <div className="mb-12 flex items-start justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-white/35">
                  Focus
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>

              <h3 className="text-3xl font-semibold tracking-tight">
                Full-Stack
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                Frontend experiences, backend systems, APIs, databases, and
                everything in between.
              </p>
            </div>

            <div className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.055]">
              <div className="mb-12 flex items-start justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-white/35">
                  Mindset
                </span>

                <Rocket
                  size={18}
                  className="text-white/30 transition-transform duration-300 group-hover:-translate-y-1"
                />
              </div>

              <h3 className="text-3xl font-semibold tracking-tight">
                Always Building
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                I learn fastest by solving real problems and turning ideas
                into working products.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]"
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-xs text-white/25">{item.number}</span>

                  <Icon
                    size={19}
                    strokeWidth={1.5}
                    className="text-white/30 transition-colors group-hover:text-white/70"
                  />
                </div>

                <h3 className="mb-3 text-xl font-medium">{item.title}</h3>

                <p className="text-sm leading-7 text-white/40">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Journey */}
        <div className="mt-28">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/35">
              The Journey
            </span>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              From learning to building.
            </h3>
          </div>

          <div className="relative">
            <div className="absolute left-[23px] top-0 hidden h-full w-px bg-white/10 md:block" />

            <div className="space-y-5">
              {journey.map((item, index) => (
                <div
                  key={item.year}
                  className="group relative grid gap-5 md:grid-cols-[48px_150px_1fr] md:items-start"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black text-xs text-white/40 transition-all duration-300 group-hover:border-white/30 group-hover:text-white">
                    {item.year}
                  </div>

                  <div className="hidden pt-3 text-xs uppercase tracking-[0.15em] text-white/25 md:block">
                    Chapter {index + 1}
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.045]">
                    <h4 className="text-lg font-medium">{item.title}</h4>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-white/40">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-28 border-t border-white/10 pt-12">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <h3 className="text-3xl font-medium leading-tight tracking-tight md:col-span-8 md:text-5xl">
              I&apos;m not looking for a place to stop learning.
              <span className="text-white/30">
                {" "}
                I&apos;m looking for a place to build.
              </span>
            </h3>

            <a
              href="#projects"
              className="group inline-flex items-center gap-3 text-sm font-medium text-white/60 transition-colors hover:text-white md:col-span-4 md:justify-end"
            >
              See what I&apos;ve built
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-white/30 group-hover:translate-x-1">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}