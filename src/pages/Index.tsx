import { useState, useEffect } from "react";
import PageLoader from "@/components/PageLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import VideoReels from "@/components/VideoReels";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {isLoading && <PageLoader />}
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <About />
      <Testimonials />
      <Contact />
      <VideoReels />
      <Footer />
    </div>
  );
};

export default Index;
