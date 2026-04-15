import { Infinity, Coffee, Crown, ShieldCheck, Scissors, MapPin } from "lucide-react";

const AssinaturaBeneficios = () => {
  const beneficios = [
    {
      icon: Infinity,
      title: "Acesso Ilimitado",
      description: "Corte e barba toda semana. Sem limites, sem restrições."
    },
    {
      icon: Coffee,
      title: "Café Expresso Cortesia",
      description: "Um café expresso quentinho por nossa conta em toda visita."
    },
    {
      icon: Crown,
      title: "Atendimento VIP",
      description: "Prioridade de agendamento e atendimento diferenciado."
    },
    {
      icon: ShieldCheck,
      title: "Zero Fidelidade",
      description: "Cancele a qualquer momento, sem multa ou taxa."
    },
    {
      icon: Scissors,
      title: "Produtos Premium",
      description: "As melhores marcas nacionais e importadas em todos os serviços."
    },
    {
      icon: MapPin,
      title: "Localização Prime",
      description: "Coração do Comasa, fácil acesso e estacionamento."
    }
  ];

  return (
    <section className="py-32 px-6 bg-background relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6">
            ✦ Diferenciais Exclusivos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Por que escolher o <span className="text-gold-gradient">clube Premium?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Muito mais do que cortes de cabelo. Uma experiência completa para homens exigentes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((beneficio, index) => {
            const Icon = beneficio.icon;
            return (
              <div 
                key={index} 
                className={`reveal delay-${Math.min(index + 1, 5)} group p-8 rounded-3xl border border-border bg-card hover:border-primary/40 transition-all duration-300`}
              >
                <div className="mb-5">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {beneficio.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {beneficio.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default AssinaturaBeneficios;
