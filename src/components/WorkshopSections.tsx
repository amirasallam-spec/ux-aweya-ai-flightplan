import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, BookOpen, Presentation, ArrowRight, Quote } from "lucide-react";

const WorkshopSections = () => {
  const sessions = [
    {
      number: "01",
      title: "Vibe coding introduction",
      description: "Usecases and limitations. How it fits in the UX Process"
    },
    {
      number: "02",
      title: "Vibe coding tool #1",
      description: "Prompt best practices and a mini-project practice"
    },
    {
      number: "03",
      title: "Vibe coding tool #2",
      description: "Design system & theming for Stakeholder quick presentations and a mini-project practice"
    },
    {
      number: "04",
      title: "Vibe coding tool #3",
      description: "AI Prototyping and tools summary"
    },
    {
      number: "05",
      title: "Beyond AI-Prototyping",
      description: "Automating workflows + Final project assignment"
    },
    {
      number: "06",
      title: "Final project",
      description: "Presentations and reviews"
    }
  ];


  const deliverables = [
    "Redesign application using AI-Prototyping",
    "Clickable AI-augmented prototype",
    "Portfolio-ready project to present"
  ];

  const whyJoin = [
    "Learn something new every session and become part of an AI-powered design community",
    "Produce portfolio-ready artifacts and differentiate yourself among the crowd",
    "Practical, team-ready workflow you can apply immediately"
  ];

  const testimonials = [
    {
      name: "Sarah Ayman",
      role: "UI/UX Designer @ Dahab Masr",
      quote: "Huge thanks to Amira Sallam, who was more than just a supportive instructor — she was a real mentor to all of us. It was such a unique and inspiring experience in my UX path. 💛",
      avatar: "/lovable-uploads/sarah-ayman.png",
      initials: "SA"
    },
    {
      name: "Soliman Shaban",
      role: "Principal Product Designer | GenAI-Powered",
      quote: "What a great experience joining the first UX for AI Workshop! Explored how AI can shape smarter, human-centered design. Built real AI-based projects applying AI design guidelines. Met amazing designers passionate about AI in UX/UI.",
      avatar: "/lovable-uploads/soliman-shaban.png",
      initials: "SS"
    },
    {
      name: "Samiha Albakri",
      role: "Product Designer | Designing Scalable Fintech Experiences",
      quote: "Amira is an absolute rockstar. She combined deep expertise with a genuine willingness to share knowledge, no cookie-cutter slides or nonsense. Just honest, actionable insights you can actually apply.",
      avatar: "/lovable-uploads/samiha-albakri.png",
      initials: "SA"
    }
  ];

  return (
    <div className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* What it is */}
        <section className="animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              Overview
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">What it is</h2>
          <Card className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-sm border border-border w-full">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-6">
                A 6-session, hands-on workshop to sharpen analysis, reporting, AI prototyping, and presentation skills.
              </p>
              <div className="text-left">
                <h4 className="font-semibold mb-2 text-primary">Designed for:</h4>
                <p className="text-muted-foreground">All levels. Designers, developers, freelancers, PMs.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Schedule and Price */}
        <section className="animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              Details
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Schedule and Price</h2>
          <Card className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-sm border border-border w-full">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Dates</p>
                    <p className="text-sm font-semibold text-foreground">Sun 1, 8, 15 Feb: 7:00 PM - 9:00 PM</p>
                    <p className="text-sm font-semibold text-foreground">Wed 4, 11, 18 Feb: 8:30 PM - 10:30 PM</p>
                    <p className="text-sm text-muted-foreground mt-1">Bonus: Fri 13 Feb (Flexible time)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Format</p>
                    <p className="text-lg font-bold text-foreground">6 + 1 Bonus</p>
                    <p className="text-muted-foreground">Online - Microsoft Teams</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 text-primary font-bold text-lg flex-shrink-0 mt-1">LE</div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Price</p>
                    <p className="text-lg font-bold text-foreground">9950 LE</p>
                    <Badge variant="outline" className="mt-2 border-primary/20 text-primary text-xs">
                      Limited seats
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What you'll learn and ship */}
        <section className="animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              Outcomes
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">What you'll learn and ship</h2>
          <div className="grid lg:grid-cols-2 gap-6 w-full">
            <Card className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-sm border border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-foreground">Vibe coding tools and process</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li>1. Speed up your design process</li>
                  <li>2. Build prototypes faster</li>
                  <li>3. Automate repetitive tasks</li>
                  <li>4. Understand advantages and limitations of tools</li>
                  <li>5. Abiding by the design system for consistent stakeholder presentation</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-sm border border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-foreground">Deliverables</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Session outline */}
        <section className="animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              Curriculum
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Session outline</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {sessions.map((session, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-sm border border-border hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {session.number}
                    </div>
                    <CardTitle className="text-lg text-foreground">{session.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{session.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>


        {/* Why join */}
        <section className="animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              Benefits
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Why join</h2>
          <div className="grid md:grid-cols-3 gap-6 w-full">
            {whyJoin.map((reason, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-sm border border-border"
              >
                <CardContent className="p-6">
                  <Presentation className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground">{reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About the instructor */}
        <section className="animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              Instructor
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">About the instructor</h2>
          <Card className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-sm border border-border w-full">
            <CardContent className="p-8">
              <div className="aspect-[9/16] max-w-[400px] rounded-xl overflow-hidden mb-6 border border-border">
                <iframe
                  src="https://www.youtube.com/embed/wT7zRGignjQ"
                  title="About the instructor"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-muted-foreground">
                Instructor bio and details will be added here. Learn more about the experience and expertise behind this workshop.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Testimonials */}
        <section className="animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">What past attendees say</h2>
          <div className="grid md:grid-cols-3 gap-6 w-full">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-sm border border-border"
              >
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/40 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm overflow-hidden">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.textContent = testimonial.initials;
                        }}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="animate-fade-up">
          <Card className="bg-primary rounded-2xl shadow-lg border-0 w-full">
            <CardContent className="p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-primary-foreground/50" />
                <span className="text-primary-foreground/80 font-medium tracking-wide uppercase text-sm">
                  Enroll Now
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Ready to level up?</h2>
              <p className="text-lg mb-8 text-primary-foreground/90 max-w-xl">
                Secure your seat and up-skill yourself in Q1 2026 before Ramadan begins.
              </p>
              <Button 
                size="lg" 
                className="bg-background hover:bg-background/90 text-foreground text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => window.open('https://forms.gle/RjhzriKMfL4GvBmF7', '_blank')}
              >
                Fill the form to enroll
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default WorkshopSections;
