import { Mail, Linkedin, Github, Twitter } from "lucide-react";
const Contact = () => {
  const socialLinks = [{
    icon: Mail,
    href: "mailto:min.rungsinaporn@barnard.edu",
    label: "Email"
  }, {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn"
  }, {
    icon: Github,
    href: "https://github.com",
    label: "GitHub"
  }, {
    icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter"
  }];
  return <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-sm uppercase tracking-widest text-primary mb-4">
            Let's Connect
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
            Say <span className="italic">hello</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            I'm always excited to connect with fellow innovators, potential 
            collaborators, or anyone who shares a passion for technology and 
            positive change. Let's chat!
          </p>

          <a href="mailto:minnichapha@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-primary transition-all duration-300 hover-lift text-lg mb-12">
            minnichapha@gmail.com
            <Mail size={20} />
          </a>

          <div className="flex justify-center gap-4">
            {socialLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300" style={{
            boxShadow: "var(--soft-shadow)"
          }} aria-label={link.label}>
                <link.icon size={20} />
              </a>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;