import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight } from "lucide-react";

const AssinaturaCTAFinal = () => {
  const handleCTAClick = () => {
    document.getElementById('planos')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5547988984877?text=Olá! Quero garantir minha vaga no clube premium da Barbearia Premium!', '_blank');
  };

  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Subtle bg */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.04]" 
        style={{ backgroundImage: "url('/hero-assinatura.webp')" }} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background" />
      
      <div className="max-w-3xl mx-auto relative z-10 reveal">
        <div className="rounded-3xl border border-primary/30 bg-card p-10 md:p-16 text-center relative overflow-hidden isolate">
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-primary/10 blur-[100px] -z-10 rounded-full" />
          
          {/* Overline */}
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border text-xs font-bold uppercase tracking-[0.15em] text-primary mb-8">
            ✦ Vagas Limitadas
          </span>
          
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-foreground leading-tight">
            Pronto para ficar<br />
            <span className="text-gold-gradient">sempre impecável?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
            Entre para o clube e transforme sua rotina. Sem multa, sem fidelidade — só resultados.
          </p>

          {/* Trust */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>Sem Multa</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>Sem Taxa Adesão</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>Cancele quando quiser</span>
            </div>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={handleCTAClick}
              size="lg" 
              className="bg-gradient-gold text-primary-foreground font-black text-[15px] uppercase tracking-[0.05em] px-10 py-7 h-auto rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 hover:shadow-glow"
            >
              GARANTIR MINHA VAGA
            </Button>
            
            <Button 
              onClick={handleWhatsAppClick}
              variant="outline"
              size="lg" 
              className="border-border text-foreground hover:border-primary hover:text-primary font-bold text-[15px] uppercase tracking-[0.05em] px-8 py-7 h-auto rounded-full transition-all duration-300 bg-transparent hover:bg-transparent"
            >
              WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssinaturaCTAFinal;