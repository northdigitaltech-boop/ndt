"use client";
import { motion } from "framer-motion";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import GroupsIcon from "@mui/icons-material/Groups";
import PublicIcon from "@mui/icons-material/Public";
import VerifiedIcon from "@mui/icons-material/Verified";

const highlights = [
  { icon: <EmojiObjectsIcon />, label: "Innovation First", desc: "We welcome all new ideas and turn them into reality." },
  { icon: <GroupsIcon />, label: "Expert Team", desc: "A large team of experts in many fields working for you." },
  { icon: <PublicIcon />, label: "Global Reach", desc: "Supporting clients to enter and scale across international markets." },
  { icon: <VerifiedIcon />, label: "Quality Driven", desc: "We rely on quality in work and always strive to provide the best." },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#07111f] py-28 px-6 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4 tracking-widest uppercase">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Who We{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              Are
            </span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We started with a small team consisting of three experts, and because of the success and satisfaction of our customers with the quality of service, we grew into a large team that includes experts in many fields.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We welcome all new ideas and turn them into reality through professional solutions. Thanks to our previous experiences, we gained great experience in the tech field. We will stay with you until you enter the market and create your own touch on the Internet through your solution platform.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We offer you all the support, we want you to have peace of mind because we will be providing support for the long term. We look forward to contacting you to offer our best. We rely on quality in work and always strive to provide the best.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {["Shabbir Hussain", "Muhammad Ibrahim", "Shakir Hussain", "Muhammad Shahzaib"].map((name) => (
                <span key={name} className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold">
                  {name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-[#0a1628]/80 border border-cyan-500/15 hover:border-cyan-500/40 rounded-2xl p-6 flex flex-col gap-3 shadow-lg hover:shadow-cyan-500/10 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
                  {h.icon}
                </div>
                <h4 className="text-white font-bold text-lg">{h.label}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
