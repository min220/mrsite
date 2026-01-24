import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Goals from "@/components/Goals";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero profileImage={profilePhoto} />
      <About />
      <Projects />
      <Goals />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
