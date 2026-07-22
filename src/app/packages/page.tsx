"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackagesSection from "@/components/PackagesSection";
import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";
import { useContent } from "@/lib/ContentContext";


export default function PackagesPage() {
  const { comparison, pageHeaders } = useContent();
  const hdr = pageHeaders.packages;
  return (
    <div className="bg-[#0a1628] min-h-screen text-white">
      <Navbar />

      <section className="pt-36 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
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

      <PackagesSection />

      {/* Comparison Table */}
      <section className="px-6 py-16 bg-[#07111f]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-white text-center mb-10"
          >
            Feature{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Comparison
            </span>
          </motion.h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cyan-500/20">
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-cyan-400 font-bold">Basic<br/><span className="text-xs font-normal text-gray-500">RM 1,499/mo</span></th>
                  <th className="text-center py-4 px-4 text-amber-400 font-bold">Standard<br/><span className="text-xs font-normal text-gray-500">RM 1,999/mo</span></th>
                  <th className="text-center py-4 px-4 text-violet-400 font-bold">Premium Pro<br/><span className="text-xs font-normal text-gray-500">RM 2,999/mo</span></th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/2" : ""}`}>
                    <td className="py-3.5 px-4 text-gray-300">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center text-sm">
                      {String(row.starter) === "true" ? <CheckIcon fontSize="small" className="text-cyan-400" /> : String(row.starter) === "false" ? <span className="text-gray-700">—</span> : <span className="text-cyan-300 font-medium">{row.starter}</span>}
                    </td>
                    <td className="py-3.5 px-4 text-center text-sm">
                      {String(row.pro) === "true" ? <CheckIcon fontSize="small" className="text-amber-400" /> : String(row.pro) === "false" ? <span className="text-gray-700">—</span> : <span className="text-amber-300 font-medium">{row.pro}</span>}
                    </td>
                    <td className="py-3.5 px-4 text-center text-sm">
                      {String(row.enterprise) === "true" ? <CheckIcon fontSize="small" className="text-violet-400" /> : String(row.enterprise) === "false" ? <span className="text-gray-700">—</span> : <span className="text-violet-300 font-medium">{row.enterprise}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
