import { Instagram, Facebook, MapPin, Phone, MessageCircle } from "lucide-react";

const services = [
  "Modular Kitchen",
  "Wardrobes",
  "TV Units",
  "Wooden Furniture",
  "False Ceiling",
  "POP & Tiles Work",
  "Custom Carpentry",
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/90 pt-24 pb-10 relative overflow-hidden">
      <div className="absolute -top-40 left-1/3 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-luxury relative">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-gold flex items-center justify-center">
                <span className="font-display text-gold text-xl">N</span>
              </div>
              <div>
                <div className="font-display text-2xl">Naviya</div>
                <div className="text-[10px] tracking-[0.35em] uppercase text-cream/60">
                  Interior · Wood Work
                </div>
              </div>
            </div>
            <p className="mt-6 text-cream/70 leading-relaxed max-w-md">
              A Chennai-based atelier crafting modular kitchens, wardrobes and full-home interiors
              with quiet, uncompromising workmanship.
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold transition"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold transition"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://wa.me/919636418563"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold transition"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Services</div>
            <ul className="space-y-3 text-cream/70">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-gold transition">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Studio</div>
            <div className="space-y-4 text-cream/70">
              <div className="flex gap-3">
                <MapPin size={16} className="text-gold mt-1 flex-shrink-0" />
                <span>21, Vijaya Vigneshwarar Koil Street, Choolai, Chennai 600007</span>
              </div>
              <a
                href="tel:+919636418563"
                className="flex items-center gap-3 hover:text-gold transition"
              >
                <Phone size={16} className="text-gold" /> +91 96364 18563
              </a>
              <a
                href="https://maps.app.goo.gl/67vH9Q6GPV65kbgs7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-sm border-b border-gold/40 pb-0.5 hover:text-gold transition"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>

        <div className="hairline my-14 opacity-30" />

        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50 tracking-wide">
          <div>© {new Date().getFullYear()} Naviya Interior Wood Work. All rights reserved.</div>
          <div>Handcrafted in Chennai · Serving all of Tamil Nadu</div>
        </div>
      </div>
    </footer>
  );
}
