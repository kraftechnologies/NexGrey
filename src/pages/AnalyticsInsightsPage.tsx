import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  BarChart3,
  PieChart,
  Database,
  LineChart,
  Activity,
  Layers,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CalModal from "@/components/CalModal";

const analyticsCategories = [
  {
    icon: BarChart3,
    title: "Marketing Performance Analytics",
    description:
      "Track campaign ROI, channel attribution, and customer acquisition costs with full visibility across platforms.",
  },
  {
    icon: LineChart,
    title: "Revenue & Funnel Analytics",
    description:
      "Understand conversion rates, drop-off points, and pipeline performance across every stage of your funnel.",
  },
  {
    icon: PieChart,
    title: "Customer Behavior Insights",
    description:
      "Analyze user journeys, engagement metrics, and behavioral segmentation to refine targeting and messaging.",
  },
];

const reportingCapabilities = [
  {
    icon: Database,
    title: "Data Integration & Tracking",
    description:
      "Implementation of advanced tracking systems, event measurement, and clean data architecture.",
  },
  {
    icon: Layers,
    title: "Custom Dashboard Creation",
    description:
      "Executive-ready dashboards designed to surface the metrics that actually drive business decisions.",
  },
  {
    icon: Activity,
    title: "Predictive Insights",
    description:
      "Trend forecasting and performance modeling to support proactive marketing strategies.",
  },
];

const AnalyticsInsightsPage = () => {
  const [isCalOpen, setIsCalOpen] = useState(false);

  return (
    <>
      <CalModal isOpen={isCalOpen} onClose={() => setIsCalOpen(false)} />
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero - Split Layout */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Analytics & Data Strategy
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Turn Data Into{" "}
                <span className="font-display italic gradient-text">
                  Strategic Advantage
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We help businesses move beyond surface-level metrics by
                building analytics systems that uncover insights, optimize
                performance, and directly connect marketing to revenue.
              </p>
              <Button
                variant="gradient"
                size="lg"
                onClick={() => setIsCalOpen(true)}
                className="group"
              >
                Build Your Analytics Framework
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="bg-card border border-border rounded-3xl p-10 shadow-sm">
              <h3 className="text-xl font-bold mb-6">
                What Strong Analytics Unlocks
              </h3>
              <ul className="space-y-4 text-sm">
                {[
                  "Clear attribution across marketing channels",
                  "Improved campaign efficiency and ROI",
                  "Better budget allocation decisions",
                  "Real-time performance monitoring",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Analytics Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive{" "}
                <span className="font-display italic gradient-text">
                  Data Visibility
                </span>
              </h2>
              <p className="text-muted-foreground">
                We structure your analytics around business impact — not vanity
                dashboards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {analyticsCategories.map((item, index) => (
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

        {/* Data Infrastructure */}
        <section className="py-20">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-card border border-border rounded-3xl p-10 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">
                Data Infrastructure & Accuracy
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Reliable decisions require clean, structured, and accurate data.
                We implement advanced tracking systems and ensure your
                measurement infrastructure is built correctly from the start.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary mt-1" />
                  Event & goal tracking setup
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary mt-1" />
                  Cross-platform attribution modeling
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary mt-1" />
                  Data validation & quality audits
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Clean Data Drives Confident Decisions
              </h2>
              <p className="text-muted-foreground">
                From technical tracking implementation to executive-level
                dashboards, we ensure your team always knows what’s working,
                what needs improvement, and where to invest next.
              </p>
            </div>
          </div>
        </section>

        {/* Reporting & Intelligence */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Reporting & Business Intelligence
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reportingCapabilities.map((item, index) => (
                <div
                  key={index}
                  className="p-8 bg-card border border-border rounded-3xl"
                >
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
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
              Ready to Make Data Your Competitive Edge?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let’s build a robust analytics system that delivers clarity,
              confidence, and measurable growth.
            </p>
            <Button
              variant="gradient"
              size="lg"
              onClick={() => setIsCalOpen(true)}
              className="group"
            >
              Talk to Our Analytics Team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AnalyticsInsightsPage;