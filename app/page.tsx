import About from "@/components/about";
import Hero from "@/components/hero";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
    </main>
  );
}
