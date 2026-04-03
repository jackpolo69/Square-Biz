import React, { useState } from 'react'
import Button from '../UI/Button'
import './ContactForm.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const btn = e.target.querySelector('button[type="submit"]')
        const originalText = btn.textContent

        try {
            btn.disabled = true
            btn.textContent = 'TRANSMITTING...'

            const response = await fetch('http://localhost:8787/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (!response.ok) throw new Error('Failed to transmit communique.')

            alert('Mission directive received. We will be in touch shortly.')
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error(error)
            alert('Transmission failure. Please email info@squarebiz.ai directly.')
        } finally {
            btn.disabled = false
            btn.textContent = originalText
        }
    }

    return (
        <div className="contact-form-container">
            <h2>Contact Us</h2>
            <p>Ready to evolve your business? Reach out to us directly.</p>

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you scale?"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <Button variant="primary" type="submit">Send Email</Button>
            </form>

            <div className="direct-contact">
                <p>Or email us directly at:</p>
                <a href="mailto:info@squarebiz.ai" className="email-link">info@squarebiz.ai</a>
            </div>
        </div>
    )
}

export default ContactForm
