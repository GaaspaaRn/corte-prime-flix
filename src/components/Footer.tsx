import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import "./GruvButton.css";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src="/images/logo/logo-principal.png"
              alt="Barbearia Premium"
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sempre oferecendo o melhor em cuidados masculinos, combinando tradição e modernidade em cada atendimento.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/barbeariapremiumjoinville/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61580976826725" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5547988984877?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20barbearia." target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-foreground mb-5">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="https://www.barbeariapm.com/#home" className="hover:text-primary transition-colors duration-300">Início</a></li>
              <li><a href="https://www.barbeariapm.com/#gallery" className="hover:text-primary transition-colors duration-300">Serviços</a></li>
              <li><a href="https://www.barbeariapm.com/#about" className="hover:text-primary transition-colors duration-300">Sobre Nós</a></li>
              <li><a href="/assinatura" className="hover:text-primary transition-colors duration-300">Assinatura</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-foreground mb-5">Contato</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p>Rua Alferes Schmidt 78</p>
                  <p>Comasa - Joinville, SC</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <p>(47) 98898-4877</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-foreground mb-5">Horários</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p>Segunda: 14:00 - 20:00</p>
                  <p>Terça a Sexta: 09:00 - 20:00</p>
                  <p>Sábado: 08:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Barbearia Premium. Todos os direitos reservados.
            </p>

            {/* GRÜV Button */}
            <div className="dev-label-container gruv-button-wrapper" style={{ marginBottom: "0.5rem", marginTop: 0 }}>
              <span className="text-muted-foreground text-sm">Desenvolvido por</span>
              <a href="https://gruvlabel.com" target="_blank" rel="noopener noreferrer" className="gruv-button">
                <span className="gruv-button-inner">GRÜV</span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <span className="text-border">·</span>
              <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
