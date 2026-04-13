import { useState, useEffect } from "react";
import { Clock, Flame } from "lucide-react";

const EARLY_BIRD_DEADLINE = new Date("2026-04-16T23:59:59").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft | null {
  const diff = EARLY_BIRD_DEADLINE - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function useIsEarlyBird() {
  const [isEarlyBird, setIsEarlyBird] = useState(() => Date.now() < EARLY_BIRD_DEADLINE);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsEarlyBird(Date.now() < EARLY_BIRD_DEADLINE);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return isEarlyBird;
}

const EarlyBirdCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  return (
    <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-3">
        <Flame className="w-5 h-5 text-accent" />
        <span className="font-semibold text-foreground text-sm">Early Bird Offer Ends In</span>
      </div>
      <div className="flex gap-3">
        {units.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <div className="bg-primary text-primary-foreground font-bold text-xl md:text-2xl w-14 h-14 rounded-xl flex items-center justify-center shadow-md">
              {String(unit.value).padStart(2, "0")}
            </div>
            <span className="text-xs text-muted-foreground mt-1">{unit.label}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
        <Clock className="w-3 h-3" />
        Expires Thursday, April 16 at midnight
      </p>
    </div>
  );
};

export default EarlyBirdCountdown;
