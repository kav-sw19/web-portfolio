
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
          <div className="max-w-4xl mx-auto space-y-8">
            {/* University Education */}
            <Card>
              <CardHeader>
                <CardTitle>University of Leicester</CardTitle>
                <CardDescription>Bachelor of Computer Science • Expected Graduation: July 2025</CardDescription>
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
            <Card>
              <CardHeader>
                <CardTitle>Madeley Academy</CardTitle>
                <CardDescription>A-Levels • September 2020 - June 2022</CardDescription>
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
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
                <CardDescription>Professional development and skill validation</CardDescription>
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
                    <div className="flex items-center gap-2">
                      <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      {project.inDevelopment && (
                        <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          In Development
                        </Badge>
                      )}
                    </div>
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
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Languages */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Programming Languages</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {skillCategories.languages.map((skill, index) => (
                  <Badge key={index} variant="outline" className="justify-center py-2 border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Frameworks & Libraries</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {skillCategories.frameworks.map((skill, index) => (
                  <Badge key={index} variant="outline" className="justify-center py-2 border-green-200 text-green-700 bg-green-50 hover:bg-green-100 transition-colors cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Developer Tools */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Developer Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {skillCategories.tools.map((skill, index) => (
                  <Badge key={index} variant="outline" className="justify-center py-2 border-purple-200 text-purple-700 bg-purple-50 hover:bg-purple-100 transition-colors cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
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
            © 2025 Kavindu Walisinghe. Built with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>;
};

export default Index;
