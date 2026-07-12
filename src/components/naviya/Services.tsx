import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import kitchen from "@/assets/service-kitchen.jpg";
import wardrobe from "@/assets/service-wardrobe.jpg";
import tv from "@/assets/service-tv.jpg";
import bedroom from "@/assets/service-bedroom.jpg";
import ceiling from "@/assets/service-ceiling.jpg";
import office from "@/assets/service-office.jpg";

const services = [
  {
    n: "01",
    tag: "Signature",
    title: "Modular Kitchens",
    desc: "Handleless cabinetry, quartz and marble tops, integrated appliances — kitchens engineered for the way your family truly cooks.",
    img: kitchen,
  },
  {
    n: "02",
    tag: "Storage",
    title: "Wardrobes & Walk-ins",
    desc: "Sliding, hinged or walk-in wardrobes with soft-close motion, integrated lighting and interiors tailored around your wardrobe.",
    img: wardrobe,
  },
  {
    n: "03",
    tag: "Living",
    title: "TV Units & Feature Walls",
    desc: "Grounded compositions in walnut and oak — floating shelves, concealed storage and cove lighting that anchor the room.",
    img: tv,
  },
  {
    n: "04",
    tag: "Interiors",
    title: "Bedroom & Living Interiors",
    desc: "Full-room interiors from headboards to side tables — layered materials, warm palettes, quiet detailing throughout.",
    img: bedroom,
  },
  {
    n: "05",
    tag: "Architectural",
    title: "False Ceiling & POP Work",
    desc: "Gypsum ceilings, cove lighting, cornices and POP finishes that add depth and drama to every ceiling plane.",
    img: ceiling,
  },
  {
    n: "06",
    tag: "Workspaces",
    title: "Office & Study Interiors",
    desc: "Executive cabins, home offices and study rooms with built-in libraries, focus lighting and considered proportions.",
    img: office,
  },
];

const chips = [
  "Custom Carpentry",
  "Wooden Furniture",
  "Tiles Work",
  "Interior Renovation",
];

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-40 bg-background">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Services</span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1]">
              A complete atelier for
              <span className="italic text-wood"> your home.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            From a single wardrobe to a full-home turnkey interior — every project receives the same
            uncompromising attention to material, joinery and finish.
          </p>
        </div>

        <div className="mt-20 space-y-28 md:space-y-40">
          {services.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
                  <motion.div
                    whileHover={{ scale: 1.015 }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-2xl overflow-hidden shadow-luxury group"
                  >
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      width={1600}
                      height={1200}
                      className="w-full h-[420px] md:h-[560px] object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 flex items-center gap-3">
                      <span className="bg-cream/90 backdrop-blur text-charcoal text-[10px] tracking-[0.3em] uppercase px-4 py-1.5 rounded-full">
                        {s.tag}
                      </span>
                    </div>
                  </motion.div>
                </div>

                <div className={`lg:col-span-5 ${reversed ? "lg:order-1 lg:pr-8" : "lg:pl-8"}`}>
                  <div className="font-display text-gold text-2xl">{s.n}</div>
                  <div className="hairline my-4 max-w-24" />
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-6 text-muted-foreground leading-relaxed text-lg">{s.desc}</p>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 text-charcoal border-b border-charcoal/30 hover:border-gold hover:text-wood pb-1 transition-all"
                  >
                    Enquire about this service <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-28 border-t border-border pt-10 flex flex-wrap items-center gap-3">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mr-3">Also crafting</span>
          {chips.map((c) => (
            <span key={c} className="px-4 py-2 rounded-full border border-border text-sm text-charcoal/80">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
