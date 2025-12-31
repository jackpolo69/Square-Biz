import React from 'react'
import { motion } from 'framer-motion'
import Button from '../UI/Button'
import './Audience.css'

const Audience = () => {
    return (
        <section className="audience">
            <div className="container">
                <div className="audience-grid">

                    {/* Business Owner Track */}
                    <motion.div
                        className="audience-card"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="card-content">
                            <h3>The Business Owner</h3>
                            <p className="pain-point">Can't seem to scale to your fullest potential?</p>
                            <p className="solution">We inject automated systems and funding strategies to shatter your glass ceiling.</p>
                            <Button variant="outline">Scale Now</Button>
                        </div>
                    </motion.div>

                    {/* Entrepreneur Track */}
                    <motion.div
                        className="audience-card dark-card"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="card-content">
                            <h3>The Visionary</h3>
                            <p className="pain-point">Looking to manifest your vision from nothing?</p>
                            <p className="solution">We provide the blueprint, the tools, and the platform to turn ideas into empires.</p>
                            <Button variant="primary">Manifest Vision</Button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Audience
