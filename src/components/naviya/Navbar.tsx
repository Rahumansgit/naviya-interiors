import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxury flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-gold/70 flex items-center justify-center">
            <span className="font-display text-gold text-lg leading-none">N</span>
          </div>
          <div className="leading-tight">
            <div className={`font-display text-lg tracking-wide ${scrolled ? "text-charcoal" : "text-white"}`}>
              Naviya
            </div>
            <div className={`text-[10px] tracking-[0.3em] uppercase ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              Interior · Wood Work
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors relative ${
                scrolled ? "text-charcoal/80 hover:text-charcoal" : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+919636418563"
          className="hidden md:inline-flex items-center gap-2 btn-gold btn-gold-hover text-sm"
        >
          <Phone size={16} /> +91 96364 18563
        </a>

        <button
          className={`lg:hidden ${scrolled ? "text-charcoal" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-background border-t border-border"
        >
          <div className="container-luxury py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-charcoal py-2 border-b border-border/50"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+919636418563" className="btn-gold btn-gold-hover justify-center mt-2">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
