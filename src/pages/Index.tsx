import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Mail, Phone, Linkedin, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const skillCategories = {
    languages: ["Python", "Java", "SQL", "HTML5", "CSS", "JavaScript", "TypeScript", "R"],
    frameworks: ["Flask", "Spring Boot", "PostgreSQL", "React"],
    tools: ["AWS", "Azure", "Postman", "Git", "Docker", "Linux", "Orange Data Mining"]
  };

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
    highlights: ["1,000+ UK pubs database", "Interactive mapping", "Automated data scraping"],
    inDevelopment: true
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

  const universityModules = [
    "Operating Systems and Networking",
    "Databases and Domain Modelling", 
    "User Interface Design and Evaluation",
    "Data Analytics",
    "Software Architecture and System Development",
    "Software Engineering Group Project",
    "Computers, Society and Professionalism",
    "Mobile and Web Applications",
    "Internet and Cloud Computing",
    "Foundations of Cybersecurity",
    "Big Data and Predictive Analytics",
    "Computer Science Project and Dissertation"
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.1),_transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.1),_transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border/50 z-50 shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Kavindu Walisinghe</h1>
              <div className="flex gap-6">
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">About</a>
                <a href="#experience" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">Experience</a>
                <a href="#projects" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">Projects</a>
                <a href="#skills" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">Skills</a>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-40 pb-32 px-6 relative overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="container mx-auto text-center relative">
            <div className="mb-8 inline-block">
              <div className="w-2 h-2 bg-primary rounded-full mx-auto mb-4 animate-bounce"></div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent leading-tight">
              Kavindu Walisinghe
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto font-light">Computer Science Graduate</p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="text-base px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 hover:scale-105 transition-transform duration-300">Software Development</Badge>
              <Badge variant="secondary" className="text-base px-6 py-3 bg-gradient-to-r from-secondary/10 to-secondary/5 border-secondary/20 hover:scale-105 transition-transform duration-300">Machine Learning</Badge>
              <Badge variant="secondary" className="text-base px-6 py-3 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20 hover:scale-105 transition-transform duration-300">Cybersecurity</Badge>
              <Badge variant="secondary" className="text-base px-6 py-3 bg-gradient-to-r from-muted/10 to-muted/5 border-muted/20 hover:scale-105 transition-transform duration-300">Full-Stack Development</Badge>
            </div>
            <div className="flex justify-center gap-6">
              <Button asChild className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" asChild className="text-lg px-8 py-6 border-2 hover:scale-105 transition-all duration-300 hover:bg-primary/5">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-muted/30 to-muted/20"></div>
          <div className="container mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-primary"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-8 h-0.5 bg-primary"></div>
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">About Me</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Passionate about technology and innovation</p>
            </div>
            <div className="max-w-5xl mx-auto space-y-8">
              {/* University Education */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-gradient-to-br from-primary to-primary/70 rounded-full"></div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">University of Leicester</CardTitle>
                  </div>
                  <CardDescription className="text-base">Bachelor of Computer Science • Expected Graduation: July 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Predicted: First Class Honours
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Key Modules (Penultimate & Final Year):</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {universityModules.map((module, index) => (
                          <div key={index} className="flex items-center text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                            {module}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sixth Form Education */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-gradient-to-br from-secondary to-secondary/70 rounded-full"></div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">Madeley Academy</CardTitle>
                  </div>
                  <CardDescription className="text-base">A-Levels • September 2020 - June 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">A-Level Subjects:</h4>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          Computer Science
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          Mathematics
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          Physics
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-gradient-to-br from-accent to-accent/70 rounded-full"></div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">Certifications</CardTitle>
                  </div>
                  <CardDescription className="text-base">Professional development and skill validation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                      Introduction to Cybersecurity (Cisco)
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="py-32 px-6 relative">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-primary"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-8 h-0.5 bg-primary"></div>
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Work Experience</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Building expertise through diverse professional experiences</p>
            </div>
            <div className="max-w-5xl mx-auto space-y-8">
              {workExperience.map((job, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gradient-to-br from-primary to-primary/70 rounded-full"></div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{job.role}</CardTitle>
                          <CardDescription className="text-base">{job.company} • {job.location}</CardDescription>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">{job.period}</span>
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
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-32 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-muted/30 to-muted/20"></div>
          <div className="container mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-primary"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-8 h-0.5 bg-primary"></div>
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Featured Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Showcasing technical skills through real-world applications</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-3">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gradient-to-br from-primary to-primary/70 rounded-full"></div>
                        <div className="flex items-center gap-2">
                          <CardTitle className="group-hover:text-primary transition-colors duration-300 text-xl">{project.title}</CardTitle>
                          {project.inDevelopment && (
                            <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200 animate-pulse">
                              <AlertCircle className="w-3 h-3 mr-1" />
                              In Development
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" asChild className="hover:scale-110 transition-transform duration-300">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button size="sm" variant="ghost" asChild className="hover:scale-110 transition-transform duration-300">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
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
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-32 px-6 relative">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-primary"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-8 h-0.5 bg-primary"></div>
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Technical Skills</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive expertise across modern technologies</p>
            </div>
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Languages */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-300 rounded-full"></div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full"></div>
                  Programming Languages
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pl-6">
                  {skillCategories.languages.map((skill, index) => (
                    <Badge key={index} variant="outline" className="justify-center py-3 text-sm border-blue-200 text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 hover:scale-110 transition-all duration-300 cursor-default shadow-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-green-500 to-green-300 rounded-full"></div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                  <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-green-300 rounded-full"></div>
                  Frameworks & Libraries
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pl-6">
                  {skillCategories.frameworks.map((skill, index) => (
                    <Badge key={index} variant="outline" className="justify-center py-3 text-sm border-green-200 text-green-700 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 hover:scale-110 transition-all duration-300 cursor-default shadow-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Developer Tools */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-purple-300 rounded-full"></div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                  <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-purple-300 rounded-full"></div>
                  Developer Tools
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pl-6">
                  {skillCategories.tools.map((skill, index) => (
                    <Badge key={index} variant="outline" className="justify-center py-3 text-sm border-purple-200 text-purple-700 bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 hover:scale-110 transition-all duration-300 cursor-default shadow-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-border/50 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent"></div>
          <div className="container mx-auto text-center relative">
            <div className="flex justify-center gap-8 mb-8">
              <Button size="sm" variant="ghost" asChild className="hover:scale-125 transition-all duration-300 hover:bg-primary/10">
                <a href="mailto:kav.sw19@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" asChild className="hover:scale-125 transition-all duration-300 hover:bg-primary/10">
                <a href="tel:+447727239307">
                  <Phone className="w-5 h-5" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" asChild className="hover:scale-125 transition-all duration-300 hover:bg-primary/10">
                <a href="https://www.linkedin.com/in/kav.sw19/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" asChild className="hover:scale-125 transition-all duration-300 hover:bg-primary/10">
                <a href="https://github.com/kav-sw19" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary/30"></div>
              <div className="w-2 h-2 bg-primary/50 rounded-full"></div>
              <div className="w-8 h-0.5 bg-primary/30"></div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Kavindu Walisinghe. Built with React & TypeScript.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
