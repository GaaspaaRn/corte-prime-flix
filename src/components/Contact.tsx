import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: MapPin,
    title: "Endereço",
    info: "Rua Alferes Schimidt, 78\nComasa - Joinville, SC\nCEP: 89202-070"
  }, {
    icon: Phone,
    title: "Telefone",
    info: "(47) 98898-4877\n(47) 3422-1234"
  }, {
    icon: Clock,
    title: "Horário",
    info: "Segunda a Sexta: 08:00 - 20:00\nSábado: 08:00 - 18:00\nDomingo: 09:00 - 15:00"
  }, {
    icon: Mail,
    title: "E-mail",
    info: "contato@barbeariapremiumjoinville.com\nagendamento@barbeariapremiumjoinville.com"
  }];
  const socialLinks = [{
    icon: Instagram,
    label: "Instagram",
    handle: "@barbeariapremiumjoinville"
  }, {
    icon: Facebook,
    label: "Facebook",
    handle: "Barbearia Premium Joinville"
  }, {
    icon: MessageCircle,
    label: "WhatsApp",
    handle: "(47) 98898-4877"
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
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Seu nome" />
                <Input placeholder="Seu telefone" />
              </div>
              <Input placeholder="Seu e-mail" />
              <Textarea placeholder="Sua mensagem..." rows={5} />
              <Button size="lg" className="w-full shadow-glow">
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-8 h-8 text-primary mb-3 mx-auto" />
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{item.info}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button key={index} variant="outline" size="sm" className="border-primary/30 hover:border-primary">
                      <social.icon className="w-4 h-4 mr-2" />
                      {social.handle}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6 mx-0">
                <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold text-foreground">Nossa Localização</h3>
                    <p className="text-muted-foreground mt-2">Rua Alferes Schimidt, 78 - Comasa</p>
                    <p className="text-muted-foreground">Joinville, SC</p>
                    <Button 
                      variant="outline" 
                      className="mt-4 border-primary/30 hover:border-primary"
                      onClick={() => window.open('https://maps.google.com/?q=Rua+Alferes+Schimidt,+78,+Comasa,+Joinville,+SC', '_blank')}
                    >
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