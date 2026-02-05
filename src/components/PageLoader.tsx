import { useState, useEffect } from "react";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Hide loader after animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Loader Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo Animation */}
        <div className="relative">
          {/* Rotating Ring */}
          <div className="absolute inset-0 -m-4">
            <svg className="w-32 h-32 animate-spin-slow" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray="70 200"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Logo */}
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse">
            <span className="text-primary-foreground font-bold text-4xl">N</span>
          </div>
        </div>

        {/* Brand Text */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-background tracking-tight">
            NEX<span className="text-primary">GRO</span>
          </h1>
          <p className="text-background/50 text-sm mt-1">Digital Marketing Agency</p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-background/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Loading Text */}
        <div className="flex items-center gap-2 text-background/40 text-sm">
          <span>Loading</span>
          <span className="flex gap-1">
            <span className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
