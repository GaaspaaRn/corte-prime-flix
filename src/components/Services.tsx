import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Zap, Crown, Brush, Timer, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Corte Clássico",
      description: "Cortes tradicionais com técnicas modernas e acabamento perfeito",
      price: "R$ 45",
      duration: "45 min",
      features: ["Lavagem", "Corte", "Finalização", "Styling"]
    },
    {
      icon: Crown,
      title: "Corte Premium",
      description: "Experiência completa com corte personalizado e tratamentos especiais",
      price: "R$ 80",
      duration: "60 min",
      features: ["Consulta", "Lavagem premium", "Corte personalizado", "Massagem", "Styling premium"],
      featured: true
    },
    {
      icon: Brush,
      title: "Barba Completa",
      description: "Aparar, modelar e finalizar sua barba com produtos premium",
      price: "R$ 35",
      duration: "30 min",
      features: ["Limpeza", "Aparar", "Modelagem", "Hidratação"]
    },
    {
      icon: Zap,
      title: "Combo Completo",
      description: "Corte + Barba + Tratamentos especiais para um visual impecável",
      price: "R$ 120",
      duration: "90 min",
      features: ["Corte premium", "Barba completa", "Sobrancelha", "Massagem", "Produtos premium"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada serviço é uma experiência única, pensada para realçar o melhor do seu estilo
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`
                group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-card
                ${service.featured ? 'ring-2 ring-primary/50 shadow-glow' : ''}
                bg-gradient-card border-border/50
              `}
            >
              {service.featured && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                  POPULAR
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Timer className="w-3 h-3 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-3 h-3 text-primary mr-2 fill-current" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${service.featured ? 'shadow-glow' : ''}`}
                  variant={service.featured ? 'default' : 'outline'}
                  onClick={() => window.open('https://sites.appbarber.com.br/BarbeariaPremiumjlle', '_blank')}
                >
                  Agendar Serviço
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-muted-foreground mb-4">
            <Star className="w-5 h-5 text-primary fill-current" />
            <span>Satisfação garantida ou seu dinheiro de volta</span>
            <Star className="w-5 h-5 text-primary fill-current" />
          </div>
          <Button size="lg" className="shadow-glow">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;