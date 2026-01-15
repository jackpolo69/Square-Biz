import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, ShieldCheck, PenTool, Database, CreditCard, Globe, Briefcase, Search, Palette, RefreshCw, FileText, Scale, Stamp, Scroll, Handshake, Umbrella, Landmark, TrendingUp } from 'lucide-react'
import './Services.css'

const services = [
    {
        id: "scaling",
        icon: <Rocket size={40} />,
        title: "Business Scaling",
        description: "Exponential growth strategies powered by quantum intelligence."
    },
    {
        icon: <CreditCard size={40} />,
        title: "Proprietary Credit",
        description: "Exclusive access to funding and credit building tools."
    },
    {
        icon: <Briefcase size={40} />,
        title: "Business Formation",
        description: "Streamlined entity setup and registration."
    },
    {
        icon: <Search size={40} />,
        title: "Domain Purchasing",
        description: "Secure your perfect digital address."
    },
    {
        icon: <Palette size={40} />,
        title: "Logo Creations",
        description: "Distinctive visual identity design."
    },
    {
        icon: <RefreshCw size={40} />,
        title: "Corporate Reinstatement",
        description: "Restore your business to good standing."
    },
    {
        icon: <FileText size={40} />,
        title: "Tax Filing Made Easy",
        description: "Simplified tax preparation and filing."
    },
    {
        icon: <Scale size={40} />,
        title: "Compliance (S.O.S. & F.T.B.)",
        description: "Regulatory adherence and filing compliance."
    },
    {
        icon: <Stamp size={40} />,
        title: "24/7 Notary",
        description: "Round-the-clock notarization services."
    },
    {
        icon: <Scroll size={40} />,
        title: "Agreement & Contract Prep",
        description: "Fully executable contracts and agreements."
    },
    {
        icon: <Umbrella size={40} />,
        title: "Business Insurance",
        description: "Liability and asset protection coverage."
    },
    {
        icon: <Landmark size={40} />,
        title: "Trust Formations",
        description: "Secure asset protection and estate planning structures."
    },
    {
        icon: <TrendingUp size={40} />,
        title: "Business Credit Building",
        description: "Build credit with NO personal guarantee up to Tier 3."
    },
    {
        icon: <Handshake size={40} />,
        title: "Strategic Partnership",
        description: "30% Equity + 30% Rev Share. We handle all your business needs exponentially."
    },
    {
        id: "web-design",
        icon: <Globe size={40} />,
        title: "Web Design",
        description: "Stunning, high-performance websites that convert."
    },
    {
        icon: <Database size={40} />,
        title: "Automated Sales Funnels",
        description: "Self-driving revenue generation systems."
    },
    {
        icon: <PenTool size={40} />,
        title: "Media & Branding",
        description: "Compelling visual identity and brand storytelling."
    },
    {
        id: "automation",
        icon: <ShieldCheck size={40} />,
        title: "Full Automation",
        description: "End-to-end business process automation."
    }
]

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header">
                    <h2>Full Service. <span className="text-tiffany">Full Speed.</span></h2>
                    <p>Everything you need to manifest your vision and dominate your market. Available individually or as a comprehensive bundle.</p>
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
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="service-icon text-tiffany">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
