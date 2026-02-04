import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "TechFlow SaaS",
    category: "Web Development",
    description: "Complete brand redesign and website development for a B2B SaaS platform",
    metrics: "+340% Conversion Rate",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: 2,
    title: "Luxe Fashion",
    category: "E-commerce",
    description: "Full-funnel digital marketing campaign for premium fashion retailer",
    metrics: "$2.5M Revenue",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: 3,
    title: "HealthFirst App",
    category: "Mobile Marketing",
    description: "User acquisition and growth strategy for health & wellness app",
    metrics: "1M+ Downloads",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
  },
  {
    id: 4,
    title: "GreenEnergy Co",
    category: "Brand Identity",
    description: "Complete rebrand and market positioning for renewable energy startup",
    metrics: "3x Brand Awareness",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
];

const Work = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at center, hsl(var(--background)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="max-w-2xl mb-8 lg:mb-0">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Results That{" "}
              <span className="font-display italic text-primary">Speak</span>{" "}
              for Themselves
            </h2>
          </div>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-background/70 hover:text-primary transition-colors group"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent transition-opacity duration-500 ${hoveredId === project.id ? 'opacity-90' : 'opacity-60'}`} />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Category Badge */}
                <span className="inline-flex w-fit px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary backdrop-blur-sm mb-4">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-background mb-2">
                  {project.title}
                </h3>

                {/* Description - Shows on hover */}
                <p className={`text-background/70 mb-4 transition-all duration-500 ${hoveredId === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold gradient-text">{project.metrics}</span>
                  <div className={`w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-all duration-500 ${hoveredId === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
