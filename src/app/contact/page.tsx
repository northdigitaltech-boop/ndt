"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Typical timelines range from 2–6 weeks for standard websites, and 2–6 months for complex web applications, depending on scope and requirements.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes! We offer maintenance packages and dedicated support plans to keep your project running smoothly after launch.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Absolutely. Our solutions are built to scale, and you can always upgrade your package or add new features as your business grows.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we work with clients worldwide. Our team is available across multiple time zones for seamless collaboration.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#0a1628] min-h-screen text-white">
      <Navbar />

      <section className="pt-36 pb-10 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-6">
            Contact Us
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Let&apos;s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Amazing
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? We are just a message away. Let&apos;s talk about
            how we can help your business grow.
          </p>
        </motion.div>
      </section>

      <ContactSection />

      {/* FAQ */}
      <section className="px-6 py-20 bg-[#07111f]">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-white text-center mb-10"
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Questions
            </span>
          </motion.h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0d1f35] border border-cyan-500/20 rounded-2xl p-6"
              >
                <h3 className="text-white font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
