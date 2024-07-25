"use client";
import { useEffect, useState, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FlipWords } from '@/components/ui/flip-words';
import { useDarkMode } from 'usehooks-ts'; // Adjust this import as needed
import { Toaster, toast } from 'sonner';

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const words = ["Sales", "Services", "Repair"];
  const whatsappNumber = '918885621001'; // Replace with your WhatsApp number

  // Initialize dark mode using useDarkMode hook, enabling it by default
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  useEffect(() => {
    enable(); // Set dark mode by default
  }, [enable]);


  useEffect(() => {
    // This will run only on the client side after the component mounts
    setIsClient(true);
  }, []);

  // useEffect(() => {
  //   let infoToastCount = 0;

  //   const showInfoToast = () => {
  //     if (infoToastCount < 4) {
  //       toast.info('Call Now! and Get the Best Deals');
  //       infoToastCount++;
  //       setTimeout(showInfoToast, 4500); // 4.5 seconds interval
  //     }
  //   };

  //   // Start the info toast sequence
  //   showInfoToast();
  // }, []);

  const handleClick = () => {
    if (audio) {
      audio.play();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className={`relative h-screen w-full dark`}>
      <Toaster position="bottom-left" />
      {isClient && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/hero1_edit.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-1">
        <div className={`text-center md:text-left p-4 rounded-lg ${isDarkMode ? 'bg-opacity-60 bg-black' : 'bg-opacity-60 bg-black'}`}>
          <h2 className={`text-3xl ${isDarkMode ? 'text-gray-200' : 'text-gray-200'}`}>
            One Stop Destination for Copier Machine <FlipWords className="text-gray-200" words={words} />
          </h2>
        </div>
        <br />
        <br />
        <button
          className="text-7xl bg-gradient-to-r from-orange-400 to-blue-500 text-white py-3 px-6 rounded-full text-lg font-medium animate-bounce"
          onClick={handleClick}
        >
          <a href={`https://wa.me/${whatsappNumber}`} target='_blank' className="text-white hover:text-green">Contact Now!</a>
        </button>
        <br />
        <br />
      </div>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        className="fixed bottom-4 left-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={38} />
      </a>
    </div>
  );
};

export default Hero;
