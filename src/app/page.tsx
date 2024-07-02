// import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Brands from "@/components/Brand";
// import Divider from "@/components/Divider";
// import { Products } from "@/components/Products";
// import Services from "@/components/Services";
// import Rentals from "@/components/Rentals";
// import Testimonial from "@/components/Testimonial";
// import Footer from "@/components/Footer";

// export default function Home() {
//   return (
//     <>
//       <Topbar/>
//       <Navbar/>
//       <Hero/>
//       <About/>
//       <Brands/>
//       <Products/>
//       <Divider/>
//       <Services/>
//       <Rentals/>
//       <Testimonial/>
//       <Footer/>
//     </>
//   );
// }

/// Imp. the Above code is commented out and the below updated code 
/// has the above Functionalites + New Product displays section with more enhanced features 
/// All these additional features are done before providing Service 

import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Brands from "@/components/Brand";
import Divider from "@/components/Divider";
import Services from "@/components/Services";
import Rentals from "@/components/Rentals";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

import React from "react";
import Product from "@/components/Product"; // Product is second version of Products section whereas Products is the first version of this section 
import { StaticImageData } from 'next/image';

const Canon_IR_ADV_4225 = "/assets/Canon IR ADV 4225.jpg";
const Canon_IR_ADV_4545 = "/assets/Canon IR ADV 4545.jpg";
const Canon_IR_ADV_4235 = "/assets/Canon IR ADV 4235-45-51.jpg";
const Xerox_7830 = "/assets/Xerox W.c 7830-35.jpg";
const Xerox_7845 = "/assets/Xerox W.c 7845-55.jpg";
const Xerox_5955 = "/assets/Xerox W.c 5955.jpg";
const Xerox_60_70 = "/assets/Xerox C 60-70.jpg";
const Xerox_5855 = "/assets/Xerox W.c 5855.jpg";
const Xerox_altalink_b8055 = "/assets/Xerox altalink b8055.jpg";
const Xerox_5875 = "/assets/Xerox W.c 5875.jpg";
const Kyocera_3212i = "/assets/Kyocera 3212i.jpg";
const Kyocera_2040 = "/assets/Kyocera 2040.jpg";
const Kyocera_4125 = "/assets/Kyocera 4125.jpg";

interface ProductType {
  Poster: StaticImageData | string;
  Title: string;
  brand: string;
  Description: string;
}

// Product Detail Descriptions
const DESC_Xerox_5855 = `
The **Xerox WorkCentre 5855** is a robust monochrome multifunction printer designed to simplify your office tasks. Here are the key features:\n
- **Speed:** Print up to **55 pages per minute** in black and white.\n
- **Resolution:** Achieve sharp prints with a resolution of up to **1200 x 2400 dpi**.\n
- **Versatility:** Handles printing, scanning, copying, and faxing—all in one device.\n
- **High Volume:** Ideal for busy offices with a monthly duty cycle of up to **100,000 pages**.\n
- **Supplies:** Easily replace toner cartridges, fuser units, and other consumables.\n\n

**Why choose the WorkCentre 5855?**\n
1. **Efficiency:** Get more done with rapid printing and scanning capabilities.\n
2. **Reliability:** Designed for heavy workloads, it won't let you down.\n
3. **Quality:** Enjoy crisp text and clear images on every page.\n
4. **Cost-Effective:** Save time and resources with all-in-one functionality.\n\n

Whether you're printing reports, scanning documents, or making copies, the Xerox WorkCentre 5855 is your reliable partner for productivity.
`;

const DESC_IR_ADV_4225 = `
The **Canon imageRUNNER ADVANCE 4225** is a versatile multifunctional office device designed for efficient document reproduction. Here are the key features:\n
- **Speed:** Print up to **25 pages per minute**.\n
- **Resolution:** High print quality with a resolution of up to **1200 x 1200 dpi**.\n
- **Versatility:** Supports various paper sizes and types.\n
- **Duplex:** Automatic duplex printing and scanning.\n
- **Capacity:** Standard paper capacity of **4,980 sheets**.\n\n

**Why choose the imageRUNNER ADVANCE 4225?**\n
1. **Efficiency:** Streamline office tasks with multifunction capabilities.\n
2. **Quality:** Consistently high-quality prints and scans.\n
3. **Flexibility:** Handles a variety of media types and sizes.\n
4. **Convenience:** Advanced scanning to email and network folders.\n\n

The Canon imageRUNNER ADVANCE 4225 is suitable for medium to large office environments, offering reliable and efficient performance.
`;

const DESC_IR_ADV_4545 = `
The **Canon imageRUNNER ADVANCE 4545** is known for its reliability and efficiency in modern office environments. Here are the key features:\n
- **Speed:** Print up to **45 pages per minute**.\n
- **Resolution:** High print quality with a resolution of up to **1200 x 1200 dpi**.\n
- **Versatility:** Supports various paper sizes and types.\n
- **Security:** Advanced security features such as user authentication and data encryption.\n
- **Interface:** Large touch-screen for easy operation.\n\n

**Why choose the imageRUNNER ADVANCE 4545?**\n
1. **Efficiency:** High-speed printing and scanning.\n
2. **Security:** Protect sensitive data with advanced security features.\n
3. **Productivity:** Seamless integration with cloud services.\n
4. **User-Friendly:** Intuitive touch-screen interface.\n\n

The Canon imageRUNNER ADVANCE 4545 enhances productivity and ensures secure, high-quality document handling in busy office environments.
`;

const DESC_IR_ADV_4235 = `
The **Canon imageRUNNER ADVANCE 4235/45/51 series** offers versatile solutions for office environments. Here are the key features:\n
- **Speed:** Print speeds ranging from **35 to 51 pages per minute**.\n
- **Resolution:** High-quality prints with a resolution of up to **1200 x 1200 dpi**.\n
- **Versatility:** Supports duplex printing and scanning.\n
- **Security:** Advanced features like secure print and user authentication.\n
- **Capacity:** Maximum paper capacity of **7,700 sheets**.\n\n

**Why choose the imageRUNNER ADVANCE 4235/45/51 series?**\n
1. **Efficiency:** Fast and reliable for high-volume tasks.\n
2. **Quality:** Consistent and sharp print quality.\n
3. **Security:** Enhanced data protection.\n
4. **Capacity:** Suitable for high-demand environments.\n\n

The Canon imageRUNNER ADVANCE 4235/45/51 series is ideal for offices that need versatile and secure multifunction devices.
`;

const DESC_Xerox_7830 = `
The **Xerox WorkCentre 7830/35** offers robust performance for office environments. Here are the key features:\n
- **Speed:** Print speeds of up to **30 pages per minute**.\n
- **Resolution:** High-quality prints at a resolution of up to **1200 x 2400 dpi**.\n
- **Versatility:** Supports various paper sizes and types.\n
- **Scanning:** Advanced capabilities with scan to email and network folders.\n
- **Interface:** Large touch-screen for easy operation.\n\n

**Why choose the WorkCentre 7830/35?**\n
1. **Performance:** Reliable performance for busy offices.\n
2. **Quality:** Crisp and clear print quality.\n
3. **Productivity:** Enhance productivity with advanced scanning.\n
4. **User-Friendly:** Easy-to-use touch-screen interface.\n\n

The Xerox WorkCentre 7830/35 is designed to meet the needs of busy office environments with high-quality printing and scanning capabilities.
`;

const DESC_Xerox_7845 = `
The **Xerox WorkCentre 7845/55** is designed for high-volume tasks in office environments. Here are the key features:\n
- **Speed:** Print speeds ranging from **45 to 55 pages per minute**.\n
- **Resolution:** High-quality prints at a resolution of up to **1200 x 2400 dpi**.\n
- **Scanning:** Advanced capabilities and security features like user authentication.\n
- **Interface:** Customizable touch-screen for easy operation.\n
- **Integration:** Seamlessly integrates with cloud services.\n\n

**Why choose the WorkCentre 7845/55?**\n
1. **Performance:** High-speed and reliable performance.\n
2. **Security:** Enhanced security for sensitive documents.\n
3. **Productivity:** Advanced scanning and cloud integration.\n
4. **User-Friendly:** Customizable and intuitive interface.\n\n

The Xerox WorkCentre 7845/55 is ideal for offices requiring high-volume printing and advanced document management features.
`;

const DESC_Xerox_5955 = `
The **Xerox WorkCentre 5955** delivers high performance and reliability for demanding office environments. Here are the key features:\n
- **Speed:** Print speeds of up to **55 pages per minute**.\n
- **Resolution:** High-quality prints at a resolution of up to **1200 x 2400 dpi**.\n
- **Versatility:** Supports various paper sizes and types.\n
- **Scanning:** Advanced capabilities with scan to email and network folders.\n
- **Security:** Robust measures like secure print and user authentication.\n\n

**Why choose the WorkCentre 5955?**\n
1. **Performance:** Reliable for high-volume tasks.\n
2. **Quality:** Consistently sharp print quality.\n
3. **Security:** Enhanced data protection features.\n
4. **Productivity:** Advanced scanning capabilities.\n\n

The Xerox WorkCentre 5955 is your reliable partner for high-demand office tasks, providing exceptional print quality and robust security.
`;

const DESC_Xerox_60_70 = `
The **Xerox Color C60/C70** offers versatility for various color printing and copying needs in office environments. Here are the key features:\n
- **Speed:** Print speeds of up to **70 pages per minute**.\n
- **Resolution:** High-quality color prints at a resolution of up to **2400 x 2400 dpi**.\n
- **Scanning:** Advanced capabilities with scan to email and network folders.\n
- **Security:** Features like user authentication and encrypted hard drive.\n
- **Interface:** Large touch-screen for easy operation.\n\n

**Why choose the Color C60/C70?**\n
1. **Performance:** High-speed and versatile for color tasks.\n
2. **Quality:** Exceptional color print quality.\n
3. **Security:** Robust data protection.\n
4. **Productivity:** Enhanced scanning and cloud integration.\n\n

The Xerox Color C60/C70 is ideal for offices needing versatile, high-quality color printing and advanced document management.
`;

const DESC_Xerox_altalink_b8055 = `
The **Xerox AltaLink B8055** offers high performance and advanced features for office environments. Here are the key features:\n
- **Speed:** Print speeds of up to **55 pages per minute**.\n
- **Resolution:** High-quality prints at a resolution of up to **1200 x 2400 dpi**.\n
- **Scanning:** Advanced capabilities and security features like user authentication.\n
- **Interface:** Customizable touch-screen for easy operation.\n
- **Integration:** Seamlessly integrates with mobile and cloud printing solutions.\n\n

**Why choose the AltaLink B8055?**\n
1. **Performance:** Reliable and high-speed printing.\n
2. **Security:** Enhanced securityHere's the full integration of the provided product descriptions into the code:
3. **Productivity:** Advanced scanning and integration options.\n
4. **User-Friendly:** Customizable interface for ease of use.\n\n

The Xerox AltaLink B8055 is designed for offices requiring high-performance printing and advanced document management capabilities.
`;

const DESC_Xerox_5875 = `
The **Xerox WorkCentre 5875** is a versatile monochrome multifunction printer designed for efficient office operations. Here are the key features:\n
- **Speed:** Print up to **75 pages per minute**.\n
- **Resolution:** Achieve sharp prints with a resolution of up to **1200 x 1200 dpi**.\n
- **Versatility:** Handles printing, scanning, copying, and faxing—all in one device.\n
- **High Volume:** Ideal for high-demand offices with a monthly duty cycle of up to **300,000 pages**.\n
- **Supplies:** Easy maintenance with accessible toner and consumables replacement.\n\n

**Why choose the WorkCentre 5875?**\n
1. **Efficiency:** Streamline workflows with rapid printing and scanning capabilities.\n
2. **Reliability:** Designed for heavy workloads and continuous operation.\n
3. **Quality:** Ensure clear text and sharp images on every print.\n
4. **Cost-Effective:** Consolidate tasks with all-in-one functionality.\n\n

The Xerox WorkCentre 5875 is your reliable solution for productivity and efficiency in large office environments.
`;

const DESC_Kyocera_3212i = `
The **Kyocera TASKalfa 3212i** is a robust multifunctional device tailored for modern office needs. Here are the key features:\n
- **Speed:** Print up to **32 pages per minute**.\n
- **Resolution:** High-quality prints with a resolution of up to **1200 x 1200 dpi**.\n
- **Versatility:** Supports various paper sizes and types.\n
- **Security:** Enhanced security features like secure print and data encryption.\n
- **Interface:** Intuitive touchscreen for easy navigation.\n\n

**Why choose the TASKalfa 3212i?**\n
1. **Performance:** Reliable and efficient for daily office tasks.\n
2. **Security:** Protect sensitive information with advanced security measures.\n
3. **Productivity:** Streamline workflows with versatile functionality.\n
4. **Ease of Use:** User-friendly interface for seamless operation.\n\n

The Kyocera TASKalfa 3212i delivers high performance and security for productive office environments.
`;

const DESC_Kyocera_2040 = `
The **Kyocera ECOSYS FS-2040DN** is a compact and efficient monochrome printer designed for small to medium-sized offices. Here are the key features:\n
- **Speed:** Print up to **40 pages per minute**.\n
- **Resolution:** Sharp prints with a resolution of up to **1200 x 1200 dpi**.\n
- **Versatility:** Handles various paper sizes and types.\n
- **Duplex:** Automatic duplex printing for paper-saving efficiency.\n
- **Economy:** Low printing costs with long-life consumables.\n\n

**Why choose the ECOSYS FS-2040DN?**\n
1. **Efficiency:** Fast and reliable printing for small offices.\n
2. **Economy:** Cost-effective with low running costs.\n
3. **Versatility:** Supports diverse printing needs.\n
4. **Reliability:** Kyocera's long-life technology ensures durability.\n\n

The Kyocera ECOSYS FS-2040DN is the ideal choice for offices seeking cost-effective and reliable printing solutions.
`;

const DESC_Kyocera_4125 = `
The **Kyocera TASKalfa 4125i** is a powerful multifunctional device designed for high-volume printing environments. Here are the key features:\n
- **Speed:** Print up to **42 pages per minute**.\n
- **Resolution:** High-quality prints with a resolution of up to **1200 x 1200 dpi**.\n
- **Versatility:** Supports various paper sizes and types.\n
- **Security:** Advanced security features like encrypted data transfer and user authentication.\n
- **Integration:** Seamless integration with business applications and workflows.\n\n

**Why choose the TASKalfa 4125i?**\n
1. **Performance:** High-speed printing and scanning capabilities.\n
2. **Security:** Protect sensitive information with robust security features.\n
3. **Productivity:** Efficient workflows with multifunction capabilities.\n
4. **Reliability:** Kyocera's renowned durability and long-life technology.\n\n

The Kyocera TASKalfa 4125i delivers reliable performance and advanced features for demanding office environments.
`;


const products: ProductType[] = [
  { Poster: Canon_IR_ADV_4225, Title: "IR ADV 4225", brand: "Canon", Description: DESC_IR_ADV_4225},
  { Poster: Canon_IR_ADV_4545, Title: "IR ADV 4545", brand: "Canon", Description: DESC_IR_ADV_4545 },
  { Poster: Canon_IR_ADV_4235, Title: "IR ADV 4235/45/51", brand: "Canon", Description: DESC_IR_ADV_4235},
  { Poster: Xerox_7830, Title: "W.c 7830/35", brand: "Xerox", Description: DESC_Xerox_7830},
  { Poster: Xerox_7845, Title: "W.c 7845/55", brand: "Xerox", Description: DESC_Xerox_7845},
  { Poster: Xerox_5955, Title: "W.C 5955", brand: "Xerox", Description: DESC_Xerox_5955},
  { Poster: Xerox_60_70, Title: "C 60/70", brand: "Xerox", Description: DESC_Xerox_60_70},
  { Poster: Xerox_5855, Title: "W.c 5855", brand: "Xerox", Description: DESC_Xerox_5855},
  { Poster: Xerox_altalink_b8055, Title: "Altalink B8055", brand: "Xerox", Description: DESC_Xerox_altalink_b8055},
  { Poster: Xerox_5875, Title: "W.c 5875", brand: "Xerox", Description: DESC_Xerox_5875},
  { Poster: Kyocera_3212i, Title: "3212i", brand: "Kyocera", Description: DESC_Kyocera_3212i},
  { Poster: Kyocera_2040, Title: "2040", brand: "Kyocera", Description: DESC_Kyocera_2040},
  { Poster: Kyocera_4125, Title: "4125", brand: "Kyocera", Description: DESC_Kyocera_4125}
];

interface GroupedProducts {
  [brand: string]: ProductType[];
}

const groupedProducts: GroupedProducts = products.reduce((groups: GroupedProducts, product) => {
  const { brand } = product;
  if (!groups[brand]) {
    groups[brand] = [];
  }
  groups[brand].push(product);
  return groups;
}, {});

const ProductsSection = () => (
  <div className="bg-gradient-to-r from-gray-600  to-gray-700">
  <div className="p-4">
    <h1 className="text-5xl text-center font-bold mb-4">All Products</h1>

    {Object.keys(groupedProducts).map((brand) => (
      <div key={brand} className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">{brand}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {groupedProducts[brand].map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    ))}
  </div>
    </div>
);

export default function Home() {
  return (
    <>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <About/>
      <Brands/>
      {/* Products Starts Here  */}
      <ProductsSection />
      {/* Products Ends here  */}
      <Divider/>
      <Services/>
      <Rentals/>
      <Testimonial/>
      <Footer/>
    </>
  );
}
