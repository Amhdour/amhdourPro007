import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import ThreatVisualizer from "@/components/sections/ThreatVisualizer";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Experiences from "@/components/sections/Experiences";
import Newsletter from "@/components/sections/Newsletter";
import Changelog from "@/components/sections/Changelog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function FrenchHome() {
  return (
    <div className="text-site-text bg-site-bg">
      <Header locale="fr" />
      <Hero locale="fr" />
      <About locale="fr" />
      <Portfolio locale="fr" />
      <ThreatVisualizer locale="fr" />
      <Services locale="fr" />
      <Skills locale="fr" />
      <Experiences locale="fr" />
      <Newsletter locale="fr" />
      <Changelog locale="fr" />
      <Contact locale="fr" />
      <Footer locale="fr" />
    </div>
  );
}
