import React, { useState } from 'react'
import Navbar from './components/Layout/Navbar'
import Hero from './components/Home/Hero'
import Mission from './components/Home/Mission'
import MythOS from './components/Home/MythOS'
import Audience from './components/Home/Audience'
import Services from './components/Home/Services'
import Footer from './components/Layout/Footer'
import Modal from './components/UI/Modal'
import ContactForm from './components/Home/ContactForm'
import PrivacyPolicy from './components/Home/PrivacyPolicy'
import TermsOfService from './components/Home/TermsOfService'
import Disclaimer from './components/Home/Disclaimer'
import CookiePolicy from './components/Home/CookiePolicy'

function App() {
    const [contactModalOpen, setContactModalOpen] = useState(false)
    const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
    const [termsModalOpen, setTermsModalOpen] = useState(false)
    const [disclaimerModalOpen, setDisclaimerModalOpen] = useState(false)
    const [cookieModalOpen, setCookieModalOpen] = useState(false)

    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <Mission />
            <MythOS />
            <Services />
            <Audience />
            <Footer
                onContactClick={() => setContactModalOpen(true)}
                onPrivacyClick={() => setPrivacyModalOpen(true)}
                onTermsClick={() => setTermsModalOpen(true)}
                onDisclaimerClick={() => setDisclaimerModalOpen(true)}
                onCookieClick={() => setCookieModalOpen(true)}
            />

            <Modal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)}>
                <ContactForm />
            </Modal>

            <Modal isOpen={privacyModalOpen} onClose={() => setPrivacyModalOpen(false)}>
                <PrivacyPolicy />
            </Modal>

            <Modal isOpen={termsModalOpen} onClose={() => setTermsModalOpen(false)}>
                <TermsOfService />
            </Modal>

            <Modal isOpen={disclaimerModalOpen} onClose={() => setDisclaimerModalOpen(false)}>
                <Disclaimer />
            </Modal>

            <Modal isOpen={cookieModalOpen} onClose={() => setCookieModalOpen(false)}>
                <CookiePolicy />
            </Modal>
        </div>
    )
}

export default App
