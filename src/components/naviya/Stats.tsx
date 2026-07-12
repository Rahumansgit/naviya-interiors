import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 4.9, suffix: "★", label: "Google Rating", decimals: 1 },
  { value: 34, suffix: "+", label: "Happy Reviews" },
  { value: 100, suffix: "+", label: "Completed Projects" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

function Counter({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return controls.stop;
  }, [inView, to, decimals, mv]);

  return <span ref={ref}>{display}</span>;
}

export default function Stats() {
  return (
    <section className="py-20 md:py-28 bg-charcoal text-cream relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-wood/20 blur-3xl" />
      <div className="container-luxury relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="text-center px-2"
            >
              <div className="font-display text-5xl md:text-6xl lg:text-7xl text-cream">
                <Counter to={s.value} decimals={s.decimals ?? 0} />
                <span className="text-gold">{s.suffix}</span>
              </div>
              <div className="mt-3 text-[10px] md:text-xs tracking-[0.3em] uppercase text-cream/60">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
