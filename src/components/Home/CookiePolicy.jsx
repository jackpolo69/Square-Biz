import React from 'react'
import './PrivacyPolicy.css'

const CookiePolicy = () => {
    return (
        <div className="privacy-policy-container">
            <h2>Cookie Policy</h2>
            <p className="last-updated">Last Updated: January 3rd, 2026</p>

            <p>Square Biz AI uses cookies and similar technologies to improve website performance, security, and user experience.</p>

            <hr />

            <h3>1. What Are Cookies?</h3>
            <p>Cookies are small data files stored on your device that help websites function efficiently and remember user preferences.</p>

            <hr />

            <h3>2. Cookies We Use</h3>
            <ul>
                <li><strong>Essential Cookies</strong> – Required for site functionality and security</li>
                <li><strong>Performance Cookies</strong> – Help us understand how users interact with the platform</li>
                <li><strong>Functional Cookies</strong> – Remember preferences and settings</li>
            </ul>
            <p>We do not use cookies to sell personal data.</p>

            <hr />

            <h3>3. Managing Cookies</h3>
            <p>You may disable cookies through your browser settings. Some features of Square Biz AI may not function properly if cookies are disabled.</p>
            <p>For more details, see our Privacy Policy.</p>
        </div>
    )
}

export default CookiePolicy
