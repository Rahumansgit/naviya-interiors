import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/naviya/Navbar";
import Hero from "@/components/naviya/Hero";
import About from "@/components/naviya/About";
import Stats from "@/components/naviya/Stats";
import WhyChoose from "@/components/naviya/WhyChoose";
import Services from "@/components/naviya/Services";
import Projects from "@/components/naviya/Projects";
import Process from "@/components/naviya/Process";
import Testimonials from "@/components/naviya/Testimonials";
import CTA from "@/components/naviya/CTA";
import Contact from "@/components/naviya/Contact";
import Footer from "@/components/naviya/Footer";
import ScrollProgress from "@/components/naviya/ScrollProgress";
import FloatingActions from "@/components/naviya/FloatingActions";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <WhyChoose />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
