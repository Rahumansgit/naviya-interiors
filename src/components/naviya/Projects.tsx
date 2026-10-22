import { motion } from "framer-motion";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import kitchen from "@/assets/service-kitchen.jpg";
import bedroom from "@/assets/service-bedroom.jpg";

const projects = [
  { img: p3, cat: "Foyer", title: "The Choolai Residence", span: "md:col-span-4 md:row-span-2" },
  { img: kitchen, cat: "Kitchen", title: "Walnut & Brass Kitchen", span: "md:col-span-4" },
  { img: p2, cat: "Dining", title: "Warm Oak Dining", span: "md:col-span-4" },
  { img: bedroom, cat: "Bedroom", title: "Cocoon Master Suite", span: "md:col-span-5" },
  { img: p1, cat: "Detail", title: "Handcrafted Joinery", span: "md:col-span-3 md:row-span-2" },
  { img: p5, cat: "Library", title: "The Reading Nook", span: "md:col-span-4" },
  { img: p4, cat: "Bath", title: "Marble & Walnut Vanity", span: "md:col-span-4" },
  { img: p6, cat: "Kids", title: "Bunk & Study", span: "md:col-span-4" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-40 bg-cream">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Selected Work</span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1]">
              Homes we've had the
              <span className="italic text-wood"> privilege to shape.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm tracking-wide text-charcoal border-b border-gold pb-1 hover:text-wood transition"
          >
            Start your project →
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-12 auto-rows-[220px] md:auto-rows-[260px] gap-4 md:gap-5">
          {projects.map((p, i) => (
            <motion.figure
              key={p.title + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.8 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer col-span-2 ${p.span}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-[10px] tracking-[0.35em] uppercase text-gold">{p.cat}</div>
                <div className="mt-2 font-display text-2xl md:text-3xl">{p.title}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
