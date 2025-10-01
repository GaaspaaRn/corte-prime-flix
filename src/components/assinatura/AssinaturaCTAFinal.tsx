import { Button } from "@/components/ui/button";
import { Crown, Clock, CheckCircle } from "lucide-react";
const AssinaturaCTAFinal = () => {
  const handleCTAClick = () => {
    document.getElementById('planos')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5547988984877?text=Olá! Quero assinar o plano premium da Barbearia Premium!', '_blank');
  };
  return null;
};
export default AssinaturaCTAFinal;