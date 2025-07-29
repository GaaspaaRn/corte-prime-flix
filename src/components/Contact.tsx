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
        

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            

            {/* Social Media */}
            

            {/* Map Placeholder */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6 mx-0">
                <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center overflow-hidden">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.655208435702!2d-48.807446924582415!3d-26.27285147703436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb1004ce77c39%3A0x3d4b5a580455a09!2sBarbearia%20Premium!5e0!3m2!1spt-BR!2sbr!4v1753813720749!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização da Barbearia Premium - Rua Alferes Schimidt 78, Comasa, Joinville" className="rounded-lg" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;