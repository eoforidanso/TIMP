import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import ProgramsPage from './pages/ProgramsPage.jsx'
import ImpactPage from './pages/ImpactPage.jsx'
import ResourcesPage from './pages/ResourcesPage.jsx'
import JoinUsPage from './pages/JoinUsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './animations.css'
import './visual-motif.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/TIMP/">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/join-us" element={<JoinUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
