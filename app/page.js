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
import ProfessionalBackground from "./components/ProfessionalBackground";
import Copyright from "./components/Copyright";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero is NOT animated as a block */}
      <Hero />

      {/* Section-level animation only */}
      <Reveal>
        <Intro />
      </Reveal>

      <Reveal delay={0.05}>
        <Specialties />
      </Reveal>

      <Reveal delay={0.08}>
        <SplitSection />
      </Reveal>

      <Reveal delay={0.1}>
        <About />
      </Reveal>

      <Reveal delay={0.12}>
        <FAQ />
      </Reveal>
      <Reveal delay={0.14}>
        <ProfessionalBackground />
      </Reveal>

      <Reveal delay={0.14}>
        <CTA />
      </Reveal>

      <Reveal delay={0.16}>
        <Footer />
      </Reveal>

      <Reveal delay={0.16}>
        <Copyright />
      </Reveal>
    </>
  );
}
