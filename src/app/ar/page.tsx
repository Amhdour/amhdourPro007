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

export default function ArabicHome() {
  return (
    <div className="text-site-text bg-site-bg">
      <Header locale="ar" />
      <Hero locale="ar" />
      <TrustBar locale="ar" />
      <About locale="ar" />
      <Stats locale="ar" />
      <Portfolio locale="ar" />
      <ThreatVisualizer locale="ar" />
      <Services locale="ar" />
      <Skills locale="ar" />
      <Experiences locale="ar" />
      <Certifications locale="ar" />
      <Speaking locale="ar" />
      <OpenSource locale="ar" />
      <MediaContent locale="ar" />
      <Testimonials locale="ar" />
      <Newsletter locale="ar" />
      <Changelog locale="ar" />
      <Contact locale="ar" />
      <Footer locale="ar" />
    </div>
  );
}
