"use client";
import React, { useEffect } from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { useDarkMode } from 'usehooks-ts';

function Topbar() {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  useEffect(() => {
    enable(); // Set dark mode by default
  }, [enable]);

  const handlePhoneClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = 'tel:+918885621001';
    } else {
      alert('Contact Information: Call for Inquiries\n\nContact Number: +918885621001\n\nMake a Whatsapp Call');
      openInNewTab('https://wa.me/918885621001');
    }
  };

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  const handleEmailClick = () => {
    openInNewTab('mailto:info@hitechcopier.com');
  };

  const handleInstagramClick = () => {
    openInNewTab('https://instagram.com/hitechcopier');
  };

  const handleWhatsappClick = () => {
    openInNewTab('https://wa.me/918885621001');
  };

  const handleLinkedinClick = () => {
    openInNewTab('https://linkedin.com/company/hitechcopier');
  };

  return (
    <div className={`sticky top-0 z-50 p-2 ${isDarkMode ? 'bg-gradient-to-r from-yellow-300 to-orange-400 text-gray-100' : 'bg-gradient-to-r from-yellow-300 to-orange-400 text-gray-100'}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-2xl md:text-3xl font-bold mb-2 md:mb-0">
          <span style={{ fontFamily: 'Arial black', color: 'black' }}>Hi-Tech</span>
          <span style={{ fontFamily: 'Arial black', color: 'red' }}> Copier Solutions</span>
          <span className={`text-xl text-red-600`}>, Digital Xerox Machines Sales & Services</span>
          {/* <span className={`text-xl text-gray-600`}>, Digital Xerox Machines Sales & Services</span> */}
        </span>
        <div className={`flex space-x-2 md:space-x-4 text-2xl md:text-3xl ${isDarkMode ? 'text-black' : 'text-gray-900'} mb-2 md:mb-0`}>
          <a href="#!" className="text-xl md:text-2xl hover:text-blue-500" onClick={handlePhoneClick}>
            <FaPhone />
          </a>
          <a href="#!" className="text-xl md:text-2xl hover:text-blue-700" onClick={handleEmailClick}>
            <FaEnvelope />
          </a>
          <a href="#!" className="text-xl md:text-2xl hover:text-pink-100" onClick={handleInstagramClick}>
            <FaInstagram />
          </a>
          <a href="#!" className="text-xl md:text-2xl hover:text-green-500" onClick={handleWhatsappClick}>
            <FaWhatsapp />
          </a>
          <a href="#!" className="text-xl md:text-2xl hover:text-blue-900" onClick={handleLinkedinClick}>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
