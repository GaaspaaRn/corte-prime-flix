import { useEffect } from "react";
import SEOHelmet from "@/components/SEOHelmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AssinaturaHero from "@/components/assinatura/AssinaturaHero";
import AssinaturaBeneficios from "@/components/assinatura/AssinaturaBeneficios";
import AssinaturaComparativo from "@/components/assinatura/AssinaturaComparativo";
import AssinaturaPlanos from "@/components/assinatura/AssinaturaPlanos";
import AssinaturaAutoridade from "@/components/assinatura/AssinaturaAutoridade";
import AssinaturaProvaSocial from "@/components/assinatura/AssinaturaProvaSocial";
import AssinaturaFAQ from "@/components/assinatura/AssinaturaFAQ";
import AssinaturaCTAFinal from "@/components/assinatura/AssinaturaCTAFinal";

const Assinatura = () => {
  useEffect(() => {
    document.title = "Clube de Assinatura Premium | Barbearia Premium Joinville";
    window.scrollTo(0, 0);

    // Scroll-triggered reveal animation system
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe both .reveal and legacy .animate-on-scroll elements
    document.querySelectorAll(".reveal, .animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary overflow-x-hidden w-full relative">
      <SEOHelmet 
        title="Clube de Assinatura Premium | Barbearia Premium Joinville"
        description="Assinaturas a partir de R$79,90! Cabelo e barba ilimitados, café expresso cortesia, e muito mais na melhor barbearia de Joinville."
        keywords="assinatura barbearia, plano premium barbearia, cortar cabelo joinville, barba premium"
      />
      <Header />
      
      <main>
        <AssinaturaHero />
        <AssinaturaAutoridade />
        <AssinaturaComparativo />
        <AssinaturaBeneficios />
        <AssinaturaPlanos />
        <AssinaturaProvaSocial />
        <AssinaturaFAQ />
        <AssinaturaCTAFinal />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Assinatura;
