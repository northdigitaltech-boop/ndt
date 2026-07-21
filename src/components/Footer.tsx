"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useLang } from "@/lib/LangContext";
import { useContent } from "@/lib/ContentContext";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
  ],
  Services: [
    { label: "Web Development", href: "/services" },
    { label: "Mobile Apps", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
    { label: "Cloud Solutions", href: "/services" },
  ],
  "Quick Links": [
    { label: "Packages", href: "/packages" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  const { t } = useLang();
  const { contact } = useContent();
  return (
    <footer className="bg-[#050d1a] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400 shadow-lg shadow-cyan-500/30 bg-white shrink-0"
              >
                <Image
                  src="/ndt-logo.png"
                  alt="N Digital Tech"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </motion.div>
              <div>
                <div className="text-xl font-bold">
                  <span className="text-white">North</span>
                  <span className="text-cyan-400">Digital</span>
                  <span className="text-white"> Tech</span>
                </div>
                <div className="text-xs text-gray-500 tracking-widest uppercase">NDT</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t("footer_desc")}
            </p>

            <div className="flex flex-col gap-3 text-sm">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <EmailIcon fontSize="small" className="text-cyan-500" />
                {contact.email}
              </a>
              <a href={`tel:+${contact.whatsapp}`} className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <PhoneIcon fontSize="small" className="text-cyan-500" />
                {contact.phone}
              </a>
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
                <WhatsAppIcon fontSize="small" className="text-green-500" />
                WhatsApp: +{contact.whatsapp}
              </a>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <LocationOnIcon fontSize="small" className="text-cyan-500" />
                {contact.address}
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {[
                { icon: <LinkedInIcon fontSize="small" />, href: "https://www.linkedin.com/company/north-digital-solution/" },
                { icon: <InstagramIcon fontSize="small" />, href: "https://www.instagram.com/northdigitalsolution?igsh=bzI3ZDZsMmNuNTZ3&utm_source=qr" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0d1f35] border border-cyan-500/20 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="text-white font-bold text-sm tracking-wide">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowForwardIcon sx={{ fontSize: 12 }} />
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-cyan-500/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>
            © {new Date().getFullYear()} NorthDigital Tech. {t("footer_rights")}
          </span>
        </div>
      </div>
    </footer>
  );
}
