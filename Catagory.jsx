import React from 'react';
import Dairy from "../../assets/drive-download-20250712T060448Z-1-001/dairy-and-eggs.png";
import Fruit from "../../assets/drive-download-20250712T060448Z-1-001/fruits-and-veggies.png";
import Meat from "../../assets/drive-download-20250712T060448Z-1-001/meat-and-seafood.png";

const Catagory = () => {
  return (
    <section className='mb-20'>
      <div className='py-20'>
        <div className='mx-auto w-fit text-center'>
          <h2 className='text-3xl md:text-5xl font-bold'>
            <span className='text-orange-500'>Shop</span> by Category
          </h2>
          <div className='w-24 h-1 bg-orange-400 mt-4 mx-auto'></div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-20 text-center'>

        {/* Card 1 */}
        <div className='flex flex-col items-center'>
          <div className='border-2 rounded-sm bg-gray-100 border-amber-600 w-full max-w-xs px-5'>
            <img src={Dairy} className='w-40 mt-10 mx-auto' alt="Dairy" />
            <div className='mb-3 p-2 border border-orange-700 rounded-sm'>
              <h1 className='text-xl md:text-2xl font-bold mt-8 text-gray-600'>Dairy Product</h1>
              <p className='font-medium text-gray-500 mt-6 mb-2 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, veniam.
              </p>
            </div>
          </div>
          <button className='mt-4 hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-orange-300 to-orange-500 rounded-xl px-6 py-2 font-bold text-white'>
            See All
          </button>
        </div>

        {/* Card 2 */}
        <div className='flex flex-col items-center'>
          <div className='border-2 rounded-sm bg-gray-100 border-amber-600 w-full max-w-xs px-5'>
            <img src={Fruit} className='w-50 mt-10 mx-auto' alt="Fruits" />
            <div className='mb-3 p-2 border border-orange-700 rounded-sm'>
              <h1 className='text-xl md:text-2xl font-bold mt-8 text-gray-600'>Fruit & Veggies</h1>
              <p className='font-medium text-gray-500 mt-6 mb-2 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, veniam.
              </p>
            </div>
          </div>
          <button className='mt-4 hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-orange-300 to-orange-500 rounded-xl px-6 py-2 font-bold text-white'>
            See All
          </button>
        </div>

        {/* Card 3 */}
        <div className='flex flex-col items-center'>
          <div className='border-2 rounded-sm bg-gray-100 border-amber-600 w-full max-w-xs px-5'>
            <img src={Meat} className='w-45 mt-10 mx-auto' alt="Meat" />
            <div className='mb-3 p-2 border border-orange-700 rounded-sm'>
              <h1 className='text-xl md:text-2xl font-bold mt-8 text-gray-600'>Meat & Seafood</h1>
              <p className='font-medium text-gray-500 mt-6 mb-2 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, veniam.
              </p>
            </div>
          </div>
          <button className='mt-4 hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-orange-300 to-orange-500 rounded-xl px-6 py-2 font-bold text-white'>
            See All
          </button>
        </div>

      </div>
    </section>
  );
};

export default Catagory;
