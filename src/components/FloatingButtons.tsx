import { MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
const FloatingButtons = () => {
  const whatsappNumber = "5547988984877";
  const whatsappMessage = "Olá, gostaria de saber mais sobre a barbearia.";

  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsApp}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center p-0 animate-fade-in-up"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </div>
  );
};
export default FloatingButtons;