import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Plus } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Fantasy Cricket Game",
      description: "A comprehensive Python-based fantasy cricket game developed during Internshala Summer Training. Features player selection, match simulation, and scoring system.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop",
      technologies: ["Python", "Object-Oriented Programming", "Game Logic", "Data Structures"],
      features: [
        "Player Selection System",
        "Match Simulation Engine", 
        "Real-time Scoring",
        "Tournament Management"
      ],
      status: "Completed",
      github: "https://github.com/aarush3011/Fantasy-Cricket",
      demo: "#"
    }
  ];

  const upcomingProjects = [
    {
      title: "Personal Photography Portfolio",
      description: "A showcase of creative photography work with dynamic galleries and responsive design.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      status: "In Planning"
    },
    {
      title: "Social Media Analytics Dashboard",
      description: "A comprehensive dashboard for tracking social media performance and engagement metrics.",
      technologies: ["React", "Chart.js", "API Integration", "TypeScript"],
      status: "In Development"
    },
    {
      title: "College Club Management System",
      description: "A web application for managing college club activities, events, and member communications.",
      technologies: ["Full Stack", "Database Design", "User Management", "Event Planning"],
      status: "Concept"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my technical projects and creative work that demonstrate my skills and passion
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16 fade-in">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Featured Project</h3>
          {projects.map((project) => (
            <Card key={project.title} className="hover-lift card-gradient border-0 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">{project.status}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-8 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-primary mb-4">{project.title}</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-foreground mb-3">Key Features:</h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = 'https://github.com/aarush3011/Fantasy-Cricket/archive/refs/heads/main.zip';
                        link.download = 'Fantasy-Cricket-Project.zip';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div className="fade-in">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Upcoming Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="hover-lift card-gradient border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      variant={project.status === "In Development" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                    <Plus className="h-5 w-5 text-muted-foreground" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-primary mb-3">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center fade-in">
          <Card className="card-gradient border-0 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Let's Build Something Amazing</h3>
              <p className="text-muted-foreground mb-6">
                Have a project in mind? I'd love to collaborate and bring your ideas to life with 
                innovative solutions and creative design.
              </p>
              <Button 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Start a Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;