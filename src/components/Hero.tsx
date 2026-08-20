"use client"

import { useState } from "react";

export default function Hero() {

  const[showResume, setShowResume] = useState(false);

  return (
    <main>
      {/* Hero */}
      <section className="flex min-h-screen items-center px-6 pt-20">
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
            Full-Stack Web Developer
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            I build web applications
            <span className="block text-gray-500">
              that solve real problems.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Computer Science graduate focused on building modern,
            responsive, and user-centered websites and web applications.
            I work across frontend and backend technologies to turn ideas
            into functional software.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
            >
              View My Projects
            </a>
            <button
              type="button"
              onClick={() => setShowResume(true)}
              className="rounded-full border border-white/20 px-6 py-3 font-medium transition hover:bg-white hover:text-black"
            >
              View Resume
            </button>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500">
            <span>React</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>Python</span>
            <span>•</span>
            <span>MySQL</span>
          </div>
        </div>
      </section>

      {/* Resume Viewer */}
      {showResume &&(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setShowResume(false)}
        >
          <div
            className="relative flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Viewer Header */}
            <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/10 bg-[#181818] px-5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                  📄
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Resume
                  </p>
                  <p className="text-xs text-gray-500">
                    resume.pdf
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Download */}
                <a
                  href="/Resume.pdf"
                  download
                  className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
                >
                  Download
                </a>

                {/* Close */}
                <button
                  type="button"
                  onClick={() => setShowResume(false)}
                  className="rounded-lg px-3 py-2 text-xl text-gray-400 transition hover:bg-white/10 hover:text-white"
                  aria-label="Close resume"
                >
                  x
                </button>
              </div>
            </div>
            {/* PDF */}
            <div className="min-h-0 flex-1 bg-[#2a2a2a]">
              <iframe
                src="/Resume.pdf"
                title="Resume"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>

      )}
    </main>
    );
}