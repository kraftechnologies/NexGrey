import { useState, useEffect } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Save, Edit2, X, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PageContent {
  id: string;
  title: string;
  description: string;
  content: string;
  lastUpdated?: any;
}

const ContentManagement = () => {
  const [pages, setPages] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<PageContent>>({
    title: "",
    description: "",
    content: "",
  });
  const [pageName, setPageName] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      setLoading(true);
      const pagesSnap = await getDocs(collection(db, "pages"));
      const data = pagesSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as PageContent[];
      setPages(data);
    } catch (error) {
      console.error("Error fetching pages:", error);
      toast({
        title: "Error",
        description: "Failed to load pages",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!pageName || !formData.title || !formData.content) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      const pageId = editingId || pageName.toLowerCase().replace(/\s+/g, "-");
      await setDoc(doc(db, "pages", pageId), {
        title: formData.title,
        description: formData.description,
        content: formData.content,
        lastUpdated: new Date(),
      });

      toast({
        title: "Success",
        description: `Page "${formData.title}" saved successfully`,
      });

      setFormData({ title: "", description: "", content: "" });
      setEditingId(null);
      setPageName("");
      fetchPages();
    } catch (error) {
      console.error("Error saving page:", error);
      toast({
        title: "Error",
        description: "Failed to save page",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (page: PageContent) => {
    setFormData(page);
    setEditingId(page.id);
    setPageName(page.id);
  };

  const handleCancel = () => {
    setFormData({ title: "", description: "", content: "" });
    setEditingId(null);
    setPageName("");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Content Management</h2>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-xl border border-border p-6 sticky top-6">
            <h3 className="text-lg font-bold mb-4">
              {editingId ? "Edit Page" : "Add New Page"}
            </h3>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Page ID</label>
                <input
                  type="text"
                  value={pageName}
                  onChange={(e) => setPageName(e.target.value)}
                  disabled={!!editingId}
                  className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none disabled:opacity-50"
                  placeholder="page-slug"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Used in URL (lowercase, hyphens)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Title *</label>
                <input
                  type="text"
                  value={formData.title || ""}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="Page title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <input
                  type="text"
                  value={formData.description || ""}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="Page description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Content *</label>
                <textarea
                  rows={6}
                  value={formData.content || ""}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none text-sm"
                  placeholder="Page content..."
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit" variant="gradient" className="flex-1">
                  <Save size={16} className="mr-2" />
                  Save
                </Button>
                {editingId && (
                  <Button type="button" variant="outline" onClick={handleCancel}>
                    <X size={16} />
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Pages List */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-bold mb-4">Existing Pages</h3>
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mx-auto mb-2"></div>
              <p className="text-muted-foreground">Loading pages...</p>
            </div>
          ) : pages.length === 0 ? (
            <div className="bg-card rounded-xl border border-border p-12 text-center">
              <p className="text-muted-foreground mb-4">No pages created yet</p>
              <Button variant="outline" onClick={() => setPageName("")}>
                <Plus size={16} className="mr-2" />
                Create First Page
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {pages.map(page => (
                <div key={page.id} className="bg-card rounded-xl border border-border p-4 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold">{page.title}</h4>
                      <p className="text-sm text-muted-foreground">ID: {page.id}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(page)}
                      className="gap-2"
                    >
                      <Edit2 size={14} />
                    </Button>
                  </div>
                  {page.description && (
                    <p className="text-sm text-foreground line-clamp-2">{page.description}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">
                    {page.content.length} characters
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentManagement;
