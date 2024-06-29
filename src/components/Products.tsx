"use client";
import React, { useState, useEffect, useRef } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDarkMode } from "usehooks-ts";
import Image from "next/image";
import { productsData } from "./product_info";

interface Product {
  title: string;
  image: string;
  briefDescription: string;
  detailDescription: string;
}

interface BrandData {
  brand: string;
  products: Product[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function Products() {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { isDarkMode } = useDarkMode();
  const modalTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleLearnMore = (product: Product) => {
    setSelectedProduct(product);
    setDrawerOpen(true);

    // Set a timeout to open the modal after 15 seconds
    modalTimeoutRef.current = setTimeout(() => {
      setModalOpen(true);
    }, 15000); // 15 seconds
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setModalOpen(false);

    // Clear the timeout if the drawer is closed
    if (modalTimeoutRef.current) {
      clearTimeout(modalTimeoutRef.current);
      modalTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    // Cleanup timeout on component unmount
    return () => {
      if (modalTimeoutRef.current) {
        clearTimeout(modalTimeoutRef.current);
      }
    };
  }, []);

  const getFeaturesList = (detailDescription: string) => {
    // Assuming the features in detailDescription are separated by commas
    return detailDescription.split(",").map((feature, index) => (
      <li key={index} className={`${isDarkMode ? "text-white" : "text-white"}`}>{feature.trim()}</li>
    ));
  };

  const handleCall = () => {
    // Check if mobile device (using screen width as an indicator)
    const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

    if (isMobile) {
      // Directly initiate a call
      window.location.href = "tel:+918885621001";
    } else {
      // Open WhatsApp or other action for non-mobile devices
      window.open("https://wa.me/918885621001", "_blank");
    }
  };

  return (
    <div id='products' className="min-h-screen w-full dark:bg-black bg-black dark:bg-grid-black/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 py-8 w-full max-w-[95%] mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl px-4 lg:px-8 xl:px-12">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl text-center mb-8 ${isDarkMode ? "text-white" : "text-white"}`}>Products</h1>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable" scrollButtons="auto" centered>
              {productsData.map((brandData: BrandData, index: number) => (
                <Tab key={brandData.brand} label={brandData.brand} {...a11yProps(index)} className={`${isDarkMode ? "text-white" : "text-white"} text-base sm:text-lg md:text-xl lg:text-2xl`} />
              ))}
            </Tabs>
          </Box>
          {productsData.map((brandData: BrandData, index: number) => (
            <CustomTabPanel key={brandData.brand} value={value} index={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
                {brandData.products.map((product: Product) => (
                  <div key={product.title} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                    <div className="relative w-full h-48 mb-2 rounded-md overflow-hidden group">
                      <Image src={product.image} alt={product.title} layout="fill" objectFit="contain" className="rounded-md" />
                    </div>
                    <h3 className={`text-lg md:text-xl font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>{product.title}</h3>
                    <p className={`mb-2 ${isDarkMode ? "text-black" : "text-black"}`}>{product.briefDescription}</p>
                    <Button className={`font-semibold mb-2 focus:outline-none ${isDarkMode ? "text-blue-500" : "text-blue-500"}`} onClick={() => handleLearnMore(product)}>Learn More</Button>
                  </div>
                ))}
              </div>
            </CustomTabPanel>
          ))}
        </Box>
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose} PaperProps={{ sx: { backgroundColor: isDarkMode ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)", color: isDarkMode ? "white" : "black", width: "300px", padding: "16px" } }}>
          {selectedProduct && (
            <div className="flex flex-col items-center">
              <Typography variant="h6">{selectedProduct.title}</Typography>
              <div className="relative w-full h-64 mb-2 rounded-md overflow-hidden">
                <Image src={selectedProduct.image} alt={selectedProduct.title} layout="fill" objectFit="contain" className="rounded-md" />
              </div>
              <Typography variant="body1" className="mb-4">
                <ul>
                  {getFeaturesList(selectedProduct.detailDescription)}
                </ul>
              </Typography>
              <Button variant="contained" color="primary" onClick={handleCall}>Call now for Better Deals</Button>
            </div>
          )}
        </Drawer>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} aria-labelledby="modal-title" aria-describedby="modal-description">
          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 300, bgcolor: isDarkMode ? "rgba(0, 0, 0, 0.8)" : "white", color: isDarkMode ? "white" : "black", boxShadow: 24, p: 4, borderRadius: 2 }}>
            <Typography id="modal-title" variant="h6" component="h2">Interested in {selectedProduct?.title}!</Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>Call now for better deals: +91 8885621001</Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
