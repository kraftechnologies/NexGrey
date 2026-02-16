import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Growth",
    category: "Growth Marketing",
    description: "Increased sales by 250% through data-driven marketing strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    results: [
      { metric: "250%", label: "Revenue Growth" },
      { metric: "45K", label: "New Customers" },
      { metric: "3.2x", label: "ROAS" },
    ],
  },
  {
    id: 2,
    title: "SaaS Product Launch",
    category: "Digital Advertising",
    description: "Successful product launch reaching 50K+ signups in 3 months",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
    results: [
      { metric: "50K", label: "Signups" },
      { metric: "$2.5M", label: "ARR" },
      { metric: "15%", label: "Conversion Rate" },
    ],
  },
  {
    id: 3,
    title: "Brand Reposition",
    category: "Brand Identity",
    description: "Complete brand overhaul increasing market perception and brand value",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
    results: [
      { metric: "180%", label: "Brand Lift" },
      { metric: "2x", label: "Website Traffic" },
      { metric: "92%", label: "Brand Recall" },
    ],
  },
  {
    id: 4,
    title: "SEO Domination",
    category: "SEO & Content",
    description: "Ranked #1 for 50+ high-value keywords in competitive market",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=500&h=300&fit=crop",
    results: [
      { metric: "50+", label: "Top Rankings" },
      { metric: "300%", label: "Organic Traffic" },
      { metric: "$5M+", label: "ARR from SEO" },
    ],
  },
];

const CaseStudiesPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
              <p className="text-xl text-muted-foreground">
                Discover how we've transformed businesses through strategic marketing and innovative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <span className="text-sm font-semibold text-primary uppercase">{study.category}</span>
                    <h3 className="text-2xl font-bold mt-3 mb-2">{study.title}</h3>
                    <p className="text-muted-foreground mb-6">{study.description}</p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-xl font-bold text-primary">{result.metric}</div>
                          <div className="text-sm text-muted-foreground">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full mt-6 group/btn">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to be our next success story?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can transform your business with data-driven strategies.
              </p>
              <Button variant="gradient" size="lg">
                Start Your Project
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

export default CaseStudiesPage;
