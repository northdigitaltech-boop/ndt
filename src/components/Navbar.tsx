"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import { useLang } from "@/lib/LangContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Our Work", href: "/work" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav_home"), href: "/" },
    { label: t("nav_services"), href: "/services" },
    { label: t("nav_packages"), href: "/packages" },
    { label: t("nav_careers"), href: "/careers" },
    { label: t("nav_about"), href: "/#about" },
    { label: t("nav_contact"), href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-cyan-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="relative"
          >
            {/* Spinning cyan ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/50"
              style={{ margin: "-4px" }}
            />
            {/* Pulse glow */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md"
            />
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-400 shadow-lg shadow-cyan-500/40 shrink-0 bg-white">
              <Image
                src="/ndt-logo.png"
                alt="N Digital Tech"
                fill
                sizes="56px"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl font-bold hidden sm:block"
          >
            <span className="text-white">North</span>
            <span className="text-cyan-400">Digital</span>
            <span className="text-white"> Tech</span>
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              {link.label}
            </Link>
          ))}

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "ms" : "en")}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-cyan-500/40 hover:border-cyan-400 rounded-full text-cyan-400 text-xs font-bold transition-all duration-200 hover:bg-cyan-500/10"
            title="Switch Language"
          >
            <LanguageIcon sx={{ fontSize: 15 }} />
            {lang === "en" ? "BM" : "EN"}
          </button>

          <Link
            href="/contact"
            className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-lg shadow-cyan-500/30"
          >
            {t("nav_cta")}
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-cyan-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a1628]/98 backdrop-blur-md border-t border-cyan-500/20 px-6 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-full text-center"
            >
              {t("nav_cta")}
            </Link>
            <button
              onClick={() => setLang(lang === "en" ? "ms" : "en")}
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium w-fit"
            >
              <LanguageIcon sx={{ fontSize: 16 }} />
              {lang === "en" ? "Bahasa Malaysia" : "English"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
