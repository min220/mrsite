import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Experiments = () => {
  return (
    <main className="container mx-auto px-6 py-24">
      <p className="text-sm uppercase tracking-widest text-primary mb-4">
        Experiments
      </p>

      <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">
        Prototypes & side builds
      </h1>

      <p className="font-body text-muted-foreground max-w-2xl mb-10">
        A collection of projects I built to learn, explore ideas, or test new tools.
        Not everything here was shipped—and that’s the point.
      </p>

      <Link
        to="/"
        className="inline-block text-sm font-medium text-foreground hover:text-primary transition-colors mb-12"
      >
        ← Back home
      </Link>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Experiment 1 */}
        <div
          className="rounded-2xl bg-card p-6 flex flex-col justify-between"
          style={{ boxShadow: "var(--soft-shadow)" }}
        >
          <div>
            <h2 className="font-display text-xl font-medium mb-2">
              Student resource hub (prototype)
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Early build exploring how students organize resources and study together.
            </p>
          </div>

          <a
            href="https://revisionpaws.isb.ac.th/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors mt-4"
          >
            View demo <ExternalLink size={16} />
          </a>
        </div>

        {/* Experiment 2 */}
        <div
          className="rounded-2xl bg-card p-6 flex flex-col justify-between"
          style={{ boxShadow: "var(--soft-shadow)" }}
        >
          <div>
            <h2 className="font-display text-xl font-medium mb-2">
              IB question generator (early)
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Experimenting with generating IB-style exam questions and refining prompt
              design for consistency and quality.
            </p>
          </div>

          <div className="mt-4 flex items-center gap-4">
  <a
    href="https://drive.google.com/file/d/1yykN-Zu-j7H-Ulbe49FGiqlG6L-uV0-1/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
  >
    View demo <ExternalLink size={16} />
  </a>

  <a
    href="https://github.com/min220/econproj"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
  >
    View code <ExternalLink size={16} />
  </a>
</div>

        </div>

        {/* Experiment 3 */}
        <div
          className="rounded-2xl bg-card p-6 flex flex-col justify-between"
          style={{ boxShadow: "var(--soft-shadow)" }}
        >
          <div>
            <h2 className="font-display text-xl font-medium mb-2">
              AI education platform demo (Academix)
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Demo of an AI-powered education platform built using IBM WatsonX,
              exploring how AI can support personalized learning and classroom tools.
            </p>
          </div>

          <a
            href="https://drive.google.com/file/d/1GqvwTu3Z1R-6DuBA6HO9tVRrgB0kM-3P/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors mt-4"
          >
            View demo <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Experiments;
