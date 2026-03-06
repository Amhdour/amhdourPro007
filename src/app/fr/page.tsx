import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Portfolio from "@/components/sections/Portfolio";
import ThreatVisualizer from "@/components/sections/ThreatVisualizer";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Experiences from "@/components/sections/Experiences";
import Certifications from "@/components/sections/Certifications";
import Speaking from "@/components/sections/Speaking";
import OpenSource from "@/components/sections/OpenSource";
import MediaContent from "@/components/sections/MediaContent";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";
import Changelog from "@/components/sections/Changelog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function FrenchHome() {
  return (
    <div className="text-site-text bg-site-bg">
      <Header locale="fr" />
      <Hero locale="fr" />
      <TrustBar locale="fr" />
      <About locale="fr" />
      <Stats locale="fr" />
      <Portfolio locale="fr" />
      <ThreatVisualizer locale="fr" />
      <Services locale="fr" />
      <Skills locale="fr" />
      <Experiences locale="fr" />
      <Certifications locale="fr" />
      <Speaking locale="fr" />
      <OpenSource locale="fr" />
      <MediaContent locale="fr" />
      <Testimonials locale="fr" />
      <Newsletter locale="fr" />
      <Changelog locale="fr" />
      <Contact locale="fr" />
      <Footer locale="fr" />
    </div>
  );
}
