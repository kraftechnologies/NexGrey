import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Check,
  TrendingUp,
  Target,
  BarChart3,
  Repeat,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CalModal from "@/components/CalModal";

const growthPillars = [
  {
    icon: Target,
    title: "Acquisition Precision",
    description:
      "We identify high-intent audiences and deploy targeted campaigns across paid, organic, and partnership channels.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Acceleration",
    description:
      "Landing pages, offers, and messaging are continuously optimized to maximize conversion efficiency.",
  },
  {
    icon: Repeat,
    title: "Retention & Expansion",
    description:
      "Lifecycle automation and behavioral segmentation strategies increase lifetime value and repeat revenue.",
  },
  {
    icon: BarChart3,
    title: "Revenue Intelligence",
    description:
      "Advanced analytics frameworks connect marketing performance directly to pipeline and revenue impact.",
  },
];

const experimentSteps = [
  {
    step: "01",
    title: "Hypothesis",
    description:
      "We define measurable hypotheses based on real data and customer behavior insights.",
  },
  {
    step: "02",
    title: "Test",
    description:
      "Campaigns, creatives, and funnel elements are deployed in controlled experiments.",
  },
  {
    step: "03",
    title: "Analyze",
    description:
      "Performance is evaluated against KPIs to determine statistical impact.",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "Winning strategies are scaled and automated to drive compounding growth.",
  },
];

const GrowthMarketingPage = () => {
  const [isCalOpen, setIsCalOpen] = useState(false);

  return (
    <>
      <CalModal isOpen={isCalOpen} onClose={() => setIsCalOpen(false)} />
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Split Hero */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Growth Marketing
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Build a Predictable{" "}
                <span className="font-display italic gradient-text">
                  Revenue Engine
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Growth marketing is about more than campaigns — it’s about
                designing scalable systems that consistently generate,
                convert, and retain customers across every stage of the funnel.
              </p>
              <Button
                variant="gradient"
                size="lg"
                onClick={() => setIsCalOpen(true)}
                className="group"
              >
                Start Growing Smarter
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats Panel */}
            <div className="bg-card border border-border rounded-3xl p-10 space-y-8 shadow-sm">
              <div>
                <h3 className="text-3xl font-bold text-primary">3X+</h3>
                <p className="text-muted-foreground text-sm">
                  Average increase in conversion performance
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">40%</h3>
                <p className="text-muted-foreground text-sm">
                  Reduction in acquisition costs through optimization
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">2X</h3>
                <p className="text-muted-foreground text-sm">
                  Improvement in customer lifetime value
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy Pillars */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Growth{" "}
                <span className="font-display italic gradient-text">
                  Pillars
                </span>
              </h2>
              <p className="text-muted-foreground">
                Every initiative is structured around scalable systems that
                increase revenue efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {growthPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-8 bg-card border border-border rounded-3xl hover:border-primary/50 transition"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiment Loop */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Continuous Experimentation Framework
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Growth happens through structured testing cycles — not guesswork.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {experimentSteps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">
              What Makes Our Growth Marketing Different
            </h2>
            <ul className="space-y-5">
              {[
                "We focus on measurable revenue impact — not vanity metrics.",
                "We align marketing, product, and sales for unified performance.",
                "We prioritize scalable systems over one-off tactics.",
                "We continuously optimize based on real behavioral data.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Unlock Sustainable Growth?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let’s build a growth system that continuously increases revenue,
              efficiency, and customer lifetime value.
            </p>
            <Button
              variant="gradient"
              size="lg"
              onClick={() => setIsCalOpen(true)}
              className="group"
            >
              Talk to Our Growth Experts
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GrowthMarketingPage;