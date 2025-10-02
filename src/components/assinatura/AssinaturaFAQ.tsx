import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
const AssinaturaFAQ = () => {
  const faqs = [{
    question: "Realmente é ilimitado? Posso vir quantas vezes quiser?",
    answer: "Sim! É completamente ilimitado. Você pode vir quantas vezes quiser durante o mês, sem restrições. Queremos que você sempre esteja com o visual perfeito."
  }, {
    question: "Posso cancelar quando quiser?",
    answer: "Claro! Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento, sem taxas ou multas. Basta avisar com 30 dias de antecedência."
  }, {
    question: "Funciona em qualquer unidade da Barbearia Premium?",
    answer: "Atualmente temos apenas uma unidade premium em Joinville (Comasa). Sua assinatura é válida exclusivamente para nossa unidade principal, onde garantimos o mais alto padrão de qualidade."
  }, {
    question: "Preciso agendar ou posso chegar a qualquer hora?",
    answer: "Recomendamos agendar para garantir seu horário, especialmente em períodos de maior movimento. Assinantes premium têm prioridade no agendamento."
  }, {
    question: "Que serviços estão inclusos na assinatura?",
    answer: "Depende do seu plano: Barba (R$69,90) inclui todos os serviços de barba. Cabelo (R$79,90) inclui todos os serviços de corte. Completo (R$139,90) inclui tudo: cabelo, barba, lavagem, finalização e produtos premium."
  }, {
    question: "Os produtos utilizados são de qualidade premium?",
    answer: "Absolutamente! Trabalhamos apenas com produtos de marcas premium nacionais e importadas. Todos os produtos aplicados durante os serviços estão inclusos na assinatura."
  }];
  return <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium text-sm">DÚVIDAS FREQUENTES</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tire todas as suas 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> dúvidas</span>
          </h2>
          
        </div>

        {/* FAQ Accordion */}
        <div className="animate-fade-in-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-gradient-card border border-border/50 rounded-lg px-6 hover:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-gradient-card border border-border/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ainda tem alguma dúvida?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5547988984877?text=Olá,%20estou%20em%20dúvida%20sobre%20os%20planos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors">
                Falar no WhatsApp
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AssinaturaFAQ;
