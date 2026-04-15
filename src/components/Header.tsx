import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/90 backdrop-blur-xl border-b border-border' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/images/logo/logo-principal.png"
              alt="Barbearia Premium"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#gallery" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300">Serviços</a>
            <a href="/#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300">Sobre</a>
            <a href="/assinatura" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300">Assinatura</a>
          </nav>

          {/* Desktop CTA */}
          <Button 
            className="hidden md:flex bg-gradient-gold text-primary-foreground font-bold text-xs uppercase tracking-[0.05em] px-6 py-2 h-auto rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-300" 
            onClick={() => window.open(`https://wa.me/5547988984877?text=${encodeURIComponent('Olá! Gostaria de agendar um horário na Barbearia Premium.')}`, '_blank')}
          >
            Agendar Horário
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-foreground">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background border-border">
              <div className="flex flex-col space-y-6 mt-8">
                <a href="/#gallery" className="text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  Serviços
                </a>
                <a href="/#about" className="text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  Sobre
                </a>
                <a href="/assinatura" className="text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  Assinatura
                </a>
                <div className="pt-6 border-t border-border">
                  <Button 
                    className="w-full bg-gradient-gold text-primary-foreground font-bold text-sm uppercase tracking-[0.05em] py-5 h-auto rounded-full" 
                    onClick={() => {
                      window.open(`https://wa.me/5547988984877?text=${encodeURIComponent('Olá! Gostaria de agendar um horário na Barbearia Premium.')}`, '_blank');
                      setIsOpen(false);
                    }}
                  >
                    Agendar Horário
                  </Button>
                </div>
                <div className="pt-4 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>(47) 98898-4877</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
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
