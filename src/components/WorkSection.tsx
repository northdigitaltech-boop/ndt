"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useLang } from "@/lib/LangContext";
import { useContent } from "@/lib/ContentContext";

export default function WorkSection() {
  const { t } = useLang();
  const { projects } = useContent();
  const [active, setActive] = useState(t("work_filter_all"));

  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const filtered =
    active === t("work_filter_all") ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="bg-[#0a1628] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4">
            {t("work_badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t("work_title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {t("work_title_highlight")}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t("work_desc")}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[t("work_filter_all"), ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-[#0d1f35] border border-cyan-500/20 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className={`bg-gradient-to-br ${project.color} backdrop-blur border ${project.border} rounded-2xl p-8 flex flex-col gap-4 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 group`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-bold">
                    {project.tag}
                  </span>
                  <OpenInNewIcon className="text-gray-600 group-hover:text-cyan-400 transition-colors" fontSize="small" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-cyan-500/30"
          >
            {t("work_cta")}
            <ArrowForwardIcon fontSize="small" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
