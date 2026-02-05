import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Award, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { number: "150+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "10+", label: "Years Experience" },
  { number: "25+", label: "Team Members" },
];

const values = [
  {
    icon: Users,
    title: "Client-Centric",
    description: "We put our clients at the heart of everything we do. Your success is our success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering results that exceed expectations.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "We stay ahead of trends and embrace new technologies to give you a competitive edge.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're genuinely passionate about marketing and helping businesses grow.",
  },
];

const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Michael Rivera",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Watson",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We're a Team of{" "}
              <span className="font-display italic gradient-text">Creative Minds</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Founded in 2014, Nexgro has grown from a small startup to a leading digital marketing agency, 
              helping businesses of all sizes achieve their marketing goals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Humble Beginnings to Industry Leaders
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  What started as a passion project in a small office has evolved into a full-service 
                  digital marketing agency trusted by brands across the globe.
                </p>
                <p>
                  Our journey has been defined by a relentless pursuit of excellence, a commitment to 
                  innovation, and a deep understanding of what it takes to succeed in the digital landscape.
                </p>
                <p>
                  Today, we're proud to work with Fortune 500 companies and ambitious startups alike, 
                  bringing the same level of dedication and creativity to every project.
                </p>
              </div>
              <Button variant="gradient" className="mt-8">
                Join Our Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Our Team"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-background">
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-background mb-3">{value.title}</h3>
                <p className="text-background/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Meet the <span className="font-display italic gradient-text">Experts</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6 overflow-hidden rounded-3xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
