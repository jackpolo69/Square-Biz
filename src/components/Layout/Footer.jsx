import React from 'react'
import './Footer.css'

const Footer = ({ onContactClick, onPrivacyClick, onTermsClick, onDisclaimerClick, onCookieClick }) => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <img src="/assets/logo.png" alt="Square Biz" className="footer-logo" />
                    <p>Powered by mythOS</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Services</h4>
                        <a href="#">Business Scaling</a>
                        <a href="#">Web Design</a>
                        <a href="#">Automation</a>
                    </div>
                    <div className="link-group">
                        <h4>Company</h4>
                        <a href="#about">About Us</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); onContactClick(); }}>Contact</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); onPrivacyClick(); }}>Privacy</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); onTermsClick(); }}>Terms</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); onDisclaimerClick(); }}>Disclaimer</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); onCookieClick(); }}>Cookie Policy</a>
                    </div>
                    <div className="link-group">
                        <h4>Connect</h4>
                        <a href="https://www.linkedin.com/company/square-biz-ai/people/?viewAsMember=true" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://twitter.com/squarebizai" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com/squarebizai" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Square Biz. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
