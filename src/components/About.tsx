import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Data-driven strategies that deliver measurable results",
  "Dedicated team of 50+ marketing specialists",
  "Transparent reporting and real-time analytics",
  "Flexible engagement models to fit your needs",
  "Proven track record across 20+ industries",
  "24/7 support and continuous optimization",
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Why Choose Nexgro
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              We're Not Just an{" "}
              <span className="font-display italic gradient-text">Agency</span>,
              <br />
              We're Your Growth Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Since 2018, Nexgro has been at the forefront of digital innovation, 
              helping brands navigate the ever-evolving digital landscape. Our approach 
              combines creative excellence with technical precision to deliver campaigns 
              that not only look stunning but drive real business results.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary transition-colors duration-300">
                    <Check className="w-3 h-3 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button variant="gradient" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Image Card */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-primary to-secondary"
                        />
                      ))}
                    </div>
                    <div>
                      <div className="font-semibold">50+ Experts</div>
                      <div className="text-sm text-muted-foreground">Ready to help you grow</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -top-6 -right-6 glass rounded-xl p-6 shadow-xl animate-float">
              <div className="text-3xl font-bold gradient-text mb-1">6+ Years</div>
              <div className="text-sm text-muted-foreground">Industry Experience</div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl border border-primary/30 -z-10" />
            <div className="absolute top-1/2 -right-8 w-16 h-16 rounded-full bg-secondary/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
