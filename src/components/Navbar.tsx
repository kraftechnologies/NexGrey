import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
const navLinks = [{
  name: "Services",
  href: "#services",
  submenu: [{
    name: "Digital Advertising",
    href: "#services",
    description: "Google, Meta & emerging platforms"
  }, {
    name: "SEO & Content",
    href: "#services",
    description: "Data-driven organic growth"
  }, {
    name: "Brand Identity",
    href: "#services",
    description: "Visual identity & messaging"
  }, {
    name: "Web Development",
    href: "#services",
    description: "High-performance websites"
  }, {
    name: "Growth Marketing",
    href: "#services",
    description: "Full-funnel strategies"
  }, {
    name: "Analytics & Insights",
    href: "#services",
    description: "Custom dashboards & tracking"
  }]
}, {
  name: "Work",
  href: "#work",
  submenu: [{
    name: "Case Studies",
    href: "#work",
    description: "In-depth project breakdowns"
  }, {
    name: "Portfolio",
    href: "#work",
    description: "Our best creative work"
  }, {
    name: "Industries",
    href: "#work",
    description: "Sectors we specialize in"
  }]
}, {
  name: "Company",
  href: "#about",
  submenu: [{
    name: "About Us",
    href: "#about",
    description: "Our story & mission"
  }, {
    name: "Team",
    href: "#about",
    description: "Meet the experts"
  }, {
    name: "Careers",
    href: "#",
    description: "Join our growing team"
  }, {
    name: "Press",
    href: "#",
    description: "News & media coverage"
  }]
}, {
  name: "Resources",
  href: "#",
  submenu: [{
    name: "Blog",
    href: "#",
    description: "Marketing insights & tips"
  }, {
    name: "Guides",
    href: "#",
    description: "Free downloadable resources"
  }, {
    name: "Webinars",
    href: "#",
    description: "Live & recorded sessions"
  }, {
    name: "Newsletter",
    href: "#",
    description: "Weekly industry updates"
  }]
}, {
  name: "Testimonials",
  href: "#testimonials"
}, {
  name: "Contact",
  href: "#contact"
}];
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name);
  };
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              
              
            </div>
            <div className="flex flex-col">
              <span className="leading-tight font-extrabold text-3xl font-sans text-center">NEXGRO<span className="gradient-text">gro</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                ​ 
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => <div key={link.name} className="relative" onMouseEnter={() => link.submenu && handleMouseEnter(link.name)} onMouseLeave={handleMouseLeave}>
                <a href={link.href} className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg hover:bg-muted/50 ${activeDropdown === link.name ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                  {link.name}
                  {link.submenu && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`} />}
                </a>

                {/* Dropdown Menu */}
                {link.submenu && <div className={`absolute top-full left-0 pt-2 transition-all duration-300 ${activeDropdown === link.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                    <div className="bg-card rounded-2xl shadow-2xl border border-border p-2 min-w-[280px]">
                      {link.submenu.map((subItem, index) => <a key={index} href={subItem.href} className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-muted transition-colors duration-200 group">
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {subItem.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {subItem.description}
                          </span>
                        </a>)}
                    </div>
                  </div>}
              </div>)}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="gradient" size="default">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 hover:bg-muted rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-x-0 top-full bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 visible max-h-[80vh] overflow-y-auto" : "opacity-0 invisible max-h-0"}`}>
        <div className="container mx-auto px-6 py-6">
          {navLinks.map(link => <div key={link.name} className="border-b border-border/50 last:border-0">
              {link.submenu ? <div>
                  <button onClick={() => setMobileActiveDropdown(mobileActiveDropdown === link.name ? null : link.name)} className="flex items-center justify-between w-full py-4 text-lg font-medium">
                    {link.name}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileActiveDropdown === link.name ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileActiveDropdown === link.name ? "max-h-96 pb-4" : "max-h-0"}`}>
                    {link.submenu.map((subItem, index) => <a key={index} href={subItem.href} className="block py-2 pl-4 text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        {subItem.name}
                      </a>)}
                  </div>
                </div> : <a href={link.href} className="block py-4 text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>}
            </div>)}
          <div className="flex flex-col gap-3 mt-6">
            <Button variant="outline" size="lg" className="w-full">
              Sign In
            </Button>
            <Button variant="gradient" size="lg" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;