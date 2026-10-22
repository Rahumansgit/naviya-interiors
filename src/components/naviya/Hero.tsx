import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import hero from "@/assets/hero-living.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={hero}
          alt="Warm modern living room with wooden interiors"
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </motion.div>

      <div className="relative z-10 container-luxury h-full flex flex-col justify-end pb-24 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-3xl"
        >
          <span className="eyebrow text-gold">Chennai · Est. Craftsmanship</span>
          <h1 className="mt-6 font-display text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-balance">
            Crafting beautiful interiors
            <span className="block italic text-white/90">that feel like home.</span>
          </h1>
          <p className="mt-8 text-white/80 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Premium interior wood work, modular kitchens, wardrobes and custom furniture — designed
            and hand-built with exceptional workmanship.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a whileHover={{ y: -2 }} href="#contact" className="btn-gold btn-gold-hover">
              Request Free Consultation <ArrowRight size={18} />
            </motion.a>
            <a href="#projects" className="btn-ghost-light btn-ghost-light-hover">
              View Projects
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-[10px] tracking-[0.35em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
