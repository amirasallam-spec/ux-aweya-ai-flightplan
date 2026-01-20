import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, BookOpen, Presentation, ArrowRight } from "lucide-react";

const WorkshopSections = () => {
  const sessions = [
    {
      number: "01",
      title: "AI Usecases in design and research",
      description: "Understand AI usecases in design, research, a11y and UX writing"
    },
    {
      number: "02",
      title: "Define the challenge",
      description: "Introductions, gather pain points and requirements"
    },
    {
      number: "03",
      title: "AI workflow integrated design",
      description: "Integrate AI into the redesigned app and understanding its limitations"
    },
    {
      number: "04",
      title: "AI prototyping",
      description: "Test prompts, build flows, validate rapidly"
    },
    {
      number: "05",
      title: "Storytelling and presentation",
      description: "Narrative, visuals, delivery"
    },
    {
      number: "06",
      title: "Feedback to final",
      description: "Present, iterate, and refine after critique"
    }
  ];

  const skills = [
    "AI usecases in design and research",
    "Analytical framing and requirements gathering",
    "AI integrated workflow design experience",
    "Prompt design and rapid prototyping with AI tools",
    "Storytelling, visual communication, and presentation",
    "Feedback handling and iteration"
  ];

  const deliverables = [
    "Redesigned application using AI",
    "Clickable AI-augmented prototype",
    "Stakeholder-ready presentation deck"
  ];

  const whyJoin = [
    "Learn something new every session",
    "Produce portfolio-ready artifacts",
    "Practical, team-ready workflow you can apply immediately"
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
                    <p className="text-lg font-bold text-foreground">Fridays @ 4:00 PM</p>
                    <p className="text-muted-foreground">Oct 7 - Nov 11, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Format</p>
                    <p className="text-lg font-bold text-foreground">6 + 1 Bonus</p>
                    <p className="text-muted-foreground">Sessions over 1.5 months</p>
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
                <CardTitle className="text-xl text-foreground">A-to-Z Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI usecases in design and research → AI UX design patterns → AI prototyping → Storytelling → Iteration
                </p>
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
          <p className="mt-6 text-muted-foreground">
            <strong className="text-foreground">Tools:</strong> Lovable, V0, Figma/Make, or your preferred "vibe coding" tool
          </p>
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

        {/* Skills you'll gain */}
        <section className="animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              Growth
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Skills you'll gain</h2>
          <Card className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-sm border border-border w-full">
            <CardContent className="p-8">
              <ul className="grid md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
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
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center mb-6 border border-border">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Presentation className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Video coming soon</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Instructor bio and details will be added here. Learn more about the experience and expertise behind this workshop.
              </p>
            </CardContent>
          </Card>
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
                Secure your seat for the last UXaweya workshop in 2025. Starts Friday, Oct 7. 9950 LE.
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
