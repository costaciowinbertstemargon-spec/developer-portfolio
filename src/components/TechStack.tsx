export default function TechStack() {
    return (
        <section
            id="skills"
            className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
            {/* Tech Stack */}
            <div>
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
                                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-400"
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
                                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-400"
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
                            "FastAPI",
                            "REST APIs",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-400"
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
                                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-400"
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
                                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-400"
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
                                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-400"
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
    )
}