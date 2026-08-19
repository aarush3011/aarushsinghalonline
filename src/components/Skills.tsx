import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Camera, Wrench, GraduationCap, Terminal, Palette } from "lucide-react";
import Reveal from "@/components/Reveal";

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Bootstrap", "React (learning)"],
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "C", "Java Basics", "PL/SQL", "DBMS", "OOP"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git & GitHub", "VS Code", "Canva", "Figma Basics", "Lightroom", "Meta Suite"],
    },
    {
      title: "Currently Learning",
      icon: GraduationCap,
      skills: ["React", "Tailwind CSS", "DevOps Basics", "Cloud Fundamentals", "Data Structures"],
    },
  ];

  const highlights = [
    { label: "Languages", value: "6+", icon: Terminal },
    { label: "Projects", value: "10+", icon: Globe },
    { label: "Photos Taken", value: "500+", icon: Camera },
    { label: "Databases", value: "SQL", icon: Database },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to build, design and grow
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Reveal key={category.title} delay={index * 100}>
                <Card className="h-full hover-lift card-gradient border-0 shadow-lg group">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs bg-white/50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Reveal key={stat.label} delay={index * 80}>
                <Card className="text-center p-6 hover-lift card-gradient border-0 shadow-lg">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
