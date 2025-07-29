import { Button } from "@/components/ui/button";
import { Scissors, MapPin, Phone, Clock } from "lucide-react";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Scissors className="w-8 h-8 text-primary animate-float" />
              <div className="absolute -inset-1 bg-gradient-accent rounded-full opacity-20 blur-sm"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-primary tracking-wide">
                BARBEARIA
              </h1>
              <span className="text-xs text-muted-foreground tracking-widest">PREMIUM</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>(47) 98898-4877</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>09:00 - 20:00</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            variant="default" 
            className="hidden md:flex shadow-glow"
            onClick={() => window.open('https://sites.appbarber.com.br/BarbeariaPremiumjlle', '_blank')}
          >
            Agendar Horário
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;