import { Button } from "@/components/ui/button";
import { LayoutDashboard, Mail, Settings, Menu, X, MessageSquare, FileText, BarChart3 } from "lucide-react";

interface AdminSidebarProps {
  activeTab: string;
  onTabChange: (tab: any) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const AdminSidebar = ({ activeTab, onTabChange, isOpen, onToggle }: AdminSidebarProps) => {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: BarChart3,
    },
    {
      id: "contact-submissions",
      label: "Contact Submissions",
      icon: Mail,
    },
    {
      id: "testimonials",
      label: "Testimonials",
      icon: MessageSquare,
    },
    {
      id: "content",
      label: "Content Management",
      icon: FileText,
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed lg:static left-0 top-0 h-screen w-64 bg-card border-r border-border flex flex-col transition-all duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-border">
          <h1 className="text-2xl font-bold">Admin</h1>
          <p className="text-sm text-muted-foreground">Nexgro Dashboard</p>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  onToggle(); // Close sidebar on mobile after selecting
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            Nexgro Admin v1.0
          </p>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default AdminSidebar;
