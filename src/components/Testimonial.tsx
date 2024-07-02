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
    name: "Harish",
    role: " ",
    feedback:
      " I'M USING THIS PRINTER SINCE 2 YEAR. MACHINE IS TOO GOOD AND I HAVE COMPLETED 9 LAKHS COPYS AND MACHINE IS TOO GOOD AND SMOOTH. THANKS HITECH COPIER",
    image: "/assets/review_photos/harish.png",
    rating: 5,
  },
  {
    name: "Mohammed Zaffer Uddin",
    role: "M.M Stationary",
    feedback:
      "I'm Zafar frome M.M Stationary just brand new condition 1st R.c Xerox Machine Brand new condition installed in my stationary super service and explanation is also good.",
    image: "/assets/review_photos/Mohammed Zaffer Uddin.png",
    rating: 5,
  },
  {
    name: "BHAVANI vani",
    role: " ",
    feedback:
      "I'm using xerox machine since 5 year service is too good and very promt person thank you HITECH COPIER SOLUTION",
    image: "/assets/review_photos/BHAVANI vani.png",
    rating: 5,
  },
  {
    name: "Shaik Ismail",
    role: " ",
    feedback:
      "One stop for printers and its service...Good people with good nature. Very polite and humble. A must visit for any printers or copiers related queries and solutions",
    image: "/assets/review_photos/Shaik Ismail.png",
    rating: 5,
  },
  {
    name: "Mahesh",
    role: " ",
    feedback:
      "Hello friends i have purchase xerox wc 5855 digital xerox machine frome HITECH COPIER SOLUTION the machine is too good and service also prompt. i have completed 200000 lakhs copies",
    image: "/assets/review_photos/Mahesh.png",
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
