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

export const WHY_US = [
  {
    n: "01",
    title: "Engineer-led delivery",
    desc: "Every deployment is scoped and supervised by certified engineers — not sales staff. We speak your language."
  },
  {
    n: "02",
    title: "Vendor-neutral approach",
    desc: "We're not tied to any single vendor. We recommend what works for your infrastructure, not what hits our quota."
  },
  {
    n: "03",
    title: "Accountability",
    desc: "When we say it will be delivered, tested, and online — that's what happens. No excuses, no finger-pointing."
  },
  {
    n: "04",
    title: "Transparent pricing",
    desc: "No hidden fees, no surprise add-ons. What we quote is what you pay — delivered to your door."
  }
];

export const PROCESS = [
  {
    n: "01",
    title: "Discovery call",
    desc: "We understand your requirements, infrastructure constraints, and budget — not just a shopping list."
  },
  {
    n: "02",
    title: "Technical proposal",
    desc: "Our engineers scope the solution with exact specifications, compatibility checks, and deployment planning."
  },
  {
    n: "03",
    title: "Procurement & testing",
    desc: "Hardware is sourced, tested, and validated in our Mumbai facility before delivery to your site."
  },
  {
    n: "04",
    title: "Deployment & handover",
    desc: "On-site installation, configuration, and documentation transfer — with post-deployment support."
  }
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
    applications: ["3D rendering", "Deep learning", "Video editing"],
    image: WORKSTATION_IMAGES[0] },
  { id: "hp-z8-g4-workstation", name: "HP Z8 G4 Workstation", category: "Workstations",
    tagline: "The world's most powerful workstation",
    features: ["Dual Xeon W-3200 (up to 56 cores)", "2 TB DDR5-5200 ECC", "4× PCIe 5.0 slots", "Up to 3 RTX A6000 Ada"],
    applications: ["CAD/CAM", "Engineering simulation", "Film production"],
    image: WORKSTATION_IMAGES[1] },

  // ══════════════ LAPTOPS (50) ══════════════
  { id: "dell-latitude-7420", name: "Dell Latitude 7420", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i7-1185G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS touch"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[0] },
  { id: "dell-latitude-7420-2", name: "Dell Latitude 7420 (Non-Touch)", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i7-1185G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS non-touch"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[1] },
  { id: "dell-latitude-7420-3", name: "Dell Latitude 7420 (Refurbished)", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i7-1185G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[2] },
  { id: "dell-latitude-7420-4", name: "Dell Latitude 7420 (i5)", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i5-1145G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[3] },
  { id: "dell-latitude-7420-5", name: "Dell Latitude 7420 (512GB)", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i7-1185G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[4] },
  { id: "dell-latitude-7420-6", name: "Dell Latitude 7420 (16GB)", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i7-1185G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[5] },
  { id: "dell-latitude-7420-7", name: "Dell Latitude 7420 (Touch)", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i7-1185G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS touch"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[6] },
  { id: "dell-latitude-7420-8", name: "Dell Latitude 7420 (Refurbished)", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i7-1185G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[7] },
  { id: "dell-latitude-7420-9", name: "Dell Latitude 7420 (i5 Refurbished)", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i5-1145G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[8] },
  { id: "dell-latitude-7420-10", name: "Dell Latitude 7420 (512GB Refurbished)", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i7-1185G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[9] },
  { id: "hp-elitebook-840-g8", name: "HP EliteBook 840 G8", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[10] },
  { id: "hp-elitebook-840-g8-2", name: "HP EliteBook 840 G8 (Refurbished)", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[11] },
  { id: "hp-elitebook-840-g8-3", name: "HP EliteBook 840 G8 (i5)", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i5-1135G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[12] },
  { id: "hp-elitebook-840-g8-4", name: "HP EliteBook 840 G8 (Touch)", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS touch"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[13] },
  { id: "hp-elitebook-840-g8-5", name: "HP EliteBook 840 G8 (Refurbished)", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[14] },
  { id: "hp-elitebook-840-g8-6", name: "HP EliteBook 840 G8 (512GB)", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[15] },
  { id: "hp-elitebook-840-g8-7", name: "HP EliteBook 840 G8 (16GB)", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[16] },
  { id: "hp-elitebook-840-g8-8", name: "HP EliteBook 840 G8 (Refurbished)", category: "Laptops",
    tagline: "Premium 14\" business laptop",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[17] },
  { id: "macbook-pro-14-2021", name: "MacBook Pro 14\" (2021)", category: "Laptops",
    tagline: "Apple M1 Pro chip laptop",
    features: ["Apple M1 Pro (10-core CPU, 16-core GPU)", "16 GB unified memory", "512 GB SSD", "14.2\" Liquid Retina XDR"],
    applications: ["Creative work", "Development", "Media production"],
    image: LAPTOP_IMAGES[18] },
  { id: "macbook-pro-14-2021-2", name: "MacBook Pro 14\" (2021)", category: "Laptops",
    tagline: "Apple M1 Pro chip laptop",
    features: ["Apple M1 Pro (10-core CPU, 16-core GPU)", "16 GB unified memory", "512 GB SSD", "14.2\" Liquid Retina XDR"],
    applications: ["Creative work", "Development", "Media production"],
    image: LAPTOP_IMAGES[19] },
  { id: "macbook-pro-14-2021-3", name: "MacBook Pro 14\" (2021)", category: "Laptops",
    tagline: "Apple M1 Pro chip laptop",
    features: ["Apple M1 Pro (10-core CPU, 16-core GPU)", "16 GB unified memory", "512 GB SSD", "14.2\" Liquid Retina XDR"],
    applications: ["Creative work", "Development", "Media production"],
    image: LAPTOP_IMAGES[20] },
  { id: "macbook-pro-14-2021-4", name: "MacBook Pro 14\" (2021)", category: "Laptops",
    tagline: "Apple M1 Pro chip laptop",
    features: ["Apple M1 Pro (10-core CPU, 16-core GPU)", "16 GB unified memory", "512 GB SSD", "14.2\" Liquid Retina XDR"],
    applications: ["Creative work", "Development", "Media production"],
    image: LAPTOP_IMAGES[21] },
  { id: "macbook-pro-14-2021-5", name: "MacBook Pro 14\" (2021)", category: "Laptops",
    tagline: "Apple M1 Pro chip laptop",
    features: ["Apple M1 Pro (10-core CPU, 16-core GPU)", "16 GB unified memory", "512 GB SSD", "14.2\" Liquid Retina XDR"],
    applications: ["Creative work", "Development", "Media production"],
    image: LAPTOP_IMAGES[22] },
  { id: "macbook-pro-14-2021-6", name: "MacBook Pro 14\" (2021)", category: "Laptops",
    tagline: "Apple M1 Pro chip laptop",
    features: ["Apple M1 Pro (10-core CPU, 16-core GPU)", "16 GB unified memory", "512 GB SSD", "14.2\" Liquid Retina XDR"],
    applications: ["Creative work", "Development", "Media production"],
    image: LAPTOP_IMAGES[23] },
  { id: "macbook-pro-14-2021-7", name: "MacBook Pro 14\" (2021)", category: "Laptops",
    tagline: "Apple M1 Pro chip laptop",
    features: ["Apple M1 Pro (10-core CPU, 16-core GPU)", "16 GB unified memory", "512 GB SSD", "14.2\" Liquid Retina XDR"],
    applications: ["Creative work", "Development", "Media production"],
    image: LAPTOP_IMAGES[24] },
  { id: "macbook-pro-14-2021-8", name: "MacBook Pro 14\" (2021)", category: "Laptops",
    tagline: "Apple M1 Pro chip laptop",
    features: ["Apple M1 Pro (10-core CPU, 16-core GPU)", "16 GB unified memory", "512 GB SSD", "14.2\" Liquid Retina XDR"],
    applications: ["Creative work", "Development", "Media production"],
    image: LAPTOP_IMAGES[25] },
  { id: "lenovo-thinkpad-x1-carbon", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[26] },
  { id: "lenovo-thinkpad-x1-carbon-2", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[27] },
  { id: "lenovo-thinkpad-x1-carbon-3", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[28] },
  { id: "lenovo-thinkpad-x1-carbon-4", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[29] },
  { id: "lenovo-thinkpad-x1-carbon-5", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[30] },
  { id: "lenovo-thinkpad-x1-carbon-6", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[31] },
  { id: "lenovo-thinkpad-x1-carbon-7", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[32] },
  { id: "lenovo-thinkpad-x1-carbon-8", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[33] },
  { id: "lenovo-thinkpad-x1-carbon-9", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[34] },
  { id: "lenovo-thinkpad-x1-carbon-10", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[35] },
  { id: "lenovo-thinkpad-x1-carbon-11", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[36] },
  { id: "lenovo-thinkpad-x1-carbon-12", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[37] },
  { id: "lenovo-thinkpad-x1-carbon-13", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[38] },
  { id: "lenovo-thinkpad-x1-carbon-14", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[39] },
  { id: "lenovo-thinkpad-x1-carbon-15", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[40] },
  { id: "lenovo-thinkpad-x1-carbon-16", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[41] },
  { id: "lenovo-thinkpad-x1-carbon-17", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[42] },
  { id: "lenovo-thinkpad-x1-carbon-18", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[43] },
  { id: "lenovo-thinkpad-x1-carbon-19", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[44] },
  { id: "lenovo-thinkpad-x1-carbon-20", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[45] },
  { id: "lenovo-thinkpad-x1-carbon-21", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[46] },
  { id: "lenovo-thinkpad-x1-carbon-22", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[47] },
  { id: "lenovo-thinkpad-x1-carbon-23", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[48] },
  { id: "lenovo-thinkpad-x1-carbon-24", name: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptops",
    tagline: "Premium 14\" business ultrabook",
    features: ["Intel Core i7-1165G7 vPro", "16 GB DDR4-3200", "512 GB NVMe SSD", "14\" FHD+ IPS"],
    applications: ["Business productivity", "Remote work", "Field operations"],
    image: LAPTOP_IMAGES[49] },

  // ══════════════ SECURITY (1) ══════════════
  { id: "fortinet-fg-60f", name: "Fortinet FortiGate 60F", category: "Security",
    tagline: "Next-generation firewall for small offices",
    features: ["10 Gbps firewall throughput", "SD-WAN + IPS/IDS", "Hardware-accelerated crypto", "FortiOS 7"],
    applications: ["Branch office security", "Remote access VPN", "Web filtering"],
    image: SECURITY_IMAGES[0] },

  // ══════════════ SWITCHES (1) ══════════════
  { id: "hp-1920-48g", name: "HP 1920-48G Switch", category: "Switches",
    tagline: "48-port Gigabit managed switch",
    features: ["48× 1Gbps ports + 4× SFP+", "Layer 2/3 static routing", "IEEE 802.3at PoE+ (30W)", "Web/CLI management"],
    applications: ["Edge access", "PoE device deployment", "Small office aggregation"],
    image: SWITCHES_IMAGES[0] },

  // ══════════════ ACCESSORIES (1) ══════════════
  { id: "server-rack-42u", name: "42U Server Rack Cabinet", category: "Accessories",
    tagline: "Standard server rack enclosure",
    features: ["42U rack mount capacity", "Tempered glass front door", "Lockable side panels", "Cable management included"],
    applications: ["Data center deployment", "Server room organization", "Network equipment housing"],
    image: ACCESSORY_IMAGES[0] },
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

export const BLOG_POSTS = [
  {
    slug: "why-refurbished-it-hardware",
    title: "Why Refurbished IT Hardware Makes Business Sense",
    excerpt: "Discover how certified refurbished equipment can save your business up to 70% on IT costs while maintaining performance and reliability.",
    date: "2025-01-15",
    category: "IT Solutions",
    image: "/images/blog/refurbished-hardware.jpg"
  },
  {
    slug: "server-buyback-guide",
    title: "Complete Guide to Server Buyback Programs",
    excerpt: "Learn how to maximize value when retiring old servers, from data security to environmental compliance and buyback process.",
    date: "2025-01-10",
    category: "IT Management",
    image: "/images/blog/server-buyback.jpg"
  },
  {
    slug: "networking-essentials",
    title: "Essential Networking Equipment for Modern Offices",
    excerpt: "A comprehensive guide to selecting the right networking equipment for your business, from switches to wireless access points.",
    date: "2025-01-05",
    category: "Networking",
    image: "/images/blog/networking-essentials.jpg"
  }
];

export const BRANDS = [
  "Cisco",
  "Dell",
  "HPE",
  "Lenovo",
  "Juniper",
  "Aruba",
  "MikroTik",
  "Fortinet",
  "NetApp",
  "VMware",
  "Microsoft",
  "Intel",
  "AMD",
  "Samsung",
  "Western Digital",
  "Seagate"
];

export const INDUSTRIES = [
  {
    icon: "building",
    title: "Banking & Finance",
    desc: "Secure, compliant infrastructure for financial institutions and fintech companies."
  },
  {
    icon: "heart",
    title: "Healthcare",
    desc: "Reliable systems for hospitals, clinics, and healthcare providers with data protection."
  },
  {
    icon: "graduation-cap",
    title: "Education",
    desc: "Affordable, scalable IT solutions for schools, universities, and educational institutions."
  },
  {
    icon: "factory",
    title: "Manufacturing",
    desc: "Industrial-grade hardware for manufacturing plants and production facilities."
  },
  {
    icon: "shopping-cart",
    title: "Retail",
    desc: "Point-of-sale systems, networking, and infrastructure for retail operations."
  },
  {
    icon: "shield",
    title: "Government",
    desc: "Secure, certified IT solutions for government agencies and public sector organizations."
  },
  {
    icon: "tv",
    title: "Media & Entertainment",
    desc: "High-performance workstations and storage for media production and broadcasting."
  },
  {
    icon: "truck",
    title: "Logistics",
    desc: "Tracking systems, networking, and infrastructure for logistics and supply chain operations."
  }
];

export function categoryNameToSlug(categoryName) {
  if (!categoryName) return "";
  return categoryName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

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