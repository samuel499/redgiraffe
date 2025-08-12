import { Link, Shield, Briefcase } from "lucide-react"

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
