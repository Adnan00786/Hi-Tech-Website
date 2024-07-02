"use client";
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { useDarkMode } from 'usehooks-ts';

const Navbar = () => {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Set dark mode by default on initial render
  useEffect(() => {
    enable();
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

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close the menu after clicking
    }
  };

  return (
    <div>
      <nav className={`fixed w-full z-50 transition-all duration-300 p-4 ${isDarkMode ? 'bg-gray-800 bg-opacity-65 text-white' : 'bg-gray-800 bg-opacity-65 text-white'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              className="text-2xl md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className="hidden md:flex space-x-4">
              <span className="cursor-pointer" onClick={() => handleScrollTo('products')}>Products</span>
              <span className="cursor-pointer" onClick={() => handleScrollTo('services')}>Services</span>
              <span className="cursor-pointer" onClick={() => handleScrollTo('rentals')}>Rentals</span>
              <span className="cursor-pointer" onClick={() => handleScrollTo('about')}>About</span>
            </div>
          </div>
          <button
            className="text-xl p-2 rounded-full bg-gray-700 dark:bg-gray-700 text-gray-200 dark:text-gray-200"
          > <a href="/" className="text-xl md:text-2xl hover:text-blue-500" onClick={handlePhoneClick}>
          <FaPhone />
        </a>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={`fixed top-0 right-0 h-full w-2/3 md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-800'} shadow-lg z-50 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-4">
            <button
              className="text-2xl mb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes />
            </button>
            <span className="block py-2 text-xl cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => handleScrollTo('products')}>
              Products
            </span>
            <span className="block py-2 text-xl cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => handleScrollTo('services')}>
              Services
            </span>
            <span className="block py-2 text-xl cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => handleScrollTo('rentals')}>
              Rentals
            </span>
            <span className="block py-2 text-xl cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => handleScrollTo('about')}>
              About
            </span>
          </div>
        </div>
      )}

      {/* Background overlay to close the menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
