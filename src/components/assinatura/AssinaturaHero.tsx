import { Button } from "@/components/ui/button";
import { Sparkles, Crown } from "lucide-react";
const AssinaturaHero = () => {
  const handleCTAClick = () => {
    // Scroll to plans section
    document.getElementById('planos')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
      backgroundImage: "url('/hero-assinatura.webp')"
    }} />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="h-8 w-8 text-primary/30" />
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{
      animationDelay: '2s'
    }}>
        
      </div>
      <div className="absolute top-1/3 right-20 animate-float" style={{
      animationDelay: '4s'
    }}>
        <Sparkles className="h-6 w-6 text-primary/25" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Badge */}
          
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Cortes ilimitados,
            </span>
            <br />
            <span className="text-foreground">no clube Premium</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Economize dinheiro e  
            <span className="text-primary font-semibold"> corte quando quiser </span>
            com a qualidade da Barbearia Premium. 
          </p>
          
          {/* CTA Button */}
          <Button onClick={handleCTAClick} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 h-auto rounded-xl shadow-glow hover:shadow-glow/80 transition-all duration-300 hover:scale-105">
            <Crown className="mr-2 h-5 w-5" />
            VER PLANOS
          </Button>
          
          {/* Social Proof */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Mais de 100+ clientes premium</span>
            </div>
            <p className="text-xs text-muted-foreground">
              ⚠️ <span className="text-primary font-semibold">Vagas limitadas</span> - Restam 30 assinaturas disponíveis
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default AssinaturaHero;
