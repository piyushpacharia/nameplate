import React, { useEffect } from 'react'
import './App.css'
import './font.css'
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import PrivacyPolicy from './components/Policies/PrivacyPolicy';
import TermsAndConditions from './components/Policies/TermsAndConditions';
import RefundPolicy from './components/Policies/RefundPolicy';
import ShippingPolicy from './components/Policies/ShippingPolicy';
import About from './components/About';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Collection from './components/Collection';

export default function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection/:category" element={<Collection />} />
        {/* policies */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      <Footer/>
    </div>
  )
}
