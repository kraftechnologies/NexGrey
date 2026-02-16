import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Mail, MessageSquare, TrendingUp, Users } from "lucide-react";

interface AnalyticsData {
  totalSubmissions: number;
  totalInquiries: number;
  totalTestimonials: number;
  submissionsByDate: { date: string; count: number }[];
}

const Analytics = () => {
  const [data, setData] = useState<AnalyticsData>({
    totalSubmissions: 0,
    totalInquiries: 0,
    totalTestimonials: 0,
    submissionsByDate: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);

      // Fetch contact submissions
      const submissionsSnap = await getDocs(collection(db, "contact_submissions"));
      const totalSubmissions = submissionsSnap.size;

      // Fetch contact inquiries
      const inquiriesSnap = await getDocs(collection(db, "contact_inquiries"));
      const totalInquiries = inquiriesSnap.size;

      // Fetch testimonials
      const testimonialsSnap = await getDocs(collection(db, "testimonials"));
      const totalTestimonials = testimonialsSnap.size;

      // Aggregate by date (last 7 days)
      const dateMap = new Map<string, number>();
      const now = new Date();

      submissionsSnap.docs.forEach(doc => {
        const timestamp = doc.data().timestamp?.toDate?.() || new Date();
        const dateStr = new Date(timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" });
        dateMap.set(dateStr, (dateMap.get(dateStr) || 0) + 1);
      });

      inquiriesSnap.docs.forEach(doc => {
        const timestamp = doc.data().timestamp?.toDate?.() || new Date();
        const dateStr = new Date(timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" });
        dateMap.set(dateStr, (dateMap.get(dateStr) || 0) + 1);
      });

      const submissionsByDate = Array.from(dateMap.entries())
        .map(([date, count]) => ({ date, count }))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

      setData({
        totalSubmissions,
        totalInquiries,
        totalTestimonials,
        submissionsByDate,
      });
    } catch (error) {
      console.error("Error fetching analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      icon: Mail,
      label: "Contact Submissions",
      value: data.totalSubmissions,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: MessageSquare,
      label: "Contact Inquiries",
      value: data.totalInquiries,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: Users,
      label: "Testimonials",
      value: data.totalTestimonials,
      color: "bg-green-500/10 text-green-500",
    },
    {
      icon: TrendingUp,
      label: "Total Engagement",
      value: data.totalSubmissions + data.totalInquiries + data.totalTestimonials,
      color: "bg-amber-500/10 text-amber-500",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Analytics & Insights</h2>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mx-auto mb-2"></div>
          <p className="text-muted-foreground">Loading analytics...</p>
        </div>
      ) : (
        <>
          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className={`rounded-xl border border-border p-6 ${card.color.split(" ")[0]}`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{card.label}</p>
                      <p className="text-3xl font-bold">{card.value}</p>
                    </div>
                    <Icon className={`w-8 h-8 ${card.color.split(" ")[1]}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Charts */}
          {data.submissionsByDate.length > 0 && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Bar Chart */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold mb-4">Submissions by Date</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data.submissionsByDate}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="date" stroke="var(--muted-foreground)" />
                    <YAxis stroke="var(--muted-foreground)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="count" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Line Chart */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold mb-4">Trend Analysis</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data.submissionsByDate}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="date" stroke="var(--muted-foreground)" />
                    <YAxis stroke="var(--muted-foreground)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="count"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--primary))" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Analytics;
