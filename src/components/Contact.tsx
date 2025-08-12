import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Instagram, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // EmailJS configuration - You need to replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your service ID
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your template ID  
  const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your public key

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Aarush Singhal", // Your name
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS result:', result);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9799668600",
      href: "tel:+919799668600"
    },
    {
      icon: Mail,
      label: "Email",
      value: "aarush.singhal001@gmail.com",
      href: "mailto:aarush.singhal001@gmail.com"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@crushedaayu",
      href: "https://instagram.com/crushedaayu"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="fade-in">
            <Card className="card-gradient border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="border-0 bg-white/50 focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-0 bg-white/50 focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={5}
                      required
                      className="border-0 bg-white/50 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group disabled:opacity-50"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 fade-in">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Feel free to reach out through any of these channels. I'm always excited to 
                discuss new opportunities, collaborations, or just have a chat about technology and creativity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <Card key={info.label} className="hover-lift card-gradient border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.label}</h4>
                          {info.href === "#" ? (
                            <span className="text-muted-foreground">{info.value}</span>
                          ) : (
                            <a 
                              href={info.href}
                              className="text-primary hover:text-primary/80 transition-colors"
                              target={info.href.startsWith('http') ? "_blank" : undefined}
                              rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                            >
                              {info.value}
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info */}
            <Card className="card-gradient border-0 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-3">Response Time</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I typically respond to messages within 24-48 hours. For urgent inquiries, 
                  feel free to reach out via phone or WhatsApp.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-3">Available For</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Freelance Projects",
                    "Internship Opportunities", 
                    "Collaborations",
                    "Photography Sessions",
                    "Consulting"
                  ].map((item) => (
                    <span 
                      key={item}
                      className="px-3 py-1 bg-accent/20 text-accent-foreground text-xs rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;