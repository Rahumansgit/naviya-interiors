import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Excellent carpentry work. The team delivered our modular kitchen with perfect finishing — everything fits seamlessly.",
    name: "Priya Ramanathan",
    role: "Home Owner, Anna Nagar",
  },
  {
    quote:
      "Highly recommended. Very professional carpenter team, great quality materials and truly worth the money.",
    name: "Karthik Subramaniam",
    role: "Villa Owner, ECR",
  },
  {
    quote:
      "Beautiful workmanship on our wardrobes and TV unit. The finishing is on par with the best showroom furniture.",
    name: "Aishwarya Menon",
    role: "Apartment Owner, T. Nagar",
  },
  {
    quote:
      "Naviya renovated our entire home. On-time, transparent pricing and the finish is genuinely premium.",
    name: "Rakesh Iyer",
    role: "Home Owner, Adyar",
  },
  {
    quote:
      "The attention to detail is what stood out — every joint, every edge is handled with care.",
    name: "Divya Prakash",
    role: "Interior Consultant",
  },
  {
    quote:
      "Perfect finishing and very responsive team. Our false ceiling and POP work look absolutely elegant.",
    name: "Vignesh Kumar",
    role: "Home Owner, Choolai",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 md:py-40 bg-muted/60">
      <div className="container-luxury">
        <div className="max-w-2xl">
          <span className="eyebrow">Kind Words</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1]">
            Trusted by families
            <span className="italic text-wood"> across Chennai.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-14"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="!pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/60 shadow-soft h-full flex flex-col min-h-[320px]">
                  <Quote className="text-gold" size={28} />
                  <p className="mt-6 text-charcoal/85 leading-relaxed text-lg font-light flex-grow">
                    "{t.quote}"
                  </p>
                  <div className="mt-8 pt-6 border-t border-border/60">
                    <div className="flex text-gold gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <div className="font-display text-lg text-charcoal">{t.name}</div>
                    <div className="text-xs text-muted-foreground tracking-wide mt-0.5">
                      {t.role}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        .swiper-pagination-bullet { background: var(--charcoal); opacity: 0.25; }
        .swiper-pagination-bullet-active { background: var(--gold); opacity: 1; width: 24px; border-radius: 4px; transition: all 0.3s; }
      `}</style>
    </section>
  );
}
