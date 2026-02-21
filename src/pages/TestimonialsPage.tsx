import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonialsStats = [
  { number: "50+", label: "Happy Clients" },
  { number: "100+", label: "Projects Delivered" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "10+", label: "Industries Served" },
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[2fr,1.2fr] items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Testimonials
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Stories from{" "}
                <span className="font-display italic gradient-text">
                  Brands We&apos;ve Grown
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                See how Nexgrey helps ambitious teams unlock growth through
                performance-driven marketing, creative storytelling, and
                high-converting digital experiences.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-primary"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Rated <span className="font-semibold text-foreground">4.9/5</span> by
                  marketing leaders worldwide
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="gradient" size="lg">
                  <a href="/contact" className="flex items-center">
                    Book a Strategy Call
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/case-studies">View Case Studies</a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {testimonialsStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 flex flex-col justify-between"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Testimonials Section (reuses homepage component) */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to become our next success story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s build campaigns that your customers love and your
              competitors can&apos;t ignore.
            </p>
            <Button asChild variant="gradient" size="lg" className="group">
              <a href="/contact" className="flex items-center">
                Talk to Our Team
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;

