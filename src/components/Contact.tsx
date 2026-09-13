"use client";

import { FormEvent, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Mail,
  Send,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

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
        formRef.current.reset();
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
      className="relative overflow-hidden px-6 py-28 text-white md:px-10 lg:px-16"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-[20%] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* ------------------------------------------------
            HEADER
        ------------------------------------------------ */}
        <div className="mb-20">
          <div className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
            <span className="h-px w-8 bg-white/30" />
            Get in Touch
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
                Let&apos;s build
                <br />
                <span className="text-white/30">something together.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/40 lg:col-span-4 lg:pb-2">
              Whether it&apos;s a project, an opportunity, or simply a
              conversation about technology, I&apos;d love to hear from you.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------
            MAIN CONTENT
        ------------------------------------------------ */}
        <div className="grid gap-5 lg:grid-cols-12">
          {/* LEFT — Contact info */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            {/* Main contact card */}
            <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl md:p-10">
              {/* Decorative circle */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/[0.04]" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <Mail
                    size={20}
                    strokeWidth={1.5}
                    className="text-white/60"
                  />
                </div>

                <span className="mt-10 block text-xs uppercase tracking-[0.2em] text-white/25">
                  Start a conversation
                </span>

                <h3 className="mt-4 max-w-sm text-3xl font-medium leading-tight tracking-tight">
                  Have an idea?
                  <br />
                  <span className="text-white/35">
                    Let&apos;s talk about it.
                  </span>
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
                  I&apos;m currently looking for opportunities where I can
                  contribute, grow professionally, and build meaningful
                  software.
                </p>
              </div>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=costaciowinbert.stemargon@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-10 flex items-center justify-between border-t border-white/10 pt-6"
              >
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Email
                  </span>

                  <span className="mt-2 block text-sm text-white/65 transition-colors group-hover:text-white">
                    costaciowinbert.stemargon@gmail.com
                  </span>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </div>

            {/* Social links */}
            <div className="grid grid-cols-2 gap-5">
              <a
                href="https://github.com/costaciowinbertstemargon-spec"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between">
                  <FaGithub
                    size={20}
                    strokeWidth={1.5}
                    className="text-white/40 transition-colors group-hover:text-white"
                  />

                  <ArrowUpRight
                    size={15}
                    className="text-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/60"
                  />
                </div>

                <p className="mt-8 text-sm font-medium">GitHub</p>

                <p className="mt-1 truncate text-xs text-white/30">
                  @costaciowinbertstemargon-spec
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/costacio-winbert-5a8b61330"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between">
                  <FaLinkedinIn
                    size={20}
                    strokeWidth={1.5}
                    className="text-white/40 transition-colors group-hover:text-white"
                  />

                  <ArrowUpRight
                    size={15}
                    className="text-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/60"
                  />
                </div>

                <p className="mt-8 text-sm font-medium">LinkedIn</p>

                <p className="mt-1 text-xs text-white/30">
                  Let&apos;s connect
                </p>
              </a>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="flex h-full min-h-[600px] flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 text-center backdrop-blur-xl md:p-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white text-black">
                  <Check size={26} strokeWidth={2} />
                </div>

                <h3 className="mt-8 text-3xl font-semibold tracking-tight md:text-4xl">
                  Message sent.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
                  Thanks for reaching out. Your message has been successfully
                  sent. I&apos;ll get back to you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-white/15 px-6 py-3 text-sm text-white/60 transition-all hover:border-white/30 hover:bg-white hover:text-black"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                autoComplete="off"
                className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl md:p-10"
              >
                {/* Form header */}
                <div className="mb-10 flex items-start justify-between gap-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                      Contact Form
                    </span>

                    <h3 className="mt-3 text-2xl font-medium tracking-tight">
                      Tell me what you&apos;re working on.
                    </h3>
                  </div>

                  <span className="hidden text-xs text-white/20 sm:block">
                    01 / 03
                  </span>
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/35"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="off"
                    placeholder="John Doe"
                    className="w-full border-b border-white/10 bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/15 transition-colors focus:border-white/40"
                  />
                </div>

                {/* Email */}
                <div className="mt-8">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/35"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="off"
                    placeholder="you@example.com"
                    className="w-full border-b border-white/10 bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/15 transition-colors focus:border-white/40"
                  />
                </div>

                {/* Message */}
                <div className="mt-8">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/35"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell me about your project, opportunity, or idea..."
                    className="w-full resize-none border-b border-white/10 bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/15 transition-colors focus:border-white/40"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-10 flex w-full items-center justify-between rounded-2xl bg-white px-6 py-5 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span>
                    {isSubmitting ? "Sending message..." : "Send Message"}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
                    <Send size={15} />
                  </span>
                </button>

                <p className="mt-5 text-center text-[11px] leading-5 text-white/20">
                  I&apos;ll get back to you as soon as possible.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* ------------------------------------------------
            FOOTER STATEMENT
        ------------------------------------------------ */}
        <div className="mt-24 border-t border-white/10 pt-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <p className="text-xs uppercase tracking-[0.15em] text-white/20">
              Winbert C. Costacio · Full-Stack Web Developer
            </p>

            <a
              href="#home"
              className="group inline-flex items-center gap-2 text-xs text-white/30 transition-colors hover:text-white"
            >
              Back to top

              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}