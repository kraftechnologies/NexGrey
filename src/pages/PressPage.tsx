import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const pressReleases = [
  {
    id: 1,
    title: "NexGrey Named Best Digital Marketing Agency 2024",
    date: "Feb 10, 2024",
    source: "Marketing Today",
    excerpt: "Recognition for innovative strategies and exceptional client results over the past year.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "NexGrey Launches AI-Powered Marketing Suite",
    date: "Jan 28, 2024",
    source: "TechCrunch",
    excerpt: "New platform leverages artificial intelligence to optimize digital marketing campaigns in real-time.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Record Growth: NexGrey Expands to 5 New Markets",
    date: "Jan 15, 2024",
    source: "Forbes",
    excerpt: "The digital marketing firm announces expansion plans following 300% year-over-year growth.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "Case Study: How NexGrey Scaled a SaaS to $10M ARR",
    date: "Dec 20, 2023",
    source: "SaaS Weekly",
    excerpt: "Deep dive into the marketing strategies that took a startup from zero to significant revenue.",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=250&fit=crop",
  },
  {
    id: 5,
    title: "Priya Sharma Joins Forbes 30 Under 40",
    date: "Dec 5, 2023",
    source: "Forbes",
    excerpt: "CEO and founder recognized for transforming the digital marketing industry.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=250&fit=crop",
  },
  {
    id: 6,
    title: "NexGrey Partners with Major Enterprise Client",
    date: "Nov 30, 2023",
    source: "Business Wire",
    excerpt: "Multi-year strategic partnership to drive digital transformation and growth.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
  },
];

const PressPage = () => {
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
              <h1 className="text-5xl md:text-6xl pt-16 font-bold mb-6">Press & Media</h1>
              <p className="text-xl text-muted-foreground">
                Latest news and media coverage about NexGrey and the digital marketing industry.
              </p>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {pressReleases.map((release) => (
                <div key={release.id} className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 flex md:flex-row flex-col">
                  {/* Image */}
                  <div className="h-48 md:h-auto md:w-64 flex-shrink-0 overflow-hidden">
                    <img
                      src={release.image}
                      alt={release.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Newspaper className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">{release.source}</span>
                        <span className="text-sm text-muted-foreground">{release.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{release.title}</h3>
                      <p className="text-muted-foreground">{release.excerpt}</p>
                    </div>

                    <Button variant="ghost" className="w-fit mt-4 group/btn">
                      Read Full Release
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Kit */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Press Kit</h2>
              <p className="text-xl text-muted-foreground">
                Download our media kit, logos, and company information.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                { title: "Media Kit PDF", description: "Company overview, statistics, and contact information" },
                { title: "Brand Assets", description: "Logos, brand guidelines, and high-resolution images" },
              ].map((item, idx) => (
                <div key={idx} className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary transition-colors">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  <Button variant="outline" size="sm">
                    Download
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Press */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Media Inquiries?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get in touch with our PR team for interviews, quotes, or media requests.
              </p>
              <Button asChild variant="gradient" size="lg">
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  Contact PR Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default PressPage;
