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
  return;
};
export default Contact;