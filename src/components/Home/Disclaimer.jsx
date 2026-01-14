import React from 'react'
import './PrivacyPolicy.css'

const Disclaimer = () => {
    return (
        <div className="privacy-policy-container">
            <h2>Disclaimer</h2>
            <p className="last-updated">Last Updated: January 3rd, 2026</p>

            <p>Square Biz AI provides an AI-powered software platform designed to assist with business formation, compliance automation, and EIN-based business credit workflows. All information provided through our website, platform, and communications is for informational and operational purposes only.</p>

            <hr />

            <h3>1. No Financial, Legal, or Tax Advice</h3>
            <p>Square Biz AI does not provide:</p>
            <ul>
                <li>Legal advice</li>
                <li>Tax advice</li>
                <li>Accounting advice</li>
                <li>Financial or investment advice</li>
            </ul>
            <p>Any decisions you make based on information provided by Square Biz AI are made at your own discretion and risk. You should consult licensed professionals before making legal, tax, or financial decisions.</p>

            <hr />

            <h3>2. No Credit or Financing Guarantees</h3>
            <p>Square Biz AI does not guarantee:</p>
            <ul>
                <li>Credit approvals</li>
                <li>Credit limits</li>
                <li>Financing outcomes</li>
                <li>Relationships with lenders or vendors</li>
            </ul>
            <p>All credit-related outcomes are determined by third-party institutions and your business’s compliance and credit profile.</p>

            <hr />

            <h3>3. Third-Party Services</h3>
            <p>Square Biz AI may reference or integrate with third-party services. We are not responsible for third-party decisions, policies, availability, or performance.</p>
            <p>By using Square Biz AI, you acknowledge and agree to this disclaimer.</p>
        </div>
    )
}

export default Disclaimer
