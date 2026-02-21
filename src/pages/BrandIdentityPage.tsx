import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Check,
  Palette,
  MessageSquare,
  BookOpen,
  Package,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CalModal from "@/components/CalModal";
import { Link } from "react-router-dom";

const offerings = [
  {
    icon: Palette,
    title: "Logo & Visual Identity",
    description:
      "Distinctive logos and visual systems that capture your brand essence. We create marks that work across every touchpoint—digital, print, and physical.",
  },
  {
    icon: Sparkles,
    title: "Brand Strategy",
    description:
      "Clarify your positioning, audience, and personality. We help you define what your brand stands for and how it shows up in the world.",
  },
  {
    icon: BookOpen,
    title: "Brand Guidelines",
    description:
      "Comprehensive style guides so your team and partners apply the brand consistently. Typography, color, tone, and usage rules in one place.",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description:
      "Shelf-ready packaging that tells your story and stands out. From structure to graphics, we design for unboxing and retail presence.",
  },
  {
    icon: MessageSquare,
    title: "Brand Messaging",
    description:
      "Taglines, value propositions, and voice guidelines that make your brand recognizable and memorable in every piece of copy.",
  },
];

const deliverables = [
  "Logo lockups and variations",
  "Color palette and typography",
  "Iconography and graphic elements",
  "Tone of voice and messaging framework",
  "Application examples (web, print, social)",
  "Brand book or guidelines document",
];

const processSteps = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description:
      "We learn your business, audience, and goals so the brand is built on a clear strategic foundation.",
  },
  {
    step: 2,
    title: "Concept & Direction",
    description:
      "We explore visual and verbal directions and align on a direction before going into full design.",
  },
  {
    step: 3,
    title: "Design & Refinement",
    description:
      "We develop the identity system—logo, colors, type, assets—and refine until it feels unmistakably you.",
  },
  {
    step: 4,
    title: "Guidelines & Handoff",
    description:
      "We document everything in a brand guide and hand off files so you can scale the brand with confidence.",
  },
];

const BrandIdentityPage = () => {
  const [isCalOpen, setIsCalOpen] = useState(false);

  return (
    <>
      <CalModal isOpen={isCalOpen} onClose={() => setIsCalOpen(false)} />
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Brand Identity Design
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                A Brand That{" "}
                <span className="font-display italic gradient-text">Stands Out</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From logo to full brand system—we create visual identities and messaging
                that resonate with your audience and scale across every channel.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Button
                  variant="gradient"
                  size="lg"
                  onClick={() => setIsCalOpen(true)}
                  className="group"
                >
                  Start a Brand Project
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Full-Service <span className="font-display italic gradient-text">Brand Building</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Strategy, design, and guidelines in one place—so your brand is clear, consistent, and memorable.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offerings.map((item, index) => (
                <div
                  key={index}
                  className="p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                What You Get
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Deliverables That <span className="font-display italic gradient-text">Scale</span>
              </h2>
              <p className="text-muted-foreground">
                Every brand project is tailored to your scope, but here’s what we typically deliver.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {deliverables.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                How We Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="font-display italic gradient-text">Process</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {processSteps.map((item) => (
                <div key={item.step}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {item.step}
                    </div>
                    <h3 className="font-bold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm pl-14">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-10">
                Why Brands Work With Us
              </h2>
              <ul className="space-y-4">
                {[
                  "Strategy and design under one roof—no handoff gaps.",
                  "Identities built to work everywhere: digital, print, and physical.",
                  "Clear guidelines so your team can own the brand long-term.",
                  "Collaborative process with checkpoints so you stay in the loop.",
                ].map((text, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/0">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Build Your Brand?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let&apos;s talk about your vision and create an identity that turns heads and wins trust.
            </p>
            <Button
              variant="gradient"
              size="lg"
              onClick={() => setIsCalOpen(true)}
              className="group"
            >
              Book a Brand Call
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BrandIdentityPage;
