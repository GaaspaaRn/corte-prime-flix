import { Star } from "lucide-react";

const AssinaturaProvaSocial = () => {
  const depoimentos = [
    {
      nome: "Airton Ferreira",
      texto: "Muito profissionalismo. Parabéns pela qualidade do serviço e atenção ao cliente. Transmitem tradição acompanhada de modernidade.",
      rating: 5,
      avatar: "/images/testimonials/airtonferreira.png"
    },
    {
      nome: "FR Multimarcas",
      texto: "Ambiente 100%, melhor atendimento que já presenciei, já recomendei para todos os amigos, parabéns!",
      rating: 5,
      avatar: "/images/testimonials/frmultimarcas.png"
    },
    {
      nome: "Fabio Manske",
      texto: "Atendimento, ambiente, corte tudo de excelente qualidade... recomendo demais.",
      rating: 5,
      avatar: "/images/testimonials/fabiomanske.png"
    },
    {
      nome: "Leandro Michalak",
      texto: "Ambiente e atendimento sensacional, profissional de qualidade e com muito talento, com certeza a melhor de Joinville.",
      rating: 5,
      avatar: "/images/testimonials/leandromichalak.png"
    },
    {
      nome: "Fernando Cracco",
      texto: "Ambiente muito bom e aconchegante, profissional de qualidade e atencioso.",
      rating: 5,
      avatar: "/images/testimonials/fernandocracco.png"
    },
    {
      nome: "Matheus Sapellini",
      texto: "Experiência ótima, atendimento e qualidade nota 10! Ambiente muito agradável e aconchegante!",
      rating: 5,
      avatar: "/images/testimonials/matheussapellini.png"
    }
  ];

  return (
    <section className="py-32 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6">
            Feedbacks
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            O que dizem nossos <span className="text-gold-gradient">clientes.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            +100 homens já transformaram sua rotina com nossa assinatura ilimitada.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className={`reveal delay-${Math.min(index + 1, 5)} p-8 rounded-3xl border border-border bg-card hover:border-primary/30 transition-all duration-300`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(depoimento.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed text-sm mb-6">
                "{depoimento.texto}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 shrink-0 rounded-full bg-secondary flex items-center justify-center overflow-hidden border border-border">
                  {depoimento.avatar ? (
                    <img src={depoimento.avatar} alt={depoimento.nome} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xs font-bold text-muted-foreground">{depoimento.nome.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{depoimento.nome}</p>
                  <p className="text-xs text-primary">Assinante Premium</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssinaturaProvaSocial;
