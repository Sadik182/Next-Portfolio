import Hero from "@/components/Hero/Hero";
import ProjectsPage from "@/components/Projects/Projects";
import ContactPage from "@/app/contact/page";
export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}
