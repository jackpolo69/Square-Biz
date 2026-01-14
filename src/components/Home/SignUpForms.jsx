import React, { useState } from 'react'
import Button from '../UI/Button'
import './SignUpForms.css'

export const BusinessOwnerForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        revenue: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <div className="signup-form business-form">
            <h2>Initialize Quantum Scale</h2>
            <p className="form-subtitle">Apply for the Business Owner Track</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                </div>
                <div className="form-group">
                    <label>Business Email</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@company.com" />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="(555) 123-4567" />
                </div>
                <div className="form-group">
                    <label>Business Name</label>
                    <input type="text" name="businessName" required value={formData.businessName} onChange={handleChange} placeholder="Acme Corp" />
                </div>
                <div className="form-group">
                    <label>Annual Revenue (Approx)</label>
                    <select name="revenue" value={formData.revenue} onChange={handleChange}>
                        <option value="">Select Revenue Range</option>
                        <option value="0-100k">&lt; $100k</option>
                        <option value="100k-500k">$100k - $500k</option>
                        <option value="500k-1M">$500k - $1M</option>
                        <option value="1M+">$1M+</option>
                    </select>
                </div>
                <Button variant="primary" className="submit-btn" type="submit">Submit Application</Button>
            </form>
        </div>
    )
}

export const VisionaryForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        idea: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <div className="signup-form visionary-form">
            <h2>Manifest Your Vision</h2>
            <p className="form-subtitle">Join the Visionary Track</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Jane Doe" />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@example.com" />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="(555) 987-6543" />
                </div>
                <div className="form-group">
                    <label>Briefly Describe Your Vision</label>
                    <textarea name="idea" rows="3" value={formData.idea} onChange={handleChange} placeholder="I want to build..."></textarea>
                </div>
                <Button variant="primary" className="submit-btn" type="submit">Start Manifesting</Button>
            </form>
        </div>
    )
}
