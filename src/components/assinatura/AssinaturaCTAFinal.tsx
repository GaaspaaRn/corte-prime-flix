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
  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Pronto para se <span className="text-primary">transformar</span>?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Não perca mais tempo. Sua melhor versão está a um clique de distância.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={handleCTAClick} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Crown className="mr-2 h-5 w-5" />
            Ver Planos
          </Button>
          <Button onClick={handleWhatsAppClick} variant="outline" size="lg">
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};
export default AssinaturaCTAFinal;