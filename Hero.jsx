import React from 'react'
import Grocery from "../../assets/drive-download-20250712T060448Z-1-001/grocery.png"

const Hero = () => {
  return (
    <section className="px-5 py-10">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-[1200px] mx-auto">
        
        {/* Left Content */}
        <div className="text-center lg:text-left mt-10 lg:mt-0">
          <span className="bg-amber-200 border-2 border-orange-400 font-semibold text-gray-600 px-4 py-1 rounded-xl inline-block mb-4">
            Export best quality
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            We Have <span className="text-orange-400">Organic</span> & <span className="text-orange-400">Healthy</span> Food
          </h1>
          <p className="font-semibold text-gray-600 mb-6 max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, mollitia.
          </p>
          <button className="hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-orange-300 to-orange-500 rounded-xl px-8 py-3 font-bold text-white cursor-pointer">
            Shop now
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-md">
          <img src={Grocery} alt="Grocery" className="w-full h-auto" />
        </div>

      </div>
    </section>
  )
}

export default Hero
