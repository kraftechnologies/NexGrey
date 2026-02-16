import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

const TermsPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-muted-foreground">Last updated: February 16, 2026</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-invert max-w-none space-y-8">
                
                <div>
                  <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground mb-4">
                    Welcome to NexGrey ("Company," "we," "our," or "us"). These Terms & Conditions ("Terms") govern your access to and use of our website, services, and products. By accessing or using NexGrey, you agree to be bound by these Terms. If you do not agree to any part of these Terms, you may not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">2. Use License</h2>
                  <p className="text-muted-foreground mb-4">
                    Permission is granted to temporarily download one copy of the materials (information or software) on NexGrey's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                    <li>Violate any applicable laws or regulations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">3. Disclaimer</h2>
                  <p className="text-muted-foreground mb-4">
                    The materials on NexGrey's website are provided "as is." NexGrey makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">4. Limitations</h2>
                  <p className="text-muted-foreground mb-4">
                    In no event shall NexGrey or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on NexGrey's website, even if NexGrey or an authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">5. Accuracy of Materials</h2>
                  <p className="text-muted-foreground mb-4">
                    The materials appearing on NexGrey's website could include technical, typographical, or photographic errors. NexGrey does not warrant that any of the materials on our website are accurate, complete, or current. NexGrey may make changes to the materials contained on its website at any time without notice.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">6. Links</h2>
                  <p className="text-muted-foreground mb-4">
                    NexGrey has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by NexGrey of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">7. Modifications</h2>
                  <p className="text-muted-foreground mb-4">
                    NexGrey may revise these Terms & Conditions for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms & Conditions.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">8. Governing Law</h2>
                  <p className="text-muted-foreground mb-4">
                    These Terms & Conditions and any separate agreements we may enter into to provide services are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in New Delhi.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">9. Intellectual Property Rights</h2>
                  <p className="text-muted-foreground mb-4">
                    All content on our website, including text, graphics, logos, images, and software, is the property of NexGrey or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or transmit any content without our prior written permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">10. User Responsibilities</h2>
                  <p className="text-muted-foreground mb-4">
                    By using our website, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Provide accurate and complete information when submitting forms</li>
                    <li>Use the website for lawful purposes only</li>
                    <li>Not engage in any activity that could damage our website or services</li>
                    <li>Respect the rights and privacy of other users</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">11. Contact Information</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about these Terms & Conditions, please contact us at:
                  </p>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <p className="text-muted-foreground">
                      <strong>NexGrey</strong><br />
                      400-A, 4th Floor, 12 Ajit Singh House<br />
                      Yusuf Sarai Commercial Complex<br />
                      New Delhi 110016, India<br />
                      Email: info@nexgrey.com<br />
                      Phone: +918839800059
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Scroll to Top Button */}
      {typeof window !== "undefined" && (
        <>
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 z-40"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-6 h-6" />
            </button>
          )}
        </>
      )}

      <Footer />
    </>
  );
};

export default TermsPage;
