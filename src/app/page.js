import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import About from "./components/About";
import ImpactStories from "./components/ImpactStories";
import ServiceAreas from "./components/ServiceAreas";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="nav-content fixed w-full z-50">
        <TopBar />
        <Navigation />
      </div>
      <Hero />
      <Programs />
      <About />
      <ImpactStories />
      <ServiceAreas />
      <FAQ />
      <CTA />
      <Footer />
      <BackToTop />
    </div>
  );
}
