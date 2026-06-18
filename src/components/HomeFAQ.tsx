import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const HomeFAQ = () => {
  const faqs = [
    {
      question: "Onde fica a melhor barbearia de Joinville?",
      answer: "A Barbearia Premium Joinville fica na Rua Alferes Schmidt, 78, no bairro Comasa, em Joinville - SC, CEP 89228-300. Somos referência em cortes masculinos na região do Comasa, Boa Vista, Iririú, Aventureiro e toda a zona leste de Joinville."
    },
    {
      question: "Qual o horário de funcionamento da barbearia?",
      answer: "Nosso horário de funcionamento é: Segunda-feira das 14h às 20h, Terça a Sexta-feira das 9h às 20h, e Sábados das 8h às 16h. Aos domingos permanecemos fechados."
    },
    {
      question: "Preciso agendar horário para cortar cabelo em Joinville?",
      answer: "Não é obrigatório, mas para evitar filas recomendamos o agendamento para garantir seu atendimento sem espera. Você pode agendar facilmente pelo nosso WhatsApp: (47) 98898-4877. Basta enviar uma mensagem e escolher o melhor horário."
    },
    {
      question: "Quais serviços de barbearia vocês oferecem?",
      answer: "Oferecemos uma variedade completa de serviços masculinos: Corte de cabelo (R$ 40), Barba completa com toalha quente (R$ 35), Combo Cabelo + Barba (R$ 70), Barba na máquina (R$ 25), Sobrancelha, Hidratação capilar e Selagem capilar. Todos com produtos premium e profissionais com mais de 5 anos de experiência."
    },
    {
      question: "Quanto custa um corte de cabelo masculino em Joinville?",
      answer: "Na Barbearia Premium Joinville, o corte de cabelo masculino custa R$ 40,00 e inclui lavagem, corte personalizado (degradê, fade, undercut ou clássico) e finalização com produtos de alta qualidade. Nosso combo Cabelo + Barba sai por R$ 70,00 — o melhor custo-benefício da região."
    },
    {
      question: "Como funciona o clube de assinatura da barbearia?",
      answer: "Nosso clube de assinatura oferece cortes e/ou barbas ilimitados durante o mês. Temos três planos: Premium Barba (R$ 79,90/mês), Premium Cabelo (R$ 89,90/mês) e Premium Completo Cabelo + Barba (R$ 149,90/mês). Sem fidelidade e sem multa de cancelamento — funciona como um Netflix de barbearia."
    },
    {
      question: "Quais formas de pagamento a barbearia aceita?",
      answer: "Aceitamos diversas formas de pagamento: PIX, Cartão de Crédito, Cartão de Débito e Dinheiro. Para o clube de assinatura, o pagamento é feito via cartão de crédito com cobrança mensal automática."
    },
    {
      question: "Por que a Barbearia Premium é considerada a melhor de Joinville?",
      answer: "Com mais de 5 anos de experiência, nota 5.0 no Google, e mais de 130 assinantes ativos, somos referência em cortes masculinos em Joinville. Oferecemos um ambiente premium, profissionais qualificados, café expresso cortesia em todas as visitas, e utilizamos apenas produtos de primeira linha."
    }
  ];

  return (
    <section
      id="faq"
      className="py-32 px-6 bg-card/30"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Dúvidas sobre a <span className="text-gold-gradient">Barbearia?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Tudo o que você precisa saber sobre a melhor barbearia de Joinville.
          </p>
        </div>

        {/* Accordion */}
        <div className="reveal delay-1">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-b border-border"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:text-primary transition-colors py-6 [&[data-state=open]]:text-primary">
                  <span itemProp="name">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent
                  className="text-muted-foreground leading-relaxed pb-6"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <span itemProp="text">{faq.answer}</span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA below FAQ */}
        <div className="text-center mt-12 reveal delay-2">
          <p className="text-muted-foreground mb-4 text-sm">
            Ainda tem dúvidas? Fale com a gente!
          </p>
          <a
            href={`https://wa.me/5547988984877?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre a Barbearia Premium.')}&utm_source=site&utm_medium=button&utm_campaign=faq&utm_content=duvida_faq`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-bold text-sm uppercase tracking-[0.05em] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            onClick={() => {
              if (typeof (window as any).gtag !== 'undefined') {
                (window as any).gtag('event', 'click_whatsapp', { location: 'faq' });
              }
            }}
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
