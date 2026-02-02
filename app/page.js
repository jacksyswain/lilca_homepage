import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Specialties from "./components/Specialties";
import SplitSection from "./components/SplitSection";
import About from "./components/About";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Specialties />
      <SplitSection />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
