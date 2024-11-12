import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUserCircle } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    { name: 'John Doe', rating: 5, text: 'Beautiful nameplates, highly recommend!' },
    { name: 'Jane Smith', rating: 4, text: 'Good quality and fast delivery!' },
    { name: 'Mark Wilson', rating: 5, text: 'Elegant designs, perfect for my home.' },
    { name: 'Emma Brown', rating: 4, text: 'Great customer service and quality.' },
    { name: 'Oliver Twist', rating: 5, text: 'Loved the customization options!' },
    { name: 'Sophia Lee', rating: 5, text: 'Exactly what I was looking for!' },
    { name: 'Liam Jones', rating: 4, text: 'Amazing craftsmanship and detail.' },
    { name: 'Ava Martin', rating: 5, text: 'Beautiful product and packaging!' },
    { name: 'Lucas King', rating: 4, text: 'Perfect for gifting, my family loved it.' },
    { name: 'Mia Scott', rating: 5, text: 'Highly satisfied with the quality.' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute right-0 transform translate-y-[-50%] bg-gray-200 p-2 px-3 rounded-full text-gray-700 hover:bg-gray-400 focus:outline-none"
        style={{ top: '50%', right: '10px' }}
        onClick={onClick}
      >
        ▶
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute z-10 left-0 transform translate-y-[-50%] bg-gray-200 p-2 px-3 rounded-full text-gray-700 hover:bg-gray-400 focus:outline-none"
        style={{ top: '50%', left: '10px' }}
        onClick={onClick}
      >
        ◀
      </button>
    );
  }

  return (
    <div className="w-full py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Customer Testimonials</h2>
      <h2 className="text-2xl text-gray-800 font-bold text-center mb-6">Total Reviews(2500+)</h2>
      
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                {/* User Icon */}
                <FaUserCircle className="text-gray-300 text-6xl mx-auto mb-4" />

                {/* Star Rating */}
                <div className="text-yellow-500 mb-2">
                  {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                </div>

                {/* Testimonial Details */}
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="text-gray-600 mt-2">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
