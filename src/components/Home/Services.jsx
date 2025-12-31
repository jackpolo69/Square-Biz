import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, ShieldCheck, PenTool, Database, CreditCard, Globe } from 'lucide-react'
import './Services.css'

const services = [
    {
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
                    <p>Everything you need to manifest your vision and dominate your market.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
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
