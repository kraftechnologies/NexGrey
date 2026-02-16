import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, Menu, X } from "lucide-react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import ContactSubmissions from "@/components/admin/ContactSubmissions";
import TestimonialsManagement from "@/components/admin/TestimonialsManagement";
import Analytics from "@/components/admin/Analytics";
import ContentManagement from "@/components/admin/ContentManagement";
import { useAuth } from "@/hooks/useAuth";

type AdminTab = "dashboard" | "contact-submissions" | "testimonials" | "content" | "settings";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Analytics />;
      case "contact-submissions":
        return <ContactSubmissions />;
      case "testimonials":
        return <TestimonialsManagement />;
      case "content":
        return <ContentManagement />;
      case "settings":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Settings</h2>
            <div className="bg-card rounded-xl border border-border p-8 max-w-2xl">
              <p className="text-muted-foreground mb-6">Manage your admin settings here.</p>
              <div className="space-y-4">
                <div className="border-b border-border pb-4">
                  <h3 className="font-bold mb-2">Account Settings</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Logged in as: <span className="text-foreground font-semibold">{user?.email}</span>
                  </p>
                  <Button variant="destructive" onClick={handleLogout}>
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </Button>
                </div>
                <div className="pt-4">
                  <h3 className="font-bold mb-2">Website Info</h3>
                  <p className="text-sm text-muted-foreground">
                    Nexgro Admin Dashboard v1.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <AdminSidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="bg-card border-b border-border sticky top-0 z-40">
          <div className="flex items-center justify-between p-4 md:p-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>

            {/* User Info & Logout */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium">{user?.email}</p>
                <p className="text-xs text-muted-foreground">Admin</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="gap-2"
              >
                <LogOut size={16} />
                <span className="hidden md:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
