import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Mail, Phone, MapPin, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { executeRecaptcha } from "@/hooks/useRecaptcha";

const ContactUsPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = await executeRecaptcha("contact_page");

      // Save to Firebase
      await addDoc(collection(db, "contact_inquiries"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        recaptchaToken: token,
        timestamp: serverTimestamp(),
        source: "contact-page",
      });

      toast({
        title: "Message Sent!",
        description: "We've received your inquiry and will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "info@nexgrey.com",
      href: "mailto:info@nexgrey.com",
      description: "We respond within 24 hours",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8839800059",
      href: "tel:+918839800059",
      description: "Mon-Fri, 9AM-6PM IST",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "New Delhi, India",
      href: "#",
      description: "400-A, 4th Floor, 12 Ajit Singh House, Yusuf Sarai Commercial Complex, New Delhi 110016",
    },
  ];

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
              <h1 className="text-5xl md:text-6xl pt-16 font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-muted-foreground">
                Have a question or ready to start your next project? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.href}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <method.icon className="w-7 h-7" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.label}</h3>
                  <p className="text-primary font-semibold mb-2">{method.value}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              {/* Left - Info */}
              <div>
                <h2 className="text-4xl font-bold mb-8">How We Can Help</h2>

                <div className="space-y-8">
                  {[
                    {
                      icon: Zap,
                      title: "Quick Response",
                      description: "We aim to respond to all inquiries within 24 hours.",
                    },
                    {
                      icon: Clock,
                      title: "Flexible Meetings",
                      description: "Schedule a call at a time that works best for you.",
                    },
                    {
                      icon: ArrowRight,
                      title: "Next Steps",
                      description: "After your inquiry, we'll propose a tailored approach.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-12 grid grid-cols-2 gap-4 pt-8 border-t border-border">
                  <div>
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Active Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                </div>
              </div>

              {/* Right - Contact Form */}
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Brand Identity">Brand Identity</option>
                      <option value="SEO & Content">SEO & Content</option>
                      <option value="Growth Strategy">Growth Strategy</option>
                      <option value="Analytics">Analytics</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <Button variant="gradient" size="lg" className="w-full group" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⌛</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We respect your privacy. Check our{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

              <div className="space-y-4">
                {[
                  {
                    q: "How long does it typically take to see results?",
                    a: "Results depend on your goals and strategies. Most clients see initial improvements within 4-6 weeks, with significant results within 3-6 months.",
                  },
                  {
                    q: "Do you work with small businesses?",
                    a: "Yes! We work with businesses of all sizes, from startups to enterprises. We tailor our services to fit your budget and goals.",
                  },
                  {
                    q: "What's your process for starting a project?",
                    a: "We start with a discovery call to understand your business, goals, and challenges. Then we propose a customized strategy and timeline.",
                  },
                  {
                    q: "Can I schedule a consultation?",
                    a: "Absolutely! Click the 'Schedule a Call' button in the footer or use our calendar to book a free 30-minute consultation.",
                  },
                  {
                    q: "What industries do you specialize in?",
                    a: "We've worked across e-commerce, SaaS, healthcare, real estate, finance, education, hospitality, and consumer goods.",
                  },
                  {
                    q: "How do you measure success?",
                    a: "We establish clear KPIs upfront and provide regular reports. Success is measured by your business goals—whether revenue, traffic, or brand awareness.",
                  },
                ].map((faq, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                    <h3 className="font-bold mb-2 text-lg">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to transform your business?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's schedule a call and discuss how we can help you achieve your goals.
              </p>
              <Button variant="gradient" size="lg">
                Schedule a Consultation
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

export default ContactUsPage;
