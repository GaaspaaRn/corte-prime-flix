import { Button } from "@/components/ui/button";
import { Heart, Star, Trophy } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Paixão pelo Ofício",
      description: "Cada corte é uma obra de arte, feita com dedicação e amor pelo que fazemos."
    },
    {
      icon: Star,
      title: "Excelência Premium",
      description: "Utilizamos apenas produtos de primeira linha e técnicas mais modernas do mercado."
    },
    {
      icon: Trophy,
      title: "Tradição e Inovação",
      description: "Combinamos técnicas clássicas de barbeiros com as mais modernas tendências."
    }
  ];

  return (
    <section id="about" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6">
            Nossa História
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Sobre a <span className="text-gold-gradient">Barbearia Premium</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Sempre oferecendo o melhor em cuidados masculinos, combinando tradição, qualidade e inovação em cada atendimento.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 reveal">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">Nossa História</h3>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>A <strong className="text-foreground">Barbearia Premium Joinville</strong> nasceu do sonho de criar um espaço onde o cuidado masculino fosse tratado como arte. Localizada na <strong className="text-foreground">Rua Alferes Schimidt, 78, no Comasa</strong>, nos dedicamos a oferecer não apenas cortes de cabelo, mas uma experiência completa de bem-estar e estilo.</p>
              <p>Nosso fundador após anos de experiência, reuniu uma equipe profissional que compartilha a mesma visão: cada cliente merece se sentir especial e confiante.</p>
              <p>Já somos <strong className="text-foreground">referência em Joinville</strong>, especialmente na região do Comasa, atendendo diversos públicos e até artistas, sempre mantendo o mesmo padrão de excelência.</p>
            </div>
            <Button
              className="mt-8 bg-gradient-gold text-primary-foreground font-bold text-sm uppercase tracking-[0.05em] px-8 py-5 h-auto rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              onClick={() => {
                const gallerySection = document.getElementById('gallery');
                const equipeButton = document.querySelector('[data-category="equipe"]') as HTMLButtonElement;
                if (gallerySection) {
                  gallerySection.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => { equipeButton?.click(); }, 500);
                }
              }}
            >
              Conheça Nossa Equipe
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-border">
              <div className="aspect-square">
                <img src="/images/about/nossa-historia.webp" alt="Nossa História - Barbearia Premium" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="reveal">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-tight">Nossos <span className="text-gold-gradient">Valores</span></h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className={`reveal delay-${index + 1} group p-8 rounded-3xl border border-border bg-card text-center hover:border-primary/30 transition-all duration-300`}>
                  <div className="flex justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Location */}
        <div className="mt-24 reveal">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Nossa <span className="text-gold-gradient">Localização</span></h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Venha conhecer nosso espaço e descobrir por que temos avaliação 5.
            </p>

            {/* Map */}
            <div className="mb-10 rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.655208435702!2d-48.807446924582415!3d-26.27285147703436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb1004ce77c39%3A0x3d4b5a580455a09!2sBarbearia%20Premium!5e0!3m2!1spt-BR!2sbr!4v1753813720749!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                className="border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Barbearia Premium - Rua Alferes Schimidt 78, Comasa, Joinville SC"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-gold text-primary-foreground font-bold text-sm uppercase tracking-[0.05em] px-8 py-5 h-auto rounded-full hover:scale-[1.03] transition-all duration-300"
                onClick={() => window.open(`https://wa.me/5547988984877?text=${encodeURIComponent('Olá! Gostaria de agendar uma visita à Barbearia Premium.')}`, '_blank')}
              >
                Agendar Visita
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:border-primary hover:text-primary font-bold text-sm uppercase tracking-[0.05em] px-8 py-5 h-auto rounded-full transition-all duration-300 bg-transparent hover:bg-transparent"
                onClick={() => window.open('https://maps.app.goo.gl/JpT9MR6PvDcPCzJa7', '_blank')}
              >
                Ver Localização
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;