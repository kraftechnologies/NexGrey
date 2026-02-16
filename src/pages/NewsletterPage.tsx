import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const NewsletterPage = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate subscription
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Check your email to confirm your subscription.",
      });
      setEmail("");
      setIsSubscribing(false);
    }, 1000);
  };

  const recentEmails = [
    {
      id: 1,
      subject: "Weekly Digest: Top Marketing Trends This Week",
      date: "Feb 10, 2024",
      preview: "Discover the latest trends in AI-powered marketing, video content strategies, and emerging platforms.",
    },
    {
      id: 2,
      subject: "Case Study: How We 3X'd Revenue for a SaaS Startup",
      date: "Feb 3, 2024",
      preview: "Learn the exact strategies and tactics we used to drive explosive growth.",
    },
    {
      id: 3,
      subject: "Free Tool: Calculate Your Marketing ROI in Minutes",
      date: "Jan 27, 2024",
      preview: "We built a free tool to help you understand your actual marketing performance.",
    },
    {
      id: 4,
      subject: "Marketing Budget 2024: Where to Invest for Maximum Results",
      date: "Jan 20, 2024",
      preview: "Expert insights on budget allocation across digital channels.",
    },
    {
      id: 5,
      subject: "New Webinar: AI in Marketing - Hype or Reality?",
      date: "Jan 13, 2024",
      preview: "Join us for an in-depth discussion on how AI is transforming marketing.",
    },
    {
      id: 6,
      subject: "The Complete Guide to LinkedIn Marketing Strategy",
      date: "Jan 6, 2024",
      preview: "Everything you need to know to build a powerful LinkedIn presence.",
    },
  ];

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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Weekly Newsletter</h1>
              <p className="text-xl text-muted-foreground">
                Get weekly industry updates, actionable marketing tips, and exclusive insights delivered to your inbox.
              </p>

              {/* Subscribe Form */}
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 mt-10 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <Button
                  type="submit"
                  variant="gradient"
                  disabled={isSubscribing}
                  className="whitespace-nowrap"
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>

              <p className="text-sm text-muted-foreground mt-4">
                ✓ No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What You'll Get</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Weekly Trends",
                    description: "Stay ahead with curated insights on the latest marketing trends and platform updates.",
                  },
                  {
                    title: "Actionable Tips",
                    description: "Practical strategies you can implement immediately to improve your marketing results.",
                  },
                  {
                    title: "Case Studies",
                    description: "Learn from real client success stories and proven growth strategies.",
                  },
                  {
                    title: "Exclusive Tools",
                    description: "Access to free templates, calculators, and resources not available elsewhere.",
                  },
                  {
                    title: "Industry News",
                    description: "Important updates about Google, Meta, and other platforms affecting your marketing.",
                  },
                  {
                    title: "Expert Insights",
                    description: "Direct advice from our team of digital marketing experts and strategists.",
                  },
                ].map((benefit, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Emails */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Editions</h2>
              <p className="text-muted-foreground mb-8">Get a taste of what you'll receive each week</p>

              <div className="space-y-4">
                {recentEmails.map((email) => (
                  <div key={email.id} className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors flex-1">
                        {email.subject}
                      </h3>
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{email.date}</span>
                    </div>
                    <p className="text-muted-foreground">{email.preview}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Email
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Subscribers Say</h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  name: "Sarah Chen",
                  title: "Marketing Manager",
                  quote: "The tips in the newsletter have directly improved our campaign performance. Worth every second to read!",
                },
                {
                  name: "James Mitchell",
                  title: "Founder",
                  quote: "Weekly digest keeps us informed about platform changes. Essential for staying competitive.",
                },
                {
                  name: "Maya Patel",
                  title: "Growth Manager",
                  quote: "Love the case studies. They give me fresh ideas to test with our campaigns.",
                },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl p-6">
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

              <div className="space-y-4">
                {[
                  {
                    q: "How often will I receive emails?",
                    a: "Every Sunday morning. One email per week with curated insights and strategies.",
                  },
                  {
                    q: "Can I unsubscribe anytime?",
                    a: "Yes, absolutely. There's an unsubscribe link in every email, no questions asked.",
                  },
                  {
                    q: "Will you spam me?",
                    a: "Never. We send one curated email per week. We respect your inbox and your time.",
                  },
                  {
                    q: "Is the newsletter free?",
                    a: "Yes, it's completely free. No credit card required, no hidden fees.",
                  },
                ].map((faq, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-bold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Join 10,000+ Marketers</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Subscribe to get weekly insights straight to your inbox.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <Button
                  type="submit"
                  variant="gradient"
                  disabled={isSubscribing}
                  className="whitespace-nowrap"
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default NewsletterPage;
