import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Calendar, Target, BookOpen, Presentation } from "lucide-react";
const WorkshopSections = () => {
  const sessions = [{
    number: "01",
    title: "AI Usecases in design and research",
    description: "Understand AI usecases in design, research, a11y and UX writing"
  }, {
    number: "02",
    title: "Define the challenge",
    description: "Introductions, gather pain points and requirements"
  }, {
    number: "03",
    title: "AI workflow integrated design",
    description: "Integrate AI into the redesigned app and understanding its limitations"
  }, {
    number: "04",
    title: "AI prototyping",
    description: "Test prompts, build flows, validate rapidly"
  }, {
    number: "05",
    title: "Storytelling and presentation",
    description: "Narrative, visuals, delivery"
  }, {
    number: "06",
    title: "Feedback to final",
    description: "Present, iterate, and refine after critique"
  }];
  const skills = ["AI usecases in design and research", "Analytical framing and requirements gathering", "AI integrated workflow design experience", "Prompt design and rapid prototyping with AI tools", "Storytelling, visual communication, and presentation", "Feedback handling and iteration"];
  const deliverables = ["Redesigned application using AI", "Clickable AI-augmented prototype", "Stakeholder-ready presentation deck"];
  const whyJoin = ["Learn something new every session", "Produce portfolio-ready artifacts", "Practical, team-ready workflow you can apply immediately"];
  return <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* What it is */}
        <section className="text-center animate-fade-up">
          <h2 className="text-4xl font-bold mb-6 gradient-text">What it is</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="card-gradient shadow-workshop border-primary/10">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  A 6-session, hands-on workshop to sharpen analysis, reporting, AI prototyping, and presentation skills.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-left">
                    <h4 className="font-semibold mb-2 text-primary">Designed for:</h4>
                    <p className="text-muted-foreground">All levels. Designers, developers, freelancers, PMs. </p>
                  </div>
                  <div className="text-left">
                    
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Who it's for */}
        <section className="animate-fade-up">
          <div className="text-center mb-12">
            
          </div>
          
        </section>

        {/* Schedule and Price */}
        <section className="animate-fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Schedule and Price</h2>
          </div>
          <Card className="card-gradient shadow-workshop border-primary/10 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <Calendar className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">Dates</h4>
                    <p className="text-muted-foreground">Fridays @ 4:00 PM, Oct 7 - Nov 11, 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">Format</h4>
                    <p className="text-muted-foreground">6 sessions + 1 bonus session over 1.5 months</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 text-primary font-bold text-xl">LE</div>
                  <div>
                    <h4 className="font-semibold">Price</h4>
                    <p className="text-2xl font-bold text-primary">9950 LE</p>
                  </div>
                </div>
                <Badge variant="outline" className="w-fit border-primary/20 text-primary">
                  Limited seats to ensure quality feedback
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What you'll learn and ship */}
        <section className="animate-fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 gradient-text">What you'll learn and ship</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="card-gradient shadow-workshop border-primary/10">
              <CardHeader>
                <CardTitle>A-to-Z Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI usecases in design and research → AI UX design patterns → AI prototyping → Storytelling → Iteration
                </p>
              </CardContent>
            </Card>
            <Card className="card-gradient shadow-workshop border-primary/10">
              <CardHeader>
                <CardTitle>Deliverables</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {deliverables.map((item, index) => <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              <strong>Tools:</strong> Lovable, V0, Figma/Make, or your preferred "vibe coding" tool
            </p>
          </div>
        </section>

        {/* Session outline */}
        <section className="animate-fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Session outline</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session, index) => <Card key={index} className="card-gradient shadow-workshop border-primary/10 hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {session.number}
                    </div>
                    <CardTitle className="text-lg">{session.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{session.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Skills you'll gain */}
        <section className="animate-fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Skills you'll gain</h2>
          </div>
          <Card className="card-gradient shadow-workshop border-primary/10 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <ul className="grid md:grid-cols-2 gap-4">
                {skills.map((skill, index) => <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{skill}</span>
                  </li>)}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Why join */}
        <section className="animate-fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Why join</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whyJoin.map((reason, index) => <Card key={index} className="card-gradient shadow-workshop border-primary/10 text-center">
                <CardContent className="p-6">
                  <Presentation className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">{reason}</p>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* About the instructor */}
        <section className="animate-fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 gradient-text">About the instructor</h2>
          </div>
          <Card className="card-gradient shadow-workshop border-primary/10 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6 border border-primary/10">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Presentation className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Video coming soon</p>
                </div>
              </div>
              <p className="text-muted-foreground text-center">
                Instructor bio and details will be added here. Learn more about the experience and expertise behind this workshop.
              </p>
            </CardContent>
          </Card>
        </section>


        {/* Final CTA */}
        <section className="text-center animate-fade-up">
          <Card className="hero-gradient shadow-glow border-0 max-w-2xl mx-auto">
            <CardContent className="p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to level up?</h2>
              <p className="text-lg mb-6 text-white/90">Secure your seat for the last UXaweya workshop in 2025. Starts Friday, Oct 7. 9950 LE.</p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 animate-pulse-soft" onClick={() => window.open('https://forms.gle/j7izo5Doi75L6kne9', '_blank')}>
                Fill the form to enroll
              </Button>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>;
};
export default WorkshopSections;