import { Phone, Mail, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Phone,
      href: "tel:+919799668600",
      label: "Phone"
    },
    {
      icon: Mail,
      href: "mailto:aarush.singhal001@gmail.com",
      label: "Email"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/crushedaayu",
      label: "Instagram"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Bio */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Aarush Singhal</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Aspiring Software Engineer & Creative Photographer passionate about creating 
              innovative digital solutions and capturing compelling visual stories.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                    aria-label={link.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Services", href: "#services" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-primary-foreground/80">
                📞 +91 9799668600
              </p>
              <p className="text-primary-foreground/80">
                📧 aarush.singhal001@gmail.com
              </p>
              <p className="text-primary-foreground/80">
                📍 Delhi, India
              </p>
              <p className="text-primary-foreground/80">
                📷 @crushedaayu
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
            © {currentYear} Aarush Singhal. Made with <Heart className="h-4 w-4 text-red-400" /> and lots of code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;