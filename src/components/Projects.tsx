import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
  githubUrl?: string;
  externalUrl?: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
  title: "Worn",
  category: "Product + AI",
  description:
    "Native iOS app that uses Claude's vision API to auto-tag clothing and surface underworn pieces via natural-language vibe search. Built end-to-end—from data model to prompt engineering to UI design—addressing wardrobe over-consumption.",
  tags: ["iOS", "Swift", "AI Integration", "Product Design"],
  image: "/placeholder.svg",
  color: "from-secondary to-muted",
  // Put your folder/case-study link here when ready:
  // externalUrl: "https://drive.google.com/drive/folders/....",
  // Or link to an internal page you'll build:
  externalUrl: "/#worn",
},
    {
       title: "SecondDoor",
      category: "Social Impact",
      description:
        "Builder at an early-stage NGO focused on housing access. Recently joined the team and currently contributing to early technical and systems planning.",
      tags: ["Social Impact", "Systems", "Full Stack"],
      image: "/placeholder.svg",
      color: "from-secondary to-muted",
      // Put your folder/case-study link here when ready:
      // externalUrl: "https://drive.google.com/drive/folders/....",
      // Or link to an internal page you’ll build:
      externalUrl: "/#seconddoor",
    },
    {
      title: "Tech Council",
      category: "Technology",
      description:
        "Led a student tech council coordinating initiatives across cybersecurity education, web development, 3D printing, and app development. Organized workshops, led student teams, and collaborated on philanthropic projects with a local hospital and school.",
      tags: ["Leadership", "Education", "Web Development"],
      image: "/placeholder.svg",
      color: "from-coral-light/20 to-secondary",
      externalUrl: "https://www.instagram.com/isbtechco/",
    },
    { title: "VEX Robotics",
      category: "Engineering",
      description:
        "Competitive robotics experience spanning multiple years across engineering design, programming, and strategy. Qualified for the World Championships twice, working in high-pressure, collaborative environments.",
      tags: ["Engineering", "Programming", "Team-Based Design"],
      image: "/placeholder.svg",
      color: "from-primary/20 to-coral-light/20",
      // If you don't have a link, delete this line:
      // externalUrl: "/vex",
    },
    {
      title: "Experiments",
      category: "Exploration",
      description:
        "A curated collection of prototypes and side builds—made to learn, test ideas, and explore new tools.",
      tags: ["React", "Python", "Prototyping"],
      image: "/placeholder.svg",
      color: "from-muted to-primary/20",
      externalUrl: "/experiments",
    },
  ];

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-widest text-primary mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">
            <span className="italic">Experiments & Involvements</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-2xl overflow-hidden bg-card hover-lift"
              style={{ boxShadow: "var(--soft-shadow)" }}
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
              >
                <span className="font-display text-4xl text-foreground/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {project.category}
                  </span>

                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}

                    {project.externalUrl && (
                      <a
                        href={project.externalUrl}
                        target={project.externalUrl.startsWith("http") ? "_blank" : undefined}
                        rel={project.externalUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                        aria-label={`${project.title} link`}
                        className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
          >
            <Github size={20} />
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
