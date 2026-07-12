import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 bg-background">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5"
          >
            <span className="eyebrow">Visit · Call · Message</span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
              Let's talk about
              <span className="italic text-wood"> your space.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Drop by our workshop, give us a call, or share your project details on WhatsApp.
              We reply personally, usually the same day.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="w-11 h-11 flex-shrink-0 rounded-full border border-gold/40 bg-gold/5 flex items-center justify-center text-gold">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs tracking-[0.28em] uppercase text-muted-foreground">Workshop</div>
                  <div className="mt-1 text-charcoal leading-relaxed">
                    NAVIYA INTERIOR WOOD WORK<br />
                    21, Vijaya Vigneshwarar Koil Street,<br />
                    Choolai, Chennai, Tamil Nadu 600007
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="tel:+919636418563" className="w-11 h-11 flex-shrink-0 rounded-full border border-gold/40 bg-gold/5 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition">
                  <Phone size={18} />
                </a>
                <div>
                  <div className="text-xs tracking-[0.28em] uppercase text-muted-foreground">Phone</div>
                  <a href="tel:+919636418563" className="mt-1 block text-charcoal font-display text-2xl hover:text-wood transition">
                    +91 96364 18563
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://wa.me/919636418563"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 flex-shrink-0 rounded-full border border-gold/40 bg-gold/5 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition"
                >
                  <MessageCircle size={18} />
                </a>
                <div>
                  <div className="text-xs tracking-[0.28em] uppercase text-muted-foreground">WhatsApp</div>
                  <a
                    href="https://wa.me/919636418563"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-charcoal hover:text-wood transition"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 flex-shrink-0 rounded-full border border-gold/40 bg-gold/5 flex items-center justify-center text-gold">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="text-xs tracking-[0.28em] uppercase text-muted-foreground">Hours</div>
                  <div className="mt-1 text-charcoal">Mon – Sat · 9:00 AM – 8:00 PM</div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="tel:+919636418563" className="btn-dark">
                <Phone size={16} /> Click to Call
              </a>
              <a
                href="https://wa.me/919636418563?text=Hi%20Naviya%2C%20I'd%20like%20to%20request%20a%20free%20consultation."
                target="_blank"
                rel="noreferrer"
                className="btn-gold btn-gold-hover"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl overflow-hidden shadow-luxury border border-border">
              <iframe
                title="Naviya Interior Wood Work — Chennai"
                src="https://www.google.com/maps?q=Vijaya+Vigneshwarar+Koil+Street,+Choolai,+Chennai,+Tamil+Nadu+600007&output=embed"
                width="100%"
                height="620"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
