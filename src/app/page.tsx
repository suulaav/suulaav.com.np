import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal delay={50}><Experience /></ScrollReveal>
      <ScrollReveal delay={50}><Projects /></ScrollReveal>
      <ScrollReveal delay={50}><Skills /></ScrollReveal>
      <ScrollReveal delay={50}><Contact /></ScrollReveal>
      <ScrollReveal delay={50}><Footer /></ScrollReveal>
    </main>
  );
}
