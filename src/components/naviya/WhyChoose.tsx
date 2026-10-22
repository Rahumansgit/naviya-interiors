import { motion } from "framer-motion";
import {
  Gem,
  Hammer,
  PenTool,
  Sparkles,
  BadgeIndianRupee,
  Timer,
  Heart,
  Headphones,
} from "lucide-react";

const items = [
  {
    icon: Gem,
    title: "Premium Materials",
    desc: "Only BWP ply, veneers and hardware from trusted names.",
  },
  {
    icon: Hammer,
    title: "Experienced Craftsmen",
    desc: "A senior team of carpenters with a decade of practice.",
  },
  {
    icon: PenTool,
    title: "Custom Designs",
    desc: "Drawn to your space, taste and everyday rituals.",
  },
  {
    icon: Sparkles,
    title: "Perfect Finishing",
    desc: "Furniture-grade edges, joints and hardware alignment.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable Pricing",
    desc: "Fair, transparent quotations — no hidden extras.",
  },
  {
    icon: Timer,
    title: "On-time Delivery",
    desc: "Realistic timelines that we honour, project after project.",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    desc: "A relationship that continues well beyond handover.",
  },
  {
    icon: Headphones,
    title: "Responsive Service",
    desc: "One call away — before, during and after installation.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-28 md:py-36 bg-muted/60 relative">
      <div className="container-luxury">
        <div className="max-w-3xl">
          <span className="eyebrow">Why Naviya</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1]">
            Craft you can feel,
            <span className="italic text-wood"> details you can trust.</span>
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05, duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="group bg-card rounded-2xl p-8 border border-border/60 hover:border-gold/50 shadow-soft transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full border border-gold/40 bg-gold/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors duration-500">
                <item.icon size={20} />
              </div>
              <h3 className="mt-6 text-xl text-charcoal">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
