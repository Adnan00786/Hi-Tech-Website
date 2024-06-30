"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from 'usehooks-ts'; // Assuming this is the correct import
import "@/styles/Divider.css";

const Divider = () => {
  const {isDarkMode } = useDarkMode(); // Initialize dark mode as false by default

  return (
    <motion.div
      className={`${isDarkMode ? 'bg-yellow-700' : 'bg-orange-300'} h-2 w-full animation-divide`}
    ></motion.div>
  );
};

export default Divider;
