import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/background-hero.webp"
          alt="Barbearia Premium"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">

        {/* Overline */}
        <div className="reveal mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            Joinville · Comasa
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="reveal text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[0.95] mb-8">
          <span className="text-white">BARBEARIA</span>
          <br />
          <span className="text-gold-gradient">PREMIUM.</span>
        </h1>

        {/* Subtitle */}
        <p className="reveal delay-1 text-lg sm:text-xl text-white/90 max-w-xl mx-auto mb-6 leading-relaxed">
          Onde o estilo encontra a tradição
        </p>

        {/* Description */}
        <p className="reveal delay-2 text-base text-white/70 max-w-lg mx-auto mb-12 leading-relaxed">
          Experimente o melhor em cortes masculinos, barbas e cuidados premium em um ambiente sofisticado e acolhedor.
        </p>

        {/* CTA */}
        <div className="reveal delay-3 flex flex-col sm:flex-row items-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-gold text-primary-foreground font-bold text-[15px] uppercase tracking-[0.05em] px-10 py-6 h-auto rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-none hover:shadow-glow"
            onClick={() => window.open(`https://wa.me/5547988984877?text=${encodeURIComponent('Olá! Gostaria de agendar um horário na Barbearia Premium.')}`, '_blank')}
          >
            Agendar Agora
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:border-primary hover:text-primary font-bold text-[15px] uppercase tracking-[0.05em] px-10 py-6 h-auto rounded-full transition-all duration-300 bg-transparent hover:bg-transparent"
            onClick={() => {
              document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver Serviços
          </Button>
        </div>

        {/* Location */}
        <div className="reveal delay-4 flex items-center gap-2 mt-16 text-sm text-white/70">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Rua Alferes Schimidt, 78 · Joinville, SC</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;