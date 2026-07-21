"use client";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useContent } from "@/lib/ContentContext";

export default function WhatsAppFloat() {
  const { contact } = useContent();
  return (
    <a
      href={`https://wa.me/${contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full shadow-2xl shadow-green-500/50 transition-colors duration-200"
      >
        <WhatsAppIcon sx={{ fontSize: 30, color: "white" }} />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-ping" />
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.4 }}
        className="absolute right-16 bottom-3 bg-[#0d1f35] border border-green-500/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg pointer-events-none"
      >
        Chat with us 💬
      </motion.div>
    </a>
  );
}
