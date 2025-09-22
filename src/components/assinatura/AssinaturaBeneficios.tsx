import { Card } from "@/components/ui/card";
import { Clock, Crown, Sparkles, Infinity, MapPin, Shield } from "lucide-react";
const AssinaturaBeneficios = () => {
  const beneficios = [{
    icon: Infinity,
    title: "Acesso Ilimitado",
    description: "Quantas vezes quiser no mês. Sem limites, sem pressa, sem preocupação."
  }, {
    icon: Crown,
    title: "Experiência Premium",
    description: "Ambiente luxuoso, produtos de alta qualidade e atendimento VIP."
  }, {
    icon: Clock,
    title: "Máxima Praticidade",
    description: "Reunião de última hora? Aquele convite inesperado? Você está sempre pronto."
  }, {
    icon: Sparkles,
    title: "Exclusividade Total",
    description: "Esse plano não é para todos. Foi pensado para quem valoriza a imagem."
  }, {
    icon: MapPin,
    title: "Localização Prime",
    description: "No coração do Comasa, fácil acesso e estacionamento disponível."
  }, {
    icon: Shield,
    title: "Garantia Premium",
    description: "Satisfação garantida ou seu dinheiro de volta em 30 dias."
  }];
  return <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Por que escolher a 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Assinatura Premium?</span>
          </h2>
          
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => <Card key={index} className="p-8 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow/20 animate-fade-in-up group" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <beneficio.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{beneficio.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{beneficio.description}</p>
              </div>
            </Card>)}
        </div>

        {/* Call to Action Text */}
        <div className="mt-16 text-center animate-fade-in-up bg-gradient-card rounded-2xl p-8 border border-border/50">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            <span className="text-primary font-semibold">Imagine nunca mais se preocupar com o visual.</span> Precisa estar impecável para uma reunião ou para um encontro ou até para uma viagem de última hora? É só vir. Aqui na Barbearia Premium, você paga uma vez e tem acesso ilimitado aos nossos serviços. 
            <span className="text-primary font-semibold"> É liberdade, é praticidade, é experiência premium.</span>
          </p>
        </div>
      </div>
    </section>;
};
export default AssinaturaBeneficios;