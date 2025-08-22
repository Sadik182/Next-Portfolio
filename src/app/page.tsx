import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import AboutPage from "./about/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <AboutPage />
    </div>
  );
}
