import { Card } from "@/components/ui/card";
import { Crown, Infinity, MapPin } from "lucide-react"; // Removidos os ícones que não são mais usados

const AssinaturaBeneficios = () => {
  // Array de benefícios atualizado, com os itens removidos
  const beneficios = [{
    icon: Infinity,
    title: "Acesso Ilimitado",
    description: "Corte quantas vezes quiser no mês. Sem limites e sem preocupação."
  }, {
    icon: Crown,
    title: "Experiência Premium",
    description: "Ambiente luxuoso, produtos de alta qualidade e atendimento VIP."
  }, {
    icon: MapPin,
    title: "Localização Prime",
    description: "No coração do Comasa, fácil acesso e estacionamento disponível."
  }];
  return <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Por que escolher 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> o clube Premium?</span>
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
        
      </div>
    </section>;
};
export default AssinaturaBeneficios;
