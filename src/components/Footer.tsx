import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import "./GruvButton.css";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-secondary/20 to-background border-t border-border/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-2">
            <div className="flex items-center">
              <img
                src="/images/logo/logo-principal.png"
                alt="Barbearia Premium"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Sempre oferecendo o melhor em cuidados masculinos, combinando tradição e modernidade em cada atendimento.
            </p>
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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="https://barbeariapm.com/#home" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="https://barbeariapm.com/#gallery" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="https://barbeariapm.com/#about" className="hover:text-primary transition-colors">Sobre Nós</a></li>
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

            {/* GRÜV Button */}
            <div className="dev-label-container gruv-button-wrapper" style={{ marginBottom: "0.5rem", marginTop: 0 }}>
              <span className="text-muted-foreground">Desenvolvido por</span>
              <a
                href="https://gruvlabel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gruv-button"
              >
                <span className="gruv-button-inner">GRÜV</span>
              </a>
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
    </footer>
  );
};

export default Footer;

