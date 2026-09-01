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
  mapLink:
    "https://www.google.com/maps/place/M+DOT+IT+SOLUZIONE/@19.1015782,72.871822,16z/data=!4m6!3m5!1s0x3be7c906d3229847:0xb5c855d044b2b146!8m2!3d19.1015782!4d72.871822",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Products",
    to: "/products",
    children: [
      { label: "Refurbished Laptops", to: "/products/laptops" },
      { label: "Refurbished Servers", to: "/products/servers" },
      { label: "Refurbished Storage", to: "/products/storage" },
      { label: "Refurbished Desktops", to: "/products/desktop" },
      { label: "Refurbished Workstations", to: "/products/workstations" },
      { label: "Refurbished Network Switches", to: "/products/switches" },
      { label: "Refurbished IT Security Equipment", to: "/products/security" },
      { label: "Refurbished Networking Equipment", to: "/products/networking" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "IT Asset Buyback", to: "/services/it-asset-buyback" },
      { label: "E-Waste Recycling", to: "/services/e-waste-recycling" },
      { label: "IT Asset Disposal", to: "/services/it-asset-disposal" },
      { label: "Secure Data Wiping", to: "/services/secure-data-wiping" },
      { label: "IT Equipment Pickup", to: "/services/it-equipment-pickup" },
      { label: "Laptop & Desktop Repair", to: "/services/laptop-desktop-repair" },
      { label: "Server & Networking Services", to: "/services/server-networking-services" },
      { label: "IT Hardware Refurbishment", to: "/services/it-hardware-refurbishment" },
      { label: "Corporate IT Asset Management", to: "/services/corporate-it-asset-management" },
      { label: "RAM & SSD Upgrade Services", to: "/services/ram-ssd-upgrade" },
    ],
  },
  { label: "Sell Equipment", to: "/sell-equipment" },
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
  "Laptops",
  "Servers",
  "Storage",
  "Desktop",
  "Workstations",
  "Switches",
  "Security",
  "Networking",
  "Accessories",
];

export function categoryNameToSlug(categoryName) {
  if (categoryName === "RAM & SSD") return "ram-ssd";
  return categoryName.toLowerCase().replace(/\s+/g, "-");
}

// Local image paths - place your images in public/images/{category}/ folders
// Example: Place laptop images in public/images/laptops/
const LAPTOP_IMAGES = [
  "/images/laptops/Dell1.jpg", "/images/laptops/Hp1.jpg", "/images/laptops/apple1.jpg",
  "/images/laptops/lenova1.jpg", "/images/laptops/lenova2.jpg"
];

const SERVER_IMAGES = [
  "/images/servers/server1.png", "/images/servers/server2.jpg", "/images/servers/server3.jpg",
  "/images/servers/server4.jpg"
];

const NETWORKING_IMAGES = [
  "/images/networking/networking1.png", "/images/networking/networking2.png",
  "/images/networking/networking3.png", "/images/networking/networking5.jpg"
];

const STORAGE_IMAGES = [
  "/images/storage/storage1.jpg", "/images/storage/storage3.jpg",
  "/images/storage/storage4.jpg", "/images/storage/storage5.jpg", "/images/storage/storage6.jpg"
];

const WORKSTATION_IMAGES = [
  "/images/workstations/workstation1.jpg", "/images/workstations/workstation2.jpg",
  "/images/workstations/workstation3.jpg", "/images/workstations/workstation4.jpg",
  "/images/workstations/workstation5.jpg"
];

const SECURITY_IMAGES = [
  "/images/security/security1.jpg", "/images/security/security2.jpg",
  "/images/security/security3.jpg", "/images/security/security4.jpg"
];

const DESKTOP_IMAGES = [
  "/images/Desktop/Desktop1.jpg", "/images/Desktop/Desktop2.jpg", "/images/Desktop/Desktop3.jpg",
  "/images/Desktop/Desktop4.jpg", "/images/Desktop/Desktop5.jpg", "/images/Desktop/Desktop6.jpg"
];

const RAM_IMAGES = [
  "/images/ram/ram1.jpg", "/images/ram/ram2.jpg", "/images/ram/ram3.jpg", "/images/ram/ram4.jpg"
];

const SWITCH_IMAGES = [
  "/images/switches/switche1.png", "/images/switches/switche2.jpg",
  "/images/switches/switche3.jpg", "/images/switches/switche4.jpg"
];

const ACCESSORY_IMAGES = [
  "/images/accessories/accessories1.jpg"
];

export const PRODUCTS = [
  // ══════════════ NETWORKING (4) ══════════════
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
  { id: "juniper-mx204", name: "Juniper MX204 Router", category: "Networking",
    tagline: "Compact edge router",
    features: ["80 Gbps throughput", "16× 10G ports", "Junos OS", "Compact form factor"],
    applications: ["Edge routing", "Branch office", "Network aggregation"],
    image: NETWORKING_IMAGES[2] },
  { id: "aruba-6300", name: "Aruba 6300 Switch", category: "Networking",
    tagline: "48-port access switch",
    features: ["48× 1G ports", "4× 10G uplinks", "Aruba Central", "Layer 2/3 switching"],
    applications: ["Campus access", "Edge switching", "Network segmentation"],
    image: NETWORKING_IMAGES[3] },

  // ══════════════ SERVERS (4) ══════════════
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

  // ══════════════ STORAGE (5) ══════════════
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
  { id: "qnap-ts-870", name: "QNAP TS-870 Enterprise NAS", category: "Storage",
    tagline: "8-bay enterprise NAS with 10GbE",
    features: ["8× 3.5\" hot-swap bays", "Intel Core i5-8500T", "16 GB DDR4 RAM", "10GbE networking"],
    applications: ["Business storage", "Backup target", "File sharing"],
    image: STORAGE_IMAGES[2] },
  { id: "synology-ds1821", name: "Synology DS1821+ Desktop NAS", category: "Storage",
    tagline: "8-bay desktop NAS with AMD Ryzen",
    features: ["8× 3.5\" bays", "AMD Ryzen V1500B", "8 GB RAM", "2× 1GbE ports"],
    applications: ["SMB storage", "Home office", "Media server"],
    image: STORAGE_IMAGES[3] },
  { id: "buffalo-terastation", name: "Buffalo TeraStation Business NAS", category: "Storage",
    tagline: "4-bay business NAS with RAID support",
    features: ["4× 3.5\" bays", "Intel Celeron J4125", "4 GB DDR4 RAM", "USB 3.0 ports"],
    applications: ["Small business storage", "File backup", "Network storage"],
    image: STORAGE_IMAGES[4] },

  // ══════════════ WORKSTATIONS (5) ══════════════
  { id: "dell-precision-7960-tower", name: "Dell Precision 7960 Tower", category: "Workstations",
    tagline: "Extreme dual-CPU workstation",
    features: ["Xeon W9-3495X (56 cores)", "2 TB DDR5-4800 ECC · 8 channels", "Dual Nvidia RTX 6000 Ada 48 GB", "ISV cert · Autodesk, Siemens, Ansys"],
    applications: ["3D rendering", "Deep learning", "Video editing"],
    image: WORKSTATION_IMAGES[0] },
  { id: "hp-z8-g4-workstation", name: "HP Z8 G4 Workstation", category: "Workstations",
    tagline: "The world's most powerful workstation",
    features: ["Dual Xeon W-3200 (up to 56 cores)", "2 TB DDR5-5200 ECC", "4× PCIe 5.0 slots", "Up to 3 RTX A6000 Ada"],
    applications: ["CAD/CAM", "Engineering simulation", "Film production"],
    image: WORKSTATION_IMAGES[1] },
  { id: "lenovo-thinkstation-p620", name: "Lenovo ThinkStation P620", category: "Workstations",
    tagline: "AMD Threadripper workstation",
    features: ["AMD Threadripper Pro", "128 GB RAM", "Quad GPU support", "Enterprise reliability"],
    applications: ["3D modeling", "Video editing", "Engineering"],
    image: WORKSTATION_IMAGES[2] },
  { id: "dell-precision-5860", name: "Dell Precision 5860 Tower", category: "Workstations",
    tagline: "Compact workstation",
    features: ["Intel Xeon W", "64 GB RAM", "NVIDIA RTX A4000", "Compact design"],
    applications: ["CAD", "Engineering", "Creative work"],
    image: WORKSTATION_IMAGES[3] },
  { id: "hp-z4-g4", name: "HP Z4 G4 Workstation", category: "Workstations",
    tagline: "Mid-range workstation",
    features: ["Intel Xeon W", "32 GB RAM", "NVIDIA RTX", "Balanced performance"],
    applications: ["General engineering", "Design", "Analysis"],
    image: WORKSTATION_IMAGES[4] },

  // ══════════════ LAPTOPS (5) ══════════════
  { id: "dell-latitude-7420", name: "Dell Latitude 7420", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i7-1185G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS touch"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[0] },
  { id: "hp-elitebook-840-g8", name: "HP EliteBook 840 G8", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[1] },
  { id: "macbook-pro-14-2021", name: "MacBook Pro 14\" (2021)", category: "Laptops",
    tagline: "Apple M1 Pro chip laptop",
    features: ["Apple M1 Pro (10-core CPU, 16-core GPU)", "16 GB unified memory", "512 GB SSD", "14.2\" Liquid Retina XDR"],
    applications: ["Creative work", "Development", "Media production"],
    image: LAPTOP_IMAGES[2] },
  { id: "lenovo-thinkpad-x1-carbon", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[3] },
  { id: "lenovo-thinkpad-x1-carbon-2", name: "Lenovo ThinkPad X1 Carbon Gen 9 (i5)", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i5-1135G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[4] },

  // ══════════════ SECURITY (4) ══════════════
  { id: "fortinet-fg-60f", name: "Fortinet FortiGate 60F", category: "Security",
    tagline: "Next-generation firewall for small offices",
    features: ["10 Gbps firewall throughput", "SD-WAN + IPS/IDS", "Hardware-accelerated crypto", "FortiOS 7"],
    applications: ["Branch office security", "Remote access VPN", "Web filtering"],
    image: SECURITY_IMAGES[0] },
  { id: "palo-alto-pa-220", name: "Palo Alto PA-220", category: "Security",
    tagline: "Next-generation firewall",
    features: ["App-ID", "User-ID", "Content filtering", "Threat prevention"],
    applications: ["Network security", "Application control", "Data protection"],
    image: SECURITY_IMAGES[1] },
  { id: "cisco-asa-5506", name: "Cisco ASA 5506-X", category: "Security",
    tagline: "Adaptive security appliance",
    features: ["Firewall", "VPN", "IPS", "Content filtering"],
    applications: ["Branch security", "Remote access", "Network protection"],
    image: SECURITY_IMAGES[2] },
  { id: "checkpoint-1400", name: "Check Point 1400", category: "Security",
    tagline: "Security gateway appliance",
    features: ["Firewall", "VPN", "IPS", "Threat prevention"],
    applications: ["Small business security", "Branch office", "Network protection"],
    image: SECURITY_IMAGES[3] },

  // ══════════════ SWITCHES (4) ══════════════
  { id: "hp-1920-48g", name: "HP 1920-48G Switch", category: "Switches",
    tagline: "48-port Gigabit managed switch",
    features: ["48× 1Gbps ports + 4× SFP+", "Layer 2/3 static routing", "IEEE 802.3at PoE+ (30W)", "Web/CLI management"],
    applications: ["Edge access", "PoE device deployment", "Small office aggregation"],
    image: SWITCH_IMAGES[0] },
  { id: "cisco-2960-x", name: "Cisco Catalyst 2960-X", category: "Switches",
    tagline: "48-port Gigabit switch",
    features: ["48× 1G ports", "4× 10G uplinks", "Layer 2 switching", "Cisco IOS"],
    applications: ["Access layer", "Branch office", "Network aggregation"],
    image: SWITCH_IMAGES[1] },
  { id: "aruba-2930f", name: "Aruba 2930F Switch", category: "Switches",
    tagline: "48-port PoE+ switch",
    features: ["48× 1G ports", "4× 10G uplinks", "PoE+ support", "Aruba Central"],
    applications: ["Access layer", "PoE deployment", "Network switching"],
    image: SWITCH_IMAGES[2] },
  { id: "dell-n3048p", name: "Dell N3048P Switch", category: "Switches",
    tagline: "48-port PoE switch",
    features: ["48× 1G ports", "4× 10G uplinks", "PoE support", "Dell OS10"],
    applications: ["Access layer", "PoE deployment", "Network switching"],
    image: SWITCH_IMAGES[3] },

  // ══════════════ ACCESSORIES (0) - DISABLED ══════════════
  // { id: "server-rack-42u", name: "42U Server Rack Cabinet", category: "Accessories",
  //   tagline: "Standard server rack enclosure",
  //   features: ["42U rack mount capacity", "Tempered glass front door", "Lockable side panels", "Cable management included"],
  //   applications: ["Data center deployment", "Server room organization", "Network equipment housing"],
  //   image: ACCESSORY_IMAGES[0] },

  // ══════════════ DESKTOP (6) ══════════════
  { id: "dell-optiplex-7090", name: "Dell OptiPlex 7090 Tower", category: "Desktop",
    tagline: "Business desktop tower",
    features: ["Intel Core i7-11700", "16 GB DDR4-3200", "512 GB NVMe SSD", "Windows 11 Pro"],
    applications: ["Office productivity", "Business computing", "Enterprise desktop"],
    image: DESKTOP_IMAGES[0] },
  { id: "hp-prodesk-600-g8", name: "HP ProDesk 600 G8 MT", category: "Desktop",
    tagline: "Micro tower business desktop",
    features: ["Intel Core i5-12400", "8 GB DDR4-3200", "256 GB NVMe SSD", "Windows 11 Pro"],
    applications: ["Office work", "Business applications", "Enterprise computing"],
    image: DESKTOP_IMAGES[1] },
  { id: "lenovo-thinkcentre-m90a", name: "Lenovo ThinkCentre M90a All-in-One", category: "Desktop",
    tagline: "24\" business all-in-one desktop",
    features: ["Intel Core i5-12400", "8 GB DDR4-3200", "256 GB NVMe SSD", "24\" FHD IPS display"],
    applications: ["Office productivity", "Space-constrained environments", "Business computing"],
    image: DESKTOP_IMAGES[2] },
  { id: "dell-optiplex-7080", name: "Dell OptiPlex 7080 Tower", category: "Desktop",
    tagline: "Business desktop tower",
    features: ["Intel Core i5-10500", "8 GB DDR4-2933", "256 GB SSD", "Windows 10 Pro"],
    applications: ["Office productivity", "Business computing", "Enterprise desktop"],
    image: DESKTOP_IMAGES[3] },
  { id: "hp-prodesk-400-g6", name: "HP ProDesk 400 G6 MT", category: "Desktop",
    tagline: "Micro tower business desktop",
    features: ["Intel Core i3-10100", "8 GB DDR4-2666", "256 GB SSD", "Windows 10 Pro"],
    applications: ["Office work", "Business applications", "Enterprise computing"],
    image: DESKTOP_IMAGES[4] },
  { id: "lenovo-thinkcentre-m75q", name: "Lenovo ThinkCentre M75q Tiny", category: "Desktop",
    tagline: "Tiny form factor desktop",
    features: ["AMD Ryzen 5 Pro", "8 GB DDR4", "256 GB SSD", "Windows 10 Pro"],
    applications: ["Office productivity", "Space-constrained environments", "Business computing"],
    image: DESKTOP_IMAGES[5] },

  // ══════════════ RAM & SSD (4) - DISABLED ══════════════
  // { id: "ddr4-8gb-3200mhz", name: "DDR4 8GB 3200MHz RAM", category: "RAM & SSD",
  //   tagline: "High-performance desktop memory module",
  //   features: ["8GB capacity", "3200MHz speed", "DDR4 technology", "Desktop compatible"],
  //   applications: ["Desktop upgrades", "Performance improvement", "Memory expansion"],
  //   image: RAM_IMAGES[0] },
  // { id: "ddr4-16gb-3200mhz", name: "DDR4 16GB 3200MHz RAM", category: "RAM & SSD",
  //   tagline: "High-capacity desktop memory module",
  //   features: ["16GB capacity", "3200MHz speed", "DDR4 technology", "Desktop compatible"],
  //   applications: ["Desktop upgrades", "Performance improvement", "Memory expansion"],
  //   image: RAM_IMAGES[1] },
  // { id: "ddr4-32gb-3200mhz", name: "DDR4 32GB 3200MHz RAM", category: "RAM & SSD",
  //   tagline: "Ultra-high capacity memory module",
  //   features: ["32GB capacity", "3200MHz speed", "DDR4 technology", "Desktop compatible"],
  //   applications: ["Desktop upgrades", "Performance improvement", "Memory expansion"],
  //   image: RAM_IMAGES[2] },
  // { id: "ddr4-4gb-2666mhz", name: "DDR4 4GB 2666MHz RAM", category: "RAM & SSD",
  //   tagline: "Entry-level memory module",
  //   features: ["4GB capacity", "2666MHz speed", "DDR4 technology", "Desktop compatible"],
  //   applications: ["Desktop upgrades", "Performance improvement", "Memory expansion"],
  //   image: RAM_IMAGES[3] },
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "IT Director, Manufacturing Firm",
    content: "M DOT IT SOLUZIONE provided excellent refurbished servers that exceeded our expectations. Their technical support is outstanding and response time is impressive.",
    avatar: "/images/testimonials/rajesh.jpg"
  },
  {
    name: "Priya Sharma",
    role: "CTO, Startup Company",
    content: "We purchased networking equipment from M DOT IT SOLUZIONE for our office expansion. The quality was excellent and pricing was competitive. Highly recommended!",
    avatar: "/images/testimonials/priya.jpg"
  },
  {
    name: "Amit Patel",
    role: "Network Engineer, Educational Institution",
    content: "The refurbished laptops we bought are working perfectly. The team at M DOT IT SOLUZIONE is professional and knowledgeable about IT hardware.",
    avatar: "/images/testimonials/amit.jpg"
  }
];

export const FAQ_ITEMS = [
  {
    question: "What is the warranty on refurbished equipment?",
    answer: "All our refurbished equipment comes with a standard 90-day warranty, with options to extend up to 1 year. We also offer on-site support for critical business equipment."
  },
  {
    question: "Do you provide data wiping services?",
    answer: "Yes, we provide NIST 800-88 certified data wiping services with written certificates for all equipment we purchase. This ensures complete data security and compliance."
  },
  {
    question: "How do you determine buyback pricing?",
    answer: "Our buyback pricing is based on equipment condition, age, market demand, and current technology standards. We provide transparent quotations within 48 hours of inspection."
  },
  {
    question: "Do you offer installation and configuration services?",
    answer: "Yes, we provide professional installation, configuration, and ongoing technical support for all equipment purchased from us. Our engineers are certified across major vendors."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, UPI, and all major credit/debit cards. For large enterprise purchases, we also offer flexible payment terms with proper documentation."
  },
  {
    question: "Do you ship outside Mumbai?",
    answer: "Yes, we ship across India with reliable logistics partners. We also offer on-site installation services in major metro cities including Delhi, Bangalore, Hyderabad, and Chennai."
  }
];