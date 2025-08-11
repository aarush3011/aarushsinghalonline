import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for technology and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6 fade-in">
            <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate second-year BCA student at Management Education and Research Institute, 
              Guru Gobind Singh Indraprastha University, with a strong focus on software engineering 
              and creative photography. My journey in technology began with curiosity and has evolved 
              into a deep commitment to creating impactful digital solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With expertise in front-end development and social media management, I bridge the gap 
              between technical functionality and creative design. Whether it's developing responsive 
              web applications or capturing compelling visual stories through photography, I bring 
              a unique perspective that combines analytical thinking with artistic vision.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My experience as a Virtual Volunteer and Social Media Manager at InAmigos Foundation 
              has strengthened my communication skills and deepened my understanding of digital 
              strategy and community engagement.
            </p>
          </div>

          {/* Education & Activities */}
          <div className="space-y-6 fade-in">
            <Card className="hover-lift card-gradient border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-2">Education</h4>
                    <h5 className="font-medium text-foreground">BCA in Computer Science</h5>
                    <p className="text-muted-foreground text-sm">
                      Guru Govind Singh Indraprastha University
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Aug 2024 – Aug 2028 • Current Grade: 78%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        CodeVerse (Coding Club) Member
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        DevOps Cohort Learner
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift card-gradient border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-2">Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Creativity", "Problem-solving", "Adaptability", "Communication", "Leadership"].map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;