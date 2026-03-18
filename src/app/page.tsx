import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TrustSignalsEvidence from "@/components/sections/TrustSignalsEvidence";
import Portfolio from "@/components/sections/Portfolio";
import ThreatVisualizer from "@/components/sections/ThreatVisualizer";
import WhyThisMattersNow from "@/components/sections/WhyThisMattersNow";
import WorkingImplementations from "@/components/sections/WorkingImplementations";
import SecurityControlsInAction from "@/components/sections/SecurityControlsInAction";
import AttackHandlingProof from "@/components/sections/AttackHandlingProof";
import EvidenceGallery from "@/components/sections/EvidenceGallery";
import RepositoryEvidenceShowcase from "@/components/sections/RepositoryEvidenceShowcase";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Experiences from "@/components/sections/Experiences";
import Newsletter from "@/components/sections/Newsletter";
import Changelog from "@/components/sections/Changelog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="text-site-text bg-site-bg">
      <Header />
      <Hero />
      <TrustSignalsEvidence />
      <About />
      <Portfolio />
      <WorkingImplementations />
      <SecurityControlsInAction />
      <AttackHandlingProof />
      <EvidenceGallery />
      <RepositoryEvidenceShowcase />
      <WhyThisMattersNow />
      <ThreatVisualizer />
      <Services />
      <Skills />
      <Experiences />
      <Newsletter />
      <Changelog />
      <Contact />
      <Footer />
    </div>
  );
}
