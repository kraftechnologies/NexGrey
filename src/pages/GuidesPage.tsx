import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const guides = [
  {
    id: 1,
    title: "The Ultimate SEO Guide 2024",
    description: "Complete guide to ranking higher on Google with proven strategies and tactics.",
    category: "SEO",
    pages: "45 pages",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Digital Advertising Playbook",
    description: "Master Google Ads, Meta Ads, and emerging platforms for maximum ROI.",
    category: "Advertising",
    pages: "38 pages",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Content Marketing Strategy Guide",
    description: "How to plan, create, and distribute content that drives results.",
    category: "Content",
    pages: "52 pages",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "Brand Building Essentials",
    description: "Step-by-step guide to creating a memorable and valuable brand.",
    category: "Branding",
    pages: "41 pages",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=250&fit=crop",
  },
  {
    id: 5,
    title: "Growth Marketing Framework",
    description: "Proven strategies to accelerate business growth from startup to scale.",
    category: "Growth",
    pages: "48 pages",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
  },
  {
    id: 6,
    title: "Analytics & Measurement Guide",
    description: "Track what matters and optimize your marketing for better results.",
    category: "Analytics",
    pages: "36 pages",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=250&fit=crop",
  },
];

const GuidesPage = () => {
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Free Marketing Guides</h1>
              <p className="text-xl text-muted-foreground">
                Download our comprehensive guides and take your marketing to the next level.
              </p>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide) => (
                <div key={guide.id} className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-sm font-semibold text-primary mb-2">{guide.category}</span>
                    <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                    <p className="text-muted-foreground flex-1 mb-4">{guide.description}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">{guide.pages}</span>
                      <Button variant="ghost" size="sm" className="group/btn">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                        <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Download */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything You Need to Know</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Expert Insights", description: "Learn from industry experts and proven strategies" },
                { title: "Actionable Steps", description: "Easy-to-follow frameworks you can implement immediately" },
                { title: "Real Examples", description: "Case studies and examples from successful campaigns" },
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to level up your marketing?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Download all guides and start implementing proven strategies today.
              </p>
              <Button variant="gradient" size="lg">
                Get All Guides
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

export default GuidesPage;
