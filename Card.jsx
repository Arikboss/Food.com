import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import anaros from "../../assets/drive-download-20250712T060448Z-1-001/pineapple.png"
import butter from "../../assets/drive-download-20250712T060448Z-1-001/butter.png"
import banana from "../../assets/drive-download-20250712T060448Z-1-001/banana.png"
import beef from "../../assets/drive-download-20250712T060448Z-1-001/beef.png"
import cabbage from "../../assets/drive-download-20250712T060448Z-1-001/cabbage.png"
import capsicum from "../../assets/drive-download-20250712T060448Z-1-001/capsicum.png"
import eggplant from "../../assets/drive-download-20250712T060448Z-1-001/eggplant.png"
import grapes from "../../assets/drive-download-20250712T060448Z-1-001/grapes.png"
import kiwi from "../../assets/drive-download-20250712T060448Z-1-001/kiwi.png"

// ✅ Products Array
const products = [
  {
    id: 1,
    name: "Pineapple",
    price: 3.00,
    image: anaros,
    category: "Fruits",
    isFavorite: true,
  },
  {
    id: 2,
    name: "Butter",
    price: 3.50,
    image: butter,
    category: "Dairy",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Banana",
    price: 1.75,
    image: banana,
    category: "Fruits",
    isFavorite: true,
  },
  {
    id: 4,
    name: "Beef",
    price: 6.20,
    image: beef,
    category: "SeaFood",
    isFavorite: false,
  },
  {
    id: 5,
    name: "Cabbage",
    price: 2.10,
    image: cabbage,
    category: "Vegetables",
    isFavorite: false,
  },
  {
    id: 6,
    name: "Capsicum",
    price: 2.30,
    image: capsicum,
    category: "Vegetables",
    isFavorite: true,
  },
  {
    id: 7,
    name: "Eggplant",
    price: 1.50,
    image: eggplant,
    category: "Vegetables",
    isFavorite: true,
  },
  {
    id: 8,
    name: "Grapes",
    price: 3.10,
    image: grapes,
    category: "Fruits",
    isFavorite: false,
  },
  {
    id: 9,
    name: "Kiwi",
    price: 2.75,
    image: kiwi,
    category: "Fruits",
    isFavorite: false,
  }
];

const Card = () => {
  return (
    <div>   
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map(product => (
        <div key={product.id} className="p-4 shadow-md rounded-xl border border-blue-400 text-center relative bg-white">
          
          {/* Favorite Heart */}
          <div className="absolute top-3 left-3 text-red-500">
            {product.isFavorite ? <FaHeart /> : <FaHeart className="opacity-30" />}
          </div>

          {/* Add Button */}
          <div className="absolute top-3 right-3 text-orange-500">
            <FaPlus />
          </div>

          {/* Image */}
          <img src={product.image} alt={product.name} className="w-28 h-28 object-contain mx-auto mb-3" />
          
          {/* Name */}
          <h3 className="text-lg font-semibold">{product.name}</h3>
          
          {/* Price */}
          <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
          
          {/* Shop Now Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-md text-sm">
            Shop Now
          </button>
        </div>
      ))}

    </div>


        <button className='mt-4  mx-auto flex  hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-orange-300 to-orange-500 rounded-xl px-6 py-2 font-bold text-white'>
            View All
          </button>

   </div>
       
        
      

  )
}

export default Card;
