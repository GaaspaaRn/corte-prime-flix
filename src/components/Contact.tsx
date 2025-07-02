import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua das Palmeiras, 123\nCentro - São Paulo, SP\nCEP: 01234-567"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 99999-9999\n(11) 3333-4444"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Segunda a Sexta: 08:00 - 20:00\nSábado: 08:00 - 18:00\nDomingo: 09:00 - 15:00"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@barbeariapremium.com\nagendamento@barbeariapremium.com"
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", handle: "@barbeariapremium" },
    { icon: Facebook, label: "Facebook", handle: "Barbearia Premium" },
    { icon: MessageCircle, label: "WhatsApp", handle: "(11) 99999-9999" }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/10">
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
              <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
              <p className="text-muted-foreground">
                Preencha o formulário e entraremos em contato em até 2 horas.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nome Completo
                  </label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Telefone
                  </label>
                  <Input placeholder="(11) 99999-9999" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  E-mail
                </label>
                <Input type="email" placeholder="seu@email.com" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Serviço de Interesse
                </label>
                <Input placeholder="Ex: Corte Premium, Barba Completa..." />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Mensagem
                </label>
                <Textarea 
                  placeholder="Conte-nos como podemos ajudar você..."
                  rows={4}
                />
              </div>

              <Button size="lg" className="w-full shadow-glow">
                Enviar Mensagem
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Ou entre em contato direto pelo WhatsApp
              </div>
              
              <Button variant="outline" size="lg" className="w-full border-green-500/30 hover:border-green-500 text-green-400 hover:text-green-300">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: (11) 99999-9999
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground whitespace-pre-line">
                          {item.info}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Siga-nos nas Redes Sociais</CardTitle>
                <p className="text-muted-foreground">
                  Acompanhe nosso trabalho e receba dicas de estilo
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors">
                      <div className="flex items-center space-x-3">
                        <social.icon className="w-5 h-5 text-primary" />
                        <span className="font-medium">{social.label}</span>
                      </div>
                      <span className="text-muted-foreground">{social.handle}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold text-foreground">Localização</h3>
                    <p className="text-muted-foreground mt-2">
                      Centro de São Paulo
                    </p>
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
    </section>
  );
};

export default Contact;