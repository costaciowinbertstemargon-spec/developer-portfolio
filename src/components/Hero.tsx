export default function Hero() {
  return (
    <main>
      {/* Hero */}
      <section className="flex min-h-screen items-center px-6 pt-20">
        <div className="mx-auto w-full mac-w-6xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0,3em] text-gray-400">
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
            <a
              href="/resume.pdf"
              className="rounded-full border border-white/20 px-6 py-3 font-medium transition hover:bg-white hover:text-black"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-16 flex items-center gap-6 text-sm text-gray-500">
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
    </main>
    );
}