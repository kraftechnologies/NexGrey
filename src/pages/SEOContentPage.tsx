import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Check,
  Search,
  FileText,
  Link2,
  Globe2,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CalModal from "@/components/CalModal";
import { Link } from "react-router-dom";

const seoOfferings = [
  {
    icon: Search,
    title: "Technical SEO & Site Health",
    description:
      "Comprehensive audits to fix crawl issues, improve site speed, and ensure your website is easy for search engines to understand.",
  },
  {
    icon: BarChart3,
    title: "Keyword Research & Strategy",
    description:
      "Deep keyword research mapped to your customer journey, prioritized by intent, difficulty, and revenue opportunity.",
  },
  {
    icon: FileText,
    title: "Content Strategy & Calendars",
    description:
      "SEO-led content roadmaps that align topics, formats, and publishing cadence with your business goals.",
  },
  {
    icon: FileText,
    title: "SEO Content Production",
    description:
      "High-quality blog posts, landing pages, and resources written to rank in search and resonate with real humans.",
  },
  {
    icon: Link2,
    title: "Link Building & Digital PR",
    description:
      "Authority-building campaigns that earn relevant, trustworthy backlinks through content partnerships and PR.",
  },
  {
    icon: Globe2,
    title: "Local & International SEO",
    description:
      "Optimize for local intent, multi-location, and global audiences with tailored on-page and off-page strategies.",
  },
];

const contentTypes = [
  "Blog articles & thought leadership",
  "SEO-optimized landing pages",
  "Product & feature pages",
  "Resource hubs & guides",
  "Email nurture content",
  "Case studies & success stories",
];

const seoProcess = [
  {
    step: 1,
    title: "Audit & Research",
    description:
      "We analyze your current performance, competitors, and search landscape to uncover quick wins and long-term opportunities.",
  },
  {
    step: 2,
    title: "Strategy & Roadmap",
    description:
      "We define priorities, timelines, and KPIs across technical SEO, content, and authority so everyone is aligned.",
  },
  {
    step: 3,
    title: "Implementation",
    description:
      "We collaborate with your team (or handle execution) to implement technical fixes and publish SEO-driven content.",
  },
  {
    step: 4,
    title: "Measure & Iterate",
    description:
      "We track rankings, traffic, and conversions, then iterate based on what’s working—compounding gains over time.",
  },
];

const SEOContentPage = () => {
  const [isCalOpen, setIsCalOpen] = useState(false);

  return (
    <>
      <CalModal isOpen={isCalOpen} onClose={() => setIsCalOpen(false)} />
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                SEO & Content Marketing
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                SEO & Content That{" "}
                <span className="font-display italic gradient-text">
                  Compounds Over Time
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We blend technical SEO, content strategy, and storytelling to
                help your brand win in search and build an organic growth
                engine that keeps paying off.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Button
                  variant="gradient"
                  size="lg"
                  onClick={() => setIsCalOpen(true)}
                  className="group"
                >
                  Request an SEO Audit
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Full-Funnel{" "}
                <span className="font-display italic gradient-text">
                  SEO & Content
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From technical foundations to content that ranks and converts,
                we cover every layer of modern SEO.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoOfferings.map((item, index) => (
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

        {/* Content Types */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Content Engine
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Content That Serves Search{" "}
                <span className="font-display italic gradient-text">
                  and People
                </span>
              </h2>
              <p className="text-muted-foreground">
                We create content that answers real questions, reflects your
                expertise, and is structured to win in search results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {contentTypes.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
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
                Our <span className="font-display italic gradient-text">SEO</span>{" "}
                Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {seoProcess.map((item) => (
                <div key={item.step}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {item.step}
                    </div>
                    <h3 className="font-bold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm pl-14">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Works */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-10">
                Why Our SEO & Content Programs Work
              </h2>
              <ul className="space-y-4">
                {[
                  "We balance quick wins with long-term, compounding growth.",
                  "We treat content as a product, not just blog posts.",
                  "We integrate closely with your product, marketing, and sales teams.",
                  "We report on the metrics that matter: pipeline, revenue, and retention.",
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
              Ready to Grow Your Organic Traffic?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let&apos;s build an SEO and content program that compounds month
              after month.
            </p>
            <Button
              variant="gradient"
              size="lg"
              onClick={() => setIsCalOpen(true)}
              className="group"
            >
              Talk to Our SEO Team
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SEOContentPage;

