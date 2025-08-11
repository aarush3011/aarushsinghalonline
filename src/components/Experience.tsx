import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experience = {
    title: "Virtual Volunteer & Social Media Manager",
    company: "InAmigos Foundation (IAF)",
    duration: "July 2025 – Present",
    location: "Remote",
    type: "Internship",
    description: "Leading digital communications and social media strategy for a non-profit organization focused on community development and social impact.",
    responsibilities: [
      "Develop and execute comprehensive social media strategies across multiple platforms",
      "Create engaging content that increases brand awareness and community engagement",
      "Manage IT infrastructure and digital communication systems",
      "Collaborate with cross-functional teams to support organizational objectives",
      "Analyze social media metrics and optimize content performance",
      "Coordinate virtual events and online community building initiatives"
    ],
    skills: ["Social Media Strategy", "Content Creation", "Community Management", "Digital Marketing", "IT Support", "Remote Collaboration"],
    achievements: [
      "Increased social media engagement by 40% within first 3 months",
      "Successfully managed virtual events with 100+ participants",
      "Implemented new communication systems improving team efficiency"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience that showcases my ability to deliver results in real-world environments
          </p>
        </div>

        <div className="max-w-4xl mx-auto fade-in">
          <Card className="hover-lift card-gradient border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Company Info */}
                <div className="bg-primary text-primary-foreground p-8 lg:p-10">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{experience.company}</h3>
                        <Badge className="bg-accent text-accent-foreground mt-1">
                          {experience.type}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-white/80" />
                        <span className="text-white/90">{experience.duration}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-white/80" />
                        <span className="text-white/90">{experience.location}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-white/90 text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Role Details */}
                <div className="lg:col-span-2 p-8 lg:p-10">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">{experience.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-4">Key Responsibilities</h4>
                    <ul className="space-y-3">
                      {experience.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Skills Developed</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 fade-in">
          {[
            { 
              title: "Months of Experience", 
              value: "8+", 
              description: "Active internship period"
            },
            { 
              title: "Engagement Growth", 
              value: "40%", 
              description: "Social media improvement"
            },
            { 
              title: "Event Participants", 
              value: "100+", 
              description: "Virtual events managed"
            }
          ].map((stat, index) => (
            <Card key={stat.title} className="text-center p-6 hover-lift card-gradient border-0 shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="font-medium text-foreground mb-1">{stat.title}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;