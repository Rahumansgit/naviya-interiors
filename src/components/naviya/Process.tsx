import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Consultation", desc: "We listen to your vision, lifestyle and budget over a relaxed conversation." },
  { n: "02", title: "Site Visit", desc: "Detailed measurement and study of your space, light and existing conditions." },
  { n: "03", title: "Design Planning", desc: "Layouts, elevations and 3D visuals — refined together until it feels right." },
  { n: "04", title: "Material Selection", desc: "Guided selection of ply, veneers, laminates, hardware and finishes." },
  { n: "05", title: "Manufacturing", desc: "Precision cutting, machining and finishing at our fully-equipped workshop." },
  { n: "06", title: "Installation", desc: "On-site assembly by our senior team with meticulous alignment and detail." },
  { n: "07", title: "Final Handover", desc: "A thorough walkthrough, clean-up, and continued care beyond handover." },
];

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-40 bg-background">
      <div className="container-luxury">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow">Our Process</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1]">
            From first sketch to
            <span className="italic text-wood"> final handover.</span>
          </h2>
        </div>

        <div className="mt-20 relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" aria-hidden />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/60 to-transparent md:-translate-x-px"
            aria-hidden
          />

          <div className="space-y-14 md:space-y-20">
            {steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                  className={`relative pl-20 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center`}
                >
                  <div className="absolute left-0 md:left-1/2 top-2 md:-translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-cream border-2 border-gold shadow-soft font-display text-gold text-lg">
                    {s.n}
                  </div>

                  <div className={`${right ? "md:col-start-2 md:pl-16" : "md:col-start-1 md:pr-16 md:text-right"}`}>
                    <h3 className="font-display text-2xl md:text-3xl text-charcoal">{s.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed max-w-md md:inline-block">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
