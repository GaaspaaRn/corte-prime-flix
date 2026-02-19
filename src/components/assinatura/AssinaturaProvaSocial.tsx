import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
const AssinaturaProvaSocial = () => {
  const depoimentos = [{
    nome: "Airton Ferreira",
    texto: "Muito profissionalismo. Parabéns pela qualidade do serviço e atenção ao cliente. Transmitem tradição acompanhada de modernidade.",
    rating: 5
  }, {
    nome: "FR Multimarcas",
    texto: "Ambiente 100%, melhor atendimento que ja presenciei, ja recomendei para todos os amigos, parabens",
    rating: 5
  }, {
    nome: "Fabio Manske",
    texto: "Atendimento, ambiente, corte tudo de excelente qualidade....recomendo demais",
    rating: 5
  }, {
    nome: "Leandro Michalak Da Silva",
    texto: "Ambiente e atendimento sensacional, profissional de qualidade e com muito talento, com certeza a melhor de Joinville região, Top demais",
    rating: 5
  }, {
    nome: "Fernando Cracco",
    texto: "Ambiente muito bom e aconchegante, profissional de qualidade e atencioso.",
    rating: 5
  }, {
    nome: "Matheus Sapellini",
    texto: "Experiência ótima, atendimento e qualidade nota 10! ambiente muito agradável e aconchegante!",
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Mais de 100 homens já transformaram sua rotina com nossa assinatura ilimitada</p>
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
