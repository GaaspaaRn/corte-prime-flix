import { Button } from "@/components/ui/button";
import { Crown, Clock, CheckCircle } from "lucide-react";

const AssinaturaCTAFinal = () => {
  const handleCTAClick = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5547988984877?text=Olá! Quero assinar o plano premium da Barbearia Premium!', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Headline */}
        <div className="animate-fade-in-up space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2">
            <Crown className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium text-sm">ÚLTIMA CHANCE</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Sua melhor versão
            </span>
            <br />
            <span className="text-foreground">todos os dias</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Imagine sua vida com uma preocupação a menos. Uma decisão a menos. 
            Com o plano de assinatura da Barbearia Premium, você simplesmente não se preocupa mais com visual. 
            <span className="text-primary font-semibold"> Você só aparece, relaxa e sai novo.</span>
          </p>
        </div>

        {/* Benefits Reminder */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
          <div className="flex flex-col items-center space-y-3">
            <CheckCircle className="h-8 w-8 text-primary" />
            <h3 className="font-bold text-foreground">Acesso Ilimitado</h3>
            <p className="text-sm text-muted-foreground">Quantas vezes quiser no mês</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <Crown className="h-8 w-8 text-primary" />
            <h3 className="font-bold text-foreground">Experiência Premium</h3>
            <p className="text-sm text-muted-foreground">Ambiente luxuoso e produtos top</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <Clock className="h-8 w-8 text-primary" />
            <h3 className="font-bold text-foreground">Sempre Pronto</h3>
            <p className="text-sm text-muted-foreground">Para qualquer ocasião importante</p>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="mt-12 bg-primary/10 border border-primary/20 rounded-xl p-6 animate-fade-in-up">
          <p className="text-lg font-semibold text-primary mb-2">
            ⚠️ ÚLTIMAS VAGAS DISPONÍVEIS
          </p>
          <p className="text-muted-foreground">
            Para manter a excelência no atendimento, temos vagas limitadas. 
            <span className="text-primary font-semibold"> Não perca essa oportunidade única!</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 space-y-6 animate-fade-in-up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleCTAClick}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 h-auto rounded-xl shadow-glow hover:shadow-glow/80 transition-all duration-300 hover:scale-105"
            >
              <Crown className="mr-2 h-5 w-5" />
              ESCOLHER MEU PLANO AGORA
            </Button>
            
            <Button 
              onClick={handleWhatsAppClick}
              variant="secondary"
              size="lg" 
              className="font-bold text-lg px-12 py-6 h-auto rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              FALAR NO WHATSAPP
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            ✅ Sem fidelidade • ✅ Cancele quando quiser • ✅ Primeira semana grátis
          </p>
        </div>

        {/* Final Message */}
        <div className="mt-16 animate-fade-in-up">
          <blockquote className="text-xl md:text-2xl font-medium text-muted-foreground italic">
            "Deixe de contar com a sorte. 
            <span className="text-primary font-semibold"> Garante sua melhor versão, todos os dias.</span>
            Quer simplificar sua vida e elevar seu padrão?"
          </blockquote>
        </div>

        {/* Countdown Timer Placeholder */}
        <div className="mt-12 bg-destructive/10 border border-destructive/20 rounded-xl p-6 animate-fade-in-up">
          <p className="text-destructive font-semibold text-lg">
            🔥 PROMOÇÃO POR TEMPO LIMITADO
          </p>
          <p className="text-muted-foreground mt-2">
            Primeiros 50 assinantes ganham <span className="text-primary font-semibold">primeira semana grátis</span> + desconto de 20% no primeiro mês
          </p>
        </div>
      </div>
    </section>
  );
};

export default AssinaturaCTAFinal;