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

    const handleSubmit = (e) => {
        e.preventDefault()
        const subject = `Inquiry from ${formData.name}`
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
        window.location.href = `mailto:info@squarebiz.ai?subject=${subject}&body=${body}`
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
