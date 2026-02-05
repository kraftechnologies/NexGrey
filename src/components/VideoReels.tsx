import { useRef, useState, useEffect } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

const reelsData = [
  {
    id: 1,
    title: "Brand Launch Campaign",
    category: "Branding",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=700&fit=crop",
    views: "2.4M",
  },
  {
    id: 2,
    title: "Social Media Strategy",
    category: "Marketing",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=700&fit=crop",
    views: "1.8M",
  },
  {
    id: 3,
    title: "Product Photography",
    category: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=700&fit=crop",
    views: "3.1M",
  },
  {
    id: 4,
    title: "Digital Ad Campaign",
    category: "Advertising",
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=700&fit=crop",
    views: "2.7M",
  },
  {
    id: 5,
    title: "Website Redesign",
    category: "Development",
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=700&fit=crop",
    views: "1.5M",
  },
  {
    id: 6,
    title: "E-commerce Growth",
    category: "Strategy",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=700&fit=crop",
    views: "4.2M",
  },
  {
    id: 7,
    title: "Content Creation",
    category: "Content",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=700&fit=crop",
    views: "2.1M",
  },
  {
    id: 8,
    title: "Analytics Dashboard",
    category: "Data",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=700&fit=crop",
    views: "1.9M",
  },
];

const VideoReels = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredReel, setHoveredReel] = useState<number | null>(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-foreground overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Highlights
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-background">
              Watch Our{" "}
              <span className="font-display italic text-primary">Success Stories</span>
            </h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "border-background/30 text-background hover:bg-background hover:text-foreground"
                  : "border-background/10 text-background/30 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "border-background/30 text-background hover:bg-background hover:text-foreground"
                  : "border-background/10 text-background/30 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Reels Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-6 pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {/* Left Spacer */}
        <div className="flex-shrink-0 w-[calc((100vw-1400px)/2)]" />

        {reelsData.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-72 relative group cursor-pointer"
            style={{ scrollSnapAlign: "start" }}
            onMouseEnter={() => setHoveredReel(reel.id)}
            onMouseLeave={() => setHoveredReel(null)}
          >
            {/* Reel Card */}
            <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-card">
              {/* Thumbnail */}
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent opacity-80" />

              {/* Play Button */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  hoveredReel === reel.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/50 transition-transform duration-300 hover:scale-110">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" />
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-background/20 backdrop-blur-md rounded-full text-xs font-medium text-background">
                  {reel.category}
                </span>
              </div>

              {/* Views */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-primary/90 backdrop-blur-md rounded-full text-xs font-semibold text-primary-foreground">
                  {reel.views} views
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-background mb-2 line-clamp-2">
                  {reel.title}
                </h3>
                <div className="flex items-center gap-2 text-background/60 text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Watch Now</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Right Spacer */}
        <div className="flex-shrink-0 w-6" />
      </div>

      {/* Progress Indicator */}
      <div className="container mx-auto px-6 mt-8">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-0.5 bg-background/10 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>
          <span className="text-background/40 text-sm">Swipe to explore</span>
        </div>
      </div>
    </section>
  );
};

export default VideoReels;
