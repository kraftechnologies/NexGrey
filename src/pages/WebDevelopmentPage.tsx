import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Check,
  Code2,
  Layout,
  Smartphone,
  Database,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CalModal from "@/components/CalModal";

const coreFeatures = [
  "Performance-optimized architecture",
  "Conversion-focused UX design",
  "SEO-ready technical structure",
  "Scalable & modular codebase",
];

const techCapabilities = [
  {
    icon: Code2,
    title: "Modern Frontend Development",
    description:
      "Clean, scalable interfaces built with modern frameworks and performance-first architecture.",
  },
  {
    icon: Database,
    title: "Backend & CMS Solutions",
    description:
      "Flexible CMS and backend systems designed for easy management and future scalability.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description:
      "Fully responsive layouts that deliver seamless experiences across every screen size.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Stability",
    description:
      "Robust security layers, regular maintenance, and performance monitoring.",
  },
];

const developmentStages = [
  {
    title: "Strategic Planning",
    description:
      "We define technical architecture, user flows, and marketing alignment before writing a single line of code.",
  },
  {
    title: "UX & Interface Design",
    description:
      "High-converting interfaces designed with clarity, usability, and brand identity in mind.",
  },
  {
    title: "Agile Development",
    description:
      "Iterative builds with clean code, performance testing, and cross-device optimization.",
  },
  {
    title: "Launch & Scale",
    description:
      "Deployment, analytics setup, optimization, and ongoing performance refinement.",
  },
];

const WebDevelopmentPage = () => {
  const [isCalOpen, setIsCalOpen] = useState(false);

  return (
    <>
      <CalModal isOpen={isCalOpen} onClose={() => setIsCalOpen(false)} />
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Web Development
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Websites Built for{" "}
              <span className="font-display italic gradient-text">
                Growth & Performance
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              We design and develop high-performing digital experiences that
              power your marketing, strengthen your brand, and convert visitors
              into customers.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="gradient"
                size="lg"
                onClick={() => setIsCalOpen(true)}
                className="group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Feature Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-sm">
              {coreFeatures.map((item, index) => (
                <div key={index} className="flex items-center gap-2 justify-center">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                More Than Just{" "}
                <span className="font-display italic gradient-text">
                  A Website
                </span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Your website is your digital foundation. We build platforms
                engineered for speed, scalability, and seamless marketing
                integration.
              </p>
              <ul className="space-y-4">
                {[
                  "Designed to support paid and organic traffic campaigns",
                  "Built with clean, maintainable code standards",
                  "Optimized for search engine indexing and performance",
                  "Structured for long-term scalability and integrations",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-3xl p-10 shadow-sm">
              <Rocket className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">
                Built to Drive Measurable Results
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We align design, development, and marketing strategy to ensure
                your website not only looks exceptional but actively contributes
                to revenue growth and business scalability.
              </p>
            </div>
          </div>
        </section>

        {/* Technology & Capabilities */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Technical Capabilities
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Modern tools and frameworks that support performance,
                flexibility, and security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {techCapabilities.map((item, index) => (
                <div
                  key={index}
                  className="p-8 bg-card border border-border rounded-3xl hover:border-primary/50 transition"
                >
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Workflow */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Development Workflow
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {developmentStages.map((stage, index) => (
                <div key={index}>
                  <div className="text-primary font-bold text-4xl mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="font-bold mb-2">{stage.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Digital Presence?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let’s build a powerful, performance-driven website that supports
              your marketing and scales with your business.
            </p>
            <Button
              variant="gradient"
              size="lg"
              onClick={() => setIsCalOpen(true)}
              className="group"
            >
              Talk to Our Web Team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default WebDevelopmentPage;