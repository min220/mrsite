import { ArrowDown } from "lucide-react";

interface HeroProps {
  profileImage?: string;
}

const Hero = ({ profileImage }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-coral-light/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <p className="font-body text-sm uppercase tracking-widest text-primary mb-4 animate-fade-up opacity-0 stagger-1">
              CS & Economics @ Barnard | Columbia
            </p>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 animate-fade-up opacity-0 stagger-2">
              Hi, I'm{" "}
              <span className="italic text-primary">Min</span>
              <br />
              Rungsinaporn
            </h1>

            <p className="font-body text-lg text-muted-foreground max-w-md mb-8 leading-relaxed animate-fade-up opacity-0 stagger-3">
              A curious mind at the intersection of technology and economics, 
              building meaningful solutions and exploring the future of innovation.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 stagger-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-primary transition-all duration-300 hover-lift"
              >
                View My Work
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground font-medium rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up opacity-0 stagger-2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-2xl" />
              
              <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Min Rungsinaporn"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <span className="font-display text-6xl text-muted-foreground/50">MR</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
