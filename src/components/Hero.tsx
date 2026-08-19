import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import profileImage from "@/assets/aarush-new-profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="hero-gradient geometric-bg absolute inset-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 fade-in">
            <div className="space-y-3">
              <p className="text-accent text-lg font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Aarush Singhal
              </h1>
              <p className="text-xl md:text-2xl text-secondary font-medium">
                Frontend Developer · Social Media Manager · Photographer
              </p>
            </div>

            <p className="text-lg text-white/90 max-w-lg">
              BCA student at GGSIPU building clean, responsive web experiences — blending
              front-end engineering with a designer's eye and a photographer's sense of story.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-semibold group" onClick={() => scrollToSection("projects")}>
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">2</div>
                <div className="text-sm text-white/80">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-white/80">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3+</div>
                <div className="text-sm text-white/80">Projects Shipped</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl hover-lift">
                <img
                  src={profileImage}
                  alt="Aarush Singhal — frontend developer and photographer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                💻 Developer
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                📸 Photographer
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
