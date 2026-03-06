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

export default function GermanHome() {
  return (
    <div className="text-site-text bg-site-bg">
      <Header locale="de" />
      <Hero locale="de" />
      <TrustBar locale="de" />
      <About locale="de" />
      <Stats locale="de" />
      <Portfolio locale="de" />
      <ThreatVisualizer locale="de" />
      <Services locale="de" />
      <Skills locale="de" />
      <Experiences locale="de" />
      <Certifications locale="de" />
      <Speaking locale="de" />
      <OpenSource locale="de" />
      <MediaContent locale="de" />
      <Testimonials locale="de" />
      <Newsletter locale="de" />
      <Changelog locale="de" />
      <Contact locale="de" />
      <Footer locale="de" />
    </div>
  );
}
