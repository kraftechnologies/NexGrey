import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const webinars = [
  {
    id: 1,
    title: "SEO Secrets: How to Rank #1 on Google",
    speaker: "Alex Thompson",
    date: "Mar 15, 2024",
    time: "2:00 PM EST",
    attendees: "1,245",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400&h=250&fit=crop",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Mastering Meta Ads: Advanced Strategies",
    speaker: "Priya Sharma",
    date: "Mar 22, 2024",
    time: "1:00 PM EST",
    attendees: "856",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Building a 7-Figure Business with Content",
    speaker: "Rahul Patel",
    date: "Mar 29, 2024",
    time: "3:00 PM EST",
    attendees: "2,103",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Brand Strategy 101: From Startup to Market Leader",
    speaker: "Neha Desai",
    date: "Feb 28, 2024",
    time: "2:30 PM EST",
    attendees: "1,892",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=250&fit=crop",
    status: "recorded",
  },
  {
    id: 5,
    title: "Growth Hacking: Quick Wins & Long-term Growth",
    speaker: "Vikram Menon",
    date: "Feb 21, 2024",
    time: "1:30 PM EST",
    attendees: "1,456",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    status: "recorded",
  },
  {
    id: 6,
    title: "Analytics Deep Dive: Track What Matters",
    speaker: "Arun Verma",
    date: "Feb 14, 2024",
    time: "2:00 PM EST",
    attendees: "987",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=250&fit=crop",
    status: "recorded",
  },
];

const WebinarsPage = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Live & Recorded Webinars</h1>
              <p className="text-xl text-muted-foreground">
                Learn directly from industry experts and take your marketing skills to the next level.
              </p>
            </div>
          </div>
        </section>

        {/* Webinars Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {webinars.map((webinar) => (
                <div key={webinar.id} className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={webinar.image}
                      alt={webinar.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        webinar.status === 'upcoming'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {webinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                    <p className="text-primary font-semibold text-sm mb-4">{webinar.speaker}</p>

                    {/* Details */}
                    <div className="space-y-2 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {webinar.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {webinar.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {webinar.attendees} attending
                      </div>
                    </div>

                    <Button variant={webinar.status === 'upcoming' ? 'gradient' : 'outline'} className="w-full group/btn">
                      {webinar.status === 'upcoming' ? 'Register Now' : 'Watch Recording'}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Attend */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Attend Our Webinars?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Expert Speakers", description: "Learn from industry leaders and marketing veterans" },
                { title: "Actionable Insights", description: "Practical strategies you can implement immediately" },
                { title: "Live Q&A", description: "Ask questions and get personalized advice" },
              ].map((item, idx) => (
                <div key={idx} className="bg-card border border-border rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Don't miss upcoming webinars</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Subscribe to our newsletter to get webinar invitations and exclusive marketing tips.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 py-6 rounded-xl"
                  required
                />
                <Button type="submit" variant="gradient">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default WebinarsPage;
