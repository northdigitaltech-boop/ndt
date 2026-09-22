"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { useContent } from "@/lib/ContentContext";

export default function TeamSection({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const { t } = useLang();
  const { team } = useContent();
  const featured = team.filter((m) => m.showOnHome);
  // On the home page show flagged members; if none are flagged yet, show the first person.
  const visibleTeam = featuredOnly ? (featured.length > 0 ? featured : team.slice(0, 1)) : team;
  return (
    <section id="team" className="relative bg-[#07111f] py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4 tracking-widest uppercase">
            {t("team_badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t("team_title")}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              {t("team_title_highlight")}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t("team_desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleTeam.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="relative bg-[#0a1628]/80 backdrop-blur-sm border border-cyan-500/15 hover:border-cyan-500/40 rounded-2xl p-8 flex flex-col items-center text-center gap-4 shadow-xl hover:shadow-cyan-500/15 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-linear-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Avatar ring glow */}
              <div className="relative w-36 h-36 rounded-full p-0.5 bg-linear-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image src={member.image} alt={member.name} fill sizes="144px" className={`object-cover ${member.pos}`} />
                </div>
              </div>

              <div className="relative">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <span className="inline-block mt-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold tracking-wide">
                  {member.role}
                </span>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
