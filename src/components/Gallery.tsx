import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, Image as ImageIcon, Calendar, Clock, Star, Check, ArrowRight } from "lucide-react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("cortes");
  const [selectedService, setSelectedService] = useState<any>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Re-observe .reveal elements when category changes
  useEffect(() => {
    if (!gridRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    // Small delay so React has time to render the new items
    const timer = setTimeout(() => {
      gridRef.current?.querySelectorAll(".reveal").forEach((el) => {
        el.classList.remove("visible"); // reset so animation replays
        observer.observe(el);
      });
    }, 50);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [activeCategory]);

  const categories = [
    { id: "cortes", label: "Cortes" },
    { id: "barbas", label: "Barbas" },
    { id: "ambiente", label: "Ambiente" },
    { id: "equipe", label: "Equipe" }
  ];

  const galleryItems: Record<string, any[]> = {
    cortes: [
      {
        id: 1, type: "image", title: "Corte Clássico",
        description: "Fade baixo com degradê profissional",
        price: "R$ 45", duration: "45 min", match: "99%",
        image: "/images/gallery/cortes/corte-classico.webp",
        details: "Corte tradicional com técnicas modernas, ideal para o dia a dia profissional. Inclui lavagem, corte personalizado e finalização com produtos premium.",
        features: ["Lavagem premium", "Corte personalizado", "Finalização", "Styling"]
      },
      {
        id: 2, type: "image", title: "Corte Moderno",
        description: "Undercut estilizado e atual",
        price: "R$ 60", duration: "50 min", match: "97%",
        image: "/images/gallery/cortes/corte-moderno.webp",
        details: "Corte moderno com técnicas atuais, perfeito para quem busca um visual diferenciado e estiloso.",
        features: ["Consulta de estilo", "Lavagem premium", "Corte moderno", "Finalização especial"]
      },
      {
        id: 3, type: "image", title: "Corte VIP",
        description: "Experiência completa premium",
        price: "R$ 120", duration: "90 min", match: "95%",
        image: "/images/gallery/cortes/corte-vip.webp",
        details: "Experiência exclusiva com atendimento personalizado, bebida inclusa e os melhores produtos. Barbearia Premium Joinville - Comasa.",
        features: ["Atendimento VIP", "Bebida inclusa", "Produtos premium", "Massagem relaxante", "Styling completo"]
      }
    ],
    barbas: [
      {
        id: 7, type: "image", title: "Barba Completa",
        description: "Modelagem e aparar profissional",
        price: "R$ 35", duration: "30 min", match: "98%",
        image: "/images/gallery/barbas/barba-completa.webp",
        details: "Serviço completo de barba com modelagem personalizada, aparar e hidratação.",
        features: ["Limpeza", "Modelagem", "Aparar", "Hidratação"]
      },
      {
        id: 8, type: "image", title: "Degradê na Barba",
        description: "Técnica avançada",
        price: "R$ 45", duration: "40 min", match: "96%",
        image: "/images/gallery/barbas/degrade-barba.webp",
        details: "Técnica especializada de degradê na barba para um visual moderno e sofisticado.",
        features: ["Técnica avançada", "Degradê profissional", "Finalização premium"]
      }
    ],
    ambiente: [
      {
        id: 11, type: "image", title: "Salão Principal",
        description: "Ambiente sofisticado",
        image: "/images/gallery/ambiente/salao-principal.webp",
        details: "Conheça nosso ambiente premium com equipamentos de última geração."
      },
      {
        id: 12, type: "image", title: "Área de Espera",
        description: "Conforto premium",
        image: "/images/gallery/ambiente/area-espera.webp",
        details: "Área de espera confortável para você relaxar antes do seu atendimento."
      }
    ],
    equipe: [
      {
        id: 14, type: "image", title: "Barbeiro Master",
        description: "5 anos de experiência",
        image: "/images/gallery/equipe/barbeiro-master.webp",
        details: "Nosso barbeiro master com mais de 5 anos de experiência em cortes masculinos."
      },
      {
        id: 15, type: "image", title: "Equipe Completa",
        description: "Profissionais qualificados",
        image: "/images/gallery/equipe/equipe-completa.webp",
        details: "Equipe completa de profissionais qualificados e em constante atualização."
      }
    ]
  };

  const currentItems = galleryItems[activeCategory] || [];

  return (
    <section id="gallery" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6">
            Nosso Trabalho
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Nossos <span className="text-gold-gradient">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-6">
            Descubra nossos serviços premium
          </p>

          {/* Category Filter — Pill Buttons */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar px-6">
            {categories.map(category => (
              <button
                key={category.id}
                data-category={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-gradient-gold text-primary-foreground'
                  : 'bg-transparent border border-border text-muted-foreground hover:border-primary hover:text-primary'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Mobile Scroll Hint */}
          <div className="flex md:hidden items-center justify-end pr-6 mt-3 text-white/50 text-xs font-medium animate-pulse">
            <span>Deslize</span>
            <ArrowRight className="w-3 h-3 ml-1" />
          </div>
        </div>

        {/* Gallery Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentItems.map((item, index) => (
            <div
              key={item.id}
              className={`reveal delay-${Math.min(index + 1, 5)} group relative overflow-hidden rounded-3xl border border-border bg-card cursor-pointer transition-all duration-500 hover:border-primary/30 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              onClick={() => setSelectedService(item)}
            >
              <div className={`relative ${index === 0 ? 'h-96 md:h-full' : 'h-72'}`}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={`${item.title} - Barbearia Premium Joinville`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-card">
                    {item.type === "video" ? <Play className="w-10 h-10 text-primary mb-3" /> : <ImageIcon className="w-10 h-10 text-primary mb-3" />}
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                )}

                {/* Overlay */}
                {item.image && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-sm text-white/60 mt-0.5">{item.description}</p>
                    </div>
                  </div>
                )}

                {/* Video Badge */}
                {item.type === "video" && (
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Vídeo
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-2xl bg-card border-border rounded-3xl">
            {selectedService && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    {selectedService.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Image */}
                  <div className="relative h-64 bg-secondary rounded-2xl overflow-hidden">
                    {selectedService.image ? (
                      <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" loading="lazy" />
                    ) : selectedService.type === "video" ? (
                      <Play className="w-16 h-16 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    ) : (
                      <ImageIcon className="w-16 h-16 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    )}
                  </div>

                  {/* Info */}
                  {selectedService.price && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary font-semibold">{selectedService.match} match</span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {selectedService.duration}
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedService.details || selectedService.description}
                  </p>

                  {/* Features */}
                  {selectedService.features && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground text-sm">O que está incluído:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedService.features.map((feature: string, idx: number) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground gap-2">
                            <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <Button
                    size="lg"
                    className="w-full bg-gradient-gold text-primary-foreground font-bold text-sm uppercase tracking-[0.05em] py-6 h-auto rounded-full hover:scale-[1.01] transition-all duration-300"
                    onClick={() => window.open(`https://wa.me/5547988984877?text=${encodeURIComponent(`Olá! Gostaria de agendar o serviço de ${selectedService.title}.`)}`, '_blank')}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
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