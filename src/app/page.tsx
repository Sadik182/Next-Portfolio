import Hero from "@/components/Hero/Hero";
import FeaturedProjects from "@/components/Projects/FeaturedProjects";
import ContactPage from "@/app/contact/page";
export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <ContactPage />
    </div>
  );
}
