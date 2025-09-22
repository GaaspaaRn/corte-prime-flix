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
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Por que escolher a <span className="text-primary">Barbearia Premium</span>?
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Mais de 5 anos transformando o visual dos homens de Joinville
        </p>
        <Button onClick={handleCTAClick} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Crown className="mr-2 h-5 w-5" />
          Assinar Agora
        </Button>
      </div>
    </section>
  );
};
export default AssinaturaAutoridade;