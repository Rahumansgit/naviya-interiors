import { motion } from "framer-motion";
import { Check } from "lucide-react";
import img from "@/assets/project-1.jpg";

const points = [
  "Experienced Carpenter Team",
  "Premium Quality Materials",
  "Meticulous Attention to Detail",
  "Transparent & Affordable Pricing",
  "Flawless, Furniture-grade Finish",
  "Dedicated Craftsmen",
  "Customer Satisfaction First",
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-40 bg-background">
      <div className="container-luxury grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-luxury">
            <img
              src={img}
              alt="Detail of handcrafted walnut joinery"
              loading="lazy"
              width={1400}
              height={1600}
              className="w-full h-[640px] object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-10 bg-cream border border-border rounded-2xl px-8 py-6 shadow-soft">
            <div className="font-display text-4xl text-charcoal">
              10<span className="text-gold">+</span>
            </div>
            <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mt-1">
              Years of Craft
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.15 }}
          className="lg:col-span-7 lg:pl-8"
        >
          <span className="eyebrow">About Naviya</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-charcoal text-balance leading-[1.1]">
            A quiet obsession with
            <span className="italic text-wood"> woodwork done right.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
            For over a decade, Naviya Interior Wood Work has been shaping homes across Chennai with
            an unwavering commitment to material, joinery and finish. Every kitchen, wardrobe and
            cabinet is measured, drawn and built by hand — by people who care deeply about the
            outcome.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
            We work closely with each client, translating your ideas into interiors that are warm,
            functional, and built to last a generation.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {points.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-gold flex items-center justify-center">
                  <Check size={12} className="text-gold" />
                </span>
                <span className="text-charcoal/85">{p}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
