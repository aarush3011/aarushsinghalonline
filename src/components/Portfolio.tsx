import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import cricketImage from "@/assets/project-cricket.jpg";
import linktreeImage from "@/assets/project-linktree.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Graphura Linktree Platform",
      description:
        "A custom link-in-bio platform built for Graphura India Pvt. Ltd. — a fast, responsive landing hub that centralises the brand's social profiles, campaigns and contact channels.",
      image: linktreeImage,
      technologies: ["React", "Tailwind CSS", "Responsive Design", "UI/UX"],
      features: [
        "Brand-themed link hub",
        "Mobile-first layout",
        "Click-through optimised CTAs",
        "Fast static delivery",
      ],
      status: "Live",
      primaryHref: "https://graphura.in",
      primaryLabel: "View Project",
      secondary: null as null | { label: string; href: string },
    },
    {
      title: "Fantasy Cricket Game",
      description:
        "A Python-based fantasy cricket game built during Internshala Summer Training. Features player selection, match simulation and a live scoring system.",
      image: cricketImage,
      technologies: ["Python", "OOP", "Game Logic", "Data Structures"],
      features: [
        "Player Selection System",
        "Match Simulation Engine",
        "Real-time Scoring",
        "Tournament Management",
      ],
      status: "Completed",
      primaryHref: "https://github.com/aarush3011/Fantasy-Cricket",
      primaryLabel: "View Project",
      secondary: {
        label: "Download Code",
        href: "https://github.com/aarush3011/Fantasy-Cricket/archive/refs/heads/main.zip",
      },
    },
  ];

  const upcomingProjects = [
    {
      title: "Personal Photography Portfolio",
      description: "A showcase of creative photography work with dynamic galleries and responsive design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      status: "In Planning",
    },
    {
      title: "Social Media Analytics Dashboard",
      description: "A dashboard for tracking social media performance and engagement metrics.",
      technologies: ["React", "Chart.js", "API Integration", "TypeScript"],
      status: "In Development",
    },
    {
      title: "College Club Management System",
      description: "A web application for managing club activities, events and member communications.",
      technologies: ["Full Stack", "Database Design", "User Management"],
      status: "Concept",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selected work that shows how I combine clean front-end engineering with a designer's eye
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <Card className="hover-lift card-gradient border-0 shadow-xl overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">{project.status}</Badge>
                  </div>
                </div>

                <CardContent className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    {project.secondary && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.secondary!.href, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        {project.secondary.label}
                      </Button>
                    )}
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => window.open(project.primaryHref, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {project.primaryLabel}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <div>
          <Reveal>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Upcoming Projects</h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 100}>
                <Card className="hover-lift card-gradient border-0 shadow-lg h-full">
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
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16 text-center">
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
        </Reveal>
      </div>
    </section>
  );
};

export default Portfolio;
