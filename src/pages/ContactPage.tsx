import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Aarush Singhal"
        description="Get in touch with Aarush Singhal for development, social media, or photography collaborations."
        path="/contact"
      />
      <Navigation />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
