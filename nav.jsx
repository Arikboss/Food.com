import React, { useState } from 'react';
import { IoHeart } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="flex px-6 py-4 items-center justify-between max-w-[1200px] mx-auto">

        {/* Logo */}
        <a className="text-3xl font-bold text-black" href="#">
          Gr<span className="text-yellow-500 uppercase">O</span>cify
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-500">
          <li className="text-orange-400"><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Process</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoMdClose size={26} /> : <RxHamburgerMenu size={26} />}
          </button>
        </div>

        {/* Search + Icons */}
        <div className="hidden md:flex gap-5 items-center">
          {/* Search Input */}
          <div className="flex p-1 border-2 rounded-full border-pink-900">
            <input className="h-[6vh] px-3 outline-none" type="text" placeholder="search..." />
            <button className="bg-gradient-to-b from-orange-400 to-orange-600 text-xl text-white w-10 h-10 flex items-center justify-center rounded-full">
              <CiSearch className="text-gray-900" />
            </button>
          </div>

          {/* Icons */}
          <a href="#"><IoHeart className="text-red-950 text-2xl" /></a>
          <a href="#"><AiFillShopping className="text-red-950 text-2xl" /></a>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-3 text-gray-700">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">About us</a>
          <a href="#" className="block">Process</a>
          <a href="#" className="block">Contact us</a>
        </div>
      )}
    </header>
  );
};

export default Nav;
