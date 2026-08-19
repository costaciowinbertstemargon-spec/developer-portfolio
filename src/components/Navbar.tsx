export default function Navbar() {
  return (
    <main>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold">
            Winbert C. Costacio<span className="text-gray-500">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#about" className="text-sm text-white/80 transition hover:text-white">
              About
            </a>
            
            <a href="#projects" className="text-sm text-white/80 transition hover:text-white">
              Projects
            </a>

            <a href="#skills" className="text-sm text-white/80 transition hover:text-white">
              Skills
            </a>
            
            <a href="#contact" className="text-sm text-white/80 transition hover:text-white">
              Contact
            </a>
          </div>
          <a 
            href="#contact"
            className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:bg-white hover:text-black"
          >
            Let's Talk
          </a>
        </div>
      </nav>
    </main>
  );
}