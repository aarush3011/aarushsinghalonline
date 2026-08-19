import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aarush Singhal",
    jobTitle: "Frontend Developer & Photographer",
    url: "https://aarushsinghal.lovable.app/",
    sameAs: [
      "https://github.com/aarush3011",
      "https://www.linkedin.com/in/aarush-singhal",
      "https://instagram.com/crushedaayu",
    ],
  };
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aarush Singhal Portfolio",
    url: "https://aarushsinghal.lovable.app/",
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Aarush Singhal — Frontend Developer & Photographer"
        description="Portfolio of Aarush Singhal — frontend developer, social media manager, and creative photographer based in Delhi, India."
        path="/"
        jsonLd={[personLd, websiteLd]}
      />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
