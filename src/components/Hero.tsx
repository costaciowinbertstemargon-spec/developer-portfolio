"use client";

import { useState } from "react";

export default function Hero() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/*   HERO ATMOSPHERE
*/} {/* Soft spotlight behind heading */}
      <div className="hero-heading-glow" />

      {/* Very subtle scanning light */}
      <div className="hero-scan-line" />

      {/* HERO CONTENT */} 
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-28 lg:px-10">
        <div className="w-full">

          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">

            {/*                 LEFT SIDE
            */}

            <div>

              {/* Availability */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-xs font-medium tracking-wide text-white/60">
                  Available for opportunities
                </span>
              </div>

              {/* Role */}
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-white/40">
                Full-Stack Web Developer
              </p>

              {/*                   MAIN HEADING
              */}

              <h1 className="max-w-5xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.8rem]">

                <span className="block text-white">
                  I BUILD
                </span>

                <span className="block text-white/40">
                  DIGITAL EXPERIENCES
                </span>

                <span className="relative inline-block text-white">
                  THAT MATTER.

                  {/* Underline */}
                  <span className="absolute -bottom-2 left-0 h-[2px] w-1/2 bg-white/60" />
                </span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
                Computer Science graduate focused on creating modern,
                responsive, and user-centered applications. I combine
                thoughtful design with solid engineering to turn ideas into
                useful software.
              </p>

              {/*                   CTA BUTTONS
              */}

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="#projects"
                  className="group flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-white/90"
                >
                  Explore my work

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <button
                  type="button"
                  onClick={() => setShowResume(true)}
                  className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white/80 backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                >
                  View Resume

                  <span className="text-white/30 transition group-hover:text-white">
                    ↗
                  </span>
                </button>

              </div>

              {/*                   TECHNOLOGIES
              */}

              <div className="mt-14">

                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/25">
                  Technologies I work with
                </p>

                <div className="flex flex-wrap gap-2">

                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "Python",
                    "MySQL",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs text-white/45 transition duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white/80"
                    >
                      {tech}
                    </span>
                  ))}

                </div>
              </div>

            </div>

            {/* RIGHT SIDE VISUAL */}

            <div className="relative hidden h-[560px] lg:block">

              {/* Soft glow behind card */}
              <div className="hero-glow absolute left-[55%] top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full" />

              {/* MAIN CODE CARD */}

              <div className="hero-code-card absolute left-[55%] top-1/2 w-[360px] -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl transition duration-700 hover:rotate-0">

                {/* Browser window */}
                <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5">

                  {/* Window controls */}
                  <div className="mb-6 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>

                  {/* Code */}
                  <div className="space-y-3 font-mono text-xs">

                    <div>
                      <span className="text-white/20">
                        01
                      </span>{" "}

                      <span className="text-white/40">
                        const
                      </span>{" "}

                      <span className="text-white">
                        developer
                      </span>{" "}

                      <span className="text-white/30">
                        =
                      </span>
                    </div>

                    <div className="pl-5">
                      <span className="text-white/40">
                        {"{"}
                      </span>
                    </div>

                    <div className="pl-10">
                      <span className="text-white/30">
                        skills:
                      </span>{" "}

                      <span className="text-white/70">
                        ["React", "Next.js"]
                      </span>
                    </div>

                    <div className="pl-10">
                      <span className="text-white/30">
                        focus:
                      </span>{" "}

                      <span className="text-white/70">
                        "User Experience"
                      </span>
                    </div>

                    <div className="pl-10">
                      <span className="text-white/30">
                        mindset:
                      </span>{" "}

                      <span className="text-white/70">
                        "Build. Learn. Improve."
                      </span>

                      {/* Blinking cursor */}
                      <span className="ml-1 inline-block h-3 w-[2px] translate-y-[2px] animate-pulse bg-white/40" />
                    </div>

                    <div className="pl-5">
                      <span className="text-white/40">
                        {"}"}
                      </span>
                    </div>

                  </div>
                </div>

                {/* CURRENT FOCUS */}

                <div className="mt-6 flex items-center justify-between gap-6">

                  <div className="min-w-0">

                    <p className="text-xs text-white/30">
                      CURRENT FOCUS
                    </p>

                    <p className="mt-1 whitespace-nowrap text-sm font-medium text-white/80">
                      Building better web experiences
                    </p>

                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    ↗
                  </div>

                </div>

              </div>

              {/* STACK FLOATING CARD */}

              <div className="hero-floating-card absolute right-[-15px] top-10 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 shadow-xl backdrop-blur-xl">

                <p className="text-[10px] uppercase tracking-widest text-white/25">
                  Stack
                </p>

                <p className="mt-1 text-sm font-medium text-white/70">
                  Full-Stack
                </p>

              </div>

              {/* APPROACH FLOATING CARD */}

              <div className="hero-floating-card hero-floating-card-delay absolute bottom-4 left-[-5px] rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 shadow-xl backdrop-blur-xl">

                <p className="text-[10px] uppercase tracking-widest text-white/25">
                  Approach
                </p>

                <p className="mt-1 text-sm font-medium text-white/70">
                  User First
                </p>

              </div>

            </div>

          </div>

          {/* SCROLL INDICATOR */}

          <div className="mt-16 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-white/20">

            <span>
              Scroll to explore
            </span>

            <div className="h-px w-16 bg-white/10" />

            <span className="animate-bounce">
              ↓
            </span>

          </div>

        </div>
      </div>

      {/* RESUME MODAL*/} 
      
      {showResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setShowResume(false)}
        >

          <div
            className="relative flex h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Header */}
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-white/[0.025] px-5">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                  📄
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Resume
                  </p>

                  <p className="text-xs text-white/30">
                    resume.pdf
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-2">

                <a
                  href="/Resume.pdf"
                  download
                  className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
                >
                  Download
                </a>

                <button
                  type="button"
                  onClick={() => setShowResume(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/40 transition hover:bg-white/10 hover:text-white"
                  aria-label="Close resume"
                >
                  ×
                </button>

              </div>

            </div>

            {/* PDF */}
            <div className="min-h-0 flex-1 bg-[#202020]">

              <iframe
                src="/Resume.pdf"
                title="Resume"
                className="h-full w-full"
              />

            </div>

          </div>

        </div>
      )}

      {/* HERO ANIMATIONS */} 

      <style jsx>{`
        /* Heading spotlight */

        .hero-heading-glow {
          position: absolute;
          left: 3%;
          top: 28%;
          width: 520px;
          height: 320px;

          border-radius: 50%;

          background: radial-gradient(
            ellipse,
            rgba(255, 255, 255, 0.025),
            transparent 70%
          );

          filter: blur(60px);

          pointer-events: none;

          animation: headingGlow 12s ease-in-out infinite;
        }


        /* Moving scan line */

        .hero-scan-line {
          position: absolute;

          left: 0;
          right: 0;

          top: -10%;

          height: 1px;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.05),
            transparent
          );

          pointer-events: none;

          animation: scanLine 12s ease-in-out infinite;
        }


        /* Code card glow */

        .hero-glow {
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.035) 0%,
            rgba(255, 255, 255, 0.015) 35%,
            transparent 70%
          );

          filter: blur(70px);

          animation: heroGlow 10s ease-in-out infinite;
        }


        /* Floating cards */

        .hero-floating-card {
          animation: heroFloat 7s ease-in-out infinite;
        }

        .hero-floating-card-delay {
          animation-delay: -3s;
        }


        /* 
           Heading glow animation
         */

        @keyframes headingGlow {

          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.5;
          }

          50% {
            transform: translate3d(15px, -10px, 0) scale(1.08);
            opacity: 0.85;
          }

        }


        /* Hero card glow */

        @keyframes heroGlow {

          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }

          50% {
            transform: translate(-50%, -50%) scale(1.12);
            opacity: 1;
          }

        }


        /* Floating cards */

        @keyframes heroFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }

        }


        /* Scan line */

        @keyframes scanLine {

          0% {
            transform: translateY(0);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            transform: translateY(120vh);
            opacity: 0;
          }

        }


        /* Reduced motion */

        @media (prefers-reduced-motion: reduce) {

          .hero-heading-glow,
          .hero-scan-line,
          .hero-glow,
          .hero-floating-card {
            animation: none;
          }

        }

      `}</style>

    </section>
  );
}