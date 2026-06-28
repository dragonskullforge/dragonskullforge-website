import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedProjects />
      </main>

      <Footer />
    </>
  );
}