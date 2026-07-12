import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-living.jpg";

export default function CTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="container-luxury relative text-center"
      >
        <span className="eyebrow">Begin the Journey</span>
        <h2 className="mt-6 font-display text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-balance max-w-4xl mx-auto">
          Let's build your
          <span className="italic block text-white/90">dream interior.</span>
        </h2>
        <p className="mt-8 text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
          Book a free, no-obligation consultation with our design team.
          We'll listen, sketch, and quote — always transparent, always on your terms.
        </p>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <a href="tel:+919636418563" className="btn-gold btn-gold-hover">
            <Phone size={18} /> Call Now
          </a>
          <a href="#contact" className="btn-ghost-light btn-ghost-light-hover">
            Request Free Consultation <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
