import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Instructor image - replace the URL below with your image
const instructorImage = "/lovable-uploads/4754f949-e8fa-435b-89cc-7486ea6c12a1.png";
const WorkshopHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/20">
      {/* Decorative elements */}
      <div className="absolute top-16 left-8 w-16 h-16 opacity-60">
        <div className="grid grid-cols-4 gap-1">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-accent" />
          ))}
        </div>
      </div>
      
      <div className="absolute top-32 right-1/3 text-accent text-3xl font-light">+</div>
      <div className="absolute top-20 right-1/4 text-accent/60 text-2xl font-light">+</div>
      
      {/* Brush strokes */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-30">
        <div className="absolute top-1/4 right-20 w-48 h-8 bg-accent rounded-full rotate-[-30deg]" />
        <div className="absolute top-1/3 right-8 w-64 h-6 bg-accent/50 rounded-full rotate-[-25deg]" />
        <div className="absolute top-[45%] right-24 w-40 h-5 bg-accent rounded-full rotate-[-35deg]" />
        <div className="absolute top-[55%] right-12 w-56 h-7 bg-accent/50 rounded-full rotate-[-20deg]" />
      </div>
      
      {/* Curved arrow decoration */}
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="text-accent">
          <path d="M10 50 Q 40 10, 70 30" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M60 25 L 72 32 L 62 40" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
          {/* Tagline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              Master AI-Powered Development
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground">
            Vibe Coding
            <br />
            <span className="text-primary">Workshop</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-2 text-foreground/80 font-medium">
            From Analysis to AI-Powered Prototyping
          </p>
          
          <p className="text-lg mb-8 text-muted-foreground max-w-xl">
            A 6-session, hands-on workshop to sharpen AI knowledge, tools, AI prototyping, and automation.
          </p>
          
          {/* Info cards */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Starting</p>
              <p className="text-lg font-bold text-foreground">Friday, Jan 30</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Price</p>
              <p className="text-lg font-bold text-foreground">8500 LE</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Sessions</p>
              <p className="text-lg font-bold text-foreground">6 + 1 Bonus</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={() => window.open('https://forms.gle/RjhzriKMfL4GvBmF7', '_blank')}
          >
            Secure Your Seat Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          </div>
          
          {/* Instructor Image */}
          <div className="hidden lg:flex justify-center items-end">
            <img 
              src={instructorImage} 
              alt="Workshop instructor" 
              className="max-h-[600px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default WorkshopHero;
