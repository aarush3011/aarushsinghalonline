import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Users, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Social Media Management",
      description: "Comprehensive brand presence management including engagement strategies, content creation, and community building to boost your online visibility.",
      features: [
        "Content Strategy Development",
        "Engagement & Community Management", 
        "Brand Presence Optimization",
        "Analytics & Performance Tracking"
      ],
      bgClass: "bg-gradient-to-br from-sky-blue/10 to-medium-blue/10"
    },
    {
      icon: Globe,
      title: "Front-End Development",
      description: "Creating responsive, user-friendly, and visually appealing websites using modern technologies and best practices for optimal user experience.",
      features: [
        "Responsive Web Design",
        "Modern JavaScript Frameworks",
        "User Experience Optimization",
        "Cross-Browser Compatibility"
      ],
      bgClass: "bg-gradient-to-br from-accent/10 to-soft-yellow/20"
    }
  ];

  const handleContactClick = () => {
    window.location.href = "/contact";
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional services that blend technical expertise with creative vision
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className={`hover-lift border-0 shadow-lg ${service.bgClass} fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full"
                    onClick={handleContactClick}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center fade-in">
          <Card className="card-gradient border-0 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate to bring your vision to life with innovative solutions 
                that combine technical excellence and creative design.
              </p>
              <Button 
                size="lg"
                onClick={handleContactClick}
              >
                Contact Me Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;