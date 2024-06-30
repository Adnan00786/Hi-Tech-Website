"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import '@/styles/Testimonial.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Imran Siddiqui",
    role: "Manager at Creative Solutions LLC",
    feedback:
      "Outstanding performance! Our new Xerox machine has significantly improved our office efficiency. Highly recommended!",
    image: "/assets/imran.png",
    rating: 4,
  },
  {
    name: "Omar",
    role: "CTO at Precision Print Services",
    feedback:
      "Our Xerox machine delivers top-quality prints reliably and quickly—an essential addition to our office.",
    image: "/assets/omar.png",
    rating: 5,
  },
  {
    name: "Tariq Javed",
    role: "CEO at Smart Office Hub",
    feedback:
      "Fantastic product! The Xerox machine is incredibly efficient and has saved us a lot of time on our printing tasks.",
    image: "/assets/tariq.png",
    rating: 5,
  },
  {
    name: "Hassan Mustafa",
    role: "Lead Developer at Dynamic Printing Co.",
    feedback:
      "The Xerox machine we purchased has been a game-changer for our business. Excellent print quality and very user-friendly.",
    image: "/assets/hassan.png",
    rating: 5,
  },
];

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  icon: React.ReactNode;
}

const Arrow: React.FC<ArrowProps> = ({ className, style, onClick, icon }) => (
  <div
    className={`${className} text-gray-400 hover:text-gray-200 cursor-pointer`}
    style={{ ...style, display: "flex", alignItems: "center", zIndex: 10 }}
    onClick={onClick}
  >
    {icon}
  </div>
);

const Testimonial: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => <FaStar key={i} className="text-yellow-500" />);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <Arrow icon={<FaArrowRight size={32} />} className="next-arrow" />,
    prevArrow: <Arrow icon={<FaArrowLeft size={32} />} className="prev-arrow" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-gray-700">
      <section id="testimonials" className="py-16 text-white relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-6xl font-bold text-center mb-12">
            What people say about Hi-Tech Copier
          </h2>
          <Slider {...settings} className="mt-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="testimonial-content bg-gray-800 p-8 rounded-lg shadow-lg">
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-lg mb-6">{testimonial.feedback}</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-full"
                      width={50}
                      height={50}
                    />
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
