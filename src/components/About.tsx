"use client";
import React from 'react';
import { useEffect } from 'react';
import { FaShoppingCart, FaTools, FaWrench, FaDollarSign, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useDarkMode } from 'usehooks-ts'; // Assuming this is the correct import

const About = () => {
  const {isDarkMode,enable } = useDarkMode(); // Initialize dark mode as true by default

  useEffect(() => {
    enable(); // Set dark mode by default
  }, [enable]);

  return (
    <>
      <section id='about'>
        {/* <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-yellow-400 to-yellow-1900 ' : 'bg-gradient-to-b from-yellow-400 to-gray-1900'} p-8 flex flex-col items-center`}> */}
        <div className={`min-h-screen bg-gradient-to-b from-yellow-400 to-gray-900  p-8 flex flex-col items-center`}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-5xl font-bold ${isDarkMode ? 'text-gray-800' : 'text-gray-800'} mb-8`}
          >
            About Us
          </motion.h1>

          <div className="w-full max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className={`${isDarkMode ? 'bg-opacity-80 bg-white' : 'bg-white'} p-8 rounded-lg shadow-lg`}
            >
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-black' : 'text-black'} mb-6`}>Our Story</h2>
              <p className={`text-xl ${isDarkMode ? 'text-gray-900' : 'text-gray-900'} leading-relaxed mb-4`}>
                Hi-Tech Copier was founded with the vision of providing top-quality copier machine solutions to businesses of all sizes. Over the years, we have grown to become a trusted name in the industry, known for our commitment to excellence and customer satisfaction.
              </p>
              <p className={`text-xl ${isDarkMode ? 'text-gray-900' : 'text-gray-900'} leading-relaxed`}>
                We are in market since 2008 dealing with sales and services of copier machines of all international brands. We are known for our prompt and fair services. In a short span of time we gain fame just because of quality service, as we do not cheat customers by saying lie and replacing items unnecessarily. We do not want to introduce ourselves in this manner, but in these era of selfishness where humanity is heading towards `Me I and only Me` concept, we are focusing on traditional way of business where we are taught to be fair, frank, polite, humble, and to deal with solidarity. You will definitely feel the difference once we are bond in business relations.
              </p>
            </motion.div>
          </div>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`flex flex-col items-center ${isDarkMode ? 'bg-opacity-80 bg-white' : 'bg-white'} p-4 rounded-lg shadow-lg`}
            >
              <FaShoppingCart className={`text-6xl ${isDarkMode ? 'text-gray-800' : 'text-gray-800'} mb-4`} />
              <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-700' : 'text-gray-700'}`}>Sales</h2>
              <p className={`${isDarkMode ? 'text-gray-700' : 'text-gray-700'} text-center`}>
                Providing top-quality copier machines for all your business needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`flex flex-col items-center ${isDarkMode ? 'bg-opacity-80 bg-white' : 'bg-white'} p-4 rounded-lg shadow-lg`}
            >
              <FaTools className={`text-6xl ${isDarkMode ? 'text-gray-800' : 'text-gray-800'} mb-4`} />
              <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`}>Complete Servicing</h2>
              <p className={`${isDarkMode ? 'text-gray-700' : 'text-gray-700'} text-center`}>
                Comprehensive servicing of copier machines to ensure optimal performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`flex flex-col items-center ${isDarkMode ? 'bg-opacity-80 bg-white' : 'bg-white'} p-4 rounded-lg shadow-lg`}
            >
              <FaWrench className={`text-6xl ${isDarkMode ? 'text-gray-800' : 'text-gray-800'} mb-4`} />
              <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`}>Repairs</h2>
              <p className={`${isDarkMode ? 'text-gray-700' : 'text-gray-700'} text-center`}>
                Expert repair services for all copier machine issues.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className={`flex flex-col items-center ${isDarkMode ? 'bg-opacity-80 bg-white' : 'bg-white'} p-4 rounded-lg shadow-lg`}
            >
              <FaDollarSign className={`text-6xl ${isDarkMode ? 'text-gray-800' : 'text-gray-800'} mb-4`} />
              <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`}>Spare Parts Sales</h2>
              <p className={`${isDarkMode ? 'text-gray-700' : 'text-gray-700'} text-center`}>
                Sales of spare parts at economical prices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className={`flex flex-col items-center ${isDarkMode ? 'bg-opacity-80 bg-white' : 'bg-white'} p-4 rounded-lg shadow-lg`}
            >
              <FaShieldAlt className={`text-6xl ${isDarkMode ? 'text-gray-800' : 'text-gray-800'} mb-4`} />
              <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`}>Service Guarantee</h2>
              <p className={`${isDarkMode ? 'text-gray-700' : 'text-gray-700'} text-center`}>
                Service guarantee/warranty for black & white machines for 50,000 copies or three months, whichever is earlier.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className={`flex flex-col items-center ${isDarkMode ? 'bg-opacity-80 bg-white' : 'bg-white'} p-4 rounded-lg shadow-lg`}
            >
              <FaUsers className={`text-6xl ${isDarkMode ? 'text-gray-800' : 'text-gray-800'} mb-4`} />
              <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`}>Our Team</h2>
              <p className={`${isDarkMode ? 'text-gray-700' : 'text-gray-700'} text-center`}>
                Meet our dedicated team of experts committed to providing the best service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
