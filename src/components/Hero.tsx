import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero/background-hero.webp" 
          alt="Barbearia Premium" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Netflix-style overlay covering entire hero */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-lg animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-foreground">BARBEARIA</span>
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              PREMIUM
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            Onde o estilo encontra a tradição
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            Experimente o melhor em cortes masculinos, barbas e cuidados premium em um ambiente sofisticado e acolhedor.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center animate-fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg shadow-glow"
              onClick={() => window.open('https://sites.appbarber.com.br/BarbeariaPremiumjlle', '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Agora
            </Button>
          </div>

          {/* Location Info */}
          <div className="flex items-center justify-center mt-12 text-muted-foreground animate-fade-in-up" style={{
          animationDelay: '0.8s'
        }}>
            <MapPin className="w-5 h-5 mr-2 text-primary" />
            <span>Joinville, SC - Zona Leste</span>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>;
};
export default Hero;