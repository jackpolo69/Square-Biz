import React from 'react'
import { motion } from 'framer-motion'
import './MythOS.css'

const MythOS = () => {
    return (
        <section className="mythos" id="mythos">
            <div className="container mythos-container">
                <motion.div
                    className="mythos-content"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="mythos-badge">QUANTUM INTELLIGENCE</div>
                    <h2>Powered by <span className="text-gradient">mythOS</span></h2>
                    <p>
                        Square Biz isn't just a platform; it's a quantum leap in business logic.
                        Our proprietary mythOS engine analyzes market dynamics, automates potential,
                        and executes strategies with sub-atomic precision.
                    </p>
                    <p>
                        Superior to anything currently in the market, mythOS evolves with your business.
                    </p>
                </motion.div>
            </div>
            <div className="mythos-bg"></div>
        </section>
    )
}

export default MythOS
