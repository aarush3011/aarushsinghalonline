import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Globe, Camera, Palette, Brain } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML/CSS", level: 90, icon: Code },
    { name: "JavaScript", level: 85, icon: Code },
    { name: "Python", level: 80, icon: Code },
    { name: "C Programming", level: 75, icon: Code },
    { name: "PL/SQL", level: 70, icon: Database },
    { name: "DBMS", level: 75, icon: Database },
  ];

  const serviceSkills = [
    { name: "Front-End Development", level: 88, icon: Globe },
    { name: "Social Media Management", level: 92, icon: Palette },
    { name: "Photography", level: 85, icon: Camera },
    { name: "Creative Strategy", level: 80, icon: Brain },
  ];

  const SkillCard = ({ skills, title, bgClass }: { skills: any[], title: string, bgClass: string }) => (
    <Card className={`hover-lift ${bgClass} border-0 shadow-lg`}>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-6 text-center">{title}</h3>
        <div className="space-y-6">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <IconComponent className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and creative services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="fade-in">
            <SkillCard 
              skills={technicalSkills} 
              title="Technical Skills" 
              bgClass="card-gradient"
            />
          </div>
          
          <div className="fade-in">
            <SkillCard 
              skills={serviceSkills} 
              title="Services & Creative Skills" 
              bgClass="card-gradient"
            />
          </div>
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 fade-in">
          {[
            { label: "Languages", value: "6+", icon: Code },
            { label: "Projects", value: "10+", icon: Globe },
            { label: "Photos Taken", value: "500+", icon: Camera },
            { label: "Happy Clients", value: "20+", icon: Palette },
          ].map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.label} className="text-center p-6 hover-lift card-gradient border-0 shadow-lg">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;