import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
const AssinaturaProvaSocial = () => {
  const depoimentos = [{
    nome: "Roberto Silva",
    texto: "Melhor decisão que tomei! Antes gastava mais de R$200 por mês indo em várias barbearias. Agora pago R$139 e tenho acesso ilimitado ao melhor serviço de Joinville.",
    rating: 5
  }, {
    nome: "Marcos Oliveira",
    texto: "Trabalho com vendas e minha imagem é fundamental. Com a assinatura, nunca mais me preocupo em estar sempre impecável para reuniões importantes.",
    rating: 5
  }, {
    nome: "Fernando Costa",
    texto: "A praticidade é incrível. Tenho agenda corrida e aqui consigo encaixar um horário facilmente. O atendimento VIP faz toda diferença.",
    rating: 5
  }, {
    nome: "Carlos Mendes",
    texto: "No início pensei que era caro, mas fazendo as contas percebi que economizo muito. Além disso, a qualidade é incomparável.",
    rating: 5
  }, {
    nome: "João Santos",
    texto: "Sou assinante há 6 meses e não consigo mais imaginar minha vida sem esse serviço. É liberdade total para cuidar da aparência.",
    rating: 5
  }, {
    nome: "Ricardo Almeida",
    texto: "Recomendo para todos os meus colegas. O ambiente é top, os profissionais são excelentes e o custo-benefício é imbatível.",
    rating: 5
  }];
  return <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O que nossos 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> clientes premium </span>
            estão dizendo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 200 homens já transformaram sua rotina com nossa assinatura ilimitada
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow/20 animate-fade-in-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="space-y-4">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/50" />
                
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(depoimento.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{depoimento.texto}"
                </p>
                
                {/* Author */}
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">{depoimento.nome}</p>
                  <p className="text-sm text-primary">Cliente Premium</p>
                </div>
              </div>
            </Card>)}
        </div>

        {/* Stats */}
        
      </div>
    </section>;
};
export default AssinaturaProvaSocial;