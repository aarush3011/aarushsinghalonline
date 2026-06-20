import Navigation from "@/components/Navigation";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Experience — Aarush Singhal"
        description="Professional experience and milestones of Aarush Singhal in tech and creative fields."
        path="/experience"
      />
      <Navigation />
      <Experience />
      <Footer />
    </div>
  );
};

export default ExperiencePage;
