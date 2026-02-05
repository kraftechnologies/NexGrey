import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredPost = {
  title: "The Future of Digital Marketing: Trends to Watch in 2024",
  excerpt: "Discover the emerging trends that will shape the digital marketing landscape and learn how to stay ahead of the competition.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
  author: "Alex Thompson",
  date: "Dec 15, 2024",
  readTime: "8 min read",
  category: "Marketing Trends",
};

const blogPosts = [
  {
    title: "How to Build a Successful Social Media Strategy",
    excerpt: "Learn the essential steps to create a social media strategy that drives engagement and conversions.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    author: "Sarah Chen",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    category: "Social Media",
  },
  {
    title: "SEO Best Practices for E-commerce Websites",
    excerpt: "Optimize your online store for search engines and increase organic traffic with these proven techniques.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    author: "Michael Rivera",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    category: "SEO",
  },
  {
    title: "The Power of Video Marketing in 2024",
    excerpt: "Why video content is king and how to leverage it for your brand's success.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
    author: "Emily Watson",
    date: "Dec 8, 2024",
    readTime: "5 min read",
    category: "Video Marketing",
  },
  {
    title: "Email Marketing: A Comprehensive Guide",
    excerpt: "Master email marketing with our step-by-step guide to creating campaigns that convert.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
    author: "Alex Thompson",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    category: "Email Marketing",
  },
  {
    title: "Building Brand Trust in the Digital Age",
    excerpt: "Strategies for establishing and maintaining trust with your audience online.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    author: "Sarah Chen",
    date: "Dec 3, 2024",
    readTime: "6 min read",
    category: "Branding",
  },
  {
    title: "Analytics 101: Making Data-Driven Decisions",
    excerpt: "Learn how to interpret analytics data and use it to improve your marketing ROI.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    author: "Michael Rivera",
    date: "Dec 1, 2024",
    readTime: "8 min read",
    category: "Analytics",
  },
];

const categories = ["All", "Marketing Trends", "Social Media", "SEO", "Video Marketing", "Email Marketing", "Branding", "Analytics"];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Marketing{" "}
              <span className="font-display italic gradient-text">Insights & Tips</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay ahead of the curve with our latest articles on digital marketing, 
              branding, and business growth strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="inline-block px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
                {featuredPost.category}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-background mb-4 max-w-3xl">
                {featuredPost.title}
              </h2>
              <p className="text-background/70 mb-6 max-w-2xl">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-6 text-background/60 text-sm">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {featuredPost.author}
                </span>
                <span>{featuredPost.date}</span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get the latest marketing insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="gradient">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
