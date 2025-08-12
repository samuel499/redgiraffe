import {
  Shield,
  BarChart3,
  FileText,
  CheckCircle,
  Smartphone,
  Brain,
  Zap,
  Briefcase,
  Link
} from "lucide-react"

export const footerSections = [
  {
    title: "Important Links",
    subtitle: "Quick access to essential pages",
    icon: Link,
    links: [
      { label: "The Journey", url: "https://redgirraffe.com/in/app/thejourney" },
      { label: "Board of Advisors", url: "https://redgirraffe.com/in/app/boardofadvisors" },
      { label: "Founding Team", url: "https://redgirraffe.com/in/app/foundingteam" },
      { label: "INDIA - S A & I Team", url: "https://redgirraffe.com/in/app/strategyadvisoryteam" },
      { label: "Media Relations", url: "https://redgirraffe.com/in/app/mediarelations" },
      { label: "Higher Purpose", url: "https://redgirraffe.com/in/app/purpose" },
      { label: "Our Values", url: "https://redgirraffe.com/in/app/values" },
      { label: "RentPay™", url: "https://redgirraffe.com/in/app/rentpay-details" },
      { label: "About Us", url: "https://redgirraffe.com/in/app/aboutus" },
      { label: "Reviews", url: "https://redgirrafee-new.vercel.app/#" },
      { label: "FAQs", url: "https://redgirraffe.com/in/app/faqs" },
      { label: "Blog", url: "https://redgirraffe.com/blog/" },
      { label: "Press Releases", url: "https://redgirraffe.com/blog/media-corner/" },
    ],
  },
  {
    title: "Policies & Compliance",
    subtitle: "Key policies for security and compliance",
    icon: Shield,
    links: [
      { label: "Fixed Deposit", url: "https://redgirraffe.com/in/app/fixed-deposit" },
      { label: "Refer & Earn", url: "https://redgirraffe.com/in/app/referrals" },
      { label: "Privacy Policy", url: "https://redgirraffe.com/in/app/privacypolicy" },
      { label: "Refund/Cancellation Policy", url: "https://redgirraffe.com/in/app/refund" },
      { label: "Terms & Conditions", url: "https://redgirraffe.com/in/app/terms-and-conditions" },
      { label: "Anti corruption & Bribery Policy", url: "https://redgirraffe.com/in/app/anti-corruption-bribery" },
      { label: "Code of Business Conduct & Ethics", url: "https://redgirraffe.com/in/app/code-business-conduct-ethics" },
      { label: "Anti-Fraud Policy Investigation", url: "https://redgirraffe.com/in/app/anti-fraud-policy-investigation" },
      { label: "Anti-Money Laundering Policy", url: "https://redgirraffe.com/in/app/anti-money-laundering-policy" },
      { label: "Sanctions Compliance Statement", url: "https://redgirraffe.com/in/app/sanctions-compliance-statement" },
      { label: "Grievance Redressal Policy", url: "https://redgirraffe.com/in/app/grievance-redressal-policy" },
    ],
  },
  {
    title: "Business Services",
    subtitle: "Solutions for businesses & partners",
    icon: Briefcase,
    links: [
      { label: "List Your Property", url: "https://redgirraffe.com/in/app/list-property" },
      { label: "Register as Agent", url: "https://redgirraffe.com/in/app/register-as-agent" },
      { label: "Corporate Rental ERP", url: "https://redgirraffe.com/in/app/rentpay-erp" },
      { label: "SME Loans", url: "https://redgirraffe.com/in/app/sme-loans" },
      { label: "Post Your Requirement", url: "https://redgirraffe.com/in/app/post-requirement" },
    ],
  },
]

export const offices = [
  {
    country: "United Kingdom",
    company: "RedGirraffe Inc.",
    address: "Harben House, Harben Parade, Finchley Road, London, NW3 6LH.",
  },
  {
    country: "Singapore",
    company: "RedGirraffe Holdings",
    address: "3 Temasek Avenue, Centennial Tower, #17-01, Singapore 039190.",
  },
  {
    country: "India",
    company: "RedGirraffe.com",
    address: "904, Galleria Towers, DLF Phase IV, Gurgaon, Haryana - 122002.",
    secondAddress: "507, Tulsiani Chambers, Nariman Point, Mumbai - 400021.",
  },
]

export const processSteps = [
  {
    id: "01",
    title: "Setup",
    content: {
      title:
        "We begin by aligning with your compliance needs, integrating KYC, due diligence, and credit assessment to ensure secure onboarding.",
      description:
        "Whether through your ERP or our intuitive interface, setup is instant, seamless, and requires no code.",
    },
  },
  {
    id: "02",
    title: "Approval",
    content: {
      title:
        "Our automated approval system processes applications in real-time using advanced risk assessment algorithms.",
      description:
        "Multi-layered verification ensures compliance while maintaining speed and efficiency for your business operations.",
    },
  },
  {
    id: "03",
    title: "Layout",
    content: {
      title: "Customize your payment interface with our flexible layout system designed for optimal user experience.",
      description:
        "Drag-and-drop components, white-label options, and responsive design ensure perfect integration with your brand.",
    },
  },
  {
    id: "04",
    title: "Execute",
    content: {
      title: "Process payments instantly across 97+ countries with enterprise-grade security and real-time monitoring.",
      description:
        "Automated workflows, smart routing, and failover systems ensure 99.9% uptime for critical transactions.",
    },
  },
  {
    id: "05",
    title: "Monitor",
    content: {
      title: "Track all transactions with comprehensive analytics, reporting, and compliance monitoring tools.",
      description:
        "Real-time dashboards, automated alerts, and detailed audit trails provide complete visibility and control.",
    },
  },
]

export const industries = [
  {
    id: "fintech",
    title: "FinTech",
    description: "Digital payment solutions for modern financial technology.",
    image: "/images/fintech.jpg",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Secure HIPAA-compliant payment processing.",
    image: "/images/healthcare.jpg",
  },
  {
    id: "datacentre",
    title: "Data Centre",
    description: "Automated billing for global data operations.",
    image: "/images/industries2.jpg",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "Multi-currency solutions for online retailers.",
    image: "/images/ecommerce.jpg",
  },
  {
    id: "realestate",
    title: "Real Estate",
    description: "Streamlined property payment processing.",
    image: "/images/real-estate.jpg",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "B2B payment automation for supply chains.",
    image: "/images/manufacturing.jpg",
  },
]

export const bankAdvantages = [
  "Capture low-risk B2B card spend, reduce fraud with PSP-backed security, and scale globally",
  "Increase Revenue Streams: Earn higher transaction fees with secure high-volume B2B payments",
  "Enhanced Reporting: Access detailed analytics to optimize operations and compliance",
]

export const pspAdvantages = [
  "Leverage our platform to offer secure, scalable payment solutions to enterprises worldwide",
  "Expand Market Reach: Tap into RedGirraffe's global network of 97+ countries",
  "Reduce Operational Costs: Streamline Payment Processing with integrated APIs",
]

export const carouselItems = [
  {
    icon: Shield,
    title: "Enterprise Grade Security",
    description: "End-to-end encryption for all transactions",
  },
  {
    icon: Shield,
    title: "Fraud Detection by PSPs",
    description: "Top-grade PSP prevents fraud",
  },
  {
    icon: BarChart3,
    title: "Unified Dashboards",
    description: "Real-time analytics for spend control",
  },
  {
    icon: FileText,
    title: "ISO 27001 Certified",
    description: "Globally recognized data security framework",
  },
  {
    icon: CheckCircle,
    title: "PCI-DSS Compliance",
    description: "Adheres to secure card transactions standards",
  },
  {
    icon: Zap,
    title: "ERP & API Ready",
    description: "Seamless integration with 50+ business tools",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Full platform access on your phone",
  },
  {
    icon: Brain,
    title: "AI-Powered Smarts",
    description: "Smart fraud detection and spend optimization",
  },
]

export const bankFeatures = [
  "Capture B2B card spend with low-risk, high-volume transactions",
  "Build lasting customer loyalty through smarter payment experiences",
  "Prevent fraud with enterprise grade security infrastructure",
  "Pay seamlessly with over 97 countries worldwide",
  "Enable real-time transaction monitoring and reporting",
  "Integrate with existing banking infrastructure seamlessly",
  "Provide white-label payment solutions to clients",
  "Scale operations with automated compliance management",
  "Offer competitive interchange rates and fee structures",
]

export const enterpriseFeatures = [
  "Offer early payments through intelligent bill discounting",
  "Improve cash flow with dynamic invoice financing",
  "Gain control with secure Maker-Checker workflows",
  "Lower transaction costs through streamlined fee structures",
  "Reach suppliers and partners across 97+ countries",
  "Automate recurring payment schedules and approvals",
  "Access detailed analytics and spending insights",
  "Manage multi-entity payment operations efficiently",
  "Integrate with existing ERP and accounting systems",
]

export const solutions = [
  {
    id: "paypulse",
    category: "Payment Solution",
    title: "PayPulse",
    description:
      "Unified AP & Payments: Ingests all invoices, Automates workflows, RedGirraffe acts as Merchant of Record (MOR), eliminating all supplier onboarding friction.",
    image: "/images/pay1.png",
    imageAlt: "Office workspace showing payment processing on laptop and mobile device",
  },
  {
    id: "leasecore",
    category: "Property Management",
    title: "LeaseCore",
    description:
      "Centralized Lease Intelligence: Digitizes all property/asset leases, manages critical dates, and automates payments via the PayPulse engine.",
    image: "/images/lease-core.png",
    imageAlt: "Property management visualization with house-shaped objects",
  },
  {
    id: "esg-horizon",
    category: "Sustainability Reporting",
    title: "ESG Horizon",
    description:
      "Automated Scope 3 Reporting: Automatically captures and maps emissions data from payment and utility flows, providing board-ready reports.",
    image: "/images/horizon.png",
    imageAlt: "ESG sustainability reporting dashboard with various charts and metrics",
  },
  {
    id: "flowforge",
    category: "IoT Solutions",
    title: "FlowForge",
    description:
      "IoT-Driven Efficiency: Integrates with utility meters to identify waste, optimise consumption, and validate hard-dollar energy savings.",
    image: "/images/flowforge3.png",
    imageAlt: "IOT devices on a surface",
  },
]