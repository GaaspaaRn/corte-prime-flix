import { Star, Users, Calendar, Trophy } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const useCountUp = (end: number, duration: number = 2000, trigger: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, trigger]);

  return count;
};

const AssinaturaAutoridade = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Star, value: 5, suffix: ".0", label: "Nota no Google" },
    { icon: Users, value: 100, suffix: "+", label: "Assinantes Ativos" },
    { icon: Trophy, value: 33, suffix: "+", label: "Avaliações 5★" },
    { icon: Calendar, value: 5, suffix: "+", label: "Anos de Tradição" },
  ];

  return (
    <section ref={sectionRef} className="py-16 border-y border-border bg-card/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const count = useCountUp(stat.value, 2000, isVisible);
            
            return (
              <div key={index} className="flex flex-col items-center text-center space-y-2">
                <Icon className="h-5 w-5 text-primary mb-1" />
                <div className="flex items-baseline">
                  <span className="text-3xl md:text-4xl font-black text-foreground tabular-nums">{count}</span>
                  <span className="text-xl md:text-2xl font-bold text-primary">{stat.suffix}</span>
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default AssinaturaAutoridade;