import { useEffect } from "react";

interface CalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalModal = ({ isOpen, onClose }: CalModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Replace with your actual cal.com username and event type
  // Format: https://cal.com/[username]/[event-type]
  // Or use direct app link: https://app.cal.com/[api-link]
  const calLink = "https://cal.com/nexgro/consultation";

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative shadow-2xl flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Close calendar"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="px-6 pt-6 pb-3 border-b border-border">
          <h2 className="text-2xl font-bold">Schedule a Call</h2>
          <p className="text-sm text-muted-foreground mt-1">Select a time that works best for you</p>
        </div>

        {/* Cal.com Iframe Embed */}
        <div className="flex-1 overflow-auto bg-black">
          <iframe
            src={`${calLink}?embed=true&bgColor=000000&textColor=ffffff`}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              background: "#000",
            }}
            frameBorder="0"
            title="Schedule a consultation"
            allow="camera; microphone; clipboard-write"
          />
        </div>

        {/* Fallback Text */}
        <div className="hidden px-6 py-4 border-t border-border text-center text-sm text-muted-foreground">
          <p>If the calendar isn't loading, you can also reach out to us directly:</p>
          <p className="mt-2">
            <a href="mailto:info@nexgrey.com" className="text-primary hover:underline">
              info@nexgrey.com
            </a>
            {" "} or {" "}
            <a href="tel:+918839800059" className="text-primary hover:underline">
              +918839800059
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalModal;
