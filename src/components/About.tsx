export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* About Introduction */}
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="w-full md:w-1/3">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
              About Me
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Building skills through real projects.
            </h2>
          </div>

          <div className="w-full md:w-2/3">
            <div className="space-y-6 text-lg leading-relaxed text-gray-400 text-justify">
              <p>
                I'm a Computer Science graduate focused on building my skills
                in web development and finding my first professional
                opportunity where I can apply what I've learned to real-world
                projects. Most of my experience comes from developing school
                and personal projects, where I have worked across both
                frontend and backend development, databases, APIs, and
                machine learning.
              </p>

              <p>
                Throughout my studies, I worked on several projects that helped me develop
                practical experience across different areas of software development. I
                started with a Point-of-Sale (POS) System for a Big Brew branch in
                Ternate, where I worked as a Back-End Developer. I then developed
                MatchOClock, a full-stack web application focused on schedule management,
                user profiles, friends, notifications, and personal notes. I also worked
                on Heartbound, a 2D platformer game developed using Godot, which allowed
                me to explore game development and programming beyond traditional web
                applications.
              </p>

              <p>
                I also gained practical experience as a freelance WordPress developer
                through the Slow Design project. I worked on the project for
                approximately two months, translating a detailed Figma design into a
                functional WordPress website and handling a significant portion of the
                coding and implementation.
              </p>

              <p>
                My most comprehensive project is MedSort, my thesis project, where I
                worked as the Lead Full-Stack Developer and Machine Learning Developer.
                The system combines a web-based medical inventory management system with
                machine learning, using React, Node.js, Express, Python, FastAPI, MySQL,
                K-Means Clustering, and Random Forest Classification to analyze and
                predict medical supply expiration risks.
              </p>

              <p>
                I'm currently focused on strengthening my skills through more hands-on
                projects and continuing to improve as a web developer. I'm particularly
                interested in building applications that are not only functional, but
                also responsive, maintainable, and useful in solving real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}