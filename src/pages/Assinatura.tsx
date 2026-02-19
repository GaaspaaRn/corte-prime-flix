import { lazy, Suspense } from "react";
import SEOHelmet from "@/components/SEOHelmet";
import Header from "@/components/Header";

// Lazy load components for better performance
const AssinaturaHero = lazy(() => import("@/components/assinatura/AssinaturaHero"));
const AssinaturaBeneficios = lazy(() => import("@/components/assinatura/AssinaturaBeneficios"));
const AssinaturaPlanos = lazy(() => import("@/components/assinatura/AssinaturaPlanos"));
const Gallery = lazy(() => import("@/components/Gallery"));
const AssinaturaProvaSocial = lazy(() => import("@/components/assinatura/AssinaturaProvaSocial"));
const AssinaturaAutoridade = lazy(() => import("@/components/assinatura/AssinaturaAutoridade"));
const AssinaturaFAQ = lazy(() => import("@/components/assinatura/AssinaturaFAQ"));
const AssinaturaCTAFinal = lazy(() => import("@/components/assinatura/AssinaturaCTAFinal"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingButtons = lazy(() => import("@/components/FloatingButtons"));

const Assinatura = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet 
        title="Assinatura Premium Ilimitada - Barbearia Premium Joinville"
        description="🏆 Planos ilimitados a partir de R$69,90! Cabelo e barba quantas vezes quiser no mês. Experiência premium sem limites na melhor barbearia de Joinville."
        keywords="assinatura barbearia, plano ilimitado barbearia, cabelo barba ilimitado joinville, barbearia premium assinatura"
      />
      <Header />
      <AssinaturaHero />
      <Suspense fallback={<div className="h-20 bg-secondary/10 animate-pulse" />}>
        <AssinaturaBeneficios />
        <AssinaturaPlanos />
        <Gallery />
        <AssinaturaProvaSocial />
        <AssinaturaAutoridade />
        <AssinaturaFAQ />
        <AssinaturaCTAFinal />
        <Footer />
        <FloatingButtons />
      </Suspense>
    </div>
  );
};

export default Assinatura;