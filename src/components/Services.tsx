// // import { useEffect } from "react";
// // import useDarkMode from 'use-dark-mode';

// // const Services = () => {
// //   const darkMode = useDarkMode(true);

// //   useEffect(() => {
// //     if (darkMode.value) {
// //       document.documentElement.classList.add('dark');
// //     } else {
// //       document.documentElement.classList.remove('dark');
// //     }
// //   }, [darkMode.value]);

// //   return (
// //     <div className={`container mx-auto px-4 py-8 ${darkMode.value ? 'bg-gray-800' : 'bg-white'}`}>
// //       <h2 className={`text-3xl mb-4 ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>Our Services</h2>
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //         {/* Service 1: Repair */}
// //         <div className={`rounded-lg p-6 shadow-md ${darkMode.value ? 'bg-gray-900' : 'bg-gray-100'}`}>
// //           <h3 className={`text-xl font-semibold mb-4 ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>Repair</h3>
// //           <p className={`${darkMode.value ? 'text-white' : 'text-gray-700'}`}>We provide expert repair services for all Xerox machine models. Our technicians ensure quick and efficient repairs to minimize downtime.</p>
// //         </div>
// //         {/* Service 2: Periodic Service for Maintenance */}
// //         <div className={`rounded-lg p-6 shadow-md ${darkMode.value ? 'bg-gray-900' : 'bg-gray-100'}`}>
// //           <h3 className={`text-xl font-semibold mb-4 ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>Periodic Service</h3>
// //           <p className={`${darkMode.value ? 'text-white' : 'text-gray-700'}`}>Keep your Xerox machine running smoothly with our periodic maintenance service. We perform thorough checks and cleaning to ensure optimal performance.</p>
// //         </div>
// //         {/* Service 3: Full Service */}
// //         <div className={`rounded-lg p-6 shadow-md ${darkMode.value ? 'bg-gray-900' : 'bg-gray-100'}`}>
// //           <h3 className={`text-xl font-semibold mb-4 ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>Full Service</h3>
// //           <p className={`${darkMode.value ? 'text-white' : 'text-gray-700'}`}>Our comprehensive full-service package includes repair, maintenance, and performance optimization. Get everything your Xerox machine needs in one package.</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Services;
// import React, { useEffect } from "react";
// import useDarkMode from 'use-dark-mode';

// const Services = () => {
//   const darkMode = useDarkMode(true);

//   useEffect(() => {
//     if (darkMode.value) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode.value]);

//   return (
//     <>
//     <section id="services"> 
//       <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex flex-col items-center justify-center">
//         {/* Radial gradient for the container to give a faded look */}
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
//         <h2 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
//           Our Services
//         </h2>
//         <div className="container mx-auto px-4 py-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Service 1: Repair */}
//             <div className={`rounded-lg p-6 shadow-md ${darkMode.value ? 'bg-gradient-to-r from-gray-900 to-gray-700' : 'bg-gradient-to-r from-gray-100 to-gray-300'}`}>
//               <h3 className={`text-xl font-semibold mb-4 ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>Repair</h3>
//               <p className={`${darkMode.value ? 'text-white' : 'text-gray-700'}`}>We provide expert repair services for all Xerox machine models. Our technicians ensure quick and efficient repairs to minimize downtime.</p>
//             </div>
//             {/* Service 2: Periodic Service for Maintenance */}
//             <div className={`rounded-lg p-6 shadow-md ${darkMode.value ? 'bg-gradient-to-r from-gray-900 to-gray-700' : 'bg-gradient-to-r from-gray-100 to-gray-300'}`}>
//               <h3 className={`text-xl font-semibold mb-4 ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>Periodic Service</h3>
//               <p className={`${darkMode.value ? 'text-white' : 'text-gray-700'}`}>Keep your Xerox machine running smoothly with our periodic maintenance service. We perform thorough checks and cleaning to ensure optimal performance.</p>
//             </div>
//             {/* Service 3: Full Service */}
//             <div className={`rounded-lg p-6 shadow-md ${darkMode.value ? 'bg-gradient-to-r from-gray-900 to-gray-700' : 'bg-gradient-to-r from-gray-100 to-gray-300'}`}>
//               <h3 className={`text-xl font-semibold mb-4 ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>Full Service</h3>
//               <p className={`${darkMode.value ? 'text-white' : 'text-gray-700'}`}>Our comprehensive full-service package includes repair, maintenance, and performance optimization. Get everything your Xerox machine needs in one package.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     </>
//   );
// }

// export default Services;


// Second code Down

"use client";
import React, { useEffect } from "react";
import { useDarkMode } from 'usehooks-ts';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Services = () => {
  const darkMode = useDarkMode();

  useEffect(() => {
    if (darkMode.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode.isDarkMode]);

  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    // <section id="services" className="py-16">
    <section id="services" className={`min-h-screen flex flex-col items-center justify-center py-8 bg-black dark:bg-black`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-7xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1: Repair */}
          <motion.div 
            className="flex flex-col md:flex-row items-center md:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="md:w-1/2" variants={textVariant}>
              <h3 className="text-3xl font-semibold mb-4 text-white">Repair</h3>
              <p className="text-lg text-white">We provide expert repair services for all Xerox machine models. Our technicians ensure quick and efficient repairs to minimize downtime.</p>
            </motion.div>
            <motion.div className="md:w-1/2" variants={imageVariant}>
              <Image
                src="/assets/repair.png"
                alt="Repair"
                className="rounded-lg shadow-md w-full h-64 object-cover"
                width={500}
                height={500}
              />
            </motion.div>
          </motion.div>
          {/* Service 2: Periodic Service for Maintenance */}
          <motion.div 
            className="flex flex-col md:flex-row items-center md:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="md:w-1/2" variants={textVariant}>
              <h3 className="text-3xl font-semibold mb-4 text-white">Periodic Service</h3>
              <p className="text-lg text-white">Keep your Xerox machine running smoothly with our periodic maintenance service. We perform thorough checks and cleaning to ensure optimal performance.</p>
            </motion.div>
            <motion.div className="md:w-1/2" variants={imageVariant}>
              <Image
                src="/assets/periodicservice.webp"
                alt="Periodic Service"
                className="rounded-lg shadow-md w-full h-64 object-cover"
                width={500}
                height={500}
              />
            </motion.div>
          </motion.div>
          {/* Service 3: Warranty Service for Maintenance */}
          <motion.div 
            className="flex flex-col md:flex-row items-center md:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="md:w-1/2" variants={textVariant}>
              <h3 className="text-3xl font-semibold mb-4 text-white">Warranty Service</h3>
              <p className="text-lg text-white">Unlock peace of mind with our Warranty Service – because your trust deserves protection. 🛡️✨</p>
            </motion.div>
            <motion.div className="md:w-1/2" variants={imageVariant}>
              <Image
                src="/assets/warantyservice.jpg"
                alt="Warranty Service"
                className="rounded-lg shadow-md w-full h-64 object-cover"
                width={500}
                height={500}
              />
            </motion.div>
          </motion.div>
          {/* Service 4: Full Service */}
          <motion.div 
            className="flex flex-col md:flex-row items-center md:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="md:w-1/2" variants={textVariant}>
              <h3 className="text-3xl font-semibold mb-4 text-white">Full Service</h3>
              <p className="text-lg text-white">Our comprehensive full-service package includes repair, maintenance, and performance optimization. Get everything your Xerox machine needs in one package.</p>
            </motion.div>
            <motion.div className="md:w-1/2" variants={imageVariant}>
              <Image
                src="/assets/fullservice.webp"
                alt="Full Service"
                className="rounded-lg shadow-md w-full h-64 object-cover"
                width={500}
                height={500}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;



// Third Code down



// "use client";
// import React, { useEffect } from "react";
// import useDarkMode from 'use-dark-mode';
// import { motion } from 'framer-motion';

// const Services = () => {
//   const darkMode = useDarkMode(true);

//   useEffect(() => {
//     if (darkMode.value) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode.value]);

//   const textVariant = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0 }
//   };

//   const imageVariant = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { opacity: 1, x: 0 }
//   };

//   return (
//     <section id="services" className="py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl sm:text-7xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
//           Our Services
//         </h2>
//         <div className="space-y-12">
//           {/* Service 1: Repair */}
//           <motion.div 
//             className="flex flex-col md:flex-row items-center md:items-start border-b border-gray-300 pb-8"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <motion.div className="md:w-1/2 order-2 md:order-1" variants={textVariant}>
//               <h3 className="text-3xl font-semibold mb-4">Repair</h3>
//               <p className="text-lg">We provide expert repair services for all Xerox machine models. Our technicians ensure quick and efficient repairs to minimize downtime.</p>
//             </motion.div>
//             <motion.div className="md:w-1/2 order-1 md:order-2 mt-6 md:mt-0" variants={imageVariant}>
//               <img src="assets/repair.png" alt="Repair" className="rounded-lg shadow-md w-full h-64 object-cover md:h-96" />
//             </motion.div>
//           </motion.div>
//           {/* Service 2: Periodic Service for Maintenance */}
//           <motion.div 
//             className="flex flex-col md:flex-row items-center md:items-start border-b border-gray-300 pb-8"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <motion.div className="md:w-1/2" variants={textVariant}>
//               <h3 className="text-3xl font-semibold mb-4">Periodic Service</h3>
//               <p className="text-lg">Keep your Xerox machine running smoothly with our periodic maintenance service. We perform thorough checks and cleaning to ensure optimal performance.</p>
//             </motion.div>
//             <motion.div className="md:w-1/2 mt-6 md:mt-0" variants={imageVariant}>
//               <img src="assets/periodicservice.webp" alt="Periodic Service" className="rounded-lg shadow-md w-full h-64 object-cover md:h-96" />
//             </motion.div>
//           </motion.div>
//           {/* Service 3: Full Service */}
//           <motion.div 
//             className="flex flex-col md:flex-row items-center md:items-start"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <motion.div className="md:w-1/2 order-2 md:order-1" variants={textVariant}>
//               <h3 className="text-3xl font-semibold mb-4">Full Service</h3>
//               <p className="text-lg">Our comprehensive full-service package includes repair, maintenance, and performance optimization. Get everything your Xerox machine needs in one package.</p>
//             </motion.div>
//             <motion.div className="md:w-1/2 order-1 md:order-2 mt-6 md:mt-0" variants={imageVariant}>
//               <img src="assets/fullservice.webp" alt="Full Service" className="rounded-lg shadow-md w-full h-64 object-cover md:h-96" />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;
