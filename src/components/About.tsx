import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Award, BadgeCheck, School } from "lucide-react";
import Reveal from "@/components/Reveal";

const About = () => {
  const education = [
    {
      icon: GraduationCap,
      degree: "BCA in Computer Science",
      institution: "Guru Gobind Singh Indraprastha University",
      period: "Aug 2024 – Aug 2028",
    },
    {
      icon: School,
      degree: "Senior Secondary (Class XII)",
      institution: "Bansal Public School",
      period: "Completed 2024",
    },
  ];

  const certifications = [
    {
      title: "DevAarambh",
      issuer: "Developer bootcamp programme",
    },
    {
      title: "AI For All",
      issuer: "Government of India initiative",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Aarush Singhal</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for technology and creativity
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <Reveal className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate second-year BCA student at Guru Gobind Singh Indraprastha University,
              with a strong focus on software engineering and creative photography. My journey in
              technology began with curiosity and has evolved into a deep commitment to creating
              impactful digital solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With expertise in front-end development and social media management, I bridge the gap
              between technical functionality and creative design. Whether it's developing responsive
              web applications or capturing compelling visual stories through photography, I bring
              a unique perspective that combines analytical thinking with artistic vision.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My experience at Graphura India Pvt. Ltd. and as a Virtual Volunteer with the InAmigos
              Foundation has strengthened my communication skills and deepened my understanding of
              digital strategy and community engagement.
            </p>

            {/* Certifications */}
            <div className="pt-4">
              <h3 className="text-2xl font-semibold text-primary mb-4">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <Card key={cert.title} className="hover-lift card-gradient border-0 shadow-lg">
                    <CardContent className="p-5 flex items-start space-x-3">
                      <div className="bg-secondary/10 p-2 rounded-lg">
                        <BadgeCheck className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{cert.title}</h4>
                        <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Education & Activities */}
          <div className="space-y-6">
            <Reveal>
              <h3 className="text-2xl font-semibold text-primary mb-4">Education</h3>
              <div className="relative pl-6 border-l-2 border-secondary/30 space-y-6">
                {education.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.degree} className="relative">
                      <span className="absolute -left-[31px] top-2 w-4 h-4 rounded-full bg-accent border-2 border-background" />
                      <Card className="hover-lift card-gradient border-0 shadow-lg">
                        <CardContent className="p-6 flex items-start space-x-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">{item.degree}</h4>
                            <p className="text-muted-foreground text-sm">{item.institution}</p>
                            <p className="text-muted-foreground text-sm mt-1">{item.period}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <Card className="hover-lift card-gradient border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-2">Activities</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                          CodeVerse (Coding Club) Member
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                          DevOps Cohort Learner
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={200}>
              <Card className="hover-lift card-gradient border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-2">Soft Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Creativity", "Problem-solving", "Adaptability", "Communication", "Leadership"].map(
                          (skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm rounded-full"
                            >
                              {skill}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
