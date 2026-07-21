"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { useContent } from "@/lib/ContentContext";

const defaultTeam = [
  {
    name: "Shabbir Hussain",
    role: "CEO & Founder",
    bio: "A visionary leader driving the growth and strategic direction of NorthDigital Tech. As a passionate Software Engineer and entrepreneur, he specializes in web development, mobile applications, e-commerce, and digital solutions.",
    image: "/ceo.jpeg",
    pos: "object-center",
  },
  {
    name: "Muhammad Ibrahim",
    role: "Managing Director & Co-Founder",
    bio: "Oversees operations and client success with a sharp business mindset. Committed to delivering excellence on every project.",
    image: "/team1.jpeg",
    pos: "object-top",
  },
  {
    name: "Shakir Hussain",
    role: "Web Developer",
    bio: "Builds fast, modern, and scalable websites with clean code. Transforms designs into seamless digital experiences.",
    image: "/shaker.jpeg",
    pos: "object-center",
  },
  {
    name: "Huzaifa Sajjad",
    role: "Project Manager & Full Stack Developer",
    bio: "With 3+ years of experience, Huzaifa leads projects from concept to delivery with precision and passion. Skilled in full stack development, he bridges the gap between technical execution and client expectations — ensuring every product is delivered on time, on budget, and beyond expectations.",
    image: "/huzaifa.png",
    pos: "object-top",
  },
  {
    name: "Fahad",
    role: "Full Stack Developer",
    bio: "A dedicated Full Stack Developer with 2+ years of experience building robust web applications from front to back. Fahad brings creativity and technical depth to every project, crafting seamless user experiences backed by solid, scalable code.",
    image: "/fahad.png",
    pos: "object-top",
  },
  {
    name: "Hassam Jan",
    role: "Full Stack Developer & UI Designer",
    bio: "With 2+ years of experience, Hassam blends clean code with stunning design. He specializes in building full stack applications while crafting pixel-perfect UI that keeps users engaged and delighted.",
    image: "/hassamjan.png",
    pos: "object-top",
  },
  {
    name: "Muneeb",
    role: "UI/UX Designer",
    bio: "A creative UI/UX Designer with 3+ years of experience turning complex ideas into beautiful, intuitive interfaces. Muneeb crafts user-centered designs that not only look great but deliver smooth, engaging experiences across web and mobile platforms.",
    image: "/muneeb.png",
    pos: "object-top",
  },
];

export default function TeamSection() {
  const { t } = useLang();
  const { team = defaultTeam } = useContent();
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
          {team.map((member, i) => (
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
