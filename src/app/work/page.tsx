"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkSection from "@/components/WorkSection";
import { motion } from "framer-motion";
import { useContent } from "@/lib/ContentContext";


export default function WorkPage() {
  const { workStats: stats } = useContent();
  return (
    <div className="bg-[#0a1628] min-h-screen text-white">
      <Navbar />

      <section className="pt-36 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-6">
            Portfolio
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Work
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects — each one a story of innovation,
            collaboration, and exceptional results.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-14"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0d1f35] border border-cyan-500/20 rounded-2xl p-5">
              <div className="text-3xl font-extrabold text-cyan-400">{s.value}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      <WorkSection />

      <Footer />
    </div>
  );
}
