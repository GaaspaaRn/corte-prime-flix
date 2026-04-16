import { Button } from "@/components/ui/button";
import { Check, Star, Users } from "lucide-react";

const AssinaturaPlanos = () => {
  const planos = [
    {
      id: 'barba',
      name: 'Premium Barba',
      subtitle: 'BARBA ILIMITADA',
      price: '79,90',
      popular: false,
      features: [
        'Barba completa ilimitada',
        'Estilização avançada',
        'Café expresso cortesia',
        'Produtos premium inclusos',
        'Atendimento prioritário',
        'Sem multa · Sem fidelidade'
      ],
      ctaText: 'Assinar Plano Barba'
    },
    {
      id: 'completo',
      name: 'Premium VIP',
      subtitle: 'CABELO + BARBA ILIMITADO',
      price: '149,90',
      popular: true,
      features: [
        'Cabelo + Barba ilimitados',
        'Lavagem com massagem inclusa',
        'Finalização com pomadas premium',
        'Café expresso cortesia sempre',
        'Prioridade máxima no agendamento',
        'Sem multa · Sem fidelidade'
      ],
      ctaText: 'ASSINAR PLANO VIP'
    },
    {
      id: 'cabelo',
      name: 'Premium Cabelo',
      subtitle: 'CABELO ILIMITADO',
      price: '89,90',
      popular: false,
      features: [
        'Corte masculino ilimitado',
        'Lavagem e finalização',
        'Café expresso cortesia',
        'Produtos premium inclusos',
        'Atendimento prioritário',
        'Sem multa · Sem fidelidade'
      ],
      ctaText: 'Assinar Plano Cabelo'
    }
  ];

  const handlePlanoClick = (planoId: string) => {
    let message = 'Olá! Gostaria de assinar o plano ';
    if (planoId === 'completo') message += 'Premium Completo (R$149,90)';
    if (planoId === 'cabelo') message += 'Premium Cabelo (R$89,90)';
    if (planoId === 'barba') message += 'Premium Barba (R$79,90)';
    window.open(`https://wa.me/5547988984877?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="planos" className="py-32 px-6 bg-background relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6">
            Planos de Assinatura
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Escolha o seu <span className="text-gold-gradient">nível.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10">
            Sem fidelidade. Cancele quando quiser. Sem multa.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {planos.map((plano, index) => {
            const isPopular = plano.popular;

            return (
              <div
                key={plano.id}
                className={`reveal delay-${index + 1} relative rounded-3xl p-8 md:p-10 transition-all duration-500 flex flex-col ${isPopular
                    ? 'bg-card border border-primary/40 shadow-glow lg:scale-[1.03] z-10'
                    : 'bg-card border border-border hover:border-border/80'
                  }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-gold text-primary-foreground px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.1em] shadow-card whitespace-nowrap">
                      O MAIS ESCOLHIDO
                    </span>
                  </div>
                )}

                <div className="flex flex-col flex-grow">
                  {/* Name */}
                  <div className="mb-8 mt-4">
                    <h3 className="text-2xl font-black tracking-tight text-foreground">{plano.name}</h3>
                    <p className="text-xs font-bold text-primary uppercase tracking-[0.15em] mt-2">{plano.subtitle}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 pb-8 border-b border-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-base font-bold text-foreground/60">R$</span>
                      <span className="text-5xl font-black text-foreground tracking-tight">{plano.price}</span>
                      <span className="text-sm text-muted-foreground font-medium">/mês</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 flex-grow mb-10">
                    {plano.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${isPopular ? 'text-primary' : 'text-muted-foreground'}`} strokeWidth={2.5} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handlePlanoClick(plano.id)}
                    className={`w-full font-bold text-sm uppercase tracking-[0.05em] py-6 h-auto rounded-full transition-all duration-300 ${isPopular
                        ? 'bg-gradient-gold text-primary-foreground hover:scale-[1.02] active:scale-[0.98] hover:shadow-glow'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-primary'
                      }`}
                    variant={isPopular ? 'default' : 'secondary'}
                  >
                    {plano.ctaText}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Social Proof After Plans */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
          <div className="flex items-center gap-6 bg-card/60 border border-border/50 px-6 py-3 rounded-full backdrop-blur-md shadow-[0_0_40px_-15px_rgba(212,175,55,0.2)]">
            <div className="flex -space-x-2">
              {['airtonferreira.png', 'frmultimarcas.png', 'fabiomanske.png', 'leandromichalak.png'].map((img, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center overflow-hidden shrink-0">
                  <img src={`/images/testimonials/${img}`} alt="Cliente Premium" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 text-primary fill-primary" />
                <span className="font-semibold text-foreground">5.0</span>
              </div>
              <span className="text-border">|</span>
              <div className="flex items-center gap-1">
                <Users className="h-3.5 w-3.5 text-primary" />
                <span className="font-semibold text-foreground">+100 assinantes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssinaturaPlanos;
