import React from 'react';
import { FaCcMastercard, FaFacebook, FaInstagram, FaLinkedin, FaPaypal, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { SiAmericanexpress } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white py-10 md:px-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Policies Section */}
        <div>
          <h3 className="font-bold mb-4">Policies</h3>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="text-gray-600 hover:text-gray-800">Return & Refund Policy</Link></li>
            <li><Link to="/shipping-policy" className="text-gray-600 hover:text-gray-800">Shipping Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="text-gray-600 hover:text-gray-800">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-600 hover:text-gray-800">About Us</Link></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQ's</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Reviews</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Track Your Order</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="font-bold mb-4">Contact Us</h3>
          <p className="text-gray-600">Workshop:<br />------------------------------------YOUR ADDRESS--------------------------------</p>
          <p className="text-gray-600 mt-4">Regd Office:<br />------------------------------------YOUR ADDRESS--------------------------------</p>
          <p className="text-gray-600 mt-4">Phone: EX-1234567890</p>
          <p className="text-gray-600 mt-2">Email: <a href="mailto:help@housenama.com" className="text-blue-600 hover:underline">help@yourname.com</a></p>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="container mx-auto mt-10 text-center">
        <h3 className="font-bold mb-4">Subscribe to our emails</h3>
        <div className="flex justify-center items-center max-w-sm mx-auto border border-gray-300 rounded">
          <input type="email" placeholder="Email" className="w-full px-4 py-2 focus:outline-none" />
          <button className="px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 rounded-r">→</button>
        </div>
      </div>

      {/* Social and Payment Icons */}
      <div className="container mx-auto mt-10   md:flex-row justify-between items-center text-center text-gray-600 space-y-4 md:space-y-0">

        <div className="flex justify-between space-x-2 text-black text-2xl">
          {/* Replace the src attribute with icons for each payment method */}
<div className='flex justify-center space-x-2 text-black text-2xl'>
  <FaInstagram />
  <FaFacebook />
  <FaLinkedin />
  <FaTwitter />
  <FaYoutube />
</div>
          <div className='flex justify-center space-x-2 text-black text-2xl'>
            <RiVisaFill />
            <FaCcMastercard />
            <FaPaypal />
            <SiAmericanexpress />
          </div>


        </div>
        <div className="text-sm">© 2024, YOURNAME</div>
      </div>
    </footer>
  );
}
