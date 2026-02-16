import { 
  Megaphone, 
  Search, 
  PenTool, 
  BarChart3, 
  Globe, 
  Zap,
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Cognitive Advertising",
    description: "Stop burning budget. We use predictive modeling and real-time bid automation to find your highest-value customers before they even click.",
    color: "from-primary to-orange-light",
  },
  {
    icon: Search,
    title: "AIO (AI-Optimization) & Content",
    description: "Traditional SEO is dead. We optimize your brand for the new era of 'Answer Engines' (ChatGPT, Perplexity, Gemini) while crafting human-first stories that convert.",
    color: "from-secondary to-blue-light",
  },
  {
    icon: PenTool,
    title: "Neural Brand Systems",
    description: "We craft flexible, AI-ready visual identities and messaging frameworks that stay consistent across every digital touchpoint.",
    color: "from-primary to-secondary",
  },
  {
    icon: BarChart3,
    title: "Algorithmic Growth",
    description: "Full-funnel scaling that utilizes machine learning to identify bottlenecks in your sales process and fix them automatically.",
    color: "from-orange-light to-primary",
  },
  {
    icon: Globe,
    title: "Next-Gen Engineering",
    description: "High-performance web applications built on modern stacks (Next.js/React) that are light, fast, and optimized for AI-driven UX.",
    color: "from-blue-light to-secondary",
  },
  {
    icon: Zap,
    title: "Growth Marketing",
    description: "Full-funnel growth strategies combining acquisition, retention, and optimization for sustainable scaling.",
    color: "from-secondary to-primary",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="font-display italic gradient-text">Dominate</span>{" "}
            Online
          </h2>
          <p className="text-lg text-muted-foreground">
            From strategy to execution, we provide end-to-end digital marketing 
            solutions tailored to your unique business goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover-lift cursor-pointer"
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Bottom Line */}
              <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
