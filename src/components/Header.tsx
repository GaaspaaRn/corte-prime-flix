import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Clock } from "lucide-react";
import { useState } from "react";
// O import do 'next/link' foi removido

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/logo/logo-principal.png" 
              alt="Barbearia Premium" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#gallery" className="text-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="/#about" className="text-foreground hover:text-primary transition-colors">Sobre</a>
            {/* VOLTOU A SER UMA TAG <a> */}
            <a href="/assinatura" className="text-foreground hover:text-primary transition-colors">Assinatura</a>
          </nav>

          {/* Desktop CTA Button */}
          <Button variant="default" className="hidden md:flex shadow-glow" onClick={() => window.open('https://sites.appbarber.com.br/BarbeariaPremiumjlle', '_blank')}>
            Agendar Horário
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <a href="/#gallery" className="text-lg text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  Serviços
                </a>
                <a href="/#about" className="text-lg text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  Sobre
                </a>
                {/* VOLTOU A SER UMA TAG <a> */}
                <a href="/assinatura" className="text-lg text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  Assinatura
                </a>
                <div className="pt-4 border-t border-border">
                  <Button variant="default" className="w-full shadow-glow" onClick={() => {
                  window.open('https://sites.appbarber.com.br/BarbeariaPremiumjlle', '_blank');
                  setIsOpen(false);
                }}>
                    Agendar Horário
                  </Button>
                </div>
                <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>(47) 98898-4877</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>09:00 - 20:00</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
