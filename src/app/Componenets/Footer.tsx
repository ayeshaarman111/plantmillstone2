import React from 'react'
import { FaClock } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="bg-[#071E07] text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <h3 className="text-xl font-bold">Nature's Nest</h3>
          <p className="text-sm">Your green companion for a sustainable lifestyle</p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-6 sm:space-y-0">
          <a href="#" className="text-sm hover:text-gray-300">Home</a>
          <a href="#about" className="text-sm hover:text-gray-300">About</a>
          <a href="#services" className="text-sm hover:text-gray-300">Services</a>
          <a href="#contact" className="text-sm hover:text-gray-300">Contact</a>
        </div>
      </div>
      <div className="pt-4">
        <p className="text-xs">&copy; 2024 Nature's Nest. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  


)


}

export default Footer
