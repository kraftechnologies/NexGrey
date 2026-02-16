import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

const footerLinks = {
  services: [
    { name: "Digital Advertising", href: "#" },
    { name: "SEO & Content", href: "#" },
    { name: "Brand Identity", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "Growth Marketing", href: "#" },
    { name: "Analytics", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Work", href: "#work" },
    { name: "Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Free Tools", href: "#" },
    { name: "Marketing Guide", href: "#" },
    { name: "Webinars", href: "#" },
    { name: "Newsletter", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Top Section - CTA */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-16 border-b border-background/10">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="font-display italic text-primary">transform</span> your brand?
              </h3>
              <p className="text-background/60">
                Let's discuss how we can help you achieve your marketing goals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25"
              >
                Start a Project
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-background/20 text-background font-semibold rounded-xl hover:bg-background/10 transition-all duration-300"
              >
                Schedule a Call
              </a>
            </div>
          </div>

          {/* Middle Section - Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-16 border-b border-background/10">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="flex items-center gap-3 mb-6">
                <img src={logoLight} alt="Nexgro" className="h-10 w-auto" />
              </a>
              <p className="text-background/60 mb-6 max-w-xs leading-relaxed">
                Transforming brands through strategic creativity, cutting-edge technology, 
                and data-driven marketing solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:hello@nexgro.com" className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors group">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@nexgro.com</span>
                </a>
                <a href="tel:+15551234567" className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors group">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </a>
                <div className="flex items-center gap-3 text-background/60">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">New York, NY</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-5 text-background">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/60 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-5 text-background">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/60 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-5 text-background">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/60 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-5 text-background">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/60 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Large Background Text - Full Width Edge to Edge */}
      <div className="relative border-t border-background/5 w-full">
        <div className="py-4 md:py-8">
          <div className="relative flex items-center justify-center">
            <h2 
              className="text-[18vw] md:text-[16vw] font-bold leading-none tracking-tighter text-center select-none"
              style={{
                color: 'hsl(0 0% 20%)',
              }}
            >
              NEXGRO
            </h2>
            {/* Bottom Blur Gradient Overlay */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-20 md:h-28"
              style={{
                background: 'linear-gradient(to top, hsl(var(--foreground)) 0%, hsl(var(--foreground)) 30%, transparent 100%)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-background/40">
              © 2024 Nexgro. All rights reserved. Crafted with passion.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-background/60 group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
