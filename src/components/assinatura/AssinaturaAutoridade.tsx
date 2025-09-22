import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, TrendingUp, Target, Clock } from "lucide-react";
const AssinaturaAutoridade = () => {
  const handleCTAClick = () => {
    document.getElementById('planos')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8">
            <Crown className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium text-sm">EXCLUSIVIDADE PREMIUM</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Esse plano não é para todos
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Foi pensado para quem entende que a imagem não é custo, 
            <span className="text-primary font-semibold"> é investimento</span>.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-gradient-card border border-border/50">
              <TrendingUp className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Investimento Inteligente</h3>
              <p className="text-sm text-muted-foreground">Sua imagem é seu cartão de visitas mais poderoso</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border border-border/50">
              <Target className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Sempre Preparado</h3>
              <p className="text-sm text-muted-foreground">Para reuniões, encontros e oportunidades inesperadas</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border border-border/50">
              <Clock className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Liberdade Total</h3>
              <p className="text-sm text-muted-foreground">Sem agendamentos complicados, venha quando quiser</p>
            </Card>
          </div>
          
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
            <p className="text-lg text-foreground font-medium mb-4">
              ⚠️ <span className="text-primary">As vagas são limitadas</span>
            </p>
            <p className="text-muted-foreground">
              Mantemos um número restrito de assinantes para garantir a exclusividade e qualidade do atendimento.
            </p>
          </div>
          
          <Button onClick={handleCTAClick} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 h-auto rounded-xl">
            <Crown className="mr-2 h-5 w-5" />
            GARANTIR MINHA VAGA
          </Button>
        </div>
      </div>
    </section>
  );
};
export default AssinaturaAutoridade;