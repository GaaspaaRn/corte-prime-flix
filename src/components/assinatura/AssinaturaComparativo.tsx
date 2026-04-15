import { Button } from "@/components/ui/button";
import { X, Check, ArrowRight } from "lucide-react";

const AssinaturaComparativo = () => {
  const handleCTAClick = () => {
    document.getElementById('planos')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-32 px-6 bg-background relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6">
            ✦ A matemática não mente
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Pagar avulso é <span className="text-destructive">perder dinheiro.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Veja quanto você economiza entrando para o Clube Premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card: Avulso */}
          <div className="reveal border border-destructive/20 bg-card rounded-3xl p-8 md:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-destructive/10 p-2.5 rounded-full">
                <X className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground/70">O Jeito Antigo</h3>
            </div>

            <div className="space-y-6 flex-grow">
              <div className="flex justify-between items-end border-b border-border pb-4">
                <div>
                  <p className="text-foreground font-medium">Corte de Cabelo (4x)</p>
                  <p className="text-sm text-muted-foreground">4 × R$ 40,00</p>
                </div>
                <p className="text-lg font-bold text-foreground/60">R$ 160</p>
              </div>

              <div className="flex justify-between items-end border-b border-border pb-4">
                <div>
                  <p className="text-foreground font-medium">Barba (4x)</p>
                  <p className="text-sm text-muted-foreground">4 × R$ 35,00</p>
                </div>
                <p className="text-lg font-bold text-foreground/60">R$ 140</p>
              </div>

              <div className="flex justify-between items-end pb-4 opacity-40">
                <div>
                  <p className="text-foreground font-medium line-through">Café Expresso Cortesia</p>
                  <p className="text-sm text-muted-foreground">Não incluso</p>
                </div>
                <p className="text-lg font-semibold text-muted-foreground">—</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-background rounded-2xl border border-destructive/10">
              <p className="text-xs text-destructive font-bold uppercase tracking-[0.15em] mb-1">Gasto mensal</p>
              <div className="flex items-baseline gap-1">
                <span className="text-lg text-foreground/60 font-bold">R$</span>
                <span className="text-4xl font-black text-foreground/60">300</span>
              </div>
            </div>
          </div>

          {/* Card: Clube Premium */}
          <div className="reveal delay-2 border border-primary/40 bg-card rounded-3xl p-8 md:p-10 relative flex flex-col shadow-glow">
            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/15 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-10 relative z-10">
              <div className="bg-primary/15 p-2.5 rounded-full">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Plano Completo</h3>
            </div>

            <div className="space-y-6 flex-grow relative z-10">
              <div className="flex justify-between items-end border-b border-border pb-4">
                <div>
                  <p className="text-foreground font-medium">Cabelo Ilimitado</p>
                  <p className="text-sm text-muted-foreground">Venha quantas vezes quiser</p>
                </div>
                <p className="text-sm font-semibold text-primary">Incluso</p>
              </div>

              <div className="flex justify-between items-end border-b border-border pb-4">
                <div>
                  <p className="text-foreground font-medium">Barba Ilimitada</p>
                  <p className="text-sm text-muted-foreground">Sempre alinhada</p>
                </div>
                <p className="text-sm font-semibold text-primary">Incluso</p>
              </div>

              <div className="flex justify-between items-end pb-4">
                <div>
                  <p className="text-foreground font-medium">Café Expresso Cortesia</p>
                  <p className="text-sm text-muted-foreground">Toda visita</p>
                </div>
                <p className="text-sm font-semibold text-primary">Incluso</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-2xl border border-primary/20 relative z-10">
              <p className="text-xs text-primary font-bold uppercase tracking-[0.15em] mb-1">Pagamento único mensal</p>
              <div className="flex items-baseline gap-1">
                <span className="text-lg text-primary font-bold">R$</span>
                <span className="text-4xl font-black text-primary">149,90</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center reveal delay-3">
          <div className="gradient-border-wrap inline-block">
            <div className="bg-background rounded-full px-8 py-4 flex flex-col sm:flex-row items-center gap-4">
              <p className="text-lg md:text-xl font-bold">
                Você economiza mais de <span className="text-primary font-black">R$ 150/mês</span>
              </p>
              <Button 
                onClick={handleCTAClick}
                className="bg-gradient-gold text-primary-foreground rounded-full font-bold text-sm uppercase tracking-[0.05em] px-6 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                Quero Economizar <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssinaturaComparativo;
