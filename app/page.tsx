import AnimatedBackground from "@/src/components/AnimatedBackground";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";
import TechStack from "@/src/components/TechStack";
import Contact from "@/src/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </div>
    </main>
  );
}