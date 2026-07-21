"use client";
import { motion, type Variants } from "framer-motion";
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
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import { useContent } from "@/lib/ContentContext";
import type { ReactNode } from "react";

const serviceIcons: Record<string, ReactNode> = {
  "AI Development": <SmartToyIcon fontSize="large" />,
  "Website Development": <LanguageIcon fontSize="large" />,
  "App Development": <PhoneAndroidIcon fontSize="large" />,
  "Social Media Account Management": <ShareIcon fontSize="large" />,
  "E-commerce Management": <ShoppingCartIcon fontSize="large" />,
  "SEO (Search Engine Optimization)": <SearchIcon fontSize="large" />,
  "Advertising & Marketing": <CampaignIcon fontSize="large" />,
  "Video Editing": <VideocamIcon fontSize="large" />,
  "Digital Marketing": <TrendingUpIcon fontSize="large" />,
  "Professional Photography & Videography": <PhotoCameraIcon fontSize="large" />,
  "Menu Design": <RestaurantMenuIcon fontSize="large" />,
  "Digital Menu": <TabletMacIcon fontSize="large" />,
  "Brochure Design": <MenuBookIcon fontSize="large" />,
  "Flyer / Poster": <ImageIcon fontSize="large" />,
  "Invitation Card": <CardGiftcardIcon fontSize="large" />,
  "Sign Board": <StorefrontIcon fontSize="large" />,
  "Business Card": <BadgeIcon fontSize="large" />,
  "Company Profile": <ApartmentIcon fontSize="large" />,
  "Invoices": <ReceiptIcon fontSize="large" />,
  "Letter Head": <ArticleIcon fontSize="large" />,
  "Certificate Design": <WorkspacePremiumIcon fontSize="large" />,
  "Presentation": <SlideshowIcon fontSize="large" />,
  "Visit Visa Apply": <FlightIcon fontSize="large" />,
  "Flight Ticket": <AirplaneTicketIcon fontSize="large" />,
  "Hotel Booking": <HotelIcon fontSize="large" />,
  "All Type Documentation": <FolderCopyIcon fontSize="large" />,
  "Professional CV": <ContactPageIcon fontSize="large" />,
  "Cover Letter": <MailOutlineIcon fontSize="large" />,
  "Excel Data Entry": <TableChartIcon fontSize="large" />,
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function ServicesSection() {
  const { t } = useLang();
  const { servicesHome, contact } = useContent();
  const featuredServices = servicesHome.slice(0, 6);
  return (
    <section id="services" className="relative bg-[#07111f] py-28 px-6 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4 tracking-widest uppercase">
            {t("services_badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t("services_title")}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              {t("services_title_highlight")}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t("services_desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((svc, i) => (
            <motion.div
              key={svc.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-[#0a1628]/80 backdrop-blur-sm border ${svc.border} rounded-2xl p-7 flex flex-col gap-4 shadow-xl hover:shadow-cyan-500/10 hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden`}
            >
              {/* card inner glow on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${svc.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

              <div className={`relative w-14 h-14 rounded-xl bg-linear-to-br ${svc.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {serviceIcons[svc.title] ?? <LanguageIcon fontSize="large" />}
              </div>
              <h3 className="relative text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {svc.title}
              </h3>
              <a
                href={`https://wa.me/${contact.whatsapp}?text=Hi! I'm interested in your ${svc.title} service. Can you give me a quote?`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-1 text-cyan-400 text-sm font-semibold group-hover:gap-3 transition-all duration-300 mt-auto"
              >
                {t("services_card_cta")} <ArrowForwardIcon fontSize="small" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-gray-400 mb-6 text-base">
            {t("services_count")} <span className="text-cyan-400 font-bold">25+</span> {t("services_count2")}
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50"
          >
            {t("services_cta")}
            <ArrowForwardIcon fontSize="small" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
