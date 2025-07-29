import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: MapPin,
    title: "Endereço",
    info: "Rua das Palmeiras, 123\nCentro - São Paulo, SP\nCEP: 01234-567"
  }, {
    icon: Phone,
    title: "Telefone",
    info: "(11) 99999-9999\n(11) 3333-4444"
  }, {
    icon: Clock,
    title: "Horário",
    info: "Segunda a Sexta: 08:00 - 20:00\nSábado: 08:00 - 18:00\nDomingo: 09:00 - 15:00"
  }, {
    icon: Mail,
    title: "E-mail",
    info: "contato@barbeariapremium.com\nagendamento@barbeariapremium.com"
  }];
  const socialLinks = [{
    icon: Instagram,
    label: "Instagram",
    handle: "@barbeariapremium"
  }, {
    icon: Facebook,
    label: "Facebook",
    handle: "Barbearia Premium"
  }, {
    icon: MessageCircle,
    label: "WhatsApp",
    handle: "(11) 99999-9999"
  }];
  return <section id="contact" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para atender você da melhor forma. Agende seu horário ou tire suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            

            {/* Social Media */}
            

            {/* Map Placeholder */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6 mx-0">
                <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold text-foreground">Localização</h3>
                    <p className="text-muted-foreground mt-2">Zona Leste de Joinville</p>
                    <Button variant="outline" className="mt-4 border-primary/30 hover:border-primary">
                      Ver no Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;