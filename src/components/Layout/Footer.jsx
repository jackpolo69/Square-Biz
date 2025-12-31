import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>Square Biz</h3>
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
                        <a href="#">About Us</a>
                        <a href="#">Contact</a>
                        <a href="#">Privacy</a>
                    </div>
                    <div className="link-group">
                        <h4>Connect</h4>
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
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
