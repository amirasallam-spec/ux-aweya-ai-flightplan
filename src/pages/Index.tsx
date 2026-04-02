import { useState } from "react";
import { X, Info } from "lucide-react";
import WorkshopHero from "@/components/WorkshopHero";
import WorkshopSections from "@/components/WorkshopSections";

const Index = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <main className="min-h-screen bg-background">
      {showBanner && (
        <div className="bg-primary text-primary-foreground px-4 py-3 relative">
          <div className="max-w-7xl mx-auto flex items-start gap-3 pr-8">
            <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p className="text-sm">
              We are undergoing major changes in the Workshop content and delivery format to become a hybrid approach (Recorded + Meetings) and made it 10x better. Starting date mid-April. Add your name to the waiting list to get notified quickly when the workshop starts.
            </p>
            <button
              onClick={() => setShowBanner(false)}
              className="absolute top-3 right-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      <WorkshopHero />
      <WorkshopSections />
    </main>
  );
};

export default Index;
