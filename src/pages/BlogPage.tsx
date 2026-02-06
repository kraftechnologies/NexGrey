import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, User, Search, X, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const featuredPost = {
  id: 0,
  title: "The Future of Digital Marketing: Trends to Watch in 2024",
  excerpt: "Discover the emerging trends that will shape the digital marketing landscape and learn how to stay ahead of the competition.",
  content: `
    <p>The digital marketing landscape is evolving at an unprecedented pace. As we move through 2024, several key trends are reshaping how brands connect with their audiences. Understanding and adapting to these changes is crucial for staying competitive.</p>
    
    <h2>1. AI-Powered Personalization</h2>
    <p>Artificial intelligence is no longer a futuristic concept—it's here, and it's transforming how we approach marketing. From chatbots that provide instant customer service to algorithms that predict consumer behavior, AI is enabling unprecedented levels of personalization.</p>
    <p>Marketers are now using AI to analyze vast amounts of data, identify patterns, and deliver tailored content to individual users at scale. This level of personalization was impossible just a few years ago.</p>
    
    <h2>2. The Rise of Short-Form Video</h2>
    <p>TikTok's explosive growth has proven that short-form video content is here to stay. Platforms like Instagram Reels and YouTube Shorts are following suit, and brands that aren't creating snackable video content are missing out on massive engagement opportunities.</p>
    <p>The key is authenticity. Users gravitate toward genuine, relatable content over polished productions. This shift has democratized content creation, allowing smaller brands to compete with industry giants.</p>
    
    <h2>3. Privacy-First Marketing</h2>
    <p>With third-party cookies on their way out and consumers increasingly concerned about data privacy, marketers must adapt their strategies. First-party data collection, transparent data practices, and contextual advertising are becoming essential skills.</p>
    
    <h2>4. Voice Search Optimization</h2>
    <p>As smart speakers and voice assistants become ubiquitous, optimizing for voice search is no longer optional. This means focusing on natural language, long-tail keywords, and conversational content that answers questions directly.</p>
    
    <h2>Conclusion</h2>
    <p>The brands that will thrive in 2024 and beyond are those that embrace change, prioritize authentic connections, and leverage technology to enhance—not replace—human creativity. The future of marketing is exciting, and we're here to help you navigate it.</p>
  `,
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
  author: "Alex Thompson",
  authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  date: "Dec 15, 2024",
  readTime: "8 min read",
  category: "Marketing Trends",
};

const blogPosts = [
  {
    id: 1,
    title: "How to Build a Successful Social Media Strategy",
    excerpt: "Learn the essential steps to create a social media strategy that drives engagement and conversions.",
    content: `
      <p>A successful social media strategy doesn't happen by accident. It requires careful planning, consistent execution, and ongoing optimization. Here's your comprehensive guide to building a strategy that delivers results.</p>
      
      <h2>Define Your Goals</h2>
      <p>Before posting anything, ask yourself: what do you want to achieve? Whether it's brand awareness, lead generation, or customer service, your goals will shape every decision you make.</p>
      
      <h2>Know Your Audience</h2>
      <p>Understanding who you're talking to is crucial. Create detailed buyer personas that go beyond demographics to include interests, pain points, and online behaviors.</p>
      
      <h2>Choose the Right Platforms</h2>
      <p>You don't need to be everywhere. Focus on the platforms where your audience spends their time. Quality presence on two platforms beats mediocre presence on five.</p>
      
      <h2>Create a Content Calendar</h2>
      <p>Consistency is key in social media. A content calendar helps you plan ahead, maintain a regular posting schedule, and ensure variety in your content types.</p>
      
      <h2>Engage, Don't Just Broadcast</h2>
      <p>Social media is a two-way street. Respond to comments, participate in conversations, and build genuine relationships with your followers.</p>
    `,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    author: "Sarah Chen",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    category: "Social Media",
  },
  {
    id: 2,
    title: "SEO Best Practices for E-commerce Websites",
    excerpt: "Optimize your online store for search engines and increase organic traffic with these proven techniques.",
    content: `
      <p>E-commerce SEO presents unique challenges and opportunities. With the right approach, you can significantly increase organic traffic and sales. Here are the best practices every online store should follow.</p>
      
      <h2>Optimize Product Pages</h2>
      <p>Each product page is a potential landing page from search. Include unique descriptions, high-quality images with alt text, and relevant keywords naturally throughout the content.</p>
      
      <h2>Site Structure Matters</h2>
      <p>A logical site structure helps both users and search engines navigate your store. Use clear categories, breadcrumbs, and internal linking to create a seamless experience.</p>
      
      <h2>Technical SEO Essentials</h2>
      <p>Page speed, mobile optimization, and secure connections (HTTPS) are non-negotiable. Use tools like Google PageSpeed Insights to identify and fix technical issues.</p>
      
      <h2>Content Beyond Products</h2>
      <p>A blog can drive significant organic traffic. Create helpful content that addresses customer questions and positions your brand as an industry authority.</p>
    `,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    author: "Michael Rivera",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    category: "SEO",
  },
  {
    id: 3,
    title: "The Power of Video Marketing in 2024",
    excerpt: "Why video content is king and how to leverage it for your brand's success.",
    content: `
      <p>Video has become the most engaging form of content online. Here's how to harness its power for your brand.</p>
      
      <h2>Why Video Works</h2>
      <p>Video combines visual and auditory elements to create memorable experiences. It's perfect for storytelling, demonstrations, and building emotional connections with your audience.</p>
      
      <h2>Types of Marketing Videos</h2>
      <p>From explainer videos and testimonials to live streams and behind-the-scenes content, there's a video format for every marketing goal. The key is matching the format to your objectives.</p>
      
      <h2>Platforms and Distribution</h2>
      <p>Different platforms favor different video styles. YouTube loves longer, educational content. TikTok and Reels reward creativity and authenticity. LinkedIn prefers professional, value-driven videos.</p>
    `,
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
    author: "Emily Watson",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    date: "Dec 8, 2024",
    readTime: "5 min read",
    category: "Video Marketing",
  },
  {
    id: 4,
    title: "Email Marketing: A Comprehensive Guide",
    excerpt: "Master email marketing with our step-by-step guide to creating campaigns that convert.",
    content: `
      <p>Despite the rise of social media, email remains one of the most effective marketing channels. Here's everything you need to know to succeed.</p>
      
      <h2>Building Your List</h2>
      <p>A quality email list is your most valuable asset. Focus on attracting subscribers who genuinely want to hear from you through lead magnets, content upgrades, and exclusive offers.</p>
      
      <h2>Segmentation and Personalization</h2>
      <p>One-size-fits-all emails are a thing of the past. Segment your list based on behavior, preferences, and demographics to deliver relevant content to each subscriber.</p>
      
      <h2>Crafting Compelling Emails</h2>
      <p>Great subject lines get opens. Great content gets clicks. Focus on providing value, telling stories, and including clear calls to action.</p>
    `,
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
    author: "Alex Thompson",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    category: "Email Marketing",
  },
  {
    id: 5,
    title: "Building Brand Trust in the Digital Age",
    excerpt: "Strategies for establishing and maintaining trust with your audience online.",
    content: `
      <p>In an era of skepticism and information overload, brand trust is more valuable—and harder to earn—than ever. Here's how to build it.</p>
      
      <h2>Transparency is Everything</h2>
      <p>Be honest about your products, your practices, and your values. Consumers can spot inauthenticity from a mile away, and the consequences of being caught can be devastating.</p>
      
      <h2>Social Proof</h2>
      <p>Reviews, testimonials, case studies, and user-generated content all serve as proof that your brand delivers on its promises. Make it easy for customers to share their experiences.</p>
      
      <h2>Consistent Communication</h2>
      <p>Trust is built through repeated positive interactions. Maintain a consistent brand voice, respond promptly to inquiries, and always follow through on your commitments.</p>
    `,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    author: "Sarah Chen",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    date: "Dec 3, 2024",
    readTime: "6 min read",
    category: "Branding",
  },
  {
    id: 6,
    title: "Analytics 101: Making Data-Driven Decisions",
    excerpt: "Learn how to interpret analytics data and use it to improve your marketing ROI.",
    content: `
      <p>Data is only valuable if you know how to use it. Here's your guide to making sense of marketing analytics.</p>
      
      <h2>Key Metrics That Matter</h2>
      <p>Not all metrics are created equal. Focus on metrics that directly relate to your business goals—conversion rates, customer acquisition cost, and lifetime value are often more important than vanity metrics like followers.</p>
      
      <h2>Setting Up Proper Tracking</h2>
      <p>You can't improve what you don't measure. Ensure you have proper tracking in place across all channels, with clear attribution models that help you understand the customer journey.</p>
      
      <h2>From Data to Action</h2>
      <p>The goal of analytics isn't to create pretty reports—it's to drive action. Develop a process for regularly reviewing data, identifying insights, and implementing improvements.</p>
    `,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    author: "Michael Rivera",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    date: "Dec 1, 2024",
    readTime: "8 min read",
    category: "Analytics",
  },
];

const allPosts = [featuredPost, ...blogPosts];
const categories = ["All", "Marketing Trends", "Social Media", "SEO", "Video Marketing", "Email Marketing", "Branding", "Analytics"];

const BlogPage = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<typeof featuredPost | null>(null);
  const [email, setEmail] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === "All" || post.category === selectedCategory;
    const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  // Individual Blog Post View
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <article className="pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <button 
              onClick={() => setSelectedPost(null)}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Blog
            </button>
            
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {selectedPost.category}
            </span>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {selectedPost.title}
            </h1>
            
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-3">
                <img 
                  src={selectedPost.authorImage} 
                  alt={selectedPost.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{selectedPost.author}</p>
                  <p className="text-sm text-muted-foreground">{selectedPost.date}</p>
                </div>
              </div>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                {selectedPost.readTime}
              </span>
            </div>
            
            <img 
              src={selectedPost.image} 
              alt={selectedPost.title}
              className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl mb-10"
            />
            
            <div 
              className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
            
            {/* Related Posts */}
            <div className="mt-16 pt-12 border-t border-border">
              <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.slice(0, 2).map(post => (
                  <article 
                    key={post.id}
                    className="group cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                  >
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="text-xs font-medium text-primary">{post.category}</span>
                    <h4 className="font-semibold mt-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </article>
        
        <Footer />
      </div>
    );
  }
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Stay ahead of the curve with our latest articles on digital marketing, 
              branding, and business growth strategies.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-10 py-6 rounded-2xl border-border"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
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
      {selectedCategory === "All" && !searchQuery && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div 
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedPost(featuredPost)}
            >
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="inline-block px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
                  Featured
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-background mb-4 max-w-3xl">
                  {featuredPost.title}
                </h2>
                <p className="text-background/70 mb-6 max-w-2xl">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-6 text-background/60 text-sm">
                  <span className="flex items-center gap-2">
                    <img 
                      src={featuredPost.authorImage} 
                      alt={featuredPost.author}
                      className="w-6 h-6 rounded-full object-cover"
                    />
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
      )}

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">No articles found matching your criteria.</p>
              <Button 
                variant="outline"
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
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
                      <div className="flex items-center gap-2">
                        <img 
                          src={post.authorImage} 
                          alt={post.author}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span>{post.author}</span>
                      </div>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
          
          {/* Results Count */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12 text-muted-foreground">
              Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </div>
          )}
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
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 py-6 rounded-xl"
              required
            />
            <Button type="submit" variant="gradient">Subscribe</Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
