import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/workshop-hero.jpg";

const WorkshopHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        {/* Logo */}
        <div className="mb-6">
          <img 
            src="/lovable-uploads/4754f949-e8fa-435b-89cc-7486ea6c12a1.png" 
            alt="UXaweya Logo" 
            className="w-20 h-20 mx-auto mb-4 rounded-full shadow-lg" 
          />
        </div>
        
        <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
          The Only UXaweya Workshop in 2025
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          UXaweya Advanced Workshop
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-white/90 font-light">
          From Analysis to AI-Powered Prototyping
        </p>
        
        <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
          A 6-session, hands-on workshop to sharpen analysis, reporting, AI prototyping, and presentation skills.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="text-center">
            <p className="text-sm text-white/70">Starting</p>
            <p className="text-xl font-semibold">Sep 26, 2025</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <p className="text-sm text-white/70">Price</p>
            <p className="text-xl font-semibold">7000 LE</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <p className="text-sm text-white/70">Duration</p>
            <p className="text-xl font-semibold">6 sessions + 1 bonus session</p>
          </div>
        </div>
        
        <Button 
          size="lg" 
          className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-glow animate-pulse-soft"
        >
          Secure Your Seat Now
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default WorkshopHero;