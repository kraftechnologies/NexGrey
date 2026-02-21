import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Check,
  Target,
  BarChart3,
  RefreshCw,
  LayoutGrid,
  Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CalModal from "@/components/CalModal";
import { Link } from "react-router-dom";

const offerings = [
  {
    icon: Target,
    title: "PPC Campaign Management",
    description:
      "Strategic paid search and display campaigns on Google Ads, Microsoft Advertising, and more. We build and optimize for maximum conversions and ROI.",
  },
  {
    icon: Megaphone,
    title: "Social Media Advertising",
    description:
      "Reach your audience on Meta (Facebook & Instagram), LinkedIn, TikTok, and Pinterest with creative, data-driven campaigns that drive engagement and sales.",
  },
  {
    icon: LayoutGrid,
    title: "Programmatic Display",
    description:
      "Automated, audience-based buying across the open web. Scale reach and retargeting with precision targeting and real-time optimization.",
  },
  {
    icon: RefreshCw,
    title: "Retargeting & Remarketing",
    description:
      "Bring back visitors who didn't convert. We design cross-channel retargeting strategies that recover lost leads and increase overall conversion rates.",
  },
  {
    icon: BarChart3,
    title: "A/B Testing & Optimization",
    description:
      "Continuous testing of creatives, audiences, and landing pages. We use data to improve performance month over month.",
  },
];

const platforms = [
  { name: "Google Ads", tag: "Search, Display, YouTube" },
  { name: "Meta Ads", tag: "Facebook, Instagram" },
  { name: "LinkedIn Ads", tag: "B2B & Professional" },
  { name: "Microsoft Advertising", tag: "Bing, LinkedIn" },
  { name: "TikTok Ads", tag: "Short-form video" },
  { name: "Programmatic", tag: "Display & Video" },
];

const processSteps = [
  { step: 1, title: "Strategy & Audiences", description: "Define goals, audiences, and channel mix." },
  { step: 2, title: "Creative & Landing Pages", description: "Assets and landing experiences that convert." },
  { step: 3, title: "Launch & Scale", description: "Campaign setup, tracking, and initial scaling." },
  { step: 4, title: "Optimize & Report", description: "Ongoing optimization and clear reporting." },
];

const DigitalAdvertisingPage = () => {
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
                Paid Media
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Digital Advertising That{" "}
                <span className="font-display italic gradient-text">Drives ROI</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategic paid campaigns across Google, Meta, LinkedIn, and emerging platforms.
                We optimize for maximum return with data-driven targeting and creative that converts.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Button variant="gradient" size="lg" onClick={() => setIsCalOpen(true)} className="group">
                  Schedule a Strategy Call
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
                Full-Service <span className="font-display italic gradient-text">Paid Media</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From strategy to creative to optimization, we manage your digital advertising end to end.
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
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Platforms We Master
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Google, Meta & Beyond
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {platforms.map((p, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all"
                >
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{p.tag}</p>
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

        {/* Why Choose Us - short list */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-10">
                Why Brands Choose Us
              </h2>
              <ul className="space-y-4">
                {[
                  "Transparent reporting and clear attribution",
                  "Dedicated strategist and hands-on optimization",
                  "Creative and landing page support when needed",
                  "Flexible engagement: project-based or ongoing",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
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
              Ready to Scale Your Paid Media?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your goals and build a digital advertising strategy that delivers.
            </p>
            <Button variant="gradient" size="lg" onClick={() => setIsCalOpen(true)} className="group">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DigitalAdvertisingPage;
