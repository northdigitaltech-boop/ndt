"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useLang } from "@/lib/LangContext";
import { useContent } from "@/lib/ContentContext";

const EMAILJS_SERVICE_ID = "service_87hcjfe";
const EMAILJS_TEMPLATE_ID = "template_g54p8dm";
const EMAILJS_PUBLIC_KEY = "TMwI-Na8Nd8nR_nZB";

export default function ContactSection() {
  const { t } = useLang();
  const { contact, servicesHome } = useContent();
  const servicesList = [...servicesHome.map((s) => s.title), "Other"];
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      formRef.current?.reset();
      setTimeout(() => setSubmitted(false), 6000);
    } catch {
      setError("Something went wrong. Please try again or reach us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#07111f] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4">
            {t("contact_badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t("contact_title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {t("contact_title_highlight")}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t("contact_desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{t("contact_info_title")}</h3>
              <p className="text-gray-400 leading-relaxed">
                {t("contact_info_desc")}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                {
                  icon: <EmailIcon />,
                  label: "Email Us",
                  value: contact.email,
                  color: "bg-cyan-500/20 text-cyan-400",
                  href: `mailto:${contact.email}`,
                },
                {
                  icon: <PhoneIcon />,
                  label: "Call Us",
                  value: contact.phone,
                  color: "bg-blue-500/20 text-blue-400",
                  href: `tel:+${contact.whatsapp}`,
                },
                {
                  icon: <WhatsAppIcon />,
                  label: "WhatsApp Us",
                  value: `+${contact.whatsapp}`,
                  color: "bg-green-500/20 text-green-400",
                  href: `https://wa.me/${contact.whatsapp}`,
                },
                {
                  icon: <LocationOnIcon />,
                  label: "Our Office",
                  value: contact.address,
                  color: "bg-indigo-500/20 text-indigo-400",
                  href: `https://maps.google.com/?q=${encodeURIComponent(contact.address)}`,
                },
              ].map((item) => {
                const inner = (
                  <>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm font-semibold">{item.label}</div>
                      <div className="text-white font-medium mt-0.5">{item.value}</div>
                    </div>
                  </>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                    {inner}
                  </a>
                ) : (
                  <div key={item.label} className="flex items-start gap-4">{inner}</div>
                );
              })}
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-cyan-500/20 shadow-lg shadow-cyan-500/10 mt-2">
              <iframe
                title="JB Central Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.628!2d103.76!3d1.4655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0836bfd7a58f%3A0x9b3cda8c69c2a1aa!2sJalan%20Abdullah%20Ibrahim%2C%20Johor%20Bahru%2C%20Johor%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1715000000000"
                width="100%"
                height="240"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0d1f35] border border-cyan-500/20 rounded-2xl p-8 shadow-xl"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-4xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">{t("contact_success_title")}</h3>
                <p className="text-gray-400">
                  {t("contact_success_desc")}
                </p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-400 text-sm font-semibold">{t("contact_label_name")}</label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      placeholder={t("contact_placeholder_name")}
                      className="bg-[#0a1628] border border-cyan-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-400 text-sm font-semibold">{t("contact_label_email")}</label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      placeholder={t("contact_placeholder_email")}
                      className="bg-[#0a1628] border border-cyan-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm font-semibold">🛠️ {t("contact_label_subject")}</label>
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="bg-[#0a1628] border border-cyan-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-gray-600">{t("contact_select_default")}</option>
                    {servicesList.map((s) => (
                      <option key={s} value={s} className="bg-[#0a1628] text-white">{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm font-semibold">{t("contact_label_msg")}</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder={t("contact_placeholder_msg")}
                    className="bg-[#0a1628] border border-cyan-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                {/* Hidden recipient */}
                <input type="hidden" name="to_email" value={contact.email} />

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : t("contact_btn")}
                  {!loading && <SendIcon fontSize="small" />}
                </button>
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                    <p className="text-red-400 text-sm font-semibold">{error}</p>
                  </div>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
