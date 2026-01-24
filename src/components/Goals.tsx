import { Target, Rocket, Heart, Globe } from "lucide-react";

const Goals = () => {
  const goals = [
    {
      icon: Target,
      title: "Master Full-Stack Development",
      description:
        "Get fluent at building end-to-end, from UI to APIs to data, so I can ship real things quickly.",
    },
    {
      icon: Rocket,
      title: "Learn Continuously",
      description:
        "Stay in motion: new tools, new ideas, and a better understanding of how systems (and people) work.",
    },
    {
      icon: Heart,
      title: "Work on Real Problems",
      description:
        "Build for actual users: starting small, listening carefully, and improving what matters.",
    },
    {
      icon: Globe,
      title: "Think Globally",
      description:
        "Bring a global lens to what I build, especially where tech meets access and inequality.",
    },
  ];

  return (
    <section id="goals" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-50">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-body text-sm uppercase tracking-widest text-primary mb-4">
            Looking Forward
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
            Passions & <span className="italic">Goals</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I believe in dreaming big while staying grounded. Here's what drives me 
            and where I'm headed on this exciting journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {goals.map((goal, index) => (
            <div
              key={goal.title}
              className="flex gap-5 p-6 rounded-2xl bg-background hover-lift group"
              style={{ boxShadow: "var(--soft-shadow)" }}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <goal.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                  {goal.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {goal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
