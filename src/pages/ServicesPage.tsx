import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Services — Aarush Singhal"
        description="Services offered by Aarush Singhal: web development, social media management, and photography."
        path="/services"
      />
      <Navigation />
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;
