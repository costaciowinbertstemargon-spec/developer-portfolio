"use client";

import { FormEvent } from "react";

export default function Contact() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
    };
    
    return (
        <section
            id="contact"
            className="px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="mb-12">
                    <div className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                        Get in Touch
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Let's Work Together
                    </h2>

                    <p className="mt-4 max-w-2xl text-gray-400">
                        I'm currently looking for opportunities where I can 
                        apply my skills, gain profeesional experience, and 
                        continue growing as a developer.
                    </p>
                </div>

                {/* Contact Content */}
                <div className="grid gap-10 md:grid-cols-2">

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-semibold">
                            Having a project in mind?
                        </h3>

                        <p className="mt-4 max-w-md leading-relaxed text-gray-400">
                            Whether you have a project, job opportunity, or 
                            simply want to connect, feel free to reach out. 
                            I'm always interested in learning, building, and
                            working on new ideas.
                        </p>

                        {/* Contact Details */}
                        <div className="mt-6 space-y-5">

                            <div>
                                <p className="text-sm text-gray-400">
                                    Email:
                                </p>

                                <p className="text-sm text-white">
                                    costaciowinbert.stemargon@gmail.com
                                </p>

                            </div>

                            <div>

                                <p className="text-sm text-gray-400">
                                    GitHub:
                                </p>

                                <p className="text-sm text-white">
                                    https://github.com/costaciowinbertstemargon-spec
                                </p>

                            </div>

                            <div>

                                <p className="text-sm text-gray-400">
                                    LinkedIn
                                </p>

                                <p className="text-sm text-white">
                                    www.linkedin.com/in/costacio-winbert-5a8b61330
                                </p>

                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
                    >
                        {/* Name */}
                        <div className="mt-5">
                            <label
                                htmlFor="name"
                                className="text-sm text-gray-400"
                            >
                                Name
                            </label>

                            <input 
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-white/30"
                            />
                        </div>

                        {/* Email */}
                        <div className="mt-5">
                            <label
                                htmlFor="email"
                                className="text-sm text-gray-400"
                            >
                                Email
                            </label>

                            <input 
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-white/30"
                            />
                        </div>

                        {/* Message */}
                        <div className="mt-5">
                            <label
                                htmlFor="message"
                                className="text-sm text-gray-400"
                            >
                                Message
                            </label>

                            <textarea 
                                id="message"
                                name="message"
                                rows={6}
                                placeholder="Tell me about your project or opportunity"
                                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-white/30"
                            />
                        </div>

                        {/* Submir */}
                        <button
                            type="submit"
                            className="mt-6 w-full rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                        >
                            Send Message →
                        </button>   

                    </form>
                </div>
            </div>

        </section>
    );
}