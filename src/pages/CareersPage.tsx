import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Coffee, 
  Plane, 
  GraduationCap,
  DollarSign,
  Home,
  Check,
  Upload,
  X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Digital Marketing Manager",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description: "Lead our digital marketing initiatives and drive growth across all channels.",
    requirements: [
      "5+ years of digital marketing experience",
      "Proven track record in SEO, PPC, and social media",
      "Experience managing marketing budgets",
      "Strong analytical and leadership skills",
    ],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$75,000 - $100,000",
    description: "Create beautiful, user-centered designs for our clients' digital products.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma, Sketch, or Adobe XD",
      "Strong portfolio showcasing web and mobile designs",
      "Understanding of user research methodologies",
    ],
  },
  {
    id: 3,
    title: "Content Strategist",
    department: "Content",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$65,000 - $85,000",
    description: "Develop and execute content strategies that drive engagement and conversions.",
    requirements: [
      "3+ years of content strategy experience",
      "Excellent writing and editing skills",
      "Experience with content management systems",
      "Knowledge of SEO best practices",
    ],
  },
  {
    id: 4,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$100,000 - $140,000",
    description: "Build and maintain web applications using modern technologies.",
    requirements: [
      "4+ years of full stack development experience",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, GCP)",
      "Strong problem-solving skills",
    ],
  },
  {
    id: 5,
    title: "Account Executive",
    department: "Sales",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$70,000 - $90,000 + Commission",
    description: "Build relationships with clients and drive new business growth.",
    requirements: [
      "3+ years of B2B sales experience",
      "Excellent communication and presentation skills",
      "Track record of meeting sales targets",
      "Experience in marketing or tech industry preferred",
    ],
  },
  {
    id: 6,
    title: "Social Media Specialist",
    department: "Marketing",
    location: "Miami, FL",
    type: "Full-time",
    salary: "$50,000 - $70,000",
    description: "Manage and grow our clients' social media presence across platforms.",
    requirements: [
      "2+ years of social media management experience",
      "Deep understanding of social media algorithms",
      "Experience with social media tools and analytics",
      "Creative mindset with strong copywriting skills",
    ],
  },
];

const benefits = [
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive medical, dental, and vision coverage for you and your family" },
  { icon: Home, title: "Remote Flexibility", description: "Work from anywhere with flexible hours that fit your lifestyle" },
  { icon: Plane, title: "Unlimited PTO", description: "Take the time you need to recharge and explore the world" },
  { icon: GraduationCap, title: "Learning Budget", description: "$2,000 annual budget for courses, conferences, and professional development" },
  { icon: DollarSign, title: "Competitive Salary", description: "Top-of-market compensation with annual reviews and equity options" },
  { icon: Coffee, title: "Team Events", description: "Monthly team outings, annual retreats, and celebration of wins together" },
];

const values = [
  { icon: Zap, title: "Innovation First", description: "We embrace new ideas and push boundaries to deliver exceptional results." },
  { icon: Users, title: "Collaborative Spirit", description: "We believe the best work happens when diverse minds come together." },
  { icon: Heart, title: "Client Obsession", description: "Our clients' success is our success. We go above and beyond, always." },
];

const CareersPage = () => {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);
  const [filterDepartment, setFilterDepartment] = useState("All");
  const [filterLocation, setFilterLocation] = useState("All");
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const departments = ["All", ...new Set(jobOpenings.map(job => job.department))];
  const locations = ["All", ...new Set(jobOpenings.map(job => job.location))];

  const filteredJobs = jobOpenings.filter(job => {
    const deptMatch = filterDepartment === "All" || job.department === filterDepartment;
    const locMatch = filterLocation === "All" || job.location === filterLocation;
    return deptMatch && locMatch;
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicationData.name || !applicationData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Application Submitted!",
      description: `Thank you for applying to ${selectedJob?.title}. We'll be in touch soon.`,
    });
    setSelectedJob(null);
    setApplicationData({
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      portfolio: "",
      coverLetter: "",
      resume: null,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationData({ ...applicationData, resume: e.target.files[0] });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your{" "}
              <span className="font-display italic gradient-text">Career</span>{" "}
              With Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join a team of passionate marketers, designers, and developers who are 
              shaping the future of digital marketing. We're always looking for talented 
              individuals to grow with us.
            </p>
            <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>50+ Team Members</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>5 Global Offices</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <span>{jobOpenings.length} Open Positions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Culture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our values shape everything we do, from how we work together to how we serve our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Benefits & Perks
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We Take Care of Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe happy employees create the best work. Here's how we invest in your well-being.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Open Positions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Perfect Role
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our current openings and find where your skills and passions align with our mission.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Department:</span>
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setFilterDepartment(dept)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filterDepartment === dept
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border"
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Location:</span>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setFilterLocation(loc)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filterLocation === loc
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border"
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredJobs.map((job) => (
              <Card 
                key={job.id}
                className="hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                      <CardTitle className="mt-3 text-xl">{job.title}</CardTitle>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No positions found matching your filters.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => { setFilterDepartment("All"); setFilterLocation("All"); }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm">
          <div className="bg-background rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {selectedJob.department}
                  </span>
                  <h3 className="text-2xl font-bold mt-3">{selectedJob.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedJob.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {selectedJob.salary}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Requirements:</h4>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <form onSubmit={handleApply} className="space-y-4">
                <h4 className="font-semibold">Apply Now</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name *"
                    value={applicationData.name}
                    onChange={(e) => setApplicationData({ ...applicationData, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={applicationData.email}
                    onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={applicationData.phone}
                    onChange={(e) => setApplicationData({ ...applicationData, phone: e.target.value })}
                  />
                  <Input
                    placeholder="LinkedIn Profile"
                    value={applicationData.linkedin}
                    onChange={(e) => setApplicationData({ ...applicationData, linkedin: e.target.value })}
                  />
                </div>
                <Input
                  placeholder="Portfolio URL"
                  value={applicationData.portfolio}
                  onChange={(e) => setApplicationData({ ...applicationData, portfolio: e.target.value })}
                />
                <Textarea
                  placeholder="Cover Letter - Tell us why you'd be a great fit..."
                  rows={4}
                  value={applicationData.coverLetter}
                  onChange={(e) => setApplicationData({ ...applicationData, coverLetter: e.target.value })}
                />
                <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="resume" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {applicationData.resume 
                        ? applicationData.resume.name 
                        : "Upload your resume (PDF, DOC, DOCX)"}
                    </p>
                  </label>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button type="submit" variant="gradient" className="flex-1">
                    Submit Application
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setSelectedJob(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're always looking for talented people. Send us your resume and we'll reach out 
            when a position that matches your skills opens up.
          </p>
          <Button asChild variant="gradient" size="lg">
            <Link to="mailto:info@nexgrey.com?subject=Job Application - Resume Submission" className="flex items-center justify-center gap-2">
              Send Your Resume
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
