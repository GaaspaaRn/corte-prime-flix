import { Button } from "@/components/ui/button";
import { Star, Users } from "lucide-react";

const AssinaturaHero = () => {
  const handleCTAClick = () => {
    document.getElementById('planos')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5547988984877?text=Olá! Gostaria de saber mais sobre a assinatura premium!', '_blank');
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image — slightly visible */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15]"
        style={{ backgroundImage: "url('/hero-assinatura.webp')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center py-32">

        {/* Overline Tag */}
        <div className="reveal mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border text-xs font-bold uppercase tracking-[0.15em] text-primary">
            Clube de Assinatura Ilimitado
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="reveal text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[0.95] mb-8">
          <span className="text-foreground">SEMPRE</span>
          <br />
          <span className="text-gold-gradient">IMPECÁVEL.</span>
        </h1>

        {/* Subtitle */}
        <p className="reveal delay-1 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
          O primeiro clube de assinatura <span className="text-foreground font-semibold">ilimitado</span> de Joinville.
          Cabelo, barba e experiência premium — sem limites.
        </p>

        {/* Price Anchor */}
        <p className="reveal delay-2 text-muted-foreground mb-10 text-base">
          Planos a partir de <strong className="text-foreground text-xl font-bold">R$ 79,90</strong>/mês
        </p>

        {/* CTA Buttons */}
        <div className="reveal delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="w-full sm:w-auto bg-gradient-gold text-primary-foreground font-bold text-[15px] uppercase tracking-[0.05em] px-10 py-6 h-auto rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-none hover:shadow-glow"
          >
            VER PLANOS
          </Button>

          <Button
            onClick={handleWhatsAppClick}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-border text-foreground hover:border-primary hover:text-primary font-bold text-[15px] uppercase tracking-[0.05em] px-10 py-6 h-auto rounded-full transition-all duration-300 bg-transparent hover:bg-transparent"
          >
            Chamar no WhatsApp
          </Button>
        </div>

        {/* Trust Row */}
        <div className="reveal delay-4 mt-16 flex items-center gap-6">
          {/* Avatar Cluster */}
          <div className="flex -space-x-2">
            {['airtonferreira.png', 'frmultimarcas.png', 'fabiomanske.png', 'leandromichalak.png'].map((img, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center overflow-hidden shrink-0">
                <img src={`/images/testimonials/${img}`} alt="Cliente Premium" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 text-primary fill-primary" />
              <span className="font-semibold text-foreground">5.0</span>
            </div>
            <span className="text-border">|</span>
            <div className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5 text-primary" />
              <span>+100 assinantes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssinaturaHero;
