import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "1234567890"; // Replace with your WhatsApp number
const WHATSAPP_MESSAGE = "Hi Nexgro! I'd like to know more about your services.";

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
          <MessageCircle className="w-7 h-7 text-white fill-white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground text-sm font-medium px-4 py-2 rounded-xl shadow-lg border border-border whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
