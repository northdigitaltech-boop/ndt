"use client";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import CodeIcon from "@mui/icons-material/Code";
import BugReportIcon from "@mui/icons-material/BugReport";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const steps = [
  {
    icon: <SearchIcon sx={{ fontSize: 32 }} />,
    title: "Research Product",
    desc: "We deeply analyze your business goals, target audience, and market to craft the right digital strategy.",
    step: "01",
    color: "from-cyan-500 to-blue-500",
    border: "border-cyan-500/30",
    glow: "shadow-cyan-500/20",
  },
  {
    icon: <CodeIcon sx={{ fontSize: 32 }} />,
    title: "Development",
    desc: "Our expert team brings the plan to life — building scalable, high-performance digital solutions.",
    step: "02",
    color: "from-blue-500 to-indigo-500",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/20",
  },
  {
    icon: <BugReportIcon sx={{ fontSize: 32 }} />,
    title: "User Testing",
    desc: "We rigorously test every feature to ensure flawless performance, great UX, and zero bugs before delivery.",
    step: "03",
    color: "from-indigo-500 to-purple-500",
    border: "border-indigo-500/30",
    glow: "shadow-indigo-500/20",
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />,
    title: "Product Handover",
    desc: "Your polished product is launched and handed over with full support, documentation, and long-term care.",
    step: "04",
    color: "from-purple-500 to-pink-500",
    border: "border-purple-500/30",
    glow: "shadow-purple-500/20",
  },
];

export default function WorkingProcessSection() {
  return (
    <section id="process" className="relative bg-[#0a1628] py-28 px-6 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4 tracking-widest uppercase">
            Working Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our Clients Prefer Us Because Of{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              Our Way Of Working
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Each company is distinguished by its own character. We are always striving to improve our way to be the best in completing business with all quality and professionalism.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-linear-to-r from-cyan-500/20 via-blue-500/40 to-purple-500/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className={`relative bg-[#0a1a2e]/80 backdrop-blur-sm border ${step.border} rounded-2xl p-8 flex flex-col items-center text-center gap-4 shadow-xl ${step.glow} hover:shadow-2xl transition-all duration-300 group`}
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className={`inline-block px-3 py-0.5 text-xs font-black rounded-full bg-linear-to-r ${step.color} text-white shadow-lg`}>
                    STEP {step.step}
                  </span>
                </div>

                {/* Icon */}
                <div className={`mt-4 w-16 h-16 rounded-2xl flex items-center justify-center bg-linear-to-br ${step.color} shadow-lg text-white group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-xl">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>

                {/* Arrow (not last) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-8 h-8 rounded-full bg-[#0a1628] border border-cyan-500/30 flex items-center justify-center">
                      <span className="text-cyan-400 text-sm font-bold">→</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
