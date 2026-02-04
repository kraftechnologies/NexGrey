import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Nexgro transformed our online presence completely. Their strategic approach to digital marketing helped us achieve a 400% increase in qualified leads within just 6 months.",
    author: "Sarah Chen",
    role: "CMO, TechFlow Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    id: 2,
    content: "Working with Nexgro has been a game-changer for our e-commerce business. Their data-driven strategies and creative campaigns have consistently exceeded our expectations.",
    author: "Michael Roberts",
    role: "Founder, Luxe Fashion",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
  },
  {
    id: 3,
    content: "The team at Nexgro doesn't just deliver campaigns—they deliver results. Our brand awareness tripled, and we've seen unprecedented growth in our target markets.",
    author: "Emily Watson",
    role: "CEO, GreenEnergy Co.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-transparent to-muted/50" />
      
      {/* Decorative Quote */}
      <div className="absolute top-20 left-20 opacity-5">
        <Quote className="w-48 h-48" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Loved by{" "}
            <span className="font-display italic gradient-text">Industry Leaders</span>
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Content */}
            <div className="text-center">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-700 ${
                    index === activeIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 absolute inset-0 translate-y-8 pointer-events-none"
                  }`}
                >
                  {/* Quote */}
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-10 text-balance">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="text-left">
                      <div className="font-bold text-lg">{testimonial.author}</div>
                      <div className="text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={goToPrev}
                className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveIndex(index);
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      index === activeIndex
                        ? "w-8 h-2 bg-primary"
                        : "w-2 h-2 bg-border hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="mt-24">
          <p className="text-center text-muted-foreground mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            {["Google", "Meta", "Shopify", "Stripe", "Slack", "Notion"].map((company) => (
              <div key={company} className="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
