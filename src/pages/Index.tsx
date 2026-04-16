import { lazy, Suspense, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SEOHelmet from "@/components/SEOHelmet";

// Lazy load components below the fold for better performance
const Gallery = lazy(() => import("@/components/Gallery"));
const About = lazy(() => import("@/components/About"));
const AssinaturaProvaSocial = lazy(() => import("@/components/assinatura/AssinaturaProvaSocial"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingButtons = lazy(() => import("@/components/FloatingButtons"));

const Index = () => {
  useEffect(() => {
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

    // Small delay to ensure lazy-loaded components are rendered
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal, .animate-on-scroll").forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary overflow-x-hidden w-full relative">
      <SEOHelmet />
      <Header />
      <Hero />
      <Suspense fallback={<div className="h-20 bg-card/50 animate-pulse" />}>
        <Gallery />
        <About />
        <AssinaturaProvaSocial />
        <Footer />
        <FloatingButtons />
      </Suspense>
    </div>
  );
};

export default Index;
