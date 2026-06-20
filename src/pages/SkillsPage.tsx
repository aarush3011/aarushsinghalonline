import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const SkillsPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Skills — Aarush Singhal"
        description="Technical and creative skills of Aarush Singhal: front-end development, design, and photography."
        path="/skills"
      />
      <Navigation />
      <Skills />
      <Footer />
    </div>
  );
};

export default SkillsPage;
