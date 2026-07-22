"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { useContent } from "@/lib/ContentContext";

export default function ClientsSection() {
  const { t } = useLang();
  const { clients } = useContent();
  return (
    <section className="bg-[#07111f] py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-semibold mb-4 tracking-wide uppercase">
            {t("clients_badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            {t("clients_title")}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              {t("clients_title_highlight")}
            </span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            {t("clients_desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className={`bg-white rounded-2xl flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 aspect-square p-6 ${
                client.link ? "cursor-pointer" : "cursor-default"
              }`}
            >
              {client.link ? (
                <a
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${client.name}`}
                  className="relative w-full h-full block"
                >
                  <Image src={client.image} alt={client.name} fill sizes="250px" className="object-contain" />
                </a>
              ) : (
                <div className="relative w-full h-full">
                  <Image src={client.image} alt={client.name} fill sizes="250px" className="object-contain" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
