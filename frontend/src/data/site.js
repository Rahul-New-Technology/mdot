export const COMPANY = {
  name: "M DOT IT SOLUZIONE",
  short: "M·IT",
  tagline: "Enterprise IT Hardware & Networking",
  phone: "+91 77049 49022",
  phoneRaw: "+917704949022",
  whatsapp: "+91 77049 49022",
  whatsappRaw: "917704949022",
  email: "mdotitsoluzione2024@gmail.com",
  address: "Shop No. 8-A, First Floor, Rustom Market, Mohili Village, Asalfa Link Road, Opp. Noorie Masjid, Sakinaka, Kurla, Mumbai – 400072, Maharashtra, India",
  addressShort: "Sakinaka, Kurla, Mumbai – 400072",
  hours: "Mon – Sat · 11:00 AM – 09:00 PM  ·  Sun: By Appointment",
  logo: "/assets/brand/logo.png",
  gst: "Available soon — will be updated after GST registration",
  founded: 2011,
  mapEmbed:
    "https://www.google.com/maps?q=Rustom+Market,+Asalfa+Link+Road,+Sakinaka,+Kurla,+Mumbai+400072&output=embed",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Products",
    to: "/products",
    children: [
      { label: "Networking", to: "/products/networking" },
      { label: "Servers", to: "/products/servers" },
      { label: "Storage", to: "/products/storage" },
      { label: "Workstations", to: "/products/workstations" },
      { label: "Laptops", to: "/products/laptops" },
      { label: "Security", to: "/products/security" },
      { label: "Switches", to: "/products/switches" },
    ],
  },
  { label: "Services", to: "/services" },
  { label: "Brands", to: "/brands" },
  { label: "Industries", to: "/industries" },
  { label: "Sell Equipment", to: "/sell-equipment" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const STATS = [
  { value: "14+", label: "Years of Delivery" },
  { value: "2,400+", label: "Enterprise Clients" },
  { value: "38", label: "Vendor Partnerships" },
  { value: "99.98%", label: "SLA Uptime" },
];

export const SERVICES = [
  {
    icon: "laptop",
    title: "Refurbished Laptops & Desktops",
    desc: "Quality-tested refurbished laptops, desktops, mini PCs, and all-in-one systems from leading brands with warranty."
  },
  {
    icon: "monitor",
    title: "Workstations & Enterprise Systems",
    desc: "High-performance workstations and enterprise IT systems for businesses, designers, engineers, and professionals."
  },
  {
    icon: "server",
    title: "Servers & Storage Solutions",
    desc: "Supply of enterprise servers, storage systems, backup solutions, and data center hardware for businesses."
  },
  {
    icon: "network",
    title: "Networking Solutions",
    desc: "Routers, managed switches, firewalls, wireless access points, structured cabling, and complete LAN/WAN solutions."
  },
  {
    icon: "settings",
    title: "Installation & IT Support",
    desc: "Professional installation, configuration, migration, troubleshooting, maintenance, and technical support."
  },
  {
    icon: "recycle",
    title: "IT Asset Buyback & E-Waste Recycling",
    desc: "Buyback of used IT equipment with responsible e-waste recycling and environmentally safe disposal services."
  }
];
export const CATEGORIES = [
  "All",
  "Networking",
  "Servers",
  "Storage",
  "Workstations",
  "Laptops",
  "Security",
  "Switches",
  "Accessories",
];

// Local image paths - place your images in public/images/{category}/ folders
// Example: Place laptop images in public/images/laptops/
const LAPTOP_IMAGES = [
  "/images/laptops/Dell1.jpg", "/images/laptops/dell2.jpg", "/images/laptops/dell3.jpg",
  "/images/laptops/dell4.jpg", "/images/laptops/dell5.jpg", "/images/laptops/dell6.jpg",
  "/images/laptops/dell7.jpg", "/images/laptops/dell8.jpg", "/images/laptops/dell9.jpg",
  "/images/laptops/dell10.jpg", "/images/laptops/Hp1.jpg", "/images/laptops/HP2.jpg",
  "/images/laptops/HP3.jpg", "/images/laptops/HP4.jpg", "/images/laptops/Hp6.jpg",
  "/images/laptops/Hp7.jpg", "/images/laptops/HP8.jpg", "/images/laptops/HP9.jpg",
  "/images/laptops/apple1.jpg", "/images/laptops/apple2.jpg", "/images/laptops/apple3.jpg",
  "/images/laptops/apple6.jpg", "/images/laptops/apple7.jpg", "/images/laptops/apple8.jpg",
  "/images/laptops/apple14.jpg", "/images/laptops/apple19.jpg", "/images/laptops/lenova1.jpg",
  "/images/laptops/lenova2.jpg", "/images/laptops/lenova3.jpg", "/images/laptops/lenova4.jpg",
  "/images/laptops/lenova5.jpg", "/images/laptops/Dell1.jpg", "/images/laptops/dell2.jpg",
  "/images/laptops/dell3.jpg", "/images/laptops/dell4.jpg", "/images/laptops/dell5.jpg",
  "/images/laptops/dell6.jpg", "/images/laptops/dell7.jpg", "/images/laptops/dell8.jpg",
  "/images/laptops/dell9.jpg", "/images/laptops/dell10.jpg", "/images/laptops/Hp1.jpg",
  "/images/laptops/HP2.jpg", "/images/laptops/HP3.jpg", "/images/laptops/HP4.jpg"
];

const SERVER_IMAGES = [
  "/images/servers/server1.jpg", "/images/servers/server2.jpg", "/images/servers/server3.jpg",
  "/images/servers/server4.jpg", "/images/servers/server5.jpg"
];

const NETWORKING_IMAGES = [
  "/images/networking/networking1.jpg", "/images/networking/networking2.jpg"
];

const STORAGE_IMAGES = [
  "/images/storage/storage1.jpg", "/images/storage/storage2.png"
];

const WORKSTATION_IMAGES = [
  "/images/workstations/workstation1.jpg", "/images/workstations/workstation2.jpg"
];

const SECURITY_IMAGES = [
  "/images/security/security1.jpg"
];

const SWITCHES_IMAGES = [
  "/images/networking/networking1.jpg"
];

const ACCESSORY_IMAGES = [
  "/images/accessories/accessories1.jpg"
];

export const PRODUCTS = [
  // ══════════════ NETWORKING (2) ══════════════
  { id: "cisco-catalyst-9300", name: "Cisco Catalyst 9300 Series", category: "Networking",
    tagline: "Enterprise-class stackable access switch",
    features: ["48-port 1G/10G copper + 8×10G uplinks", "StackWise-480 · 480 Gbps stack", "IEEE 802.3bt UPOE (60W/port)", "Cisco DNA Center + IOS-XE"],
    applications: ["Campus access", "Zero-trust segmentation", "Branch aggregation"],
    image: NETWORKING_IMAGES[0] },
  { id: "cisco-isr-4451", name: "Cisco ISR 4451-X Router", category: "Networking",
    tagline: "Multiservice enterprise SD-WAN edge",
    features: ["1–2 Gbps aggregate throughput", "Integrated SD-WAN & IPSec", "4× NIM + 3× SM WAN slots", "Voice, security, WAN opt."],
    applications: ["Branch WAN edge", "SD-WAN transport", "Voice gateway"],
    image: NETWORKING_IMAGES[1] },

  // ══════════════ SERVERS (5) ══════════════
  { id: "dell-poweredge-r750", name: "Dell PowerEdge R750 (2U)", category: "Servers",
    tagline: "2U dual-socket general-purpose rack server",
    features: ["2× Xeon Scalable 3rd Gen (up to 40C)", "32 DIMM · up to 8 TB DDR4-3200", "24× 2.5\" NVMe or 12× 3.5\"", "iDRAC9 + PERC H755"],
    applications: ["Virtualization host", "OLTP databases", "AI inference edge"],
    image: SERVER_IMAGES[0] },
  { id: "hpe-proliant-dl380-gen11", name: "HPE ProLiant DL380 Gen11 (2U)", category: "Servers",
    tagline: "The world's best-selling enterprise server",
    features: ["Xeon Scalable 4th/5th Gen (Sapphire/Emerald)", "Up to 8 TB DDR5-5600 · 32 DIMM", "PCIe Gen5 · EDSFF 1.S NVMe", "iLO 6 · Silicon Root of Trust"],
    applications: ["SAP HANA", "VDI at scale", "General virtualization"],
    image: SERVER_IMAGES[1] },
  { id: "dell-poweredge-r740", name: "Dell PowerEdge R740 (2U)", category: "Servers",
    tagline: "Versatile 2U rack server for data centers",
    features: ["2× Xeon Scalable 2nd Gen (up to 28C)", "24 DIMM · up to 3 TB DDR4-2933", "16× 2.5\" NVMe or 8× 3.5\"", "iDRAC9 · Dual SD cards"],
    applications: ["Virtualization", "Database hosting", "Private cloud"],
    image: SERVER_IMAGES[2] },
  { id: "hpe-proliant-dl360-gen10", name: "HPE ProLiant DL360 Gen10 (1U)", category: "Servers",
    tagline: "Dense 1U rack server for space-constrained environments",
    features: ["2× Xeon Scalable 2nd Gen (up to 28C)", "24 DIMM · up to 3 TB DDR4-2933", "8× 2.5\" NVMe or 4× 3.5\"", "iLO 5 · HPE Silicon Root of Trust"],
    applications: ["High-density computing", "Edge computing", "Web hosting"],
    image: SERVER_IMAGES[3] },
  { id: "lenovo-thinksystem-sr650", name: "Lenovo ThinkSystem SR650 (2U)", category: "Servers",
    tagline: "High-performance 2U rack server",
    features: ["2× Xeon Scalable (up to 28C)", "24 DIMM · up to 3 TB DDR4-2933", "16× 2.5\" NVMe or 8× 3.5\"", "XClarity Controller · Predictive failure analysis"],
    applications: ["Business analytics", "Database workloads", "Cloud infrastructure"],
    image: SERVER_IMAGES[4] },

  // ══════════════ STORAGE (2) ══════════════
  { id: "enterprise-nas-24bay", name: "Enterprise Rackmount NAS 24-Bay", category: "Storage",
    tagline: "Unified file storage · NFS/SMB/iSCSI",
    features: ["24× 3.5\" hot-swap · up to 528 TB", "2× 25G SFP28 · 4× 10G SFP+", "ZFS + snapshots + replication", "Ransomware recovery vault"],
    applications: ["File shares", "Media production", "Backup landing zone"],
    image: STORAGE_IMAGES[0] },
  { id: "synology-rs4021xs", name: "Synology RackStation RS4021xs+", category: "Storage",
    tagline: "High-perf 16-bay 3U NAS",
    features: ["Xeon D-1541 · 16 GB ECC", "16× SATA/SAS (expandable to 40)", "2× 10 GbE + PCIe 25 GbE option", "Snapshot Replication + Btrfs"],
    applications: ["SMB primary storage", "Backup target", "Surveillance NVR"],
    image: STORAGE_IMAGES[1] },

  // ══════════════ WORKSTATIONS (2) ══════════════
  { id: "dell-precision-7960-tower", name: "Dell Precision 7960 Tower", category: "Workstations",
    tagline: "Extreme dual-CPU workstation",
    features: ["Xeon W9-3495X (56 cores)", "2 TB DDR5-4800 ECC · 8 channels", "Dual Nvidia RTX 6000 Ada 48 GB", "ISV cert · Autodesk, Siemens, Ansys"],
    applications: ["Physical simulation", "AI/ML training", "Cinematic rendering"],
    image: WORKSTATION_IMAGES[0] },
  { id: "hp-elitedesk-800-sff", name: "HP EliteDesk 800 G9 SFF", category: "Workstations",
    tagline: "Business SFF desktop with vPro",
    features: ["Core i7-14700 (20C) vPro Enterprise", "32 GB DDR5-4400", "1 TB PCIe Gen4 NVMe", "HP Sure Start & Sure Recover"],
    applications: ["Office deployment", "Finance & operations", "Managed fleet"],
    image: WORKSTATION_IMAGES[1] },

  // ══════════════ REFURBISHED LAPTOPS (40+) ══════════════
{ id: "dell-latitude-5480", name: "Latitude 5000 Series", category: "Laptops",
    tagline: "Reliable business laptop · Intel Core",
    features: ["14\" FHD · Intel Core i5-8350U", "16 GB DDR4 memory", "512 GB SSD · 5-hour battery", "Anti-glare IPS · 1920×1080"],
    applications: ["Office productivity", "Corporate deployment", "Web applications"],
    image: LAPTOP_IMAGES[0] },
  { id: "dell-inspiron-7630", name: "Inspiron 7000 Series", category: "Laptops",
    tagline: "Flagship creator laptop",
    features: ["Intel Core i7-13700H · 14C", "16 GB DDR5 · Dual Channel", "1 TB NVMe SSD · 86 Wh battery", "16\" 2.5K 120Hz ComfortView Plus"],
    applications: ["Photo & video edit", "3D content projects", "Multimedia entertainment"],
    image: LAPTOP_IMAGES[1] },
  { id: "dell-latitude-5400-intel", name: "Latitude 5400", category: "Laptops",
    tagline: "Everyday enterprise Latitude laptop",
    features: ["Intel Core i5-8265U · 4C/8T", "16 GB DDR4 memory", "512 GB SSD · Up to 12-hour battery", "14\" FHD Anti-Glare · USB-C Power"],
    applications: ["Executive mobility", "Sales & consulting", "Everyday productivity"],
    image: LAPTOP_IMAGES[2] },
  { id: "lenovo-thinkpad-x1-carbon-g12", name: "Lenovo ThinkPad X1 Carbon Gen 12", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Core Ultra 7 165U vPro", "32 GB LPDDR5x-6400", "2 TB PCIe Gen4 NVMe", "MIL-STD-810H · carbon-fiber hybrid"],
    applications: ["Executive mobility", "Field engineering", "Regulated industries"],
    image: LAPTOP_IMAGES[3] },
  { id: "lenovo-thinkpad-p16v", name: "Lenovo ThinkPad P16v (Mobile Workstation)", category: "Laptops",
    tagline: "16\" ISV-certified mobile workstation",
    features: ["Core i9-14900HX (24C)", "128 GB DDR5-5600", "Nvidia RTX 3500 Ada 12 GB", "16\" 3.2K IPS 165 Hz · Dolby Vision"],
    applications: ["CAD on-site", "AI development", "3D modeling field"],
    image: LAPTOP_IMAGES[4] },
  { id: "dell-latitude-5420", name: "Dell 5420", category: "Laptops",
    tagline: "14\" Intel Core business laptop",
    features: ["Core i5-1145G7 vPro", "16 GB DDR4-3200", "512 GB PCIe NVMe Class 35 SSD", "Dell Optimizer AI · ComfortView Plus"],
    applications: ["Corporate deployment", "Regulated sectors", "Office workflows"],
    image: LAPTOP_IMAGES[5] },
  {
    id: "hp-elitebook-840-g5",
    name: "EliteBook 840 G5",
    category: "Laptops",
    tagline: "14\" premium business laptop",
    features: [
      "Intel Core i5-8250U",
      "8 GB DDR4 RAM",
      "256 GB NVMe SSD",
      "14\" Full HD IPS Anti-Glare Display"
    ],
    applications: [
      "Business Productivity",
      "Office Work",
      "Remote Meetings"
    ],
    image: LAPTOP_IMAGES[6]
  },
  { id: "dell-latitude-7450", name: "Dell Latitude 7450 Ultralight", category: "Laptops",
    tagline: "14\" business ultralight · < 1.24 kg",
    features: ["Core Ultra 7 vPro", "32 GB LPDDR5x", "1 TB Gen4 NVMe · TPM 2.0", "IR + fingerprint · SafeShutter cam"],
    applications: ["Traveling execs", "Consulting", "Managed fleet"],
    image: LAPTOP_IMAGES[7] },
  { id: "dell-xps-15-2024", name: "Dell XPS 15 (2024)", category: "Laptops",
    tagline: "15.6\" premium creator laptop",
    features: ["Core i9-13900H (14C)", "64 GB DDR5-4800", "Nvidia RTX 4070 8 GB", "3.5K OLED · touch · 100% DCI-P3"],
    applications: ["Photo & video edit", "Design & UI/UX", "Executive creator"],
    image: LAPTOP_IMAGES[8] },
  { id: "surface-laptop-6", name: "Microsoft Surface Laptop 6 for Business", category: "Laptops",
    tagline: "13.5\" Copilot+ PC · Intel Core Ultra",
    features: ["Core Ultra 7 165H · NPU", "32 GB LPDDR5x + 1 TB SSD", "PixelSense 3:2 touch · 400-nit", "Enterprise-managed · Copilot key"],
    applications: ["Modern workplace", "Microsoft 365 power users", "Executive travel"],
    image: LAPTOP_IMAGES[9] },
  { id: "dell-latitude-5520", name: "Dell Latitude 5520 (Refurbished)", category: "Laptops",
    tagline: "15.6\" business laptop · Grade A",
    features: ["Core i7-11800H (8C/16T)", "32 GB DDR4-3200", "512 GB NVMe SSD", "15.6\" FHD IPS · Windows 11 Pro"],
    applications: ["Business productivity", "Remote work", "Corporate fleet"],
    image: LAPTOP_IMAGES[10] },
  {
    id: "hp-elitebook-840-g8-base",
    name: "HP EliteBook 840 G8 (Refurbished)",
    category: "Laptops",
    tagline: "14\" premium business laptop · Intel Evo",
    features: [
      "Intel Core i5-1135G7",
      "16 GB DDR4 RAM",
      "512 GB NVMe SSD",
      "14\" FHD IPS · Windows 11 Pro"
    ],
    applications: [
      "Corporate Deployment",
      "Remote Work",
      "Business Travel"
    ],
    image: LAPTOP_IMAGES[11]
  },
  { id: "hp-probook-450-g8", name: "HP ProBook 450 G8 (Refurbished)", category: "Laptops",
    tagline: "15.6\" business laptop · Value",
    features: ["Core i5-1135G7 (4C/8T)", "16 GB DDR4-3200", "512 GB NVMe SSD", "15.6\" FHD IPS · Windows 11 Pro"],
    applications: ["Small business", "Education", "Home office"],
    image: LAPTOP_IMAGES[12] },
  {
    id: "hp-zbook-power-g8",
    name: "HP ZBook Power G8 (Refurbished)",
    category: "Laptops",
    tagline: "15.6\" professional mobile workstation",
    features: [
      "Intel Core i7-11800H (8C/16T)",
      "32 GB DDR4-3200",
      "NVIDIA T600 4 GB",
      "512 GB NVMe SSD · Windows 11 Pro"
    ],
    applications: [
      "CAD Work",
      "Engineering",
      "Design Review"
    ],
    image: LAPTOP_IMAGES[13]
  },
  {
    id: "hp-probook-450-g7",
    name: "HP ProBook 450 G7 (Refurbished)",
    category: "Laptops",
    tagline: "15.6\" budget business laptop",
    features: [
      "Intel Core i5-10210U (4C/8T)",
      "16 GB DDR4-2666",
      "512 GB NVMe SSD",
      "15.6\" FHD IPS · Windows 11 Pro"
    ],
    applications: [
      "Small Business",
      "Students",
      "Budget Fleet"
    ],
    image: LAPTOP_IMAGES[14]
  },
  { id: "hp-elitebook-840-g7", name: "HP EliteBook 840 G7 (Refurbished)", category: "Laptops",
    tagline: "14\" premium business laptop",
    features: ["Core i7-10610U (4C/8T)", "16 GB DDR4-2933", "512 GB NVMe SSD", "14\" FHD IPS · Windows 11 Pro"],
    applications: ["Corporate fleet", "Management", "Professional services"],
    image: LAPTOP_IMAGES[15] },
  {
    id: "hp-elitebook-840-g8-vpro",
    name: "HP EliteBook 840 G8 (Refurbished)",
    category: "Laptops",
    tagline: "14\" business laptop · Compact",
    features: [
      "Intel Core i5-1145G7 (4C/8T)",
      "16 GB DDR4-3200",
      "512 GB NVMe SSD",
      "14\" FHD IPS · Windows 11 Pro"
    ],
    applications: [
      "Field Work",
      "Sales Teams",
      "Remote Offices"
    ],
    image: LAPTOP_IMAGES[16]
  },
  {
    id: "hp-elite-dragonfly-g2",
    name: "HP Elite Dragonfly G2 (Refurbished)",
    category: "Laptops",
    tagline: "13.3\" ultralight premium business laptop",
    features: [
      "Intel Core i7-1165G7 (4C/8T)",
      "16 GB LPDDR4x-4266",
      "1 TB NVMe SSD",
      "13.3\" FHD IPS · Windows 11 Pro"
    ],
    applications: [
      "Executive Travel",
      "Consulting",
      "Premium Fleet"
    ],
    image: LAPTOP_IMAGES[17]
  },
  {
    id: "apple-macbook-pro-14-m2-pro",
    name: "Apple MacBook Pro 14-inch M2 Pro (Refurbished)",
    category: "Laptops",
    tagline: "14.2\" professional performance laptop",
    features: [
      "Apple M2 Pro (12-Core CPU / 19-Core GPU)",
      "32 GB Unified Memory",
      "1 TB SSD",
      "14.2\" Liquid Retina XDR · macOS"
    ],
    applications: [
      "Graphic Design",
      "Video Production",
      "Software Development"
    ],
    image: LAPTOP_IMAGES[18]
  },
  {
    id: "apple-macbook-pro-16-m2-max",
    name: "Apple MacBook Pro 16-inch M2 Max (Refurbished)",
    category: "Laptops",
    tagline: "16.2\" professional creative powerhouse",
    features: [
      "Apple M2 Max (12-Core CPU / 38-Core GPU)",
      "64 GB Unified Memory",
      "1 TB SSD",
      "16.2\" Liquid Retina XDR · macOS"
    ],
    applications: [
      "Professional Video Editing",
      "3D Animation",
      "Machine Learning"
    ],
    image: LAPTOP_IMAGES[19]
  },
  {
    id: "apple-macbook-pro-16-m1-max",
    name: "Apple MacBook Pro 16-inch M1 Max (Refurbished)",
    category: "Laptops",
    tagline: "16.2\" flagship laptop for creators & professionals",
    features: [
      "Apple M1 Max (10-Core CPU / 32-Core GPU)",
      "32 GB Unified Memory",
      "1 TB Ultra-Fast SSD",
      "16.2\" Liquid Retina XDR Display · macOS"
    ],
    applications: [
      "4K/8K Video Editing",
      "3D Design & Animation",
      "Software Development"
    ],
    image: LAPTOP_IMAGES[20]
  },
  {
    id: "apple-macbook-air-15-m3",
    name: "Apple MacBook Air 15-inch M3 (Refurbished)",
    category: "Laptops",
    tagline: "15.3\" ultra-thin laptop for business & everyday productivity",
    features: [
      "Apple M3 Chip (8-Core CPU / 10-Core GPU)",
      "16 GB Unified Memory",
      "512 GB SSD",
      "15.3\" Liquid Retina Display · macOS"
    ],
    applications: [
      "Business Professionals",
      "Office Productivity",
      "Creative Work"
    ],
    image: LAPTOP_IMAGES[21]
  },
  {
    id: "apple-macbook-air-13-m2",
    name: "Apple MacBook Air 13-inch M2 (Refurbished)",
    category: "Laptops",
    tagline: "13.6\" ultra-light laptop for work & creativity",
    features: [
      "Apple M2 Chip (8-Core CPU / 10-Core GPU)",
      "8 GB Unified Memory",
      "256 GB SSD",
      "13.6\" Liquid Retina Display · macOS"
    ],
    applications: [
      "Executive Travel",
      "Content Creation",
      "Everyday Productivity"
    ],
    image: LAPTOP_IMAGES[22]
  },
  {
    id: "apple-macbook-pro-13-m2",
    name: "Apple MacBook Pro 13-inch M2 (Refurbished)",
    category: "Laptops",
    tagline: "13.3\" compact performance laptop for professionals",
    features: [
      "Apple M2 Chip (8-Core CPU / 10-Core GPU)",
      "16 GB Unified Memory",
      "256 GB SSD",
      "13.3\" Retina Display · macOS"
    ],
    applications: [
      "Business Productivity",
      "Remote Work",
      "Everyday Professional Tasks"
    ],
    image: LAPTOP_IMAGES[23]
  },
  {
    id: "apple-macbook-air-13-m3",
    name: "Apple MacBook Air 13-inch M3 (Refurbished)",
    category: "Laptops",
    tagline: "13.6\" lightweight laptop for business & education",
    features: [
      "Apple M3 Chip (8-Core CPU / 10-Core GPU)",
      "16 GB Unified Memory",
      "512 GB SSD",
      "13.6\" Liquid Retina Display · macOS"
    ],
    applications: [
      "Business Productivity",
      "Education",
      "Home Office"
    ],
    image: LAPTOP_IMAGES[24]
  },
  {
    id: "apple-macbook-air-15-m2",
    name: "Apple MacBook Air 15-inch M2 (Refurbished)",
    category: "Laptops",
    tagline: "15.3\" premium laptop for business & productivity",
    features: [
      "Apple M2 Chip (8-Core CPU / 10-Core GPU)",
      "8 GB Unified Memory",
      "512 GB SSD",
      "15.3\" Liquid Retina Display · macOS"
    ],
    applications: [
      "Corporate Professionals",
      "Business Management",
      "Everyday Productivity"
    ],
    image: LAPTOP_IMAGES[25]
  },
  { id: "lenovo-thinkpad-x1-yoga-gen4", name: "Lenovo ThinkPad X1 Yoga Gen 4 (Refurbished)", category: "Laptops",
    tagline: "14\" 2-in-1 business convertible",
    features: ["Core i7-10610U (4C/8T)", "16 GB LPDDR3-2133", "512 GB NVMe SSD", "14\" FHD IPS touch · Windows 11 Pro"],
    applications: ["Executive mobility", "Presentations", "Flexible work"],
    image: LAPTOP_IMAGES[26] },
  {
    id: "lenovo-yoga-9i-gen-7",
    name: "Lenovo Yoga 9i Gen 7 (Refurbished)",
    category: "Laptops",
    tagline: "14\" premium 2-in-1 convertible",
    features: [
      "Intel Core i7-1260P (12C/16T)",
      "32 GB LPDDR5-5200",
      "1 TB PCIe Gen4 SSD",
      "14\" 2.8K OLED Touch Display · Windows 11 Pro"
    ],
    applications: [
      "Digital Creators",
      "Business Executives",
      "Premium Mobility"
    ],
    image: LAPTOP_IMAGES[27]
  },
  {
    id: "lenovo-thinkpad-x13-gen2",
    name: "Lenovo ThinkPad X13 Gen 2 (Refurbished)",
    category: "Laptops",
    tagline: "13.3\" ultra-portable business laptop",
    features: [
      "Intel Core i5-1145G7 (4C/8T)",
      "24 GB LPDDR4x-4266",
      "1 TB PCIe Gen4 SSD",
      "13.3\" WUXGA IPS Anti-Glare · Windows 11 Pro"
    ],
    applications: [
      "Business Travel",
      "Sales Professionals",
      "Hybrid Work"
    ],
    image: LAPTOP_IMAGES[28]
  },
  { id: "lenovo-thinkpad-l14-gen2", name: "Lenovo ThinkPad L14 Gen 2 (Refurbished)", category: "Laptops",
    tagline: "14\" budget business laptop",
    features: ["AMD Ryzen 5 PRO 4650U", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD IPS · Windows 11 Pro"],
    applications: ["Small business", "Education", "Budget fleet"],
    image: LAPTOP_IMAGES[29] },
  {
    id: "lenovo-thinkpad-t14-gen1-amd",
    name: "Lenovo ThinkPad T14 Gen 1 AMD (Refurbished)",
    category: "Laptops",
    tagline: "14\" business laptop · AMD Ryzen PRO",
    features: [
      "AMD Ryzen 5 PRO 4650U (6C/12T)",
      "24 GB DDR4-3200",
      "1 TB PCIe NVMe SSD",
      "14\" FHD IPS Anti-Glare · Windows 11 Pro"
    ],
    applications: [
      "Corporate Deployment",
      "Field Operations",
      "Business Travel"
    ],
    image: LAPTOP_IMAGES[30]
  },
  { id: "dell-latitude-5400", name: "Dell Latitude 5400 (Refurbished)", category: "Laptops",
    tagline: "14\" business laptop · Value",
    features: ["Core i5-8365U (4C/8T)", "16 GB DDR4-2666", "512 GB NVMe SSD", "14\" FHD IPS · Windows 11 Pro"],
    applications: ["Small business", "Education", "Home office"],
    image: LAPTOP_IMAGES[31] },
  { id: "lenovo-thinkpad-t14-gen2", name: "Lenovo ThinkPad T14 Gen 2 (Refurbished)", category: "Laptops",
    tagline: "14\" business laptop · Intel",
    features: ["Core i5-1135G7 (4C/8T)", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD IPS · Windows 11 Pro"],
    applications: ["Corporate deployment", "Field work", "Business travel"],
    image: LAPTOP_IMAGES[32] },
  {
    id: "dell-latitude-5525",
    name: "Dell Latitude 5525 (Refurbished)",
    category: "Laptops",
    tagline: "15.6\" business laptop · AMD Ryzen",
    features: [
      "AMD Ryzen 7 PRO 5875U (8C/16T)",
      "32 GB DDR4-3200",
      "1 TB PCIe Gen4 NVMe SSD",
      "15.6\" FHD WVA Anti-Glare · Windows 11 Pro"
    ],
    applications: [
      "Business Productivity",
      "Education",
      "Remote Workforce"
    ],
    image: LAPTOP_IMAGES[33]
  },
  { id: "dell-precision-5550", name: "Dell Precision 5550 (Refurbished)", category: "Laptops",
    tagline: "15.6\" mobile workstation",
    features: ["Core i7-10875H (8C/16T)", "32 GB DDR4-2933", "Nvidia Quadro T2000 4 GB", "512 GB NVMe SSD · Windows 11 Pro"],
    applications: ["CAD work", "Engineering", "Design review"],
    image: LAPTOP_IMAGES[34] },
  { id: "lenovo-thinkpad-p14s-gen2", name: "Lenovo ThinkPad P14s Gen 2 (Refurbished)", category: "Laptops",
    tagline: "14\" mobile workstation",
    features: ["Core i7-1185G7 (4C/8T)", "16 GB LPDDR4x-4267", "Nvidia T500 4 GB", "512 GB NVMe SSD · Windows 11 Pro"],
    applications: ["CAD work", "Engineering", "Design review"],
    image: LAPTOP_IMAGES[35] },
  {
    id: "dell-precision-5450",
    name: "Dell Precision 5450 (Refurbished)",
    category: "Laptops",
    tagline: "14\" premium mobile workstation",
    features: [
      "Intel Core i7-10850H (6C/12T)",
      "64 GB DDR4-2933",
      "NVIDIA Quadro T2000 4 GB",
      "1 TB PCIe NVMe SSD · Windows 11 Pro"
    ],
    applications: [
      "CAD & CAM Design",
      "3D Rendering",
      "Engineering Workflows"
    ],
    image: LAPTOP_IMAGES[36]
  },
  { id: "dell-latitude-5310", name: "Dell Latitude 5310 (Refurbished)", category: "Laptops",
    tagline: "13.3\" compact business laptop",
    features: ["Core i5-10310U (4C/8T)", "16 GB DDR4-2666", "512 GB NVMe SSD", "13.3\" FHD IPS · Windows 11 Pro"],
    applications: ["Field work", "Sales teams", "Remote offices"],
    image: LAPTOP_IMAGES[37] },
  { id: "lenovo-thinkpad-l13-gen2", name: "Lenovo ThinkPad L13 Gen 2 (Refurbished)", category: "Laptops",
    tagline: "13.3\" ultralight business laptop",
    features: ["Core i5-1135G7 (4C/8T)", "16 GB LPDDR4x-4267", "512 GB NVMe SSD", "13.3\" FHD IPS · Windows 11 Pro"],
    applications: ["Executive travel", "Sales teams", "Remote work"],
    image: LAPTOP_IMAGES[38] },
  { id: "hp-elitebook-640-g8", name: "HP EliteBook 640 G8 (Refurbished)", category: "Laptops",
    tagline: "14\" business laptop · Value",
    features: ["Core i5-1135G7 (4C/8T)", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD IPS · Windows 11 Pro"],
    applications: ["Small business", "Education", "Home office"],
    image: LAPTOP_IMAGES[39] },
  { id: "dell-latitude-3420", name: "Dell Latitude 3420 (Refurbished)", category: "Laptops",
    tagline: "14\" budget business laptop",
    features: ["Core i5-1135G7 (4C/8T)", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD IPS · Windows 11 Pro"],
    applications: ["Small business", "Education", "Budget fleet"],
    image: LAPTOP_IMAGES[40] },
  { id: "lenovo-thinkpad-e14-gen2", name: "Lenovo ThinkPad E14 Gen 2 (Refurbished)", category: "Laptops",
    tagline: "14\" budget business laptop",
    features: ["Core i5-1135G7 (4C/8T)", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD IPS · Windows 11 Pro"],
    applications: ["Small business", "Students", "Budget fleet"],
    image: LAPTOP_IMAGES[41] },
  { id: "hp-probook-430-g7", name: "HP ProBook 430 G7 (Refurbished)", category: "Laptops",
    tagline: "13.3\" compact business laptop",
    features: ["Core i5-10210U (4C/8T)", "16 GB DDR4-2666", "512 GB NVMe SSD", "13.3\" FHD IPS · Windows 11 Pro"],
    applications: ["Field work", "Sales teams", "Remote offices"],
    image: LAPTOP_IMAGES[42] },

  // ══════════════ SECURITY (1) ══════════════
  { id: "fortinet-fortigate-100f", name: "Fortinet FortiGate 100F NGFW", category: "Security",
    tagline: "Next-gen firewall for mid-enterprise",
    features: ["20 Gbps firewall · 11.5 Gbps threat", "SD-WAN · ZTNA · SSL inspection", "22× GE + 4× 10G SFP+", "FortiGuard AI-powered services"],
    applications: ["Edge security", "Branch NGFW", "SD-WAN gateway"],
    image: SECURITY_IMAGES[0] },

  // ══════════════ SWITCHES (1) ══════════════
  { id: "cisco-catalyst-2960", name: "Cisco Catalyst 2960 Series", category: "Switches",
    tagline: "Enterprise-class managed switch",
    features: ["48-port 10/100/1000 copper", "PoE+ support · 370W power budget", "Layer 2 switching · VLAN support", "Cisco EnergyWise technology"],
    applications: ["Enterprise LAN", "PoE device deployment", "VoIP & wireless access"],
    image: SWITCHES_IMAGES[0] },

  // ══════════════ ACCESSORIES (1) ══════════════
  { id: "network-rack-42u", name: "42U Server Cabinet (800×1000 mm)", category: "Accessories",
    tagline: "Data-center-grade server cabinet",
    features: ["42U · 800 mm W × 1000 mm D", "1200 kg dynamic load", "Perforated doors · 78% opening", "Cable manager + PDU rails"],
    applications: ["Server rooms", "Colocation", "Edge micro-DC"],
    image: ACCESSORY_IMAGES[0] },
];


export const BRANDS = [
  "Dell",
  "HP",
  "Lenovo",
  "Apple",
  "Acer",
  "ASUS",
  "Microsoft Surface",
  "Cisco",
  "Juniper Networks",
  "HPE",
  "Aruba",
  "MikroTik",
  "Fortinet",
  "TP-Link",
  "Ubiquiti",
  "D-Link",
  "Netgear",
  "APC",
];

export const INDUSTRIES = [
  {
    title: "Corporate Offices",
    desc: "Refurbished laptops, desktops, networking equipment, and complete IT solutions for businesses."
  },
  {
    title: "Educational Institutions",
    desc: "Affordable laptops, computer labs, Wi-Fi networking, and IT infrastructure for schools and colleges."
  },
  {
    title: "Healthcare",
    desc: "Reliable laptops, networking products, and IT equipment for hospitals, clinics, and diagnostic centers."
  },
  {
    title: "Retail Businesses",
    desc: "Networking solutions, office laptops, CCTV networking, and POS connectivity for retail stores."
  },
  {
    title: "Manufacturing",
    desc: "Business laptops, industrial networking products, and IT hardware for manufacturing units."
  },
  {
    title: "Logistics & Warehousing",
    desc: "Warehouse networking, office laptops, Wi-Fi solutions, and IT hardware for logistics companies."
  },
  {
    title: "Startups & SMEs",
    desc: "Cost-effective refurbished laptops and networking solutions to help growing businesses."
  },
  {
    title: "Government & Public Sector",
    desc: "Bulk supply of refurbished laptops, networking equipment, and IT hardware for public organizations."
  }
];

export const WHY_US = [
  {
    n: "01",
    title: "Quality Tested Products",
    desc: "Every refurbished laptop and IT product is thoroughly tested to ensure reliable performance."
  },
  {
    n: "02",
    title: "Competitive Pricing",
    desc: "Get genuine refurbished laptops and networking products at affordable prices without compromising quality."
  },
  {
    n: "03",
    title: "Fast Delivery Across India",
    desc: "We deliver laptops, networking equipment, and IT hardware safely to customers across India."
  },
  {
    n: "04",
    title: "Reliable After-Sales Support",
    desc: "Our team provides warranty assistance and technical support to ensure complete customer satisfaction."
  }
];

export const PROCESS = [
  {
    n: "01",
    title: "Consult",
    desc: "Understand your laptop, networking, or IT hardware requirements."
  },
  {
    n: "02",
    title: "Recommend",
    desc: "Suggest the right refurbished laptops and networking solutions based on your needs and budget."
  },
  {
    n: "03",
    title: "Deliver",
    desc: "Quick delivery, installation, and product testing for a smooth setup."
  },
  {
    n: "04",
    title: "Support",
    desc: "Warranty assistance, technical support, and after-sales service whenever you need it."
  }
];
export const TESTIMONIALS = [
  {
    name: "KK Computer",
    role: "Business Partner",
    company: "Sakinaka, Mumbai",
    quote: "We regularly purchase refurbished laptops and IT hardware from M DOT IT SOLUZIONE. The products are reliable, reasonably priced, and always delivered on time."
  },
  {
    name: "SK Computer",
    role: "Dealer",
    company: "Pune",
    quote: "M DOT IT SOLUZIONE provides quality refurbished laptops and excellent customer support. Their service has always been professional and dependable."
  },
  {
    name: "KGN Computer",
    role: "IT Hardware Dealer",
    company: "Mumbai",
    quote: "The laptops are well tested and in excellent condition. We appreciate the quick response, fair pricing, and timely delivery."
  },
  {
    name: "Ruchi Trading",
    role: "Business Partner",
    company: "Mumbai",
    quote: "A trusted supplier for refurbished laptops and networking products. Their team is knowledgeable, and the overall buying experience has been smooth."
  }
];
export const FAQ = [
  {
    q: "What products does M DOT IT SOLUZIONE offer?",
    a: "We supply refurbished laptops, networking equipment, servers, desktops, workstations, storage solutions, and IT accessories for businesses and individual customers."
  },
  {
    q: "Which laptop brands do you provide?",
    a: "We offer refurbished laptops from Dell, HP, Lenovo, Apple, Acer, ASUS, Microsoft Surface, and other leading brands, subject to stock availability."
  },
  {
    q: "Do you provide networking solutions?",
    a: "Yes. We supply routers, switches, firewalls, wireless access points, network accessories, and complete networking solutions for offices and businesses."
  },
  {
    q: "Do you deliver across India?",
    a: "Yes. We deliver refurbished laptops, networking products, and IT equipment across India with secure packaging and reliable shipping."
  },
  {
    q: "Do your refurbished laptops come with a warranty?",
    a: "Yes. All our refurbished laptops are fully tested and come with a warranty. Warranty duration may vary depending on the product."
  },
  {
    q: "Do you buy old laptops and IT equipment?",
    a: "Yes. We purchase used laptops, desktops, servers, and other IT equipment from businesses and individuals at competitive prices."
  },
  {
    q: "Can I place bulk or corporate orders?",
    a: "Yes. We specialize in bulk and corporate orders for refurbished laptops, networking equipment, and complete IT infrastructure solutions."
  },
  {
    q: "Do you provide installation and IT support?",
    a: "Yes. We provide installation, configuration, and technical support for networking equipment and selected IT solutions."
  }
];
export const BLOG = [
  { slug: "wi-fi-6e-india-2026", title: "Why Wi-Fi 6E is finally table-stakes in Indian enterprises",
    excerpt: "6 GHz is open across the EU. Here is what changes for your campus refresh in 2026.",
    date: "12 Nov 2025", tag: "Networking",
    image: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { slug: "zero-trust-firewall-migration", title: "A field guide to migrating from perimeter to zero-trust — without downtime",
    excerpt: "How we cut over a 42-site retail chain to a zero-trust posture across a single quarter.",
    date: "28 Oct 2025", tag: "Security",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { slug: "refurbished-servers-tco", title: "Refurbished vs new servers: the honest TCO math",
    excerpt: "When Grade-A refurbished hardware wins on TCO — and when it absolutely does not.",
    date: "09 Oct 2025", tag: "Sustainability",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { slug: "sd-wan-indian-mid-market", title: "SD-WAN for the Indian mid-market: what actually moves the needle",
    excerpt: "Application-aware routing, dual-carrier failover and the trap of over-buying.",
    date: "22 Sep 2025", tag: "Networking",
    image: "https://images.unsplash.com/photo-1698668975271-2ba9a323be6b?crop=entropy&cs=srgb&fm=jpg&q=85" },
];
