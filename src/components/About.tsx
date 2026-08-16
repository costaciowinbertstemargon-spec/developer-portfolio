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
                Throughout my studies, I worked on several projects where I
                took on significant development responsibilities. I developed
                a Campus Voting System for our school using HTML, CSS,
                JavaScript, PHP, and MySQL. I also contributed as a Back-End
                Developer for a Point-of-Sale (POS) System for a Big Brew
                branch in Ternate.
              </p>

              <p>
                My largest project was MedSort, my thesis project, where I
                worked as the Lead Full-Stack Developer and Machine Learning
                Developer. The system combines a web-based medical inventory
                management system with machine learning, using K-Means
                Clustering and Random Forest Classification to analyze and
                predict medical supply expiration risks.
              </p>

              <p>
                I also gained practical experience as a freelance WordPress
                developer, where I worked on a project for approximately two
                months and handled most of the coding and website development.
              </p>

              <p>
                I'm currently focused on improving my skills through more
                hands-on projects and learning how to build applications that
                are not only functional, but also responsive, maintainable,
                and useful in solving real-world problems.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-24">
            <div className="mb-10">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                    Technologies
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    My Tech Stack
                </h2>

                <p className="mt-4 max-w-2xl text-gray-400">
                    Technologies and tools I have used throughout my project and
                    development experience.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Programming */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                    <h3 className="mb-4 text-lg font-semibold">
                        Programming
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {[
                        "JavaScript",
                        "TypeScript",
                        "Python",
                        "PHP",
                        "SQL",
                        "HTML5",
                        "CSS3",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border boder-white/10 px-3 py-1.5 text-sm text-gray-400"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Frontend */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                    <h3 className="mb-4 text-lg font-semibold">
                        Frontend & Web Development
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {[
                        "React.js",
                        "Next.js",
                        "Tailwind CSS",
                        "Responsive Web Design",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border boder-white/10 px-3 py-1.5 text-sm text-gray-400"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Backend */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                    <h3 className="mb-4 text-lg font-semibold">
                        Backend & APIs
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {[
                        "Node.js",
                        "Express.js",
                        "Python",
                        "FastAPI",
                        "REST APIs",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border boder-white/10 px-3 py-1.5 text-sm text-gray-400"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Database */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                    <h3 className="mb-4 text-lg font-semibold">
                        Database
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {[
                        "MySQL",
                        "Database Design",
                        "Data Modeling",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border boder-white/10 px-3 py-1.5 text-sm text-gray-400"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Machine Learning */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                    <h3 className="mb-4 text-lg font-semibold">
                        Machine Learning & Data
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {[
                        "Scikit-learn",
                        "K-Means Clustering",
                        "Random Forest Classification",
                        "Predictive Modeling",
                        "Model Evaluation",
                        "Data Cleaning",
                        "Feature Engineering",
                        "Data Analysis",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border boder-white/10 px-3 py-1.5 text-sm text-gray-400"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Tools */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                    <h3 className="mb-4 text-lg font-semibold">
                        Tools & Other Technologies
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {[
                        "Git",
                        "GitHub",
                        "Firebase",
                        "Figma",
                        "Canva",
                        "Version Control",
                        "Object-Oriented Programming (OOP)",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border boder-white/10 px-3 py-1.5 text-sm text-gray-400"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}