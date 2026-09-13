"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-16 items-center justify-between rounded-2xl border border-white/[0.08] bg-black/60 px-4 shadow-2xl backdrop-blur-xl sm:px-6">

          {/* Logo */}
          <a
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] font-mono text-xs text-white/70 transition duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
              WC
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-tight text-white">
                Winbert Costacio
              </p>

              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Full-Stack Developer
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.025] p-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-10 py-2 text-xs font-medium text-white/40 transition-all duration-300 hover:bg-white/[0.08] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-white/90 md:flex"
          >
            Let's Talk

            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-4 bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />

              <span
                className={`block h-px w-4 bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-px w-4 bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen
              ? "mt-2 max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-white/[0.08] bg-black/80 p-2 shadow-2xl backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm text-white/50 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}

                <span className="text-white/20">↗</span>
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-1 flex items-center justify-center rounded-xl bg-white px-4 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}