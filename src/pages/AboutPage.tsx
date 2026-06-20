import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="About Aarush Singhal — Developer & Photographer"
        description="Learn about Aarush Singhal, a BCA student and creative professional blending code and photography."
        path="/about"
      />
      <Navigation />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
