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

export default function ArabicHome() {
  return (
    <div className="text-site-text bg-site-bg">
      <Header locale="ar" />
      <Hero locale="ar" />
      <About locale="ar" />
      <Portfolio locale="ar" />
      <ThreatVisualizer locale="ar" />
      <Services locale="ar" />
      <Skills locale="ar" />
      <Experiences locale="ar" />
      <Newsletter locale="ar" />
      <Changelog locale="ar" />
      <Contact locale="ar" />
      <Footer locale="ar" />
    </div>
  );
}
