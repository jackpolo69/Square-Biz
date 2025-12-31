import React from 'react'
import Navbar from './components/Layout/Navbar'
import Hero from './components/Home/Hero'
import MythOS from './components/Home/MythOS'
import Audience from './components/Home/Audience'
import Services from './components/Home/Services'
import Footer from './components/Layout/Footer'

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <MythOS />
            <Services />
            <Audience />
            <Footer />
        </div>
    )
}

export default App
