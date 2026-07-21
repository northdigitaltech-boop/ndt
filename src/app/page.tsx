"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkingProcessSection from "@/components/WorkingProcessSection";
import PackagesSection from "@/components/PackagesSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="bg-[#0a1628] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WorkingProcessSection />
      <PackagesSection />
      <AboutSection />
      <TeamSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
