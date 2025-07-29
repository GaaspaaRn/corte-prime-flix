import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Play, Image as ImageIcon, Calendar, Clock, Star } from "lucide-react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("cortes");
  const [selectedService, setSelectedService] = useState(null);

  const categories = [
    { id: "cortes", label: "Cortes" },
    { id: "barbas", label: "Barbas" },
    { id: "ambiente", label: "Ambiente" },
    { id: "equipe", label: "Equipe" }
  ];

  // Services items with detailed information
  const galleryItems = {
    cortes: [
      { 
        id: 1, 
        type: "image", 
        title: "Corte Clássico", 
        description: "Fade baixo com degradê profissional",
        price: "R$ 45",
        duration: "45 min",
        match: "99%",
        details: "Corte tradicional com técnicas modernas, ideal para o dia a dia profissional. Inclui lavagem, corte personalizado e finalização com produtos premium.",
        features: ["Lavagem premium", "Corte personalizado", "Finalização", "Styling"]
      },
      { 
        id: 2, 
        type: "image", 
        title: "Corte Moderno", 
        description: "Undercut estilizado e atual",
        price: "R$ 60",
        duration: "50 min",
        match: "97%",
        details: "Corte moderno com técnicas atuais, perfeito para quem busca um visual diferenciado e estiloso.",
        features: ["Consulta de estilo", "Lavagem premium", "Corte moderno", "Finalização especial"]
      },
      { 
        id: 3, 
        type: "image", 
        title: "Corte VIP", 
        description: "Experiência completa premium",
        price: "R$ 120",
        duration: "90 min",
        match: "95%",
        details: "Experiência exclusiva com atendimento personalizado, bebida inclusa e os melhores produtos. Barbearia Premium Joinville - Comasa.",
        features: ["Atendimento VIP", "Bebida inclusa", "Produtos premium", "Massagem relaxante", "Styling completo"]
      },
    ],
    barbas: [
      { 
        id: 7, 
        type: "image", 
        title: "Barba Completa", 
        description: "Modelagem e aparar profissional",
        price: "R$ 35",
        duration: "30 min",
        match: "98%",
        details: "Serviço completo de barba com modelagem personalizada, aparar e hidratação.",
        features: ["Limpeza", "Modelagem", "Aparar", "Hidratação"]
      },
      { 
        id: 8, 
        type: "image", 
        title: "Degradê na Barba", 
        description: "Técnica avançada",
        price: "R$ 45",
        duration: "40 min",
        match: "96%",
        details: "Técnica especializada de degradê na barba para um visual moderno e sofisticado.",
        features: ["Técnica avançada", "Degradê profissional", "Finalização premium"]
      }
    ],
    ambiente: [
      { 
        id: 11, 
        type: "image", 
        title: "Salão Principal", 
        description: "Ambiente sofisticado",
        details: "Conheça nosso ambiente premium com equipamentos de última geração."
      },
      { 
        id: 12, 
        type: "image", 
        title: "Área de Espera", 
        description: "Conforto premium",
        details: "Área de espera confortável para você relaxar antes do seu atendimento."
      }
    ],
    equipe: [
      { 
        id: 14, 
        type: "image", 
        title: "Barbeiro Master", 
        description: "15 anos de experiência",
        details: "Nosso barbeiro master com mais de 15 anos de experiência em cortes masculinos."
      },
      { 
        id: 15, 
        type: "image", 
        title: "Equipe Completa", 
        description: "Profissionais qualificados",
        details: "Equipe completa de profissionais qualificados e em constante atualização."
      }
    ]
  };

  const currentItems = galleryItems[activeCategory as keyof typeof galleryItems] || [];

  return (
    <section id="gallery" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Descubra nossos serviços premium e agende seu horário
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-6 py-2 transition-all duration-300
                  ${activeCategory === category.id ? 'shadow-glow' : 'border-primary/30 hover:border-primary'}
                `}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item, index) => (
            <Card
              key={item.id}
              className={`
                group relative overflow-hidden bg-gradient-card border-border/50 
                hover:scale-105 transition-all duration-300 hover:shadow-card
                ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              `}
            >
              <div className={`
                relative bg-muted/20 flex items-center justify-center
                ${index === 0 ? 'h-96 md:h-full' : 'h-64'}
              `}>
                {/* Placeholder for images */}
                <div className="text-center">
                  {item.type === "video" ? (
                    <Play className="w-12 h-12 text-primary mb-4 mx-auto" />
                  ) : (
                    <ImageIcon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  )}
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => setSelectedService(item)}
                  >
                    {item.type === "video" ? "Assistir" : "Ver Detalhes"}
                  </Button>
                </div>

                {/* Video Play Button */}
                {item.type === "video" && (
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                    VÍDEO
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-12 space-x-4">
          <Button variant="outline" size="icon" className="border-primary/30 hover:border-primary">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex space-x-2">
            {[1, 2, 3].map((page) => (
              <div
                key={page}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  page === 1 ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          <Button variant="outline" size="icon" className="border-primary/30 hover:border-primary">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Gostou do que viu? Venha fazer parte da nossa galeria!
          </p>
          <Button size="lg" className="shadow-glow">
            Agendar Meu Horário
          </Button>
        </div>

        {/* Service Detail Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-2xl bg-card border-border">
            {selectedService && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    {selectedService.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Service Image */}
                  <div className="relative h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                    {selectedService.type === "video" ? (
                      <Play className="w-16 h-16 text-primary" />
                    ) : (
                      <ImageIcon className="w-16 h-16 text-primary" />
                    )}
                  </div>

                  {/* Service Info */}
                  {selectedService.price && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {selectedService.match && (
                          <span className="text-primary font-semibold">
                            {selectedService.match} match
                          </span>
                        )}
                        <h3 className="text-xl font-bold text-primary">
                          {selectedService.price}
                        </h3>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {selectedService.duration}
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-muted-foreground">
                    {selectedService.details || selectedService.description}
                  </p>

                  {/* Features */}
                  {selectedService.features && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Incluso:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedService.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <Star className="w-3 h-3 text-primary mr-2 fill-current" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <Button 
                    size="lg" 
                    className="w-full shadow-glow"
                    onClick={() => setSelectedService(null)}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;