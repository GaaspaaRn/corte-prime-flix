import { MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
const FloatingButtons = () => {
  const whatsappNumber = "5547988984877";
  const whatsappMessage = "Olá, gostaria de saber mais sobre a barbearia.";
  const agendarUrl = "https://sites.appbarber.com.br/BarbeariaPremiumjlle";
  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };
  const handleAgendar = () => {
    window.open(agendarUrl, '_blank');
  };
  return <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-3">
      {/* WhatsApp Button */}
      <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 animate-fade-in">
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </Button>

      {/* Agendar Button */}
      
    </div>;
};
export default FloatingButtons;