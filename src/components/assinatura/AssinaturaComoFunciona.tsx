import { ClipboardCheck, CalendarClock, PartyPopper } from "lucide-react";

const AssinaturaComoFunciona = () => {
  const passos = [
    {
      numero: "01",
      titulo: "ASSINE",
      descricao: "Escolha seu plano e conclua seu cadastro em menos de 2 minutos.",
      icon: ClipboardCheck,
    },
    {
      numero: "02",
      titulo: "AGENDE",
      descricao: "Abra o APP, veja a agenda e marque seu horário em segundos, 24h por dia.",
      icon: CalendarClock,
    },
    {
      numero: "03",
      titulo: "APROVEITE",
      descricao: "Corte ilimitado, cerveja gelada e zero preocupação na entrada e na saída.",
      icon: PartyPopper,
    },
  ];

  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6">
            Simples e Rápido
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Como <span className="text-gold-gradient">funciona?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Em 3 passos simples você começa a aproveitar todos os benefícios do clube.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[72px] left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" aria-hidden="true" />

          {passos.map((passo, index) => {
            const Icon = passo.icon;
            return (
              <div
                key={index}
                className={`reveal delay-${index + 1} group relative flex flex-col items-center text-center`}
              >
                {/* Step number circle */}
                <div className="relative mb-8">
                  {/* Glow ring on hover */}
                  <div className="absolute -inset-3 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all duration-500 blur-xl" />
                  <div className="relative w-[88px] h-[88px] rounded-full border-2 border-primary/30 group-hover:border-primary/60 bg-card flex items-center justify-center transition-all duration-500">
                    {/* Gold gradient number */}
                    <span className="text-2xl font-black text-gold-gradient select-none">
                      {passo.numero}
                    </span>
                  </div>
                  {/* Small icon badge */}
                  <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-background border border-primary/40 flex items-center justify-center shadow-lg">
                    <Icon className="h-4 w-4 text-primary" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-foreground mb-3 transition-colors duration-300">
                  {passo.titulo}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[260px]">
                  {passo.descricao}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AssinaturaComoFunciona;
