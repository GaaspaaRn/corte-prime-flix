import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Image as ImageIcon } from "lucide-react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("cortes");

  const categories = [
    { id: "cortes", label: "Cortes" },
    { id: "barbas", label: "Barbas" },
    { id: "ambiente", label: "Ambiente" },
    { id: "equipe", label: "Equipe" }
  ];

  // Placeholder gallery items - to be replaced with actual images
  const galleryItems = {
    cortes: [
      { id: 1, type: "image", title: "Corte Clássico", description: "Fade baixo com degradê" },
      { id: 2, type: "image", title: "Corte Moderno", description: "Undercut estilizado" },
      { id: 3, type: "image", title: "Corte Premium", description: "Corte personalizado" },
      { id: 4, type: "video", title: "Processo de Corte", description: "Vídeo demonstrativo" },
      { id: 5, type: "image", title: "Styling Final", description: "Finalização premium" },
      { id: 6, type: "image", title: "Corte Executivo", description: "Para profissionais" }
    ],
    barbas: [
      { id: 7, type: "image", title: "Barba Completa", description: "Modelagem e aparar" },
      { id: 8, type: "image", title: "Degradê na Barba", description: "Técnica avançada" },
      { id: 9, type: "image", title: "Barba Estilizada", description: "Design personalizado" },
      { id: 10, type: "video", title: "Processo de Barba", description: "Técnica profissional" }
    ],
    ambiente: [
      { id: 11, type: "image", title: "Salão Principal", description: "Ambiente sofisticado" },
      { id: 12, type: "image", title: "Área de Espera", description: "Conforto premium" },
      { id: 13, type: "image", title: "Cadeiras Premium", description: "Equipamentos modernos" }
    ],
    equipe: [
      { id: 14, type: "image", title: "Barbeiro Master", description: "15 anos de experiência" },
      { id: 15, type: "image", title: "Equipe Completa", description: "Profissionais qualificados" }
    ]
  };

  const currentItems = galleryItems[activeCategory as keyof typeof galleryItems] || [];

  return (
    <section id="gallery" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossa <span className="text-primary">Galeria</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Veja nosso trabalho e conheça nosso ambiente premium
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
                  <Button variant="secondary" size="sm">
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
      </div>
    </section>
  );
};

export default Gallery;