import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Portfolio — Aarush Singhal"
        description="Selected projects and creative work by Aarush Singhal across development and photography."
        path="/portfolio"
      />
      <Navigation />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
