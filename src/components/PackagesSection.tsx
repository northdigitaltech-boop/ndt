"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DiamondIcon from "@mui/icons-material/Diamond";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import { useContent } from "@/lib/ContentContext";

const pkgIcons = [
  <RocketLaunchIcon key="basic" sx={{ fontSize: 28 }} />,
  <AutoAwesomeIcon key="standard" sx={{ fontSize: 28 }} />,
  <DiamondIcon key="premium" sx={{ fontSize: 28 }} />,
];

export default function PackagesSection() {
  const { t } = useLang();
  const { packages, contact } = useContent();
  const [selectedPkg, setSelectedPkg] = useState<string | null>(null);

  const selectedPkgData = packages.find((p) => p.name === selectedPkg);
  const waMessage = selectedPkgData
    ? encodeURIComponent(`Hi! I'm interested in the *${selectedPkgData.name}* (${selectedPkgData.price}/month). Can you tell me more?`)
    : "";
  return (
    <section id="packages" className="relative bg-[#0a1628] py-28 px-6 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4 tracking-widest uppercase">
            {t("packages_badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            {t("packages_title")}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              {t("packages_title_highlight")}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            With <span className="text-cyan-400 font-bold">N Digital Tech</span> — {t("packages_desc")}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mt-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`relative backdrop-blur-sm border rounded-2xl flex flex-col overflow-hidden transition-all duration-300 ${
                pkg.highlight
                  ? "bg-[#0d2440] border-cyan-500/60 ring-2 ring-cyan-500/30 shadow-2xl shadow-cyan-500/15"
                  : "bg-[#0a1a2e]/80 border-white/10 shadow-lg hover:border-white/20"
              }`}
            >
              {/* Top gradient strip */}
              {pkg.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-t-2xl" />
              )}

              {/* Badge */}
              {pkg.badge && (
                <div className={`absolute top-4 right-4 px-3 py-0.5 text-xs font-bold rounded-full ${
                  pkg.highlight ? "bg-cyan-500 text-white" : "bg-white/10 text-gray-300 border border-white/20"
                }`}>
                  {pkg.badge}
                </div>
              )}

              {/* Header */}
              <div className="px-6 pt-8 pb-5 border-b border-white/10 flex items-center gap-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  pkg.highlight ? "bg-cyan-500/20 border border-cyan-500/40 text-cyan-400" : "bg-white/5 border border-white/10 text-gray-300"
                }`}>
                  {pkgIcons[i % pkgIcons.length]}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">{pkg.name}</h3>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">{pkg.period}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-5 flex-1">
                {/* Included team */}
                <div className="bg-white/5 border border-white/8 rounded-xl p-4 flex flex-col gap-1.5">
                  {pkg.included.map((item) => (
                    <p key={item} className="text-gray-300 text-xs font-semibold uppercase leading-snug">
                      {item}
                    </p>
                  ))}
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircleIcon sx={{ fontSize: 15 }} className="text-cyan-400 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className={`mt-2 rounded-xl px-4 py-4 flex flex-col items-center border ${
                  pkg.highlight ? "bg-cyan-500/5 border-cyan-500/20" : "bg-black/20 border-white/10"
                }`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-500 line-through text-sm">{pkg.originalPrice}</span>
                    <span className="px-2 py-0.5 bg-red-500/15 border border-red-500/30 rounded-full text-red-400 text-xs font-bold">
                      {pkg.discount}
                    </span>
                  </div>
                  <div className={`text-3xl font-extrabold ${pkg.highlight ? "text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]" : "text-white"}`}>
                    {pkg.price}
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5">/month</div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelectedPkg(pkg.name)}
                  className={`w-full py-3 rounded-full text-center font-bold text-sm transition-all duration-200 ${
                    pkg.highlight
                      ? "bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/30"
                      : "bg-white/8 hover:bg-white/15 text-white border border-white/15"
                  }`}
                >
                  {t("packages_cta")}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          <p className="text-gray-400 text-sm">{t("packages_wa")}</p>
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-green-500/30 text-lg"
          >
            <WhatsAppIcon />
            +{contact.whatsapp}
          </a>
        </motion.div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedPkg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedPkg(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0d1f35] border border-cyan-500/30 rounded-2xl p-8 max-w-sm w-full shadow-2xl shadow-cyan-500/20 relative"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedPkg(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <CloseIcon />
              </button>

              <h3 className="text-white font-extrabold text-xl mb-1 text-center">Get Started</h3>
              <p className="text-gray-400 text-sm text-center mb-6">
                You selected <span className="text-cyan-400 font-bold">{selectedPkg}</span>.<br />
                How would you like to reach us?
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedPkg(null)}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-green-500/30 text-base"
                >
                  <WhatsAppIcon />
                  Contact via WhatsApp
                </a>

                <Link
                  href="/contact"
                  onClick={() => setSelectedPkg(null)}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold rounded-xl transition-all duration-200 text-base"
                >
                  <EmailIcon />
                  Send us an Email
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
