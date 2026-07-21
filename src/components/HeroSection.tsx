"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useLang } from "@/lib/LangContext";
import { useContent } from "@/lib/ContentContext";

// Lazy-load the Three.js scene so it doesn't block initial page load.
const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function HeroSection() {
  const { t } = useLang();
  const { heroStats } = useContent();
  return (
    <section className="relative min-h-screen w-full flex items-center bg-[#050d1a] overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Three.js Canvas (lazy-loaded) */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-[#050d1a] via-[#050d1a]/85 to-transparent" />
      <div className="absolute inset-0 z-10 bg-linear-to-t from-[#050d1a] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-2xl">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight"
          >
            <span className="text-white">{t("hero_h1a")}</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-300 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">
              {t("hero_h1b")}
            </span>
            <br />
            <span className="text-white">{t("hero_h1c")}</span>
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              {t("hero_h1d")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10"
          >
            {t("hero_desc")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-full transition-all duration-300 shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/60 text-base"
            >
              {t("hero_btn1")}
              <ArrowForwardIcon fontSize="small" className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400 hover:bg-white/10 text-cyan-400 font-bold rounded-full transition-all duration-300 text-base"
            >
              <PlayCircleIcon fontSize="small" />
              {t("hero_btn2")}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-10"
          >
            {[
              { value: heroStats[0]?.value ?? "50+", label: t("hero_stat1") },
              { value: heroStats[1]?.value ?? "30+", label: t("hero_stat2") },
              { value: heroStats[2]?.value ?? "5+", label: t("hero_stat3") },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <div className="text-3xl font-extrabold text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
