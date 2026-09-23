"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { useContent } from "@/lib/ContentContext";

export default function ReviewsSection() {
  const { reviews } = useContent();
  const [zoom, setZoom] = useState<string | null>(null);

  if (!reviews || !reviews.items || reviews.items.length === 0) return null;

  return (
    <section className="bg-[#0a1628] py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4 tracking-widest uppercase">
            {reviews.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
            {reviews.titleA}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              {reviews.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">{reviews.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.items.map((r, i) => {
            const stars = Math.max(0, Math.min(5, parseInt(r.rating || "5", 10) || 5));
            const initial = (r.name || "?").charAt(0).toUpperCase();
            return (
              <motion.div
                key={`${r.name}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-[#0d1f35] border border-cyan-500/15 hover:border-cyan-500/40 rounded-2xl p-6 flex flex-col gap-4 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
              >
                {/* Header: client logo avatar + name + gmail */}
                <div className="flex items-center gap-3">
                  {r.logo ? (
                    <div className="w-11 h-11 rounded-full bg-white border border-white/20 overflow-hidden shrink-0 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={r.logo} alt={`${r.name} logo`} className="w-full h-full object-contain p-1" />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-linear-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                      {initial}
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="text-white font-bold leading-tight truncate">{r.name}</div>
                    <a href={`mailto:${r.email}`} className="text-cyan-400 text-xs hover:underline truncate block">
                      {r.email}
                    </a>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 text-yellow-400">
                  {Array.from({ length: stars }).map((_, s) => (
                    <StarIcon key={s} sx={{ fontSize: 18 }} />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-300 text-sm leading-relaxed flex-1">{r.text}</p>

                {/* Attached screenshot */}
                {r.screenshot && (
                  <button
                    onClick={() => setZoom(r.screenshot)}
                    className="relative group rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-colors"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.screenshot} alt={`Review from ${r.name}`} className="w-full max-h-48 object-cover object-top" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-colors">
                      <ZoomInIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Screenshot lightbox */}
      <AnimatePresence>
        {zoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoom(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button className="absolute top-5 right-5 text-white/80 hover:text-white" onClick={() => setZoom(null)}>
              <CloseIcon sx={{ fontSize: 32 }} />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={zoom} alt="Review screenshot" onClick={(e) => e.stopPropagation()} className="max-w-full max-h-[85vh] rounded-xl shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
