import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Rocket, ShieldCheck, PenTool, Database, CreditCard, Globe, Briefcase, Search, Palette, RefreshCw, FileText, Scale, Stamp, Scroll, Handshake, Umbrella, Landmark, TrendingUp, CheckCircle2 } from 'lucide-react'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
import './Services.css'

const services = [
    {
        id: "partnerships",
        icon: <Handshake size={40} />,
        title: "Strategic Partnership",
        description: "30% Equity + 30% Rev Share. We handle all your business needs exponentially.",
        details: "Scale with speed. We offer a high-equity partnership model where we act as your fractional leadership team—handling operations, technology, and marketing infrastructure.",
        features: ["Fractional COO/CTO/CMO Access", "Full Operational Integration", "Technology Stack Optimization", "Direct Revenue Share Alignment"]
    },
    {
        id: "scaling",
        icon: <Rocket size={40} />,
        title: "Business Scaling",
        description: "Exponential growth strategies powered by quantum intelligence.",
        details: "Architecting exponential growth. Using proprietary frameworks and deep data analysis, we identify bottlenecks and implement scaling vectors that transform your business into a market leader.",
        features: ["Growth Bottleneck Analysis", "Market Penetration Strategies", "Infrastructure Readiness", "KPI Dashboard Implementation"]
    },
    {
        id: "automation",
        icon: <ShieldCheck size={40} />,
        title: "Full Automation",
        description: "End-to-end business process automation.",
        details: "Remove the human error. We build custom automation ecosystems that handle lead generation, customer service, fulfillment, and reporting—allowing your business to run 24/7 on autopilot.",
        features: ["CRM & Workflow Automation", "AI Chatbot Integration", "Automated Reporting Systems", "Cross-Platform Syncing"]
    },
    {
        id: "agreements",
        icon: <Scroll size={40} />,
        title: "Agreement & Contract Prep",
        description: "Fully executable contracts and agreements.",
        details: "Ironclad foundations for every deal. Professional preparation of master service agreements, operating agreements, and custom commercial contracts designed to protect your assets and clarify execution.",
        features: ["Operating Agreements", "Service Level Agreements (SLAs)", "Non-Disclosure Agreements", "Custom Commercial Contracts"]
    },
    {
        id: "formation",
        icon: <Briefcase size={40} />,
        title: "Business Formation",
        description: "Streamlined entity setup and registration.",
        details: "Start with the right structure. We handle the entire formation process—from LLCs to C-Corps—ensuring your entity is optimized for tax efficiency, liability protection, and future investment.",
        features: ["LLC & Corporation Filings", "EIN Acquisition", "Registered Agent Services", "Initial Minutes & Bylaws"]
    },
    {
        id: "reinstatement",
        icon: <RefreshCw size={40} />,
        title: "Corporate Reinstatement",
        description: "Restore your business to good standing.",
        details: "Recover your corporate standing. If your entity has fallen into 'Suspended' or 'Forfeited' status, we navigate the regulatory red tape to get you back in good standing with the state.",
        features: ["Suspension Resolution", "Back-Tax Coordination", "Revivor Request Filing", "Good Standing Certificates"]
    },
    {
        id: "compliance",
        icon: <Scale size={40} />,
        title: "Compliance (S.O.S. & F.T.B.)",
        description: "Regulatory adherence and filing compliance.",
        details: "Stay legal, stay lean. Proactive compliance management for Secretary of State (S.O.S.) filings and Franchise Tax Board (F.T.B.) requirements to avoid penalties and protect your corporate veil.",
        features: ["Statement of Information Filings", "Annual Franchise Tax Coordination", "Regulatory Deadline Tracking", "Compliance Health Audits"]
    },
    {
        id: "tax-filing",
        icon: <FileText size={40} />,
        title: "Tax Filing Made Easy",
        description: "Simplified tax preparation and filing.",
        details: "Streamlined fiscal health. We simplify the tax preparation and filing process for small to mid-sized businesses, ensuring you maximize deductions and meet all federal and state deadlines.",
        features: ["Business Tax Preparation", "Informational Filings", "Deduction Optimization", "Multi-State Filing Coordination"]
    },
    {
        id: "trusts",
        icon: <Landmark size={40} />,
        title: "Trust Formations",
        description: "Secure asset protection and estate planning structures.",
        details: "Legendary asset protection. Expert setup of revocable and irrevocable trusts designed to protect your business and personal assets from liability while ensuring seamless wealth transfer.",
        features: ["Asset Protection Trusts", "Revocable Living Trusts", "Privacy-Focused Structures", "Trust Deed Preparation"]
    },
    {
        id: "insurance",
        icon: <Umbrella size={40} />,
        title: "Business Insurance",
        description: "Liability and asset protection coverage.",
        details: "Mitigate the unexpected. We help you identify and secure the exact coverage you need—from General Liability to E&O—ensuring your business survival in any scenario.",
        features: ["General Liability Coverage", "Errors & Omissions (E&O)", "Cyber Liability Protection", "Workers Comp Coordination"]
    },
    {
        id: "domains",
        icon: <Search size={40} />,
        title: "Domain Purchasing",
        description: "Secure your perfect digital address.",
        details: "Secure your digital real estate. We manage the acquisition and negotiation of premium domain names, including aftermarket and private brokerage, to ensure your brand starts with authority.",
        features: ["Premium Domain Acquisition", "Private Brokerage Negotiation", "Domain Portfolio Management", "DNS Security Audit"]
    },
    {
        id: "logos",
        icon: <Palette size={40} />,
        title: "Logo Creations",
        description: "Distinctive visual identity design.",
        details: "Iconic visual impact. Our design team crafts high-end, scalable logos that capture your brand's essence and command immediate attention in a crowded marketplace.",
        features: ["Custom Identity Design", "Vector Scalability", "Brand Usage Guides", "Symbol & Logotype Sets"]
    },
    {
        id: "web-design",
        icon: <Globe size={40} />,
        title: "Web Design",
        description: "Stunning, high-performance websites that convert.",
        details: "High-conversion digital homes. We build stunning, fast, and mobile-optimized websites designed with one primary objective: turning visitors into high-value clients.",
        features: ["Responsive UX/UI Design", "High-Performance Speed", "SEO Optimized Architecture", "Custom Call-to-Action Flows"]
    },
    {
        id: "branding",
        icon: <PenTool size={40} />,
        title: "Media & Branding",
        description: "Compelling visual identity and brand storytelling.",
        details: "The art of market perception. Comprehensive brand development including color palettes, typography, and messaging that positions you as a dominant leader in your industry.",
        features: ["Brand Voice & Messaging", "Visual Style Guides", "Collateral Design", "Market Positioning Analysis"]
    },
    {
        id: "funnels",
        icon: <Database size={40} />,
        title: "Automated Sales Funnels",
        description: "Self-driving revenue generation systems.",
        details: "The ultimate sales machine. We design and build end-to-end sales funnel ecosystems—Squeeze pages, Tripwires, and VSLs—that nurture leads and close sales while you sleep.",
        features: ["Conversion Rate Optimization", "Lead Magnet Integration", "Autoresponder Sequences", "Split-Testing Implementation"]
    },
    {
        id: "credit-building",
        icon: <TrendingUp size={40} />,
        title: "Business Credit Building",
        description: "Build credit with NO personal guarantee up to Tier 3.",
        details: "Capital without compromise. We guide you through building robust business credit (Tier 1-3) with NO personal guarantee, opening doors to massive funding and leverage.",
        features: ["Net 30 Vendor Setup", "Tier 1-3 Credit Progression", "D&B Profile Management", "No-PG Funding Prep"]
    },
    {
        id: "proprietary-credit",
        icon: <CreditCard size={40} />,
        title: "Proprietary Credit",
        description: "Exclusive access to funding and credit building tools.",
        details: "Exclusive leverage for partners. Access our proprietary networks and high-limit credit-building tools designed specifically for Square-Biz partners to accelerate growth vectors.",
        features: ["High-Limit Revolving Credits", "Strategic Lending Networks", "Proprietary Trade Lines", "Capital Deployment Strategy"]
    },
    {
        id: "notary",
        icon: <Stamp size={40} />,
        title: "24/7 Notary",
        description: "Round-the-clock notarization services.",
        details: "Elite document verification. On-demand, 24/7 notary services to ensure your legal documents are executed with precision and without timing bottlenecks.",
        features: ["On-Demand Execution", "Mobile & Remote Notary", "Real Estate Document Specialization", "Confidentiality Guaranteed"]
    }
]

const Services = () => {
    const [selectedService, setSelectedService] = useState(null)

    const openModal = (service) => {
        setSelectedService(service)
    }

    const closeModal = () => {
        setSelectedService(null)
    }

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Full Service. <span className="text-tiffany">Full Speed.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Everything you need to manifest your vision and dominate your market. Available individually or as a comprehensive bundle.
                    </motion.p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            id={service.id}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -10 }}
                            onClick={() => openModal(service)}
                        >
                            <div className="service-icon text-tiffany">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className="card-footer">
                                <span className="learn-more">Learn More →</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Modal isOpen={!!selectedService} onClose={closeModal}>
                {selectedService && (
                    <div className="service-modal-content">
                        <div className="modal-header">
                            <div className="modal-icon text-tiffany">
                                {selectedService.icon}
                            </div>
                            <h2>{selectedService.title}</h2>
                        </div>
                        <div className="modal-body">
                            <p className="main-details">{selectedService.details}</p>
                            <div className="features-section">
                                <h3>Key Features:</h3>
                                <ul className="features-list">
                                    {selectedService.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <CheckCircle2 size={18} className="text-tiffany" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a href="#audience" onClick={closeModal} style={{ width: '100%' }}>
                                <Button variant="primary" className="cta-btn">
                                    Get Started NOW
                                </Button>
                            </a>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    )
}

export default Services
