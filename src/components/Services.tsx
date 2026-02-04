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
    title: "Digital Advertising",
    description: "Strategic paid campaigns across Google, Meta, and emerging platforms that maximize ROI and drive qualified traffic.",
    color: "from-primary to-orange-light",
  },
  {
    icon: Search,
    title: "SEO & Content",
    description: "Data-driven SEO strategies paired with compelling content that ranks, engages, and converts your target audience.",
    color: "from-secondary to-blue-light",
  },
  {
    icon: PenTool,
    title: "Brand Identity",
    description: "Crafting memorable brand experiences through visual identity, messaging, and cohesive design systems.",
    color: "from-primary to-secondary",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Transform raw data into actionable insights with custom dashboards and performance tracking.",
    color: "from-orange-light to-primary",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance, conversion-optimized websites built with cutting-edge technology and seamless UX.",
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
