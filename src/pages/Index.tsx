import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Mail, Phone, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
const Index = () => {
  const skills = ["Python", "Java", "SQL", "HTML5", "CSS", "JavaScript", "TypeScript", "R", "AWS", "Azure", "Postman", "Git", "Docker", "Linux", "Orange Data Mining", "Flask", "Spring Boot", "PostgreSQL", "React"];
  const projects = [{
    title: "SudoGuru",
    description: "Full-stack Sudoku-solving and generating web application with Flask REST API and PostgreSQL backend. Capable of managing 1,000+ users with puzzle solve times under 0.1 seconds.",
    tech: ["Flask", "PostgreSQL", "Dynamic HTML", "Tkinter"],
    liveUrl: "https://sudoguru-priv.onrender.com/",
    githubUrl: "https://github.com/kav-sw19/sudoku-solver-generator",
    highlights: ["100% user success rate", "Sub 0.1s solve times", "1,000+ user capacity"]
  }, {
    title: "TipsyTrail",
    description: "Location-based pub crawl web app enabling users to discover bars and generate pub routes using MapBox for interactive mapping and route visualization.",
    tech: ["React", "TypeScript", "Supabase", "MapBox"],
    liveUrl: "https://tipsytrail.uk",
    githubUrl: "#",
    highlights: ["1,000+ UK pubs database", "Interactive mapping", "Automated data scraping"]
  }];
  const workExperience = [{
    role: "Large Language Model (LLM) Trainer",
    company: "Outlier",
    period: "Nov 2024 -- Present",
    location: "Remote",
    achievements: ["Trained Large Language Models by evaluating input/output and implementing improvements in Python and JavaScript", "Reviewed 200+ model prompts, reducing hallucinations in coding outputs by 50% in successive training iterations"]
  }, {
    role: "Bartender",
    company: "Buckatree Hall Hotel",
    period: "Jun 2024 -- Sep 2024",
    location: "Telford",
    achievements: ["Served 200+ customers daily in fast-paced environment, sharpening communication and multitasking skills", "Collaborated with team to generate triple figure revenue daily during peak operations"]
  }];
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Kavindu Walisinghe</h1>
            <div className="flex gap-6">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Kavindu Walisinghe
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">Computer Science Graduate</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm px-4 py-2">Software Development</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">Machine Learning</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">Cybersecurity</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">Full-Stack Development</Badge>
          </div>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription>University of Leicester</CardDescription>
              </CardHeader>
              
            </Card>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {workExperience.map((job, index) => <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{job.role}</CardTitle>
                      <CardDescription>{job.company} • {job.location}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">{job.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>)}
                    </div>
                    <div className="space-y-1">
                      {project.highlights.map((highlight, idx) => <p key={idx} className="text-xs text-muted-foreground flex items-center">
                          <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                          {highlight}
                        </p>)}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {skills.map((skill, index) => <Badge key={index} variant="outline" className="justify-center py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                  {skill}
                </Badge>)}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <Button size="sm" variant="ghost" asChild>
              <a href="mailto:kav.sw19@gmail.com">
                <Mail className="w-4 h-4" />
              </a>
            </Button>
            <Button size="sm" variant="ghost" asChild>
              <a href="tel:+447727239307">
                <Phone className="w-4 h-4" />
              </a>
            </Button>
            <Button size="sm" variant="ghost" asChild>
              <a href="https://www.linkedin.com/in/kav.sw19/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button size="sm" variant="ghost" asChild>
              <a href="https://github.com/kav-sw19" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Kavindu Walisinghe. Built with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;