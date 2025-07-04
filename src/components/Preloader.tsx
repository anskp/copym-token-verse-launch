import { useEffect, useState } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="glow-orb absolute top-1/4 left-1/4 w-32 h-32 opacity-30" />
        <div className="glow-orb absolute top-3/4 right-1/4 w-24 h-24 opacity-20" style={{ animationDelay: "2s" }} />
        <div className="glow-orb absolute bottom-1/4 left-3/4 w-40 h-40 opacity-25" style={{ animationDelay: "4s" }} />
      </div>

      {/* Logo and loading content */}
      <div className="relative z-10 text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">
            COPYm
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            Tokenizing Reality...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-80 mx-auto">
          <div className="w-full bg-muted rounded-full h-1 overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;