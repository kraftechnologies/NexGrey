import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating Shapes */}
        <div className="absolute top-1/3 left-1/4 w-20 h-20 border border-primary/30 rounded-2xl rotate-12 animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border border-secondary/30 rounded-full animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Now Onboarding Strategic Partners for 2026</span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-up text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            We Build{" "}
            <span className="font-display italic gradient-text">Digital</span>
            <br />
            <span className="gradient-text-reverse">Experiences</span>{" "}
            That
            <br />
            <span className="relative inline-block">
              Convert
              <svg
                className="absolute -bottom-2 left-0 w-full h-4 text-primary"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 Q50,0 100,8 T200,8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delayed text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-balance">
            NexGrey is an AI-augmented digital collective. We fuse human intuition with machine precision to transform ambitious brands into market leaders through high-velocity creativity and predictive data.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" className="group">
              Start Your Evolution
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Play className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              Watch Our Reel
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12" style={{ animationDelay: "0.6s" }}>
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "5+", label: "Industry Awards" },
              { value: "₹150+", label: "Revenue Generated" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
