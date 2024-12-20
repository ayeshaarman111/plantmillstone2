'use client';



import { useState } from 'react';
import { CiSearch, CiHeart } from 'react-icons/ci';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  // State to handle mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#A4B17B] text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-bold font-serif text-2xl underline">Nature's Nest</h1>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-black">Home</a></li>
            <li><a href="/Shop" className="hover:text-black">Shop</a></li>
            <li><a href="/About" className="hover:text-black">About</a></li>
            <li><a href="/Contact" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* Icons - Always visible */}
        <div className="flex items-center text-2xl space-x-6">
          <CiSearch />
          <CiHeart />
          <AiOutlineShoppingCart />
        </div>
      </div>

      {/* Mobile Menu Button (Only visible on small screens) */}
      <div className="md:hidden flex justify-between items-center mt-4">
        <button className="text-2xl" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Mobile Menu (Only visible when isOpen is true) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} text-center mt-4`}>
        <ul className="space-y-4">
          <li><a href="#" className="hover:text-black block">Home</a></li>
          <li><a href="/Shop" className="hover:text-black block">Shop</a></li>
          <li><a href="/About" className="hover:text-black block">About</a></li>
          <li><a href="/Contact" className="hover:text-black block">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


    


