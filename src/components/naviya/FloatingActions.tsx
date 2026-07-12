import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        whileHover={{ scale: 1.08 }}
        href="https://wa.me/919636418563"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-luxury"
      >
        <MessageCircle size={22} />
      </motion.a>
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.7, type: "spring" }}
        whileHover={{ scale: 1.08 }}
        href="tel:+919636418563"
        aria-label="Call"
        className="w-14 h-14 rounded-full bg-gold text-charcoal flex items-center justify-center shadow-gold"
      >
        <Phone size={22} />
      </motion.a>
    </div>
  );
}
