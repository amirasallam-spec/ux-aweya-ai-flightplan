interface DecorativeElementsProps {
  variant?: "left" | "right" | "scattered";
  className?: string;
}

const DecorativeElements = ({ variant = "right", className = "" }: DecorativeElementsProps) => {
  if (variant === "left") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Brush strokes on left */}
        <div className="absolute top-1/4 -left-12 w-48 h-6 bg-accent/20 rounded-full rotate-[25deg]" />
        <div className="absolute top-1/2 -left-8 w-64 h-4 bg-accent/15 rounded-full rotate-[20deg]" />
        <div className="absolute bottom-1/4 -left-16 w-40 h-5 bg-accent/25 rounded-full rotate-[30deg]" />
        
        {/* Plus signs */}
        <div className="absolute top-16 left-12 text-accent/40 text-2xl font-light">+</div>
        <div className="absolute bottom-20 left-24 text-accent/30 text-xl font-light">+</div>
      </div>
    );
  }

  if (variant === "scattered") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Plus signs scattered */}
        <div className="absolute top-8 right-1/4 text-accent/40 text-3xl font-light">+</div>
        <div className="absolute top-20 left-1/3 text-accent/25 text-xl font-light">+</div>
        <div className="absolute bottom-16 right-16 text-accent/35 text-2xl font-light">+</div>
        <div className="absolute bottom-1/3 left-16 text-accent/20 text-xl font-light">+</div>
        
        {/* Small brush accents */}
        <div className="absolute top-1/2 right-8 w-24 h-3 bg-accent/15 rounded-full rotate-[-15deg]" />
        <div className="absolute bottom-1/4 left-8 w-20 h-3 bg-accent/10 rounded-full rotate-[20deg]" />
      </div>
    );
  }

  // Default: right variant
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Brush strokes on right */}
      <div className="absolute top-1/4 -right-12 w-48 h-6 bg-accent/20 rounded-full rotate-[-25deg]" />
      <div className="absolute top-1/2 -right-8 w-64 h-4 bg-accent/15 rounded-full rotate-[-20deg]" />
      <div className="absolute bottom-1/4 -right-16 w-40 h-5 bg-accent/25 rounded-full rotate-[-30deg]" />
      
      {/* Plus signs */}
      <div className="absolute top-16 right-12 text-accent/40 text-2xl font-light">+</div>
      <div className="absolute bottom-20 right-24 text-accent/30 text-xl font-light">+</div>
    </div>
  );
};

export default DecorativeElements;
