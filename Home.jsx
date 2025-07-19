import React from 'react';
import { GiSelfLove } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GiChestnutLeaf } from "react-icons/gi";
import Basket from "../../assets/drive-download-20250712T060448Z-1-001/basket-full-vegetables.png";


const Home = () => {
  return (
    <section className="py-12">
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold">
          <span className="text-orange-500">Our</span> Value
        </h2>
        <div className="w-24 h-1 bg-orange-400 mt-4 mx-auto"></div>
      </div>

      {/* Icon Box Layout */}
      <div className="relative max-w-5xl mx-auto h-[500px]">
        {/* Center Basket (optional) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Replace with your image */}
          <img src={Basket} alt="Basket" className="w-[350px]" />
        </div>

        {/* Top Left */}
        <div className="absolute top-0 left-0 w-48 text-center">
          <GiSelfLove className="text-5xl text-orange-500 mx-auto mb-2" />
          <h3 className="font-bold text-lg  ">Trust</h3>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>

        {/* Top Right */}
        <div className="absolute top-0 right-0 w-48 text-center">
          <AiOutlineSafetyCertificate className="text-5xl text-orange-500 mx-auto mb-2" />
          <h3 className="font-bold text-lg ">Food Safety</h3>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-0 left-0 w-48 text-center">
          <FaLeaf className="text-5xl text-orange-500 mx-auto mb-2" />
          <h3 className="font-bold text-lg ">Always Fresh</h3>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-0 right-0 w-48 text-center">
          <GiChestnutLeaf className="text-5xl text-orange-500 mx-auto mb-2" />
          <h3 className="font-bold text-lg ">100% Organic</h3>
          <p className="text-sm  text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
