// This is the second Product section completly changed before service provided
// To resolve major Errors and bugs 


"use client";
import Image, { StaticImageData } from "next/image";
import Box from '@mui/material/Box';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { jsPDF } from "jspdf";
import { useState } from 'react';
import Button from '@mui/material/Button';
import ReactMarkdown from 'react-markdown';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface ProductType {
  // manufacture: string;
  Poster: StaticImageData | string;
  Title: string;
  brand: string;
  Description: string;
}

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>({
    // manufacture: "",
    Poster: "",
    Title: "",
    brand: "",
    Description: ""
  });

  const handleOpen = () => {
    setSelectedProduct({
      brand: product.brand,
      Title: product.Title,
      Description: product.Description,
      Poster: product.Poster,
    });
    setOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleCopy = () => {
    const textToCopy = `
      Brand: ${selectedProduct.brand}
      Title: ${selectedProduct.Title}
      Description: ${selectedProduct.Description}
    `;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setSnackbarOpen(true);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  };

  const handlePrint = () => {
    const doc = new jsPDF();
    
    // Adding watermark
    doc.setFontSize(20);
    doc.setTextColor(150, 150, 150);

    // Adding header
    doc.setFontSize(50);
    doc.setTextColor(0, 0, 0);
    doc.text("Hi-Tech", 20, 20);

    // Adding bullet points
    doc.setFontSize(16);
    doc.text(`• Brand: ${selectedProduct.brand}`, 20, 40);
    doc.text(`  `, 20, 50);
    doc.text(`• Title: ${selectedProduct.Title}`, 20, 60);


    // Adding footer
    doc.setFontSize(14);
    doc.text("Contact for better details:", 20, 90);
    doc.text("Contact No.: +91-1234567890", 20, 100);

    // Splitting description into paragraphs
    doc.text(`• Description: `, 20, 120);
    const descriptionLines = doc.splitTextToSize(selectedProduct.Description, 180);
    doc.text(descriptionLines, 20, 130);

    doc.save(`${selectedProduct.brand}_${selectedProduct.Title}.pdf`);
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handlePhoneClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = 'tel:+918885621001';
    } else {
      alert('Contact Information: Call for Best Deals\n\nContact Number: +91-8885621001 / +91-9030731001 \n\nContact on Whatsapp');
      openInNewTab('https://wa.me/918885621001');
      setDialogOpen(true);
    }
  };

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };
  

  const handleLocationOpen = () => {
    const address = encodeURIComponent("Shop No: 3, 1-766, near Bharat petrol, Tirmala Arcade, Nimboliadda, Kachiguda, Hyderabad, Telangana 500027");
    const googleMapsUrl = `https://maps.app.goo.gl/AaKHxodpF8mxhXKNA`;
    window.open(googleMapsUrl);
  };
  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy', action: handleCopy },
    { icon: <PrintIcon />, name: 'Print', action: handlePrint },
    { icon: <CallIcon />, name: 'Call Now', action: handlePhoneClick },
    { icon: <LocationOnIcon />, name: 'Visit Hi-Tech', action: handleLocationOpen },
  ];
  
  return (
    <>
    <div id="products">
      <Drawer
        anchor="right"
        color="neutral"
        size="md"
        variant="soft"
        open={open}
        onClose={() => setOpen(false)}
      >
        <p className="text-3xl text-center">{selectedProduct.brand}</p>
        <p className="text-3xl text-center">{selectedProduct.Title}</p>
        <br />
        <br />
        {/* <p className="text-xl flex-auto px-4 md:px-2 lg:px-3">{selectedProduct.Description}</p> */}
        <div className="mb-8">
            <ReactMarkdown className="text-xl flex-auto px-4 md:px-2 lg:px-3">{selectedProduct.Description}</ReactMarkdown>
        </div>

        <br />
        <br />
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={action.action}
              />
            ))}
          </SpeedDial>
        </Box>
        <ModalClose />
      </Drawer>
  
      <div className="product w-80 h-96 m-6 relative rounded-lg overflow-hidden border-none transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl transform hover:scale-105">
        {/* <div className="absolute top-0 w-full p-4 opacity-0 text-orange-400">
          <p>Manufacture: {product.manufacture}</p>
        </div> */}
  
        <div className="w-full h-full">
          <Image
            src={product.Poster !== "N/A" ? product.Poster : "https://via.placeholder.com/400"}
            alt={product.Title}
            width={400}
            height={400}
            className="w-full h-full"
          />
        </div>
  
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-800 text-white z-10 transition-opacity duration-300 hover:bg-transparent">
          <span className="uppercase text-xs tracking-widest">{product.brand}</span>
          <h3 className="mt-1 text-lg font-semibold text-orange-400">{product.Title}</h3>
          <Button variant="contained" onClick={handleOpen} className="mt-2">More details</Button>
        </div>
      </div>
  
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" variant="filled" sx={{ width: '100%' }}>
          Product details copied to clipboard!
        </Alert>
      </Snackbar>
  
      <Dialog
        fullWidth
        maxWidth="sm"
        open={dialogOpen}
        onClose={handleDialogClose}
        PaperProps={{
          sx: {
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      >
        <DialogTitle sx={{ backgroundColor: 'white', color: 'black' }}>Contact Now</DialogTitle>
        <DialogContent sx={{ backgroundColor: 'white', color: 'black' }}>
          <DialogContentText sx={{ color: 'black' }}>
            Contact us now for better deals!
          </DialogContentText>
          <DialogContentText sx={{ color: 'black' }}>
            Phone: +91-8885621001 / +91-9030731001
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: 'white', color: 'black' }}>
          <Button onClick={handleDialogClose} sx={{ color: 'black' }}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
    </>
  );
}
export default Product;
