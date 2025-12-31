import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import ChatAssistant from '../UI/ChatAssistant'
import './Hero.css'

const Hero = () => {
    const [isChatOpen, setIsChatOpen] = useState(false)

    return (
        <section className="hero">
            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-subtitle text-tiffany">Powered by mythOS</span>
                    <h1>
                        Business. <br />
                        <span className="text-gradient">Evolved.</span>
                    </h1>
                    <p>
                        Scale your business exponentially with the world's most advanced quantum intelligence.
                        From aspiring creatives to established enterprises, we manifest your vision.
                    </p>
                    <div className="hero-actions">
                        <a href="#audience" style={{ textDecoration: 'none' }}>
                            <Button variant="primary">Initialize Scale</Button>
                        </a>
                        <Button variant="outline" onClick={() => setIsChatOpen(true)}>Learn More</Button>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Placeholder for a cool abstract graphic or the logo in a 3D effect */}
                    <div className="visual-circle"></div>
                    <img src="/assets/logo.png" alt="Square Biz Logo" className="hero-logo-large" />
                </motion.div>
            </div>

            <Modal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)}>
                <ChatAssistant />
            </Modal>
        </section>
    )
}

export default Hero
