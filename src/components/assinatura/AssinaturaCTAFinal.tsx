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
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8">
            <Crown className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium text-sm">ÚLTIMA CHANCE</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Sua melhor versão
            </span>
            <br />
            <span className="text-foreground">todos os dias</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Não deixe para amanhã o que pode transformar sua vida hoje. 
            <span className="text-primary font-semibold"> Sua image merece o melhor</span>.
          </p>
          
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="flex items-center gap-4 text-sm">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-muted-foreground">Acesso ilimitado garantido</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Cancelamento sem taxas</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button onClick={handleWhatsAppClick} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-16 py-8 h-auto rounded-xl shadow-glow hover:shadow-glow/80 transition-all duration-300 hover:scale-105">
              <Crown className="mr-3 h-6 w-6" />
              CLIQUE E ASSINE AGORA
            </Button>
            
            <p className="text-sm text-muted-foreground">
              🔒 Processo 100% seguro • ⚡ Ativação imediata
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              ⚠️ <span className="text-primary font-semibold">Oferta por tempo limitado</span> - Não perca sua vaga
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AssinaturaCTAFinal;