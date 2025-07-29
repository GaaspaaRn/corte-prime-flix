import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SEOHelmet from "@/components/SEOHelmet";

// Lazy load components below the fold for better performance
const Gallery = lazy(() => import("@/components/Gallery"));
const About = lazy(() => import("@/components/About"));

const Footer = lazy(() => import("@/components/Footer"));
const FloatingButtons = lazy(() => import("@/components/FloatingButtons"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet />
      <Header />
      <Hero />
      <Suspense fallback={<div className="h-20 bg-secondary/10 animate-pulse" />}>
        <Gallery />
        <About />
        
        <Footer />
        <FloatingButtons />
      </Suspense>
    </div>
  );
};

export default Index;
