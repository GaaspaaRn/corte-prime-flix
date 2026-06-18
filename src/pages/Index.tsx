import { lazy, Suspense, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SEOHelmet from "@/components/SEOHelmet";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import AssinaturaProvaSocial from "@/components/assinatura/AssinaturaProvaSocial";
import HomeFAQ from "@/components/HomeFAQ";
import Footer from "@/components/Footer";

// Only lazy-load non-SEO components
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
      <Gallery />
      <About />
      <AssinaturaProvaSocial />
      <HomeFAQ />
      <Footer />
      <Suspense fallback={null}>
        <FloatingButtons />
      </Suspense>
    </div>
  );
};

export default Index;
