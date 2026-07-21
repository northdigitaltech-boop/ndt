"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkIcon from "@mui/icons-material/Work";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useContent } from "@/lib/ContentContext";


interface FormData {
  fullName: string; phone: string; email: string; city: string; position: string;
  experience: string; currentCompany: string; currentPosition: string; expectedSalary: string;
  availableFrom: string; keySkills: string; softwareTools: string; portfolioLink: string;
  linkedIn: string; hasResume: string; whyJoin: string; internationalClients: string; declaration: boolean;
}

export default function CareersPage() {
  const { jobs, contact } = useContent();
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[number] | null>(null);
  const [applyJob, setApplyJob] = useState<string>("");
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [form, setForm] = useState<FormData>({
    fullName: "", phone: "", email: "", city: "", position: "",
    experience: "", currentCompany: "", currentPosition: "", expectedSalary: "",
    availableFrom: "", keySkills: "", softwareTools: "", portfolioLink: "",
    linkedIn: "", hasResume: "yes", whyJoin: "", internationalClients: "no", declaration: false,
  });

  const handleApply = (title: string) => {
    setApplyJob(title);
    setForm((f) => ({ ...f, position: title }));
    setShowForm(true);
    setSelectedJob(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError("");
    try {
      const fd = new FormData();
      fd.append("website",             honeypot);
      fd.append("position",            form.position);
      fd.append("fullName",            form.fullName);
      fd.append("phone",               form.phone);
      fd.append("email",               form.email);
      fd.append("city",                form.city);
      fd.append("experience",          form.experience);
      fd.append("currentCompany",      form.currentCompany);
      fd.append("currentPosition",     form.currentPosition);
      fd.append("expectedSalary",      form.expectedSalary);
      fd.append("availableFrom",       form.availableFrom);
      fd.append("keySkills",           form.keySkills);
      fd.append("softwareTools",       form.softwareTools);
      fd.append("portfolioLink",       form.portfolioLink || "");
      fd.append("linkedIn",            form.linkedIn || "");
      fd.append("whyJoin",             form.whyJoin);
      fd.append("internationalClients",form.internationalClients);
      if (cvFile) fd.append("cv", cvFile);

      const res = await fetch("/api/careers", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setSendError("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#0a1628] text-white min-h-screen pt-24 overflow-x-hidden">
        {/* Hero */}
        <section className="relative py-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.07)_0%,transparent_70%)] pointer-events-none" />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto relative z-10">
            <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4 tracking-widest uppercase">Careers</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5">
              Join Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Growing Team</span>
            </h1>
            <p className="text-gray-400 text-lg">Work remotely, grow professionally, and collaborate with international clients. Find your role below.</p>
          </motion.div>
        </section>

        {/* Job Cards */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {jobs.map((job, i) => (
              <motion.div key={job.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }} whileHover={{ y: -6 }}
                className={`bg-[#0a1a2e]/80 backdrop-blur-sm border ${job.border} rounded-2xl p-6 flex flex-col gap-4 shadow-lg cursor-pointer transition-all duration-300`}
                onClick={() => setSelectedJob(job)}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-linear-to-br ${job.color} text-white shadow-lg`}><WorkIcon /></div>
                <h3 className="text-white font-bold text-lg">{job.title}</h3>
                <p className="text-gray-400 text-sm">Remote • Full Time / Part Time</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold rounded-full">Remote</span>
                  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full">Flexible Hours</span>
                </div>
                <button className={`mt-2 w-full py-2.5 rounded-full text-sm font-bold text-white bg-linear-to-r ${job.color} hover:opacity-90 transition-opacity duration-200 shadow-lg`}
                  onClick={(e) => { e.stopPropagation(); handleApply(job.title); }}>
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WhatsApp CTA */}
        <div className="py-10 flex flex-col items-center gap-4 px-6">
          <p className="text-gray-400 text-sm">Have questions about a position? Contact us directly.</p>
          <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-green-500/30 text-lg">
            <WhatsAppIcon /> WhatsApp Us
          </a>
        </div>

        {/* Job Detail Modal */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedJob(null)}>
              <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                className="bg-[#0d1e35] border border-cyan-500/20 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 relative"
                onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setSelectedJob(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white"><CloseIcon /></button>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-linear-to-br ${selectedJob.color} text-white shadow-lg mb-4`}><WorkIcon fontSize="large" /></div>
                <h2 className="text-2xl font-extrabold text-white mb-1">{selectedJob.title}</h2>
                <p className="text-gray-400 text-sm mb-6">Remote • Flexible Hours • International Clients</p>
                <div className="space-y-6">
                  {[{ label: "Job Description", items: selectedJob.description, color: "text-cyan-400" }, { label: "Requirements", items: selectedJob.requirements, color: "text-cyan-400" }, { label: "Benefits", items: selectedJob.benefits, color: "text-green-400" }].map((section) => (
                    <div key={section.label}>
                      <h3 className={`${section.color} font-bold text-sm uppercase tracking-widest mb-3`}>{section.label}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                            <CheckCircleIcon sx={{ fontSize: 15 }} className={`${section.color} mt-0.5 shrink-0`} />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <button className={`mt-8 w-full py-3 rounded-full font-bold text-white bg-linear-to-r ${selectedJob.color} hover:opacity-90 transition-opacity duration-200 shadow-lg`}
                  onClick={() => handleApply(selectedJob.title)}>Apply Now</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Application Form Modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
              <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                className="bg-[#0d1e35] border border-cyan-500/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
                <button onClick={() => { setShowForm(false); setSubmitted(false); setSendError(""); }}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"><CloseIcon /></button>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                    <CheckCircleIcon sx={{ fontSize: 64 }} className="text-green-400" />
                    <h2 className="text-2xl font-extrabold text-white">Application Submitted! 🎉</h2>
                    <p className="text-gray-400">Thank you, <span className="text-cyan-400 font-semibold">{form.fullName}</span>! We received your application{cvFile ? ` and CV (${cvFile.name})` : ""}. We will review and contact you soon.</p>
                    <a href={`https://wa.me/${contact.whatsapp}?text=Hi, I just applied for ${applyJob} at North Digital Solution.`}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-full transition-all duration-300">
                      <WhatsAppIcon /> Follow Up on WhatsApp
                    </a>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-extrabold text-white mb-1">Job Application Form</h2>
                    <p className="text-cyan-400 text-sm font-semibold mb-6">Applying for: {applyJob}</p>
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot — hidden from real users, filled by bots */}
                      <input
                        type="text"
                        name="website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
                      />
                      {/* Hidden fields for EmailJS */}
                      <input type="hidden" name="position" value={form.position} />
                      <input type="hidden" name="hasResume" value={form.hasResume} />
                      <input type="hidden" name="internationalClients" value={form.internationalClients} />

                      {/* Personal Info */}
                      <div>
                        <h3 className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-4">Personal Information</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {[
                            { label: "Full Name", key: "fullName", name: "fullName", placeholder: "Your full name" },
                            { label: "Phone Number", key: "phone", name: "phone", placeholder: "+60 xxx xxx xxxx" },
                            { label: "Email Address", key: "email", name: "email", placeholder: "you@example.com" },
                            { label: "Current City / Country", key: "city", name: "city", placeholder: "Kuala Lumpur, Malaysia" },
                          ].map((f) => (
                            <div key={f.key}>
                              <label className="block text-gray-300 text-sm font-medium mb-1">{f.label}</label>
                              <input required type="text" name={f.name} placeholder={f.placeholder}
                                value={form[f.key as keyof FormData] as string}
                                onChange={(e) => setForm((prev) => ({ ...prev, [f.key]: e.target.value }))}
                                className="w-full bg-[#0a1628] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50" />
                            </div>
                          ))}
                          <div className="sm:col-span-2">
                            <label className="block text-gray-300 text-sm font-medium mb-1">Position Applying For</label>
                            <select name="position_display" value={form.position} onChange={(e) => setForm((prev) => ({ ...prev, position: e.target.value }))}
                              className="w-full bg-[#0a1628] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-500/50">
                              {jobs.map((j) => <option key={j.title} value={j.title}>{j.title}</option>)}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Professional Info */}
                      <div>
                        <h3 className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-4">Professional Information</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {[
                            { label: "Years of Experience", key: "experience", name: "experience", placeholder: "e.g. 3 years" },
                            { label: "Current / Previous Company", key: "currentCompany", name: "currentCompany", placeholder: "Company name" },
                            { label: "Current Position", key: "currentPosition", name: "currentPosition", placeholder: "Your current role" },
                            { label: "Expected Salary", key: "expectedSalary", name: "expectedSalary", placeholder: "e.g. RM 3,000/month" },
                            { label: "Available to Join From", key: "availableFrom", name: "availableFrom", placeholder: "e.g. Immediately" },
                          ].map((f) => (
                            <div key={f.key}>
                              <label className="block text-gray-300 text-sm font-medium mb-1">{f.label}</label>
                              <input type="text" name={f.name} placeholder={f.placeholder}
                                value={form[f.key as keyof FormData] as string}
                                onChange={(e) => setForm((prev) => ({ ...prev, [f.key]: e.target.value }))}
                                className="w-full bg-[#0a1628] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h3 className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-4">Skills & Expertise</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {[
                            { label: "Key Skills", key: "keySkills", name: "keySkills", placeholder: "e.g. React, Node.js, SEO..." },
                            { label: "Software / Tools You Use", key: "softwareTools", name: "softwareTools", placeholder: "e.g. Figma, Premiere Pro..." },
                            { label: "Portfolio Link (if any)", key: "portfolioLink", name: "portfolioLink", placeholder: "https://yourportfolio.com" },
                            { label: "LinkedIn Profile (if any)", key: "linkedIn", name: "linkedIn", placeholder: "https://linkedin.com/in/..." },
                          ].map((f) => (
                            <div key={f.key}>
                              <label className="block text-gray-300 text-sm font-medium mb-1">{f.label}</label>
                              <input type="text" name={f.name} placeholder={f.placeholder}
                                value={form[f.key as keyof FormData] as string}
                                onChange={(e) => setForm((prev) => ({ ...prev, [f.key]: e.target.value }))}
                                className="w-full bg-[#0a1628] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50" />
                            </div>
                          ))}
                          <div className="sm:col-span-2">
                            <label className="block text-gray-300 text-sm font-medium mb-2">Upload Resume / CV</label>
                            <div
                              className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-colors duration-200 cursor-pointer
                                ${cvFile ? "border-cyan-500/60 bg-cyan-500/5" : "border-white/10 hover:border-cyan-500/40 bg-[#0a1628]"}`}
                              onClick={() => document.getElementById("cv-upload")?.click()}
                            >
                              <input
                                id="cv-upload"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    if (file.size > 5 * 1024 * 1024) {
                                      setCvError("File too large. Max 5MB.");
                                      setCvFile(null);
                                    } else {
                                      setCvError("");
                                      setCvFile(file);
                                    }
                                  }
                                }}
                              />
                              {cvFile ? (
                                <div className="flex flex-col items-center gap-2">
                                  <div className="text-2xl">📄</div>
                                  <p className="text-cyan-400 font-semibold text-sm">{cvFile.name}</p>
                                  <p className="text-gray-500 text-xs">{(cvFile.size / 1024).toFixed(1)} KB</p>
                                  <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); setCvFile(null); }}
                                    className="text-red-400 text-xs underline mt-1"
                                  >Remove</button>
                                </div>
                              ) : (
                                <div className="flex flex-col items-center gap-2">
                                  <div className="text-3xl">☁️</div>
                                  <p className="text-gray-400 text-sm font-medium">Click to upload your CV / Resume</p>
                                  <p className="text-gray-600 text-xs">PDF, DOC, DOCX · Max 5MB</p>
                                </div>
                              )}
                            </div>
                            {cvError && <p className="text-red-400 text-xs mt-2">⚠️ {cvError}</p>}
                          </div>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div>
                        <h3 className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-4">Additional Information</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-gray-300 text-sm font-medium mb-1">Why do you want to join our company?</label>
                            <textarea required name="whyJoin" rows={3} placeholder="Tell us your motivation..."
                              value={form.whyJoin} onChange={(e) => setForm((p) => ({ ...p, whyJoin: e.target.value }))}
                              className="w-full bg-[#0a1628] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 resize-none" />
                          </div>
                          <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">Have you worked with international clients before?</label>
                            <div className="flex gap-6">
                              {["yes", "no"].map((v) => (
                                <label key={v} className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer">
                                  <input type="radio" value={v} checked={form.internationalClients === v} onChange={() => setForm((p) => ({ ...p, internationalClients: v }))} className="accent-cyan-500" />
                                  {v === "yes" ? "Yes" : "No"}
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Declaration */}
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="text-gray-400 text-sm mb-3">
                          <strong className="text-white">Declaration:</strong> I confirm that the information provided above is true and correct to the best of my knowledge.
                        </p>
                        <label className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer">
                          <input type="checkbox" required checked={form.declaration}
                            onChange={(e) => setForm((p) => ({ ...p, declaration: e.target.checked }))}
                            className="accent-cyan-500 w-4 h-4" />
                          I agree to the declaration above
                        </label>
                      </div>

                      {sendError && (
                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                          <p className="text-red-400 text-sm font-semibold">❌ {sendError}</p>
                        </div>
                      )}

                      <button type="submit" disabled={sending}
                        className="w-full py-3 rounded-full font-bold text-white bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/30 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                        {sending ? "Submitting..." : "Submit Application 🚀"}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
