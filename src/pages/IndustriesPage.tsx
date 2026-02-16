import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CalModal from "@/components/CalModal";

const industries = [
  {
    id: 1,
    name: "E-commerce & Retail",
    description: "Drive online sales with conversion-focused strategies and seamless user experiences.",
    icon: "🛍️",
    clients: "50+ brands",
    results: "Avg. 180% revenue growth",
  },
  {
    id: 2,
    name: "SaaS & Technology",
    description: "Accelerate growth through product-led marketing and strategic positioning.",
    icon: "💻",
    clients: "35+ companies",
    results: "Avg. 250% user growth",
  },
  {
    id: 3,
    name: "Healthcare & Wellness",
    description: "Build trust and authority in highly regulated markets with compliant strategies.",
    icon: "🏥",
    clients: "20+ organizations",
    results: "Avg. 150% lead growth",
  },
  {
    id: 4,
    name: "Real Estate",
    description: "Generate qualified leads and accelerate sales with targeted campaigns.",
    icon: "🏠",
    clients: "25+ agencies",
    results: "Avg. 200% qualified leads",
  },
  {
    id: 5,
    name: "Finance & FinTech",
    description: "Navigate compliance while scaling acquisition and building brand credibility.",
    icon: "💰",
    clients: "18+ firms",
    results: "Avg. $50M+ AUM growth",
  },
  {
    id: 6,
    name: "Education & EdTech",
    description: "Increase enrollment and student engagement through strategic marketing.",
    icon: "📚",
    clients: "22+ institutions",
    results: "Avg. 180% enrollments",
  },
  {
    id: 7,
    name: "Hospitality & Travel",
    description: "Boost bookings and guest experiences with targeted campaigns and loyalty programs.",
    icon: "✈️",
    clients: "30+ brands",
    results: "Avg. 220% bookings",
  },
  {
    id: 8,
    name: "Consumer Goods",
    description: "Build brand love and drive retail distribution through integrated campaigns.",
    icon: "🎯",
    clients: "28+ brands",
    results: "Avg. 190% market share",
  },
];

const IndustriesPage = () => {
  const [isCalOpen, setIsCalOpen] = useState(false);

  return (
    <>
      <CalModal isOpen={isCalOpen} onClose={() => setIsCalOpen(false)} />
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
              <p className="text-xl text-muted-foreground">
                Deep expertise across sectors. Strategic solutions tailored to your industry's unique challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6">
              {industries.map((industry) => (
                <div key={industry.id} className="group bg-card rounded-2xl border border-border p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{industry.icon}</span>
                    <Zap className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
                  <p className="text-muted-foreground mb-6">{industry.description}</p>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                    <div>
                      <div className="text-sm text-muted-foreground">Clients Served</div>
                      <div className="text-lg font-bold text-primary">{industry.clients}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Avg. Results</div>
                      <div className="text-lg font-bold text-primary">{industry.results}</div>
                    </div>
                  </div>

                  <Button variant="ghost" className="w-full mt-6 group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Industry Expertise Matters</h2>
              <p className="text-xl text-muted-foreground">
                We don't just know marketing—we understand your industry's nuances, regulations, and opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Domain Knowledge", description: "Years of experience in your industry" },
                { title: "Compliance & Regulations", description: "Navigate industry-specific requirements" },
                { title: "Competitive Insights", description: "Deep understanding of your landscape" },
              ].map((item, idx) => (
                <div key={idx} className="bg-card border border-border rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to transform your industry presence?</h2>
              <Button variant="gradient" size="lg" onClick={() => setIsCalOpen(true)}>
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default IndustriesPage;
