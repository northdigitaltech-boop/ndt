"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShareIcon from "@mui/icons-material/Share";
import CampaignIcon from "@mui/icons-material/Campaign";
import VideocamIcon from "@mui/icons-material/Videocam";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LanguageIcon from "@mui/icons-material/Language";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ImageIcon from "@mui/icons-material/Image";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import BadgeIcon from "@mui/icons-material/Badge";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FlightIcon from "@mui/icons-material/Flight";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import HotelIcon from "@mui/icons-material/Hotel";
import ArticleIcon from "@mui/icons-material/Article";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import MailOutlineIcon from "@mui/icons-material/Email";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import TableChartIcon from "@mui/icons-material/TableChart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import { useContent } from "@/lib/ContentContext";
import type { ReactNode } from "react";

const serviceIcons: Record<string, ReactNode> = {
  "Website Development": <LanguageIcon sx={{ fontSize: 36 }} />,
  "Digital Marketing": <TrendingUpIcon sx={{ fontSize: 36 }} />,
  "Advertising & Marketing": <CampaignIcon sx={{ fontSize: 36 }} />,
  "Social Media Acc Setup": <ShareIcon sx={{ fontSize: 36 }} />,
  "Video Editing": <VideocamIcon sx={{ fontSize: 36 }} />,
  "Food Video & Photography": <PhotoCameraIcon sx={{ fontSize: 36 }} />,
  "Menu Design": <RestaurantMenuIcon sx={{ fontSize: 36 }} />,
  "Digital Menu": <TabletMacIcon sx={{ fontSize: 36 }} />,
  "Business Card": <BadgeIcon sx={{ fontSize: 36 }} />,
  "Company Profile": <ApartmentIcon sx={{ fontSize: 36 }} />,
  "Presentation": <SlideshowIcon sx={{ fontSize: 36 }} />,
  "Brochure Design": <MenuBookIcon sx={{ fontSize: 36 }} />,
  "Flyer / Poster": <ImageIcon sx={{ fontSize: 36 }} />,
  "Sign Board": <StorefrontIcon sx={{ fontSize: 36 }} />,
  "Invitation Card": <CardGiftcardIcon sx={{ fontSize: 36 }} />,
  "Certificate Design": <WorkspacePremiumIcon sx={{ fontSize: 36 }} />,
  "Letter Head": <ArticleIcon sx={{ fontSize: 36 }} />,
  "Invoices": <ReceiptIcon sx={{ fontSize: 36 }} />,
  "All Type Documentation": <FolderCopyIcon sx={{ fontSize: 36 }} />,
  "Excel Data Entry": <TableChartIcon sx={{ fontSize: 36 }} />,
  "Professional CV": <ContactPageIcon sx={{ fontSize: 36 }} />,
  "Cover Letter": <MailOutlineIcon sx={{ fontSize: 36 }} />,
  "Visit Visa Apply": <FlightIcon sx={{ fontSize: 36 }} />,
  "Flight Ticket": <AirplaneTicketIcon sx={{ fontSize: 36 }} />,
  "Hotel Booking": <HotelIcon sx={{ fontSize: 36 }} />,
};


export default function ServicesPage() {
  const { servicesPage, servicesHighlights, contact } = useContent();
  return (
    <div className="bg-[#0a1628] min-h-screen text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-cyan-500/5 to-transparent pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-6">
            25 Services
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              Design & Marketing
            </span>
            <br />Services
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Everything your business needs — from graphic design to digital marketing,
            documentation, travel, and beyond.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {servicesHighlights.map((h) => (
              <div key={h} className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-semibold">
                <CheckCircleIcon fontSize="small" className="text-cyan-400" />
                {h}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* All 25 Services */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesPage.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.07, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`bg-[#0d1f35] border ${svc.border} rounded-2xl p-6 flex flex-col gap-4 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${svc.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
                {serviceIcons[svc.title] ?? <LanguageIcon sx={{ fontSize: 36 }} />}
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                {svc.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed flex-1">{svc.desc}</p>
              <a
                href={`https://wa.me/${contact.whatsapp}?text=Hi! I'm interested in your ${svc.title} service. Can you give me a quote?`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-cyan-400 text-xs font-semibold group-hover:gap-2 transition-all duration-200 mt-auto"
              >
                Get Quote <ArrowForwardIcon sx={{ fontSize: 14 }} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#07111f] py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Get{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              Started?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Contact us on WhatsApp for fast service. Pay only after your project is done!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-green-500/30"
            >
              <WhatsAppIcon />
              WhatsApp: +{contact.whatsapp}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-cyan-500/30"
            >
              Contact Form
              <ArrowForwardIcon fontSize="small" />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
