import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Heart, Star, Trophy } from "lucide-react";
const About = () => {
  const stats = [{
    icon: Users,
    label: "Clientes Satisfeitos",
    value: "5000+"
  }, {
    icon: Clock,
    label: "Anos de Experiência",
    value: "15+"
  }, {
    icon: Award,
    label: "Prêmios Recebidos",
    value: "8"
  }, {
    icon: Star,
    label: "Avaliação Média",
    value: "4.9"
  }];
  const values = [{
    icon: Heart,
    title: "Paixão pelo Ofício",
    description: "Cada corte é uma obra de arte, feita com dedicação e amor pelo que fazemos."
  }, {
    icon: Star,
    title: "Excelência Premium",
    description: "Utilizamos apenas produtos de primeira linha e técnicas mais modernas do mercado."
  }, {
    icon: Trophy,
    title: "Tradição e Inovação",
    description: "Combinamos técnicas clássicas de barbeiros com as mais modernas tendências."
  }];
  return <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a <span className="text-primary">Barbearia Premium</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Sempre oferecendo o melhor em cuidados masculinos, combinando tradição, qualidade e inovação em cada atendimento.</p>
        </div>

        {/* Stats */}
        

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Nossa História</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>A Barbearia Premium nasceu do sonho de criar um espaço onde o cuidado masculino fosse tratado como arte. Nos dedicamos a oferecer não apenas cortes de cabelo, mas uma experiência completa de bem-estar e estilo.</p>
              <p>Nosso fundador, com  anos de experiência, reuniu uma equipe de profissionais apaixonados que compartilham da mesma visão: cada cliente merece se sentir especial e confiante.</p>
              <p>Hoje, somos referência na Zona Leste de Joinville, atendendo desde executivos até artistas, sempre mantendo o mesmo padrão de excelência que nos trouxe até aqui.</p>
            </div>
            <Button size="lg" className="mt-6 shadow-glow">
              Conheça Nossa Equipe
            </Button>
          </div>

          {/* Nossa História - Imagem */}
          <div className="relative">
            <Card className="bg-gradient-card border-border/50 overflow-hidden">
              <div className="aspect-square">
                <img 
                  src="/images/about/nossa-historia.webp" 
                  alt="Nossa História - Barbearia Premium" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </Card>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-lg"></div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Nossos Valores</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => <Card key={index} className="text-center bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-4">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-card rounded-lg border border-border/50">
          <h3 className="text-2xl font-bold mb-4">Faça Parte da Nossa História</h3>
          <p className="text-muted-foreground mb-6">
            Venha conhecer nosso espaço e descobrir por que somos a escolha de milhares de clientes satisfeitos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-glow">
              Agendar Visita
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary">
              Ver Localização
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default About;