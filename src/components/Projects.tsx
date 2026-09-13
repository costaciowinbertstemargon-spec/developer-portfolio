"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
} from "lucide-react";
import {
  FaGithub,
} from "react-icons/fa";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  role: string;
  github?: string;
  live?: string;
  images?: string[];
  video?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "POS-BigBrew",
    title: "POS-BigBrew",
    category: "Point-of-Sale System",
    description:
      "A web-based POS and sales management system developed for a BigBrew branch in Ternate. The system handles product management, sales records, cashier transactions, user management, and receipt generation.",
    technologies: ["JavaScript", "PHP", "MySQL", "HTML", "CSS"],
    role: "Back-End Developer",
    github:
      "https://github.com/costaciowinbertstemargon-spec/POS-bigbrew",
    images: [
      "/projects/bigbrew/cashier.png",
      "/projects/bigbrew/dashboard.png",
      "/projects/bigbrew/sales.png",
      "/projects/bigbrew/receipt.png",
      "/projects/bigbrew/product-management.png",
    ],
  },

  {
    id: "MatchOClock",
    title: "MatchOClock",
    category: "Web Application",
    description:
      "A collaborative scheduling application designed to make coordinating schedules easier. It includes calendars, friends, notifications, and personal notes.",
    technologies: ["React", "Node.js", "Express", "CSS"],
    role: "Full-Stack Developer",
    github:
      "https://github.com/costaciowinbertstemargon-spec/MatchOClock",
    images: [
      "/projects/matchoclock/signin.png",
      "/projects/matchoclock/signup.png",
      "/projects/matchoclock/calendar.png",
      "/projects/matchoclock/notification.png",
      "/projects/matchoclock/notes.png",
      "/projects/matchoclock/profile.png",
    ],
  },

  {
    id: "Heartbound",
    title: "Heartbound",
    category: "2D Platformer Game",
    description:
      "An academic 2D platformer game featuring hazards, health mechanics, collectibles, zone progression, movement, jumping, pause, and retry systems.",
    technologies: [
      "Godot",
      "GDScript",
      "2D Game Development",
      "Pixel Art",
    ],
    role: "Game Developer",
    github:
      "https://github.com/costaciowinbertstemargon-spec/Heartbound",
    images: [
      "/projects/heartbound/starting.png",
      "/projects/heartbound/controls.png",
      "/projects/heartbound/objective.png",
      "/projects/heartbound/gameover.png",
    ],
  },

  {
    id: "SlowDesign",
    title: "Slow Design",
    category: "WordPress Website",
    description:
      "A Japanese real-estate and resort website implemented in WordPress from a detailed Figma design, including property listings, relocation information, management services, testimonials, FAQs, company information, contact pages, and a blog.",
    technologies: ["WordPress", "Figma", "HTML", "CSS", "JavaScript"],
    role: "WordPress Developer",
    live: "https://slow-design.com/",
    images: [
      "/projects/slowdesign/home.png",
      "/projects/slowdesign/property.png",
      "/projects/slowdesign/house.png",
      "/projects/slowdesign/migration.png",
      "/projects/slowdesign/management.png",
      "/projects/slowdesign/testimonials.png",
      "/projects/slowdesign/faq.png",
      "/projects/slowdesign/company.png",
      "/projects/slowdesign/contact.png",
      "/projects/slowdesign/purchase.png",
    ],
  },

  {
    id: "MedSort",
    title: "MedSort",
    category: "Medical Inventory Management System",
    description:
      "A web-based medical inventory management system designed to help track and manage medical supplies and equipment. The project combines a modern full-stack architecture with machine learning for expiration-risk analysis and prediction.",
    technologies: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "Python",
      "Express.js",
      "MySQL",
      "FastAPI",
      "Firebase",
      "Scikit-learn",
    ],
    role: "Full-Stack Developer & Machine Learning Developer",
    github:
      "https://github.com/costaciowinbertstemargon-spec/MedSort",
    video: "/projects/medsort/Final-Demo-Video (1).mp4",
    featured: true,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null
  );

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const openProject = (project: Project) => {
    setActiveImage(0);
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (!selectedProject?.images?.length) return;

    setActiveImage((current) =>
      current === selectedProject.images!.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    if (!selectedProject?.images?.length) return;

    setActiveImage((current) =>
      current === 0 ? selectedProject.images!.length - 1 : current - 1
    );
  };

  const medSort = projects.find((project) => project.id === "MedSort")!;
  const otherProjects = projects.filter((project) => project.id !== "MedSort");

  const matchOClock = otherProjects.find(
    (project) => project.id === "MatchOClock"
  )!;

  const slowDesign = otherProjects.find(
    (project) => project.id === "SlowDesign"
  )!;

  const bigBrew = otherProjects.find(
    (project) => project.id === "POS-BigBrew"
  )!;

  const heartbound = otherProjects.find(
    (project) => project.id === "Heartbound"
  )!;

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden px-6 py-28 text-white md:px-10 lg:px-16"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.035),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
                <span className="h-px w-8 bg-white/30" />
                Selected Work
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
                Things I&apos;ve
                <br />
                <span className="text-white/30">built along the way.</span>
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-white/30">05 projects</span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span className="text-sm text-white/30">
                Full-Stack · Web · ML
              </span>
            </div>
          </div>

          {/* Featured project */}
          <button
            type="button"
            onClick={() => openProject(medSort)}
            className="group relative mb-5 block w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] text-left transition-all duration-700 hover:border-white/20"
          >
            <div className="relative min-h-[580px] overflow-hidden md:min-h-[680px]">
              {/* Video */}
              <video
                src={medSort.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-1000 group-hover:scale-[1.03] group-hover:opacity-70"
              />

              {/* Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/5" />

              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

              {/* Featured badge */}
              <div className="absolute left-7 top-7">
                <span className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-white/70 backdrop-blur-xl">
                  Featured Project
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10 lg:p-12">
                <div className="mb-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/45">
                  <span>{medSort.category}</span>

                  <span className="h-1 w-1 rounded-full bg-white/30" />

                  <span>{medSort.role}</span>
                </div>

                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                  <div className="max-w-3xl">
                    <h3 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                      {medSort.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
                      {medSort.description}
                    </p>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white text-black transition-all duration-500 group-hover:scale-110">
                    <ArrowUpRight size={21} />
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {medSort.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white/55 backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </button>

          {/* Project gallery */}
          <div className="grid gap-5 lg:grid-cols-12">
            <ProjectCard
              project={matchOClock}
              className="lg:col-span-7"
              height="h-[460px]"
              onClick={() => openProject(matchOClock)}
            />

            <ProjectCard
              project={slowDesign}
              className="lg:col-span-5"
              height="h-[460px]"
              onClick={() => openProject(slowDesign)}
            />

            <ProjectCard
              project={bigBrew}
              className="lg:col-span-5"
              height="h-[460px]"
              onClick={() => openProject(bigBrew)}
            />

            <ProjectCard
              project={heartbound}
              className="lg:col-span-7"
              height="h-[460px]"
              onClick={() => openProject(heartbound)}
            />
          </div>

          {/* Bottom statement */}
          <div className="mt-20 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
            <p className="max-w-xl text-sm leading-7 text-white/35">
              Different projects, different problems — but the same goal:
              build something useful, understand how it works, and make it
              better.
            </p>

            <a
              href="https://github.com/costaciowinbertstemargon-spec"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
            >
              More on GitHub
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          activeImage={activeImage}
          onClose={closeProject}
          onNext={nextImage}
          onPrevious={previousImage}
          onSelectImage={setActiveImage}
        />
      )}
    </>
  );
}

/* -------------------------------------------------------
   Project Card
------------------------------------------------------- */

function ProjectCard({
  project,
  className = "",
  height = "h-[420px]",
  onClick,
}: {
  project: Project;
  className?: string;
  height?: string;
  onClick: () => void;
}) {
  const image = project.images?.[0];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] text-left transition-all duration-700 hover:-translate-y-1 hover:border-white/20 ${className}`}
    >
      <div className={`relative overflow-hidden ${height}`}>
        {image && (
          <img
            src={image}
            alt={`${project.title} screenshot`}
            className="absolute inset-0 h-full w-full object-cover object-top opacity-65 transition duration-1000 group-hover:scale-105 group-hover:opacity-80"
          />
        )}

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/5" />

        <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.18em] text-white/40">
              {project.category}
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur-xl transition-all duration-500 group-hover:bg-white group-hover:text-black">
              <ArrowUpRight size={17} />
            </span>
          </div>

          <h3 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            {project.title}
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-6 text-white/45">
            {project.role}
          </p>
        </div>
      </div>
    </button>
  );
}

/* -------------------------------------------------------
   Project Modal
------------------------------------------------------- */

function ProjectModal({
  project,
  activeImage,
  onClose,
  onNext,
  onPrevious,
  onSelectImage,
}: {
  project: Project;
  activeImage: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onSelectImage: (index: number) => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-xl md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative flex h-[94vh] w-full max-w-7xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#080808] shadow-2xl">
        {/* Modal Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-5 md:px-8">
          <div>
            <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/30">
              {project.category}
            </div>

            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-white/25 hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="grid lg:grid-cols-[1.5fr_0.8fr]">
            {/* Media */}
            <div className="border-b border-white/10 p-5 md:p-7 lg:border-b-0 lg:border-r">
              {project.video ? (
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                  <video
                    src={project.video}
                    controls
                    playsInline
                    className="max-h-[650px] w-full"
                  />
                </div>
              ) : project.images?.length ? (
                <>
                  {/* Main image */}
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                    <img
                      src={project.images[activeImage]}
                      alt={`${project.title} screenshot ${activeImage + 1}`}
                      className="max-h-[650px] w-full object-contain"
                    />

                    {project.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={onPrevious}
                          aria-label="Previous image"
                          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/70 backdrop-blur-xl transition hover:bg-white hover:text-black"
                        >
                          <ChevronLeft size={18} />
                        </button>

                        <button
                          type="button"
                          onClick={onNext}
                          aria-label="Next image"
                          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/70 backdrop-blur-xl transition hover:bg-white hover:text-black"
                        >
                          <ChevronRight size={18} />
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[10px] text-white/50 backdrop-blur-xl">
                          {activeImage + 1} / {project.images.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {project.images.length > 1 && (
                    <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">
                      {project.images.map((image, index) => (
                        <button
                          key={image}
                          type="button"
                          onClick={() => onSelectImage(index)}
                          className={`relative aspect-video overflow-hidden rounded-xl border transition ${
                            activeImage === index
                              ? "border-white/60"
                              : "border-white/10 opacity-50 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${project.title} thumbnail ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-white/10 text-sm text-white/30">
                  No preview available
                </div>
              )}
            </div>

            {/* Details */}
            <div className="p-6 md:p-8 lg:p-10">
              <div className="mb-10">
                <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                  About the project
                </span>

                <p className="mt-5 text-base leading-8 text-white/55">
                  {project.description}
                </p>
              </div>

              {/* Role */}
              <div className="border-t border-white/10 py-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Role
                </span>

                <p className="mt-2 text-sm text-white/65">{project.role}</p>
              </div>

              {/* Technologies */}
              <div className="border-t border-white/10 py-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Technologies
                </span>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(project.github || project.live) && (
                <div className="border-t border-white/10 pt-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Explore
                  </span>

                  <div className="mt-4 flex flex-col gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/60 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                      >
                        <span className="flex items-center gap-3">
                          <FaGithub size={17} />
                          View on GitHub
                        </span>

                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/60 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                      >
                        <span className="flex items-center gap-3">
                          <ExternalLink size={17} />
                          Visit Live Website
                        </span>

                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}