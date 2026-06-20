import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Aarush Singhal — Software Engineer & Photographer"
        description="Portfolio of Aarush Singhal — front-end developer, social media manager, and creative photographer."
        path="/"
      />
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
