import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Zap, Target, TrendingUp, Palette, Code, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CalModal from "@/components/CalModal";

const services = [
  {
    icon: Target,
    title: "Digital Advertising",
    description: "Strategic paid media campaigns across Google, Meta, LinkedIn, and emerging platforms. We optimize for maximum ROI with data-driven targeting.",
    features: ["PPC Campaign Management", "Social Media Advertising", "Programmatic Display", "Retargeting Strategies", "A/B Testing & Optimization"],
    color: "primary",
  },
  {
    icon: TrendingUp,
    title: "SEO & Content Marketing",
    description: "Dominate search rankings with our comprehensive SEO strategies and compelling content that drives organic growth and engagement.",
    features: ["Technical SEO Audits", "Keyword Research & Strategy", "Content Creation & Optimization", "Link Building", "Local SEO"],
    color: "secondary",
  },
  {
    icon: Palette,
    title: "Brand Identity Design",
    description: "Create a memorable brand that resonates with your audience. From logo design to complete brand guidelines.",
    features: ["Logo & Visual Identity", "Brand Strategy", "Brand Guidelines", "Packaging Design", "Brand Messaging"],
    color: "primary",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "High-performance, responsive websites that convert visitors into customers. Built with the latest technologies.",
    features: ["Custom Website Design", "E-commerce Development", "Web Applications", "CMS Integration", "Performance Optimization"],
    color: "secondary",
  },
  {
    icon: Zap,
    title: "Growth Marketing",
    description: "Full-funnel marketing strategies that accelerate your business growth through data-driven experimentation.",
    features: ["Growth Strategy", "Conversion Optimization", "Marketing Automation", "Email Marketing", "Customer Journey Mapping"],
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Transform data into actionable insights with custom dashboards and comprehensive tracking solutions.",
    features: ["Custom Dashboard Creation", "Data Analysis & Reporting", "Attribution Modeling", "User Behavior Analytics", "KPI Tracking"],
    color: "secondary",
  },
];

const ServicesPage = () => {
  const [isCalOpen, setIsCalOpen] = useState(false);

  return (
    <>
      <CalModal isOpen={isCalOpen} onClose={() => setIsCalOpen(false)} />
      <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with{" "}
              <span className="font-display italic gradient-text">Expert Marketing</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive digital marketing solutions tailored to your unique business needs. 
              From strategy to execution, we're your partner in growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  service.color === "primary" 
                    ? "bg-primary/10 text-primary" 
                    : "bg-secondary/10 text-secondary"
                }`}>
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {service.title === "Digital Advertising" ? (
                  <Button variant="ghost" className="group/btn" asChild>
                    <Link
                      to="/services/digital-advertising"
                      className="flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                ) : service.title === "SEO & Content Marketing" ? (
                  <Button variant="ghost" className="group/btn" asChild>
                    <Link
                      to="/services/seo-content"
                      className="flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                ) : service.title === "Brand Identity Design" ? (
                  <Button variant="ghost" className="group/btn" asChild>
                    <Link
                      to="/services/brand-identity"
                      className="flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                ) : service.title === "Web Development" ? (
                  <Button variant="ghost" className="group/btn" asChild>
                    <Link
                      to="/services/web-development"
                      className="flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                ) : service.title === "Growth Marketing" ? (
                  <Button variant="ghost" className="group/btn" asChild>
                    <Link
                      to="/services/growth-marketing"
                      className="flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                ) : service.title === "Analytics & Insights" ? (
                  <Button variant="ghost" className="group/btn" asChild>
                    <Link
                      to="/services/analytics-insights"
                      className="flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                ) : (
                  <Button variant="ghost" className="group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <Button variant="gradient" size="lg" onClick={() => setIsCalOpen(true)}>
            Schedule a Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default ServicesPage;
