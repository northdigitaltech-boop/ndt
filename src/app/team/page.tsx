"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import { motion } from "framer-motion";
import PeopleIcon from "@mui/icons-material/People";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import HandshakeIcon from "@mui/icons-material/Handshake";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useContent } from "@/lib/ContentContext";
import type { ReactNode } from "react";

const valueIcons: Record<string, ReactNode> = {
  Innovation: <EmojiObjectsIcon fontSize="large" />,
  Excellence: <WorkspacePremiumIcon fontSize="large" />,
  Partnership: <HandshakeIcon fontSize="large" />,
  Collaboration: <PeopleIcon fontSize="large" />,
};


export default function TeamPage() {
  const { values, pageHeaders } = useContent();
  const hdr = pageHeaders.team;
  return (
    <div className="bg-[#0a1628] min-h-screen text-white">
      <Navbar />

      <section className="pt-36 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-6">
            {hdr.badge}
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            {hdr.titleA}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {hdr.titleHighlight}
            </span>
            {hdr.titleAfter ? <><br />{hdr.titleAfter}</> : null}
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            {hdr.desc}
          </p>
        </motion.div>
      </section>

      <TeamSection />

      {/* Values */}
      <section className="px-6 py-20 bg-[#07111f]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-white text-center mb-12"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Core Values
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-[#0d1f35] border border-cyan-500/20 rounded-2xl p-6 flex flex-col gap-4 items-center text-center"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center text-white`}>
                  {valueIcons[v.title] ?? <EmojiObjectsIcon fontSize="large" />}
                </div>
                <h3 className="text-lg font-bold text-white">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
