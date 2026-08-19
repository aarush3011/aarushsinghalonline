import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";

const Experience = () => {
  const roles = [
    {
      title: "Web Development Intern",
      company: "Graphura India Pvt. Ltd.",
      duration: "2025",
      location: "Remote",
      type: "Internship",
      description:
        "Built and refined responsive marketing pages and internal tools for a fast-moving creative agency.",
      responsibilities: [
        "Developed responsive interfaces with HTML, CSS and JavaScript",
        "Translated design mockups into pixel-accurate, mobile-first layouts",
        "Improved page performance and cross-browser consistency",
        "Collaborated with designers and marketing on rapid iterations",
      ],
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI Implementation"],
    },
    {
      title: "Virtual Volunteer & Social Media Manager",
      company: "InAmigos Foundation (IAF)",
      duration: "July 2025 – Present",
      location: "Remote",
      type: "Internship",
      description:
        "Leading digital communications and social media strategy for a non-profit focused on community development and social impact.",
      responsibilities: [
        "Plan and execute social media strategy across multiple platforms",
        "Create content that grows brand awareness and engagement",
        "Support IT infrastructure and digital communication systems",
        "Analyse metrics and optimise content performance",
        "Coordinate virtual events and online community building",
      ],
      skills: ["Social Media Strategy", "Content Creation", "Community Management", "Digital Marketing", "IT Support"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on roles where I shipped real work for real teams
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" aria-hidden="true" />

          <div className="space-y-12">
            {roles.map((role, index) => (
              <Reveal key={role.company} delay={index * 100}>
                <div className="relative pl-12 md:pl-0">
                  <span className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-1/2" />
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"}`}>
                    <Card className="hover-lift card-gradient border-0 shadow-lg">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-lg font-bold text-primary">{role.title}</h3>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                              <Building2 className="h-4 w-4" />
                              <span>{role.company}</span>
                            </div>
                          </div>
                          <Badge className="bg-accent text-accent-foreground shrink-0">{role.type}</Badge>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" /> {role.duration}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" /> {role.location}
                          </span>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed">{role.description}</p>

                        <ul className="space-y-2">
                          {role.responsibilities.map((item) => (
                            <li key={item} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {role.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
