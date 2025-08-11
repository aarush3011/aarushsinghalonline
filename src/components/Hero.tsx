import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/aarush-new-profile.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="hero-gradient geometric-bg absolute inset-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 fade-in">
            <div className="space-y-2">
              <p className="text-accent text-lg font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Aarush Singhal
              </h1>
              <h2 className="text-xl md:text-2xl text-secondary font-medium">
                Aspiring Software Engineer & Creative Photographer
              </h2>
            </div>
            
            <p className="text-lg text-white/90 max-w-lg">
              A passionate BCA student specializing in front-end development and social media management, 
              with a creative edge in photography. Building impactful tech solutions with modern design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("#portfolio")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 text-lg font-medium group"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-6 py-3 text-lg font-medium"
              >
                Contact Me
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">8+</div>
                <div className="text-sm text-white/80">Months Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-white/80">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">78%</div>
                <div className="text-sm text-white/80">Current Grade</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl hover-lift">
                <img 
                  src={profileImage} 
                  alt="Aarush Singhal - Software Engineer and Photographer"
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