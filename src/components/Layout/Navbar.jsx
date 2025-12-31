import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '../UI/Button'
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container navbar-content">
                <div className="logo">
                    <img src="/assets/logo.png" alt="Square Biz" />
                </div>
                <div className="nav-links">
                    <a href="#services">Services</a>
                    <a href="#mythos">mythOS</a>
                    <a href="#about">About</a>
                    <Button variant="primary">Get Started</Button>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar
