import { BookOpen, Code, TrendingUp, Sparkles } from "lucide-react";
const About = () => {
  const highlights = [{
    icon: Code,
    title: "Computer Science",
    description: "Building software that solves real problems"
  }, {
    icon: TrendingUp,
    title: "Economics",
    description: "Understanding markets and human behavior"
  }, {
    icon: BookOpen,
    title: "Barnard @ Columbia",
    description: "Learning in the heart of New York City"
  }, {
    icon: Sparkles,
    title: "Innovation",
    description: "Exploring tech and the world beyond."
  }];
  return <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <p className="font-body text-sm uppercase tracking-widest text-primary mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
              <span className="italic">Thinking, Building, Learning</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>I’m Min, a student interested in using technology to understand and shape the world around me. I’ve always gravitated toward logic and rationality in problem-solving, which naturally drew me to computer science. But because so much of the world is driven by human behavior and consumption, I believe that logic only works when paired with a real understanding of economic systems and people.</p>
              <p>At Barnard College, I’ve immersed myself in both the academic community and the city itself. From hackathons to tech communities, I’m constantly learning to feed my curiosity about how things work and how they can work better.</p>
              <p>Outside of class, I’m usually exploring new coffee shops, wandering flea markets, or on my daily riverside walks.</p>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => <div key={item.title} className={`p-6 rounded-2xl bg-background hover-lift cursor-default ${index % 2 === 1 ? "mt-8" : ""}`} style={{
            boxShadow: "var(--soft-shadow)"
          }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-medium mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;