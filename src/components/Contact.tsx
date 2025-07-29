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
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos prontos para atendê-lo. Entre em contato conosco ou visite nossa barbearia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground whitespace-pre-line">{item.info}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Button key={index} variant="outline" className="justify-start gap-3 h-auto py-3 px-4">
                        <IconComponent className="h-5 w-5" />
                        <div className="text-left">
                          <div className="font-semibold">{social.label}</div>
                          <div className="text-xs text-muted-foreground">{social.handle}</div>
                        </div>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Nossa Localização</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.655208435702!2d-48.807446924582415!3d-26.27285147703436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb1004ce77c39%3A0x3d4b5a580455a09!2sBarbearia%20Premium!5e0!3m2!1spt-BR!2sbr!4v1753813720749!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Barbearia Premium"
                  />
                </div>
                <Button className="w-full mt-4" asChild>
                  <a 
                    href="https://maps.app.goo.gl/JpT9MR6PvDcPCzJa7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Ver no Google Maps
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Nome</label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="text-sm font-medium">Telefone</label>
                  <Input placeholder="(47) 99999-9999" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">E-mail</label>
                <Input type="email" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="text-sm font-medium">Serviço de Interesse</label>
                <Input placeholder="Corte, barba, combo..." />
              </div>
              <div>
                <label className="text-sm font-medium">Mensagem</label>
                <Textarea 
                  placeholder="Conte-nos como podemos ajudá-lo..."
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default Contact;