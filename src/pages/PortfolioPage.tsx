import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    title: "Modern E-commerce Redesign",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    description: "A complete redesign of a leading e-commerce platform increasing conversions by 150%.",
  },
  {
    id: 2,
    title: "Digital Marketing Campaign",
    category: "Digital Advertising",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
    description: "Multi-channel campaign reaching 5M+ people with 12% engagement rate.",
  },
  {
    id: 3,
    title: "Brand Identity System",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
    description: "Comprehensive brand guidelines and visual identity for a Fortune 500 company.",
  },
  {
    id: 4,
    title: "Content Marketing Strategy",
    category: "SEO & Content",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=500&h=300&fit=crop",
    description: "Data-driven content strategy generating 2M+ organic monthly visits.",
  },
  {
    id: 5,
    title: "SaaS Dashboard Design",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=300&fit=crop",
    description: "Intuitive analytics dashboard serving 500K+ active users.",
  },
  {
    id: 6,
    title: "Growth Marketing Suite",
    category: "Growth Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    description: "Complete growth platform driving 40% MoM user growth.",
  },
];

const PortfolioPage = () => {
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
              <p className="text-xl text-muted-foreground">
                Explore our best creative work and successful projects across various industries.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <div key={item.id} className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs font-semibold text-primary uppercase">{item.category}</span>
                    <h3 className="text-xl font-bold mt-3 mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>

                    <Button variant="ghost" className="w-full mt-4 group/btn">
                      View Project
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Impressed by our work?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's create something amazing together for your brand.
              </p>
              <Button variant="gradient" size="lg">
                Start a Project
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

export default PortfolioPage;
