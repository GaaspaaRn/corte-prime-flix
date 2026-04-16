import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AssinaturaFAQ = () => {
  const faqs = [
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento é feito via cartão de crédito e cobrado mensalmente, de forma automática — como uma assinatura de Netflix ou Spotify."
    },
    {
      question: "Tem multa de cancelamento ou fidelidade?",
      answer: "Não. Você pode cancelar sua assinatura a qualquer momento, sem nenhuma taxa extra ou multa. Sem pegadinhas."
    },
    {
      question: "Posso ir quantas vezes quiser no mês?",
      answer: "Sim! Dentro do mês vigente da sua assinatura, você pode utilizar os serviços cobertos pelo seu plano de forma ilimitada. Basta agendar."
    },
    {
      question: "O café expresso é liberado mesmo?",
      answer: "Sim! Em todas as suas visitas, garantimos um café expresso como cortesia da casa."
    },
    {
      question: "Qual plano é o mais indicado?",
      answer: "O Premium Completo (R$ 149,90) é perfeito para quem faz cabelo e barba. Fazendo as contas, se você for 2+ vezes no mês, o plano já se paga."
    },
    {
      question: "Quais são as opções mais acessíveis?",
      answer: "Temos o Premium Cabelo por R$ 89,90 e o Premium Barba por R$ 79,90. Ambos com acesso ilimitado ao serviço escolhido."
    }
  ];

  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ainda com <span className="text-gold-gradient">dúvidas?</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="reveal delay-1">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left text-base font-semibold hover:text-primary transition-colors py-6 [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AssinaturaFAQ;
