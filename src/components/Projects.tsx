"use client";

const projects = [
    {
        title: "POS-BigBrew",
        category: "Point-of-Sale System",
        description:
            "A web-based point-of-sale and sales management system developed for a BigBrew branch in Ternate. The system includes product management, sales records, cashier transactions, user management, and receipt generation.",
        technologies: ["JavaScript", "PHP", "MySQL", "HTML", "CSS"],
        role: "Back-End Developer",

        image: [
            "/projects/bigbrew/cashier.png",
            "/projects/bigbrew/dashboard.png",
            "/projects/bigbrew/sales.png",
            "/projects/bigbrew/receipt.png",
        ]
    },
    {
        title: "MatchOClock",
        category: "Web Application",
        description:
            "A collaborative scheduling web application that allows users to manage their schedules, view a calendar, connect with friends, receive notifications, and organize personal notes.",
        technologies: ["React", "Node.js", "Express", "CSS"],
        role: "Full-Stack Developer",
    },
    {
    title: "Heartbound",
    category: "2D Platformer Game",
    description:
        "A 2D platformer game developed as an academic project. Players navigate through platform-based levels, avoid environmental hazards, manage their health, collect the heart, and reach the next zone while using movement, jumping, pause, and retry mechanics.",
    technologies: [
        "Godot",
        "GDScript",
        "2D Game Development",
        "Pixel Art",
    ],
    role: "Game Developer",
    },
    {
        title: "Slow Design",
        category: "WordPress Website",
        description:
            "A Japanese real-estate and resort website implemented in WordPress from a detailed Figma design, featuring property listings, property details, relocation information, management services, customer testimonials, FAQs, company information, contact pages, and blog content.",
        technologies: ["WordPress", "Figma", "HTML", "CSS", "JavaScript"],
        role: "WordPress Developer",
    },
    {
        title: "MedSort",
        category: "Medical Inventory Management System",
        description:
            "A web-based medical inventory management system designed to streamline the tracking and management of medical supplies and equipment.",
        technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
        role: "Full-Stack Developer",
    },
];

import { useState } from "react";

type Project = {
    title: string;
    category: string;
    description: string;
    technologies: string[];
    role: string;
    image?: string[];
};

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);    return (
        <section id="projects" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">

                {/* Section Header */}
                <div className="mb-12">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                        Selected Work
                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                        My Projects
                    </h2>

                    <p className="mt-4 max-w-2xl text-gray-500">
                        A selection of projects I have developed throughout my studies,
                        freelance work, and personal development.
                    </p>
                </div>

                {/* Project Cards */}
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group rounded-2xl border boder-white/10 bg-white/[0.02] p-6 transition duration-300 bover:border-white/20 hover:bg-white/[0.04]"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <p className="text-sm text-gray-500">
                                    {project.category}
                                </p>

                                <span className="text-xs text-gray-500">
                                    {project.role}
                                </span>
                            </div>

                            <h3 className="mt-4 text-2xl font-semibold">
                                {project.title}
                            </h3>

                            <p className="mt-4 leading-relaxed text-gray-500">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.technologies.map((technology) =>(
                                    <span
                                        key={technology}
                                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            {/* Project Links */}
                            <div className="mt-6 flex gap-4">
                                <a
                                    href="#"
                                    className="text-sm font-medium text-white transition hover:text-gray-400"
                                >
                                    Github →
                                </a>

                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="text-sm font-medium text-white transition hover:text-gray-400"
                                >
                                    View Project →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-[#111111] p-8 text-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Close Button */}
                        <button
                            className="absolute right-5 top-5 text-2xl text-gray-500 hover:text-white"
                            onClick={() => setSelectedProject(null)}
                        >
                            x
                        </button>

                        <h2 className="text-3xl font-bold">
                            {selectedProject.title}
                        </h2>

                        <p className="mt-2 text-gray-500">
                            {selectedProject.category}
                        </p>

                        <p className="mt-4 leading-relaxed text-gray-600">
                            {selectedProject.description}
                        </p>

                        {/* Screenshots */}
                        {selectedProject.image && (
                            <div className="mt-8 space-y-6">
                                {selectedProject.image.map((image, index) =>(
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                                        className="w-full rounded-xl border border-gray-200 shadow-sm"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                )
            }
        </section>
        )
}