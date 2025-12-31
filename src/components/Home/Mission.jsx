import React from 'react'
import { motion } from 'framer-motion'
import './Mission.css'

const Mission = () => {
    return (
        <section className="mission" id="about">
            <div className="container">
                <motion.div
                    className="mission-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="subtitle">Our Mission</span>
                    <h2>Democratizing Global Trade</h2>
                    <p className="mission-text">
                        Square Biz is built on a single, powerful conviction: that the tools of empire-building shouldn't be reserved for the elite.
                        We combine quantum-enhanced intelligence with battle-tested business infrastructure to give every visionary the power
                        to compete, scale, and dominate in the digital age. This isn't just business support—it's an ecosystem of
                        exponential growth.
                    </p>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Compliance Guarantee</p>
                        </div>
                        <div className="stat-item">
                            <h3>24/7</h3>
                            <p>Quantum Support</p>
                        </div>
                        <div className="stat-item">
                            <h3>30%</h3>
                            <p>Equity Partnerships</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Mission
