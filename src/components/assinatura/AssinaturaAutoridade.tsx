import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, TrendingUp, Target, Clock } from "lucide-react";

const AssinaturaAutoridade = () => {
  const handleCTAClick = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Authority Card */}
        <Card className="p-8 md:p-12 bg-gradient-card border-primary/20 shadow-glow/30 animate-fade-in-up">
          <div className="text-center space-y-8">
            {/* Icon */}
            <div className="inline-flex p-6 rounded-full bg-primary/10">
              <Crown className="h-12 w-12 text-primary" />
            </div>
            
            {/* Main Message */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                <span className="text-foreground">Esse plano não é para todos,</span>
                <br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  foi pensado para quem entende que a imagem não é custo, é investimento.
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Homens de sucesso sabem que a imagem é um investimento, não uma despesa. 
                Nosso plano ilimitado é a ferramenta mais eficaz para garantir que seu maior ativo – você – 
                esteja sempre rendendo o máximo.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <div className="flex flex-col items-center text-center space-y-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                <h3 className="font-bold text-foreground">Investimento Inteligente</h3>
                <p className="text-sm text-muted-foreground">Economize até 60% comparado aos gastos tradicionais</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="font-bold text-foreground">Imagem Sempre Perfeita</h3>
                <p className="text-sm text-muted-foreground">Nunca mais perca oportunidades por estar mal arrumado</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <Clock className="h-8 w-8 text-primary" />
                <h3 className="font-bold text-foreground">Tempo é Dinheiro</h3>
                <p className="text-sm text-muted-foreground">Agende rapidamente, sem perder tempo procurando</p>
              </div>
            </div>

            {/* Scarcity Message */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 space-y-4">
              <p className="text-lg font-semibold text-primary">
                ⚠️ VAGAS LIMITADAS POR REGIÃO
              </p>
              <p className="text-muted-foreground">
                Para manter a qualidade do atendimento premium, limitamos o número de assinantes por região. 
                <span className="text-primary font-semibold"> Restam poucas vagas disponíveis em Joinville.</span>
              </p>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <p className="text-xl font-semibold text-foreground">
                Faça o melhor investimento da sua carreira na sua imagem.
              </p>
              <Button 
                onClick={handleCTAClick}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 h-auto rounded-xl shadow-glow hover:shadow-glow/80 transition-all duration-300 hover:scale-105"
              >
                <Crown className="mr-2 h-5 w-5" />
                GARANTIR MINHA VAGA AGORA
              </Button>
            </div>
          </div>
        </Card>

        {/* Bottom Quote */}
        <div className="mt-12 text-center animate-fade-in-up">
          <blockquote className="text-xl md:text-2xl font-medium text-muted-foreground italic max-w-4xl mx-auto">
            "Quanto vale a sua confiança? E uma primeira impressão poderosa? 
            A oportunidade não avisa quando vai bater na sua porta. 
            <span className="text-primary font-semibold"> Com nosso plano ilimitado, você está sempre pronto.</span>"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AssinaturaAutoridade;