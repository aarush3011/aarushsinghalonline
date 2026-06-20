import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Home = () => {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aarush Singhal",
    jobTitle: "Software Engineer & Photographer",
    url: "https://aarushsinghal.lovable.app/",
    sameAs: ["https://github.com/aarush3011"],
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
        title="Aarush Singhal — Software Engineer & Photographer"
        description="Portfolio of Aarush Singhal — front-end developer, social media manager, and creative photographer."
        path="/"
        jsonLd={[personLd, websiteLd]}
      />
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
