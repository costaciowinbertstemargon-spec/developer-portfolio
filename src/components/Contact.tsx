"use client";

import { FormEvent, useRef, useState } from "react";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        setIsSubmitting(true);

        const formData = new FormData(formRef.current);

        try {
            const response = await fetch(
                "https://formspree.io/f/mnpaokyz",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (response.ok) {
                // Clear all form fields
                formRef.current.reset();

                // Show success message
                setSubmitted(true);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Unable to send your message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
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
                        apply my skills, gain professional experience, and
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

                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=costaciowinbert.stemargon@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-white transition hover:text-gray-400"
                                >
                                    costaciowinbert.stemargon@gmail.com →
                                </a>
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    GitHub:
                                </p>

                                <a
                                    href="https://github.com/costaciowinbertstemargon-spec"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-white transition hover:text-gray-400"
                                >
                                    github.com/costaciowinbertstemargon-spec →
                                </a>
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    LinkedIn:
                                </p>

                                <a
                                    href="https://www.linkedin.com/in/costacio-winbert-5a8b61330"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-white transition hover:text-gray-400"
                                >
                                    linkedin.com/in/costacio-winbert-5a8b61330 →
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form / Success Message */}
                    <div>

                        {submitted ? (
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md">

                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-xl">
                                    ✓
                                </div>

                                <h3 className="mt-6 text-2xl font-semibold">
                                    Message Sent
                                </h3>

                                <p className="mt-3 leading-relaxed text-gray-400">
                                    Thank you for reaching out. Your message
                                    has been successfully sent. I'll get back
                                    to you as soon as possible.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                                >
                                    Send Another Message →
                                </button>

                            </div>
                        ) : (

                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                autoComplete="off"
                                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
                            >

                                {/* Name */}
                                <div>
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
                                        required
                                        autoComplete="off"
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
                                        required
                                        autoComplete="off"
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
                                        required
                                        placeholder="Tell me about your project or opportunity"
                                        className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-white/30"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="mt-6 w-full rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Message →"}
                                </button>

                            </form>

                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}