import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Projects from "@/src/components/Projects";
import TechStack from "@/src/components/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* About */}
      <About />
      {/* Projects */}
      <Projects />
      {/* Tech Stack */}
      <TechStack />
    </main>
  );
}
