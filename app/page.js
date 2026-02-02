import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Specialties from "./components/Specialties";
import SplitSection from "./components/SplitSection";
import About from "./components/About";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      {/* Header stays static (no animation) */}
      <Header />

      {/* Page sections animate on scroll */}
      <Reveal>
        <Hero />
      </Reveal>

      <Reveal delay={0.05}>
        <Intro />
      </Reveal>

      <Reveal delay={0.08}>
        <Specialties />
      </Reveal>

      <Reveal delay={0.1}>
        <SplitSection />
      </Reveal>

      <Reveal delay={0.12}>
        <About />
      </Reveal>

      <Reveal delay={0.14}>
        <FAQ />
      </Reveal>

      <Reveal delay={0.16}>
        <CTA />
      </Reveal>

      <Reveal delay={0.18}>
        <Footer />
      </Reveal>
    </>
  );
}

