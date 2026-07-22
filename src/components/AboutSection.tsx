"use client";
import { motion } from "framer-motion";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import GroupsIcon from "@mui/icons-material/Groups";
import PublicIcon from "@mui/icons-material/Public";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useContent } from "@/lib/ContentContext";
import type { ReactNode } from "react";

const highlightIcons: ReactNode[] = [
  <EmojiObjectsIcon key="0" />,
  <GroupsIcon key="1" />,
  <PublicIcon key="2" />,
  <VerifiedIcon key="3" />,
];

export default function AboutSection() {
  const { about } = useContent();
  return (
    <section id="about" className="relative bg-[#07111f] py-28 px-6 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4 tracking-widest uppercase">
            {about.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {about.titleA}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              {about.titleHighlight}
            </span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {about.paragraphs.map((para, idx) => (
              <p key={idx} className="text-gray-300 text-lg leading-relaxed mb-6">
                {para}
              </p>
            ))}

            <div className="flex flex-wrap gap-3 mt-8">
              {about.names.map((name) => (
                <span key={name} className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold">
                  {name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {about.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-[#0a1628]/80 border border-cyan-500/15 hover:border-cyan-500/40 rounded-2xl p-6 flex flex-col gap-3 shadow-lg hover:shadow-cyan-500/10 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
                  {highlightIcons[i % highlightIcons.length]}
                </div>
                <h4 className="text-white font-bold text-lg">{h.label}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
