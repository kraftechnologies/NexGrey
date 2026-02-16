import { useState, useEffect } from "react";
import { collection, query, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Trash2, Eye, Mail, Phone, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactSubmission {
  id: string;
  firstName?: string;
  name?: string;
  email: string;
  phone?: string;
  mobileNumber?: string;
  company?: string;
  subject?: string;
  message: string;
  timestamp?: any;
  recaptchaToken?: string;
  source?: string;
}

const ContactSubmissions = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [showModal, setShowModal] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const contactQuery = query(collection(db, "contact_submissions"), collection(db, "contact_inquiries"));
      
      // Fetch from both collections
      const contactSnap = await getDocs(collection(db, "contact_submissions"));
      const inquiriesSnap = await getDocs(collection(db, "contact_inquiries"));
      
      const contactData = contactSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ContactSubmission[];
      
      const inquiriesData = inquiriesSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ContactSubmission[];
      
      setSubmissions([...contactData, ...inquiriesData].sort((a, b) => {
        const aTime = a.timestamp?.toMillis?.() || 0;
        const bTime = b.timestamp?.toMillis?.() || 0;
        return bTime - aTime;
      }));
    } catch (error) {
      console.error("Error fetching submissions:", error);
      toast({
        title: "Error",
        description: "Failed to load submissions",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, source: string = "contact_submissions") => {
    if (window.confirm("Are you sure you want to delete this submission?")) {
      try {
        const collection_name = source === "contact_inquiries" ? "contact_inquiries" : "contact_submissions";
        await deleteDoc(doc(db, collection_name, id));
        
        setSubmissions(submissions.filter(s => s.id !== id));
        toast({
          title: "Success",
          description: "Submission deleted successfully",
        });
      } catch (error) {
        console.error("Error deleting submission:", error);
        toast({
          title: "Error",
          description: "Failed to delete submission",
          variant: "destructive",
        });
      }
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "N/A";
    const date = timestamp.toDate?.() || new Date(timestamp);
    return new Date(date).toLocaleString();
  };

  const getFullName = (submission: ContactSubmission) => {
    return submission.firstName 
      ? `${submission.firstName} ${submission.lastName || ""}`
      : submission.name || "N/A";
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Contact Submissions</h2>
        <Button variant="outline" onClick={fetchSubmissions} disabled={loading}>
          {loading ? "Loading..." : "Refresh"}
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mx-auto mb-2"></div>
          <p className="text-muted-foreground">Loading submissions...</p>
        </div>
      ) : submissions.length === 0 ? (
        <div className="bg-card rounded-xl border border-border p-12 text-center">
          <p className="text-muted-foreground">No submissions found</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {submissions.map(submission => (
            <div key={submission.id} className="bg-card rounded-xl border border-border p-4 md:p-6 hover:shadow-lg transition-all">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-semibold">{getFullName(submission)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-primary">{submission.email}</p>
                </div>
                {submission.phone || submission.mobileNumber ? (
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold">{submission.phone || submission.mobileNumber}</p>
                  </div>
                ) : null}
                {submission.company && (
                  <div>
                    <p className="text-sm text-muted-foreground">Company</p>
                    <p className="font-semibold">{submission.company}</p>
                  </div>
                )}
                {submission.subject && (
                  <div className="md:col-span-2">
                    <p className="text-sm text-muted-foreground">Subject</p>
                    <p className="font-semibold">{submission.subject}</p>
                  </div>
                )}
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="text-sm flex items-center gap-2">
                    <Calendar size={14} />
                    {formatDate(submission.timestamp)}
                  </p>
                </div>
              </div>

              <div className="mb-4 p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Message</p>
                <p className="text-sm whitespace-pre-wrap line-clamp-2">{submission.message}</p>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setSelectedSubmission(submission);
                    setShowModal(true);
                  }}
                  className="gap-2"
                >
                  <Eye size={16} />
                  View Details
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.location.href = `mailto:${submission.email}`}
                  className="gap-2"
                >
                  <Mail size={16} />
                  Reply
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(submission.id, submission.source || "contact_submissions")}
                  className="gap-2 ml-auto"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Details Modal */}
      {showModal && selectedSubmission && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border">
            <div className="p-6 border-b border-border flex items-center justify-between sticky top-0 bg-card">
              <h3 className="text-xl font-bold">Submission Details</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Full Name</p>
                  <p className="font-semibold">{getFullName(selectedSubmission)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-semibold text-primary">{selectedSubmission.email}</p>
                </div>
                {selectedSubmission.phone && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="font-semibold">{selectedSubmission.phone}</p>
                  </div>
                )}
                {selectedSubmission.mobileNumber && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Mobile Number</p>
                    <p className="font-semibold">{selectedSubmission.mobileNumber}</p>
                  </div>
                )}
                {selectedSubmission.company && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Company</p>
                    <p className="font-semibold">{selectedSubmission.company}</p>
                  </div>
                )}
                {selectedSubmission.subject && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Subject</p>
                    <p className="font-semibold">{selectedSubmission.subject}</p>
                  </div>
                )}
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Message</p>
                <div className="bg-muted rounded-lg p-4">
                  <p className="whitespace-pre-wrap">{selectedSubmission.message}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">Submitted</p>
                <p className="text-sm">{formatDate(selectedSubmission.timestamp)}</p>
              </div>

              <div className="flex gap-2 pt-4 border-t border-border">
                <Button
                  onClick={() => window.location.href = `mailto:${selectedSubmission.email}`}
                  className="gap-2"
                >
                  <Mail size={16} />
                  Send Email
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    handleDelete(selectedSubmission.id, selectedSubmission.source || "contact_submissions");
                    setShowModal(false);
                  }}
                  className="gap-2 ml-auto"
                >
                  <Trash2 size={16} />
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSubmissions;
