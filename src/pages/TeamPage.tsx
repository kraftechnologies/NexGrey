import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Founder & CEO",
    bio: "Marketing strategist with 12+ years of experience driving growth for Fortune 500 companies.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    id: 2,
    name: "Arun Verma",
    role: "Head of Strategy",
    bio: "Data scientist and strategist specializing in growth marketing and analytics.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    id: 3,
    name: "Neha Desai",
    role: "Creative Director",
    bio: "Award-winning creative strategist known for innovative brand transformations.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    id: 4,
    name: "Rahul Patel",
    role: "Tech Lead",
    bio: "Full-stack developer building high-performance marketing technology solutions.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    id: 5,
    name: "Anjali Singh",
    role: "Content Strategy Lead",
    bio: "Storyteller and SEO expert creating content that drives organic growth.",
    image: "https://images.unsplash.com/photo-1507217288031-187a16c28e2b?w=400&h=400&fit=crop",
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    id: 6,
    name: "Vikram Menon",
    role: "Analytics Director",
    bio: "Data-driven marketer optimizing campaigns across all channels.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
];

const TeamPage = () => {
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet the Team</h1>
              <p className="text-xl text-muted-foreground">
                A diverse group of strategists, creatives, and technologists passionate about driving business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                    {/* Social Links */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <a href={member.social.linkedin} className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href={member.social.twitter} className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a href={member.social.email} className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Culture & Values</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Innovation", description: "We stay ahead of trends and constantly evolve our strategies." },
                { title: "Collaboration", description: "We work closely with clients as true partners in their success." },
                { title: "Excellence", description: "We deliver exceptional results and attention to every detail." },
              ].map((value, idx) => (
                <div key={idx} className="bg-card border border-border rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Want to join our team?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're always looking for talented individuals to join our growing team.
              </p>
              <Button variant="gradient" size="lg">
                View Open Positions
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

export default TeamPage;
