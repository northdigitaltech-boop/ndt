// Central site content. This is the DEFAULT content — the admin panel stores
// overrides in Supabase, and the site merges them over these defaults.

export type Dict = Record<string, string>;

export interface PageHeader {
  badge: string;
  titleA: string;
  titleHighlight: string;
  titleAfter: string;
  desc: string;
}

export interface SiteContent {
  translations: { en: Dict; ms: Dict };
  brand: {
    logo: string;
    name1: string;
    name2: string;
    name3: string;
    tagline: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsapp: string; // digits only, international format
    address: string;
  };
  about: {
    badge: string;
    titleA: string;
    titleHighlight: string;
    paragraphs: string[];
    names: string[];
    highlights: { label: string; desc: string }[];
  };
  pageHeaders: {
    services: PageHeader;
    packages: PageHeader;
    team: PageHeader;
    work: PageHeader;
    careers: PageHeader;
  };
  heroStats: { value: string }[];
  servicesHome: { title: string; color: string; border: string }[];
  servicesPage: { title: string; desc: string; color: string; border: string }[];
  servicesHighlights: string[];
  packages: {
    name: string;
    period: string;
    originalPrice: string;
    discount: string;
    price: string;
    highlight: boolean;
    badge: string;
    included: string[];
    features: string[];
  }[];
  comparison: { feature: string; starter: string; pro: string; enterprise: string }[];
  team: { name: string; role: string; bio: string; image: string; pos: string }[];
  values: { title: string; desc: string; color: string }[];
  clients: { name: string; image: string; link: string }[];
  projects: {
    title: string;
    category: string;
    desc: string;
    tech: string[];
    color: string;
    border: string;
    tag: string;
  }[];
  workStats: { value: string; label: string }[];
  jobs: {
    title: string;
    color: string;
    border: string;
    description: string[];
    requirements: string[];
    benefits: string[];
  }[];
}

export const defaultContent: SiteContent = {
  translations: {
    en: {
      nav_home: "Home",
      nav_services: "Our Services",
      nav_packages: "Packages",
      nav_careers: "Careers",
      nav_about: "About Us",
      nav_work: "Our Work",
      nav_team: "Team",
      nav_contact: "Contact Us",
      nav_cta: "Get Started",
      hero_badge: "Transforming Ideas into Digital Reality",
      hero_h1a: "Building ",
      hero_h1b: "Digital",
      hero_h1c: "Tech",
      hero_h1d: "That Matter",
      hero_desc:
        "NorthDigital Tech crafts powerful software, stunning websites, and scalable digital products that drive growth and elevate your brand.",
      hero_btn1: "Start Your Project",
      hero_btn2: "View Our Work",
      hero_stat1: "Projects Delivered",
      hero_stat2: "Happy Clients",
      hero_stat3: "Years Experience",
      services_badge: "What We Do",
      services_title: "Our",
      services_title_highlight: "Services",
      services_desc:
        "From digital design to marketing and documentation — we cover everything your business needs under one roof.",
      services_count: "We offer",
      services_count2: "services in total",
      services_cta: "View All 29 Services",
      services_card_cta: "Get Quote",
      packages_badge: "Pricing Plans",
      packages_title: "All-In-One",
      packages_title_highlight: "Business Digital Growth",
      packages_desc: "Transparent monthly plans, no hidden fees.",
      packages_cta: "Get Started",
      packages_wa: "Have questions? Contact us directly on WhatsApp",
      team_badge: "Meet The Team",
      team_title: "The People Behind",
      team_title_highlight: "The Magic",
      team_desc:
        "Our talented team of designers, developers, and strategists are passionate about delivering excellence.",
      work_badge: "Portfolio",
      work_title: "Our",
      work_title_highlight: "Work",
      work_desc:
        "A showcase of projects we are proud of — each one built with dedication, creativity, and technical excellence.",
      work_cta: "View All Projects",
      work_filter_all: "All",
      contact_badge: "Get In Touch",
      contact_title: "Let's",
      contact_title_highlight: "Work Together",
      contact_desc:
        "Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you within 24 hours.",
      contact_info_title: "Contact Information",
      contact_info_desc:
        "Ready to start your digital journey? Reach out to us and our team will help you turn your vision into reality.",
      contact_label_name: "Full Name",
      contact_label_email: "Email Address",
      contact_label_subject: "Subject",
      contact_label_msg: "Message",
      contact_placeholder_name: "John Doe",
      contact_placeholder_email: "john@example.com",
      contact_placeholder_msg: "Tell us about your project...",
      contact_btn: "Send Message",
      contact_success_title: "Message Sent!",
      contact_success_desc:
        "Thank you for reaching out. We'll get back to you within 24 hours.",
      contact_select_default: "Select a service",
      clients_badge: "Our Clients",
      clients_title: "Trusted By",
      clients_title_highlight: "Malaysia's Best",
      clients_desc: "Proud to serve businesses across Malaysia",
      footer_desc:
        "Transforming ideas into powerful digital experiences. We build software, websites, and mobile apps that drive real business growth.",
      footer_newsletter_title: "Stay Updated",
      footer_newsletter_desc:
        "Subscribe to our newsletter for the latest tech insights and company updates.",
      footer_newsletter_btn: "Subscribe",
      footer_newsletter_placeholder: "Enter your email",
      footer_rights: "All rights reserved.",
    },
    ms: {
      nav_home: "Utama",
      nav_services: "Perkhidmatan Kami",
      nav_packages: "Pakej",
      nav_careers: "Kerjaya",
      nav_about: "Tentang Kami",
      nav_work: "Portfolio",
      nav_team: "Pasukan",
      nav_contact: "Hubungi Kami",
      nav_cta: "Mulakan",
      hero_badge: "Mengubah Idea Menjadi Realiti Digital",
      hero_h1a: "Membina ",
      hero_h1b: "Penyelesaian",
      hero_h1c: "Digital",
      hero_h1d: "Yang Bermakna",
      hero_desc:
        "NorthDigital Tech mencipta perisian berkuasa, laman web yang memukau, dan produk digital berskala yang memacu pertumbuhan dan meningkatkan jenama anda.",
      hero_btn1: "Mulakan Projek",
      hero_btn2: "Lihat Kerja Kami",
      hero_stat1: "Projek Siap",
      hero_stat2: "Pelanggan Gembira",
      hero_stat3: "Tahun Pengalaman",
      services_badge: "Apa Yang Kami Lakukan",
      services_title: "Perkhidmatan",
      services_title_highlight: "Kami",
      services_desc:
        "Dari reka bentuk digital hingga pemasaran dan dokumentasi — kami memenuhi semua keperluan perniagaan anda di bawah satu bumbung.",
      services_count: "Kami menawarkan",
      services_count2: "perkhidmatan keseluruhannya",
      services_cta: "Lihat Semua 25 Perkhidmatan",
      services_card_cta: "Dapatkan Sebut Harga",
      packages_badge: "Pelan Harga",
      packages_title: "Pertumbuhan Digital",
      packages_title_highlight: "Perniagaan Menyeluruh",
      packages_desc: "Pelan bulanan yang telus, tiada caj tersembunyi.",
      packages_cta: "Mulakan",
      packages_wa: "Ada soalan? Hubungi kami terus melalui WhatsApp",
      team_badge: "Kenali Pasukan",
      team_title: "Orang Di Sebalik",
      team_title_highlight: "Keajaiban",
      team_desc:
        "Pasukan pereka, pembangun, dan ahli strategi kami yang berbakat bersemangat untuk memberikan kecemerlangan.",
      work_badge: "Portfolio",
      work_title: "Kerja",
      work_title_highlight: "Kami",
      work_desc:
        "Pameran projek yang kami banggakan — setiap satu dibina dengan dedikasi, kreativiti, dan kecemerlangan teknikal.",
      work_cta: "Lihat Semua Projek",
      work_filter_all: "Semua",
      contact_badge: "Hubungi Kami",
      contact_title: "Jom",
      contact_title_highlight: "Bekerjasama",
      contact_desc:
        "Ada projek dalam fikiran? Kami ingin mendengar daripada anda. Hantar mesej dan kami akan balas dalam masa 24 jam.",
      contact_info_title: "Maklumat Hubungan",
      contact_info_desc:
        "Bersedia untuk memulakan perjalanan digital anda? Hubungi kami dan pasukan kami akan membantu mengubah visi anda menjadi realiti.",
      contact_label_name: "Nama Penuh",
      contact_label_email: "Alamat E-mel",
      contact_label_subject: "Subjek",
      contact_label_msg: "Mesej",
      contact_placeholder_name: "Ahmad bin Ali",
      contact_placeholder_email: "ahmad@contoh.com",
      contact_placeholder_msg: "Ceritakan tentang projek anda...",
      contact_btn: "Hantar Mesej",
      contact_success_title: "Mesej Dihantar!",
      contact_success_desc:
        "Terima kasih kerana menghubungi kami. Kami akan membalas dalam masa 24 jam.",
      contact_select_default: "Pilih perkhidmatan",
      clients_badge: "Pelanggan Kami",
      clients_title: "Dipercayai Oleh",
      clients_title_highlight: "Perniagaan Malaysia",
      clients_desc: "Berbangga melayani perniagaan di seluruh Malaysia",
      footer_desc:
        "Mengubah idea menjadi pengalaman digital yang berkuasa. Kami membina perisian, laman web, dan aplikasi mudah alih yang memacu pertumbuhan perniagaan.",
      footer_newsletter_title: "Kekal Terkini",
      footer_newsletter_desc:
        "Langgan surat berita kami untuk mendapatkan pandangan teknologi terkini dan kemas kini syarikat.",
      footer_newsletter_btn: "Langgan",
      footer_newsletter_placeholder: "Masukkan e-mel anda",
      footer_rights: "Hak cipta terpelihara.",
    },
  },

  brand: {
    logo: "/ndt-logo.png",
    name1: "North",
    name2: "Digital",
    name3: " Tech",
    tagline: "NDT",
  },

  contact: {
    email: "northdigitaltech@gmail.com",
    phone: "+601137862785 / 03326765962",
    whatsapp: "601137862785",
    address: "Jalan Abdullah Ibrahim, JB Central, Johor Bahru, Malaysia",
  },

  about: {
    badge: "About Us",
    titleA: "Who We",
    titleHighlight: "Are",
    paragraphs: [
      "We started with a small team consisting of three experts, and because of the success and satisfaction of our customers with the quality of service, we grew into a large team that includes experts in many fields.",
      "We welcome all new ideas and turn them into reality through professional solutions. Thanks to our previous experiences, we gained great experience in the tech field. We will stay with you until you enter the market and create your own touch on the Internet through your solution platform.",
      "We offer you all the support, we want you to have peace of mind because we will be providing support for the long term. We look forward to contacting you to offer our best. We rely on quality in work and always strive to provide the best.",
    ],
    names: ["Shabbir Hussain", "Muhammad Ibrahim", "Shakir Hussain", "Muhammad Shahzaib"],
    highlights: [
      { label: "Innovation First", desc: "We welcome all new ideas and turn them into reality." },
      { label: "Expert Team", desc: "A large team of experts in many fields working for you." },
      { label: "Global Reach", desc: "Supporting clients to enter and scale across international markets." },
      { label: "Quality Driven", desc: "We rely on quality in work and always strive to provide the best." },
    ],
  },

  pageHeaders: {
    services: {
      badge: "25 Services",
      titleA: "Professional",
      titleHighlight: "Design & Marketing",
      titleAfter: "Services",
      desc: "Everything your business needs — from graphic design to digital marketing, documentation, travel, and beyond.",
    },
    packages: {
      badge: "Pricing Plans",
      titleA: "Transparent",
      titleHighlight: "Pricing",
      titleAfter: "",
      desc: "No hidden fees. Choose the package that fits your needs and budget. Scale up anytime as your business grows.",
    },
    team: {
      badge: "Our Team",
      titleA: "Meet Our",
      titleHighlight: "Experts",
      titleAfter: "",
      desc: "A passionate team of innovators, designers, and engineers dedicated to transforming your vision into reality.",
    },
    work: {
      badge: "Portfolio",
      titleA: "Our",
      titleHighlight: "Work",
      titleAfter: "",
      desc: "Explore our portfolio of successful projects — each one a story of innovation, collaboration, and exceptional results.",
    },
    careers: {
      badge: "Careers",
      titleA: "Join Our",
      titleHighlight: "Growing Team",
      titleAfter: "",
      desc: "Work remotely, grow professionally, and collaborate with international clients. Find your role below.",
    },
  },

  heroStats: [{ value: "50+" }, { value: "30+" }, { value: "5+" }],

  servicesHome: [
    { title: "AI Development", color: "from-violet-500 to-purple-600", border: "border-violet-500/30" },
    { title: "Website Development", color: "from-blue-500 to-indigo-600", border: "border-blue-500/30" },
    { title: "App Development", color: "from-sky-500 to-blue-600", border: "border-sky-500/30" },
    { title: "Social Media Account Management", color: "from-pink-500 to-rose-600", border: "border-pink-500/30" },
    { title: "E-commerce Management", color: "from-orange-500 to-amber-600", border: "border-orange-500/30" },
    { title: "SEO (Search Engine Optimization)", color: "from-green-500 to-emerald-600", border: "border-green-500/30" },
    { title: "Advertising & Marketing", color: "from-orange-500 to-amber-600", border: "border-orange-500/30" },
    { title: "Video Editing", color: "from-red-500 to-rose-600", border: "border-red-500/30" },
    { title: "Digital Marketing", color: "from-cyan-500 to-blue-600", border: "border-cyan-500/30" },
    { title: "Professional Photography & Videography", color: "from-purple-500 to-violet-600", border: "border-purple-500/30" },
    { title: "Menu Design", color: "from-yellow-500 to-orange-500", border: "border-yellow-500/30" },
    { title: "Digital Menu", color: "from-teal-500 to-cyan-600", border: "border-teal-500/30" },
    { title: "Brochure Design", color: "from-green-500 to-emerald-600", border: "border-green-500/30" },
    { title: "Flyer / Poster", color: "from-sky-500 to-blue-600", border: "border-sky-500/30" },
    { title: "Invitation Card", color: "from-rose-500 to-pink-600", border: "border-rose-500/30" },
    { title: "Sign Board", color: "from-amber-500 to-yellow-600", border: "border-amber-500/30" },
    { title: "Business Card", color: "from-indigo-500 to-blue-600", border: "border-indigo-500/30" },
    { title: "Company Profile", color: "from-slate-500 to-gray-600", border: "border-slate-500/30" },
    { title: "Invoices", color: "from-lime-500 to-green-600", border: "border-lime-500/30" },
    { title: "Letter Head", color: "from-cyan-600 to-blue-700", border: "border-cyan-600/30" },
    { title: "Certificate Design", color: "from-yellow-400 to-amber-500", border: "border-yellow-400/30" },
    { title: "Presentation", color: "from-indigo-400 to-violet-500", border: "border-indigo-400/30" },
    { title: "Visit Visa Apply", color: "from-blue-400 to-cyan-500", border: "border-blue-400/30" },
    { title: "Flight Ticket", color: "from-violet-500 to-purple-600", border: "border-violet-500/30" },
    { title: "Hotel Booking", color: "from-emerald-500 to-teal-600", border: "border-emerald-500/30" },
    { title: "All Type Documentation", color: "from-orange-400 to-red-500", border: "border-orange-400/30" },
    { title: "Professional CV", color: "from-blue-600 to-indigo-700", border: "border-blue-600/30" },
    { title: "Cover Letter", color: "from-pink-400 to-rose-500", border: "border-pink-400/30" },
    { title: "Excel Data Entry", color: "from-green-400 to-teal-500", border: "border-green-400/30" },
  ],

  servicesPage: [
    { title: "Website Development", desc: "Custom responsive websites and web apps built with the latest technologies for your business.", color: "from-blue-500 to-indigo-600", border: "border-blue-500/30" },
    { title: "Digital Marketing", desc: "Full-scale digital marketing strategies including SEO, content marketing, and analytics.", color: "from-cyan-500 to-blue-600", border: "border-cyan-500/30" },
    { title: "Advertising & Marketing", desc: "Targeted ad campaigns on Google, Facebook, and Instagram to drive traffic and maximize your ROI.", color: "from-orange-500 to-amber-600", border: "border-orange-500/30" },
    { title: "Social Media Acc Setup", desc: "Professional setup and optimization of all your social media accounts — Facebook, Instagram, TikTok, LinkedIn, and more.", color: "from-pink-500 to-rose-600", border: "border-pink-500/30" },
    { title: "Video Editing", desc: "Professional video editing for reels, ads, YouTube, and social media content that grabs attention.", color: "from-red-500 to-rose-600", border: "border-red-500/30" },
    { title: "Food Video & Photography", desc: "High-quality food photography and videography to make your dishes look irresistible online.", color: "from-purple-500 to-violet-600", border: "border-purple-500/30" },
    { title: "Menu Design", desc: "Eye-catching printed menu designs for restaurants, cafes, and food businesses.", color: "from-yellow-500 to-orange-500", border: "border-yellow-500/30" },
    { title: "Digital Menu", desc: "Interactive digital menus for tablets, screens, and QR code systems for modern restaurants.", color: "from-teal-500 to-cyan-600", border: "border-teal-500/30" },
    { title: "Business Card", desc: "Memorable business card designs that make a lasting impression on your clients.", color: "from-indigo-500 to-blue-600", border: "border-indigo-500/30" },
    { title: "Company Profile", desc: "Comprehensive company profile documents that showcase your business professionally.", color: "from-slate-500 to-gray-600", border: "border-slate-500/30" },
    { title: "Presentation", desc: "Stunning PowerPoint and slide presentations for pitches, reports, and business meetings.", color: "from-indigo-400 to-violet-500", border: "border-indigo-400/30" },
    { title: "Brochure Design", desc: "Professional brochure designs that communicate your brand story and services beautifully.", color: "from-green-500 to-emerald-600", border: "border-green-500/30" },
    { title: "Flyer / Poster", desc: "Creative flyers and posters for events, promotions, and marketing campaigns.", color: "from-sky-500 to-blue-600", border: "border-sky-500/30" },
    { title: "Sign Board", desc: "Professional signboard designs for shops, offices, and outdoor advertising.", color: "from-amber-500 to-yellow-600", border: "border-amber-500/30" },
    { title: "Invitation Card", desc: "Elegant invitation card designs for weddings, events, corporate functions, and more.", color: "from-rose-500 to-pink-600", border: "border-rose-500/30" },
    { title: "Certificate Design", desc: "Professional certificate designs for awards, courses, achievements, and events.", color: "from-yellow-400 to-amber-500", border: "border-yellow-400/30" },
    { title: "Letter Head", desc: "Professional letterhead designs that give your business correspondence a polished look.", color: "from-cyan-600 to-blue-700", border: "border-cyan-600/30" },
    { title: "Invoices", desc: "Custom invoice templates and designs tailored to your brand identity.", color: "from-lime-500 to-green-600", border: "border-lime-500/30" },
    { title: "All Type Documentation", desc: "Complete documentation services — contracts, agreements, reports, and all business documents.", color: "from-orange-400 to-red-500", border: "border-orange-400/30" },
    { title: "Excel Data Entry", desc: "Accurate and fast Excel data entry, spreadsheet design, and data management services.", color: "from-green-400 to-teal-500", border: "border-green-400/30" },
    { title: "Professional CV", desc: "ATS-optimized, professional CV writing and design that gets you noticed by employers.", color: "from-blue-600 to-indigo-700", border: "border-blue-600/30" },
    { title: "Cover Letter", desc: "Compelling cover letters tailored to job applications that showcase your strengths.", color: "from-pink-400 to-rose-500", border: "border-pink-400/30" },
    { title: "Visit Visa Apply", desc: "Assistance with visit visa applications — documentation preparation and guidance.", color: "from-blue-400 to-cyan-500", border: "border-blue-400/30" },
    { title: "Flight Ticket", desc: "Flight ticket booking services for individuals and corporate travel.", color: "from-violet-500 to-purple-600", border: "border-violet-500/30" },
    { title: "Hotel Booking", desc: "Hotel reservation and accommodation booking services worldwide.", color: "from-emerald-500 to-teal-600", border: "border-emerald-500/30" },
  ],

  servicesHighlights: ["Fast Services", "Cheap Price", "High Quality", "Pay After Projects Done"],

  packages: [
    {
      name: "Basic Plan",
      period: "Monthly",
      originalPrice: "RM 1,930",
      discount: "25% OFF",
      price: "RM 1,499",
      highlight: false,
      badge: "",
      included: [
        "Marketing Manager + Graphic Designer + Video & Photographer",
        "META + TikTok + Google Ads Management",
      ],
      features: [
        "Meta and TikTok",
        "2× Photo & Videography/month (3–5 hrs)",
        "20–30 Photo and Social Media Post Design",
        "15–20 edited photos",
        "4–6 reels/videos",
        "5 posts/week",
        "3 platform management (Instagram, Facebook, TikTok)",
        "Captions + hashtags",
      ],
    },
    {
      name: "Standard Plan",
      period: "Monthly",
      originalPrice: "RM 2,660",
      discount: "25% OFF",
      price: "RM 1,999",
      highlight: true,
      badge: "Most Popular",
      included: [
        "Marketing Manager + Graphic Designer + Video & Photographer",
        "META + TikTok + Google Ads Management",
      ],
      features: [
        "5× Photo & Videography/month (3–5 hrs)",
        "25–35 Photo and Social Media Post Design",
        "15–20 reels/videos",
        "6 posts/week",
        "Daily stories",
        "Manage Instagram + Facebook + TikTok + Google",
        "LED Video Promotion / Menu",
        "Menu redesign / Modify the prices",
        "Company Profile / Proposal",
        "Basic engagement (DM replies, comments handling)",
      ],
    },
    {
      name: "Premium Pro Plan",
      period: "Monthly",
      originalPrice: "RM 4,000",
      discount: "25% OFF",
      price: "RM 2,999",
      highlight: false,
      badge: "Best Value",
      included: [
        "Marketing Manager + Graphic Designer + Video & Photographer",
        "META + TikTok + Google Ads Management",
        "Software Engineer",
      ],
      features: [
        "Weekly Cinematic Videography",
        "35–40 Photo and Social Media Post Design",
        "25–30 reels/videos",
        "Daily posting (all platforms)",
        "Full social media management (IG, FB, TikTok, Google)",
        "LED Video Promotion / Menu",
        "Menu redesign / Modify the prices",
        "Company Profile / Proposal",
        "Google Auto Reviews Reply + Reputation Management",
        "Customer engagement + full DM handling",
        "WhatsApp Auto Chatbot (24/7 customer handling)",
        "WEBSITE (One time RM700, domain & hosting charges)",
      ],
    },
  ],

  comparison: [
    { feature: "Graphic Designer", starter: "true", pro: "true", enterprise: "true" },
    { feature: "Marketing Manager", starter: "true", pro: "true", enterprise: "true" },
    { feature: "Video & Photographer", starter: "true", pro: "true", enterprise: "true" },
    { feature: "META + TikTok + Google Ads", starter: "true", pro: "true", enterprise: "true" },
    { feature: "Photo & Video Shoots", starter: "2/month", pro: "4/month", enterprise: "Weekly" },
    { feature: "Reels / Videos", starter: "4–6", pro: "10–15", enterprise: "20–30" },
    { feature: "Posts per week", starter: "5", pro: "6", enterprise: "Daily" },
    { feature: "Daily Stories", starter: "false", pro: "true", enterprise: "true" },
    { feature: "Platform Management", starter: "3 platforms", pro: "4 platforms", enterprise: "All platforms" },
    { feature: "Digital Menu", starter: "false", pro: "true", enterprise: "true" },
    { feature: "DM / Engagement Handling", starter: "false", pro: "Basic", enterprise: "Full" },
    { feature: "Software Engineer", starter: "false", pro: "false", enterprise: "true" },
    { feature: "WhatsApp Auto Chatbot", starter: "false", pro: "false", enterprise: "true" },
    { feature: "Google Review System", starter: "false", pro: "false", enterprise: "true" },
    { feature: "Website Included", starter: "false", pro: "false", enterprise: "RM700 one-time" },
  ],

  team: [
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
  ],

  values: [
    { title: "Innovation", desc: "We stay ahead of technology trends to deliver cutting-edge solutions.", color: "from-cyan-500 to-blue-600" },
    { title: "Excellence", desc: "We are committed to delivering the highest quality in everything we do.", color: "from-blue-500 to-indigo-600" },
    { title: "Partnership", desc: "We build long-term relationships with our clients based on trust and transparency.", color: "from-indigo-500 to-purple-600" },
    { title: "Collaboration", desc: "Our team works closely together and with clients to achieve the best outcomes.", color: "from-teal-500 to-cyan-600" },
  ],

  clients: [
    { name: "Toppers Turf", image: "/1.png", link: "" },
    { name: "Goodfair", image: "/2.png", link: "" },
    { name: "Theese", image: "/3.png", link: "" },
    { name: "Restoran Mamak S.S. Fatima", image: "/4.png", link: "" },
    { name: "Amin Restaurant", image: "/5.png", link: "" },
    { name: "Al Khalifa", image: "/6.png", link: "" },
    { name: "Cythetic", image: "/7.png", link: "" },
    { name: "Ain Restoran", image: "/8.png", link: "" },
    { name: "La Familia Restaurant", image: "/9.png", link: "" },
    { name: "AM Teras Padu Logistik", image: "/10.png", link: "" },
  ],

  projects: [
    {
      title: "FinTech Dashboard",
      category: "Web",
      desc: "Real-time financial analytics platform with interactive charts and AI insights.",
      tech: ["Next.js", "TypeScript", "Chart.js"],
      color: "from-cyan-500/20 to-blue-600/20",
      border: "border-cyan-500/30",
      tag: "Web App",
    },
    {
      title: "ShopNorth E-Store",
      category: "E-Commerce",
      desc: "Full-featured e-commerce platform with inventory management and payment gateways.",
      tech: ["React", "Node.js", "Stripe"],
      color: "from-blue-500/20 to-indigo-600/20",
      border: "border-blue-500/30",
      tag: "E-Commerce",
    },
    {
      title: "FitTrack Mobile App",
      category: "Mobile",
      desc: "Cross-platform fitness tracking app with AI-powered workout recommendations.",
      tech: ["React Native", "Firebase", "TensorFlow Lite"],
      color: "from-indigo-500/20 to-purple-600/20",
      border: "border-indigo-500/30",
      tag: "Mobile",
    },
    {
      title: "BrandNorth Identity",
      category: "Design",
      desc: "Complete brand identity system including logo, guidelines, and marketing assets.",
      tech: ["Figma", "Illustrator", "Framer"],
      color: "from-teal-500/20 to-cyan-600/20",
      border: "border-teal-500/30",
      tag: "Design",
    },
    {
      title: "MedConnect Platform",
      category: "Web",
      desc: "Healthcare management system connecting patients, doctors, and pharmacies.",
      tech: ["Next.js", "PostgreSQL", "WebSockets"],
      color: "from-sky-500/20 to-cyan-600/20",
      border: "border-sky-500/30",
      tag: "Web App",
    },
    {
      title: "EduLearn LMS",
      category: "Web",
      desc: "Learning management system with video streaming, quizzes, and certification.",
      tech: ["React", "Django", "AWS S3"],
      color: "from-blue-400/20 to-indigo-500/20",
      border: "border-blue-400/30",
      tag: "Web Platform",
    },
  ],

  workStats: [
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "10+", label: "Industries Served" },
    { value: "99%", label: "Client Satisfaction" },
  ],

  jobs: [
    {
      title: "WEB / APP DEVELOPER",
      color: "from-blue-500 to-indigo-600",
      border: "border-blue-500/30",
      description: ["Develop, maintain, and optimize websites and mobile applications", "Build responsive, user-friendly, and high-performance digital platforms", "Integrate APIs, payment gateways, and third-party services", "Troubleshoot bugs and improve website/app functionality", "Ensure security, speed, and scalability of projects"],
      requirements: ["Strong experience in WordPress, Shopify, Laravel, React, Flutter, or similar platforms", "Good knowledge of frontend and backend development", "Experience with WooCommerce and eCommerce systems", "Understanding of UI/UX best practices", "Ability to work independently and meet deadlines"],
      benefits: ["Work remotely from anywhere", "Flexible working hours", "Opportunity to work with international clients", "Professional growth and career development"],
    },
    {
      title: "AI DEVELOPER",
      color: "from-violet-500 to-purple-600",
      border: "border-violet-500/30",
      description: ["Develop AI-based solutions for automation and business operations", "Build chatbots, AI assistants, and workflow automation systems", "Integrate OpenAI APIs and other AI tools into business platforms", "Improve AI performance and optimize prompt engineering", "Research and implement new AI technologies"],
      requirements: ["Experience with OpenAI API, Python, automation tools, and AI platforms", "Knowledge of chatbot development and workflow automation", "Strong problem-solving and analytical skills", "Understanding of prompt engineering and AI integrations", "Experience with CRM and business automation is a plus"],
      benefits: ["Work remotely from anywhere", "Flexible working hours", "Opportunity to work with international clients", "Professional growth and career development"],
    },
    {
      title: "E-COMMERCE MANAGER",
      color: "from-orange-500 to-amber-600",
      border: "border-orange-500/30",
      description: ["Manage daily operations of eCommerce stores", "Upload products, optimize listings, and manage inventory", "Handle order processing, customer support, and store performance", "Work with Shopify, WooCommerce, or similar platforms", "Monitor store analytics and improve conversion rates"],
      requirements: ["Strong understanding of product listing optimization", "Knowledge of payment gateways and order management", "Good communication and customer service skills", "Ability to manage multiple tasks efficiently", "Experience with Shopify, WooCommerce, or similar platforms"],
      benefits: ["Work remotely from anywhere", "Flexible working hours", "Opportunity to work with international clients", "Professional growth and career development"],
    },
    {
      title: "SOCIAL MEDIA MANAGER",
      color: "from-pink-500 to-rose-600",
      border: "border-pink-500/30",
      description: ["Plan, create, and manage content across social media platforms", "Develop growth strategies for brand awareness and engagement", "Monitor trends and create viral marketing opportunities", "Manage posting schedules, campaigns, and audience engagement", "Analyze performance and improve content strategy"],
      requirements: ["Experience managing Facebook, Instagram, TikTok, LinkedIn, and other platforms", "Strong content planning and campaign management skills", "Knowledge of social media analytics and paid ads", "Creative mindset with strong communication skills", "Ability to work with designers and video editors"],
      benefits: ["Work remotely from anywhere", "Flexible working hours", "Opportunity to work with international clients", "Professional growth and career development"],
    },
    {
      title: "SEO EXPERT",
      color: "from-green-500 to-emerald-600",
      border: "border-green-500/30",
      description: ["Improve website rankings on Google and search engines", "Perform keyword research and competitor analysis", "Optimize on-page and off-page SEO strategies", "Build backlinks and improve domain authority", "Monitor traffic, rankings, and SEO reports"],
      requirements: ["Strong knowledge of technical SEO and content optimization", "Experience with Google Search Console, Analytics, Ahrefs, SEMrush, etc.", "Understanding of WordPress SEO and website structure", "Experience in link building and local SEO", "Ability to analyze data and improve performance"],
      benefits: ["Work remotely from anywhere", "Flexible working hours", "Opportunity to work with international clients", "Professional growth and career development"],
    },
    {
      title: "GRAPHIC DESIGNER",
      color: "from-cyan-500 to-blue-600",
      border: "border-cyan-500/30",
      description: ["Create creative designs for social media, branding, and marketing campaigns", "Design logos, banners, posters, brochures, and company profiles", "Maintain brand consistency across all platforms", "Work closely with marketing and content teams", "Deliver high-quality visuals on time"],
      requirements: ["Strong skills in Adobe Photoshop, Illustrator, Canva, and related tools", "Good understanding of branding and visual communication", "Experience in social media and marketing design", "Creative thinking and attention to detail", "Ability to handle multiple projects efficiently"],
      benefits: ["Work remotely from anywhere", "Flexible working hours", "Opportunity to work with international clients", "Professional growth and career development"],
    },
    {
      title: "VIDEO EDITOR",
      color: "from-red-500 to-rose-600",
      border: "border-red-500/30",
      description: ["Edit professional videos for social media, ads, branding, and promotions", "Create reels, TikTok videos, corporate videos, and promotional content", "Add transitions, motion graphics, subtitles, and effects", "Optimize videos for engagement and platform performance", "Collaborate with the marketing team for content strategy"],
      requirements: ["Strong experience in Adobe Premiere Pro and After Effects", "Knowledge of cinematic editing, reels, and short-form content", "Understanding of storytelling and audience engagement", "Experience with motion graphics and sound editing", "Ability to deliver fast, high-quality edits under deadlines"],
      benefits: ["Work remotely from anywhere", "Flexible working hours", "Opportunity to work with international clients", "Professional growth and career development"],
    },
  ],
};

export const contentSections = Object.keys(defaultContent) as (keyof SiteContent)[];

/** Merge DB overrides over defaults (section-level replace). */
export function mergeContent(overrides: Partial<SiteContent> | null | undefined): SiteContent {
  if (!overrides) return defaultContent;
  const merged = { ...defaultContent } as SiteContent;
  for (const key of contentSections) {
    const val = overrides[key];
    if (val !== undefined && val !== null) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (merged as any)[key] = val;
    }
  }
  return merged;
}
