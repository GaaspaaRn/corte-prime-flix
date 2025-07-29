import { Scissors, MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gradient-to-t from-secondary/20 to-background border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Scissors className="w-8 h-8 text-primary" />
                <div className="absolute -inset-1 bg-gradient-accent rounded-full opacity-20 blur-sm"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-primary tracking-wide">
                  BARBEARIA
                </h3>
                <span className="text-xs text-muted-foreground tracking-widest">PREMIUM</span>
              </div>
            </div>
            <p className="text-muted-foreground">Sempre oferecendo o melhor em cuidados masculinos, combinando tradição e modernidade em cada atendimento.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Corte Clássico</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Corte Premium</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Barba Completa</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Combo Completo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tratamentos Especiais</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Produtos Premium</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Galeria</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <div>
                  <p>Rua Alferes Schmidt 78</p>
                  <p>Comasa - Joinville, SC</p>
                  
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <div>
                  <p>(47) 98898-4877</p>
                  
                </div>
              </div>

              <div className="flex items-center space-x-2">
                
                
              </div>

              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-primary mt-1" />
                <div>
                  <p>Segunda: 14:00 - 20:00</p>
                  <p>Terça a Sexta: 09:00 - 20:00</p>
                  <p>Sábado: 08:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left text-muted-foreground">
              <p>© 2025 Barbearia Premium. Todos os direitos reservados.</p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">FAQ</a>
            </div>
          </div>

          {/* Recognition */}
          <div className="text-center mt-8 text-muted-foreground">
            <p className="text-sm">🏆 A Melhor Barbearia de Joinville | ⭐ 5/5 no Google</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;