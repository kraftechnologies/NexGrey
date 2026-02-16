import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

const PrivacyPage = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
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
                    NexGrey ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, and interact with us.
                  </p>
                  <p className="text-muted-foreground">
                    Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground mb-4">
                    We may collect information about you in a variety of ways. The information we may collect on the site includes:
                  </p>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Personal Data</h3>
                      <p>Name, email address, phone number, mailing address, job title, company name, and any other information you choose to provide when filling out forms.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Automatic Collection</h3>
                      <p>Information about your device, browser, IP address, pages visited, time spent on pages, and referral sources through cookies and similar tracking technologies.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Communications</h3>
                      <p>Information from emails, inquiries, feedback, or when you contact us for support or services.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">3. Use of Your Information</h2>
                  <p className="text-muted-foreground mb-4">
                    Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Respond to your inquiries and fulfill your requests</li>
                    <li>Send you marketing and promotional communications</li>
                    <li>Generate analytics to understand user behavior and preferences</li>
                    <li>Improve and optimize our website and services</li>
                    <li>Prevent fraudulent transactions and protect against illegal activity</li>
                    <li>Deliver customer service and technical support</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">4. Disclosure of Your Information</h2>
                  <p className="text-muted-foreground mb-4">
                    We may share information we have collected about you in certain situations:
                  </p>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">By Law or to Protect Rights</h3>
                      <p>When required by law or to protect our legal rights, property, and safety.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Service Providers</h3>
                      <p>To third-party vendors and service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Business Transfers</h3>
                      <p>In connection with any merger, sale, acquisition, or bankruptcy of NexGrey.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">5. Security of Your Information</h2>
                  <p className="text-muted-foreground mb-4">
                    We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">6. Cookies and Tracking Technologies</h2>
                  <p className="text-muted-foreground mb-4">
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">7. Third-Party Links</h2>
                  <p className="text-muted-foreground mb-4">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites. We encourage you to review the privacy policies of any third-party sites before providing your information.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">8. Your Privacy Rights</h2>
                  <p className="text-muted-foreground mb-4">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>The right to access your personal data</li>
                    <li>The right to correct inaccurate data</li>
                    <li>The right to request deletion of your data</li>
                    <li>The right to opt-out of marketing communications</li>
                    <li>The right to data portability</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at <a href="mailto:info@nexgrey.com" className="text-primary hover:underline">info@nexgrey.com</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">9. Children's Privacy</h2>
                  <p className="text-muted-foreground mb-4">
                    Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will delete such information and terminate the child's account.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">10. Google Analytics</h2>
                  <p className="text-muted-foreground mb-4">
                    We use Google Analytics to analyze website traffic and user behavior. Google Analytics collects information about your use of the website, including your IP address, the pages you visit, and the time spent on each page. For more information about Google Analytics, please visit <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google's Privacy Policy</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by updating the "Last updated" date at the top of this page. Your continued use of our services after any modifications constitutes your acceptance of the updated Privacy Policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">12. Contact Us</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
                  </p>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <p className="text-muted-foreground">
                      <strong>NexGrey</strong><br />
                      400-A, 4th Floor, 12 Ajit Singh House<br />
                      Yusuf Sarai Commercial Complex<br />
                      New Delhi 110016, India<br />
                      Email: <a href="mailto:info@nexgrey.com" className="text-primary hover:underline">info@nexgrey.com</a><br />
                      Phone: <a href="tel:+918839800059" className="text-primary hover:underline">+918839800059</a>
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

export default PrivacyPage;
