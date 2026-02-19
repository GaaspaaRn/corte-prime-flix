import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Scissors, Sparkles } from "lucide-react";
const AssinaturaPlanos = () => {
  const planos = [{
    id: 'barba',
    name: 'Premium Barba',
    subtitle: 'ILIMITADO',
    price: '69,90',
    icon: Sparkles,
    popular: false,
    features: ['Barba completa ilimitada', 'Produtos premium inclusos', 'Atendimento personalizado', 'Sem multa/fidelidade'],
    ctaText: 'Ver detalhes do Plano'
  }, {
    id: 'cabelo',
    name: 'Premium Cabelo',
    subtitle: 'ILIMITADO',
    price: '79,90',
    icon: Scissors,
    popular: false,
    features: ['Corte masculino ilimitado', 'Produtos premium inclusos', 'Atendimento personalizado', 'Sem multa/fidelidade'],
    ctaText: 'Ver detalhes do Plano'
  }, {
    id: 'completo',
    name: 'Premium Completo',
    subtitle: 'CABELO + BARBA ILIMITADO',
    price: '139,90',
    icon: Crown,
    popular: true,
    features: ['Cabelo + Barba ilimitados', 'Todos os produtos e serviços inclusos', 'Atendimento VIP exclusivo', 'Sem multa/fidelidade'],
    ctaText: 'Ver detalhes do Plano'
  }];
  const handlePlanoClick = (planoId: string) => {
    // Here you would integrate with your payment system
    window.open('https://wa.me/5547988984877?text=Olá! Gostaria de assinar o plano ' + planoId, '_blank');
  };
  return <section id="planos" className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Faça parte da 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Barbearia Premium </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Clube ilimitado pensado para quem entende que a imagem não é custo, é investimento.</p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {planos.map((plano, index) => <Card key={plano.id} className={`relative p-8 bg-gradient-card border transition-all duration-300 hover:shadow-glow/20 animate-fade-in-up ${plano.popular ? 'border-primary/50 shadow-glow/30 scale-105 lg:scale-110' : 'border-border/50 hover:border-primary/30'}`} style={{
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Popular Badge */}
              {plano.popular && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                  MAIS POPULAR
                </Badge>}

              <div className="text-center space-y-6">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl ${plano.popular ? 'bg-primary/20' : 'bg-primary/10'}`}>
                  <plano.icon className={`h-8 w-8 ${plano.popular ? 'text-primary' : 'text-primary'}`} />
                </div>

                {/* Plan Name */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plano.name}</h3>
                  <p className="text-sm text-primary font-semibold">{plano.subtitle}</p>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold text-foreground">R$</span>
                    <span className="text-5xl font-bold text-foreground">{plano.price}</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Cobrado mensalmente</p>
                </div>

                {/* Features */}
                <div className="space-y-3 text-left">
                  {plano.features.map((feature, idx) => <div key={idx} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>)}
                </div>

                {/* CTA Button */}
                <Button onClick={() => handlePlanoClick(plano.id)} className={`w-full font-bold py-6 h-auto rounded-xl transition-all duration-300 ${plano.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow/80 hover:scale-105' : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground hover:border-primary/50'}`} variant={plano.popular ? 'default' : 'secondary'}>
                  {plano.ctaText}
                </Button>
              </div>
            </Card>)}
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>;
};
export default AssinaturaPlanos;
