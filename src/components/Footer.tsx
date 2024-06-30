"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const handleScrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebookF, url: 'https://www.facebook.com' },
    { icon: FaYoutube, url: 'https://www.youtube.com' },
    { icon: FaXTwitter, url: 'https://twitter.com' },
    { icon: FaInstagram, url: 'https://www.instagram.com' },
    { icon: FaLinkedinIn, url: 'https://www.linkedin.com' },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? 'whatsapp://send?phone=918885621001'
      : 'https://wa.me/918885621001';

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 mb-8 md:mb-0"
          >
            <span className="text-2xl font-bold">Hi-Tech Copier</span>
            <p className="text-sm mt-4">
              Your trusted partner for Xerox machine Sales, Services, rentals, and repairs.
            </p>
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/3 mb-8 md:mb-0 md:ml-12"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mb-2"
              >
                <a href="#" className="hover:text-gray-400 transition-colors" onClick={() => handleScrollTo('home')}>
                  Home
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mb-2"
              >
                <span className="hover:text-gray-400 transition-colors" onClick={() => handleScrollTo('services')}>
                  Services
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mb-2"
              >
                <span className="hover:text-gray-400 transition-colors" onClick={() => handleScrollTo('rentals')}>
                  Rentals
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="mb-2"
              >
                <a href="#" className="hover:text-gray-400 transition-colors" onClick={handleWhatsAppClick}>
                  Contact Us
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/3 mb-8 md:mb-0"
          >
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  href={item.url}
                  target="_blank" // Open link in new tab
                  rel="noopener noreferrer" // Security best practice for external links
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <item.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 border-t border-gray-700 pt-4 text-center"
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Hi-Tech Copier. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
