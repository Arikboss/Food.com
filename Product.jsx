import React, { useState } from 'react'

import Card from '../Cards/Card';



const Product = () => {
  const catagorys = ["All", "Fruits", "Vegetables", "Dairy", "Seafood"];
  const [tab, settab] = useState("All");
let filteritem = tab === "All"? catagorys:product.filter(item=>item.category===tab);
const rendercard=filteritem.slice(0,8).map(product=>{
return(
<Card/>

)
})


  return (
    <section className='max-w-[1400px] mx-auto px-10'>
      <div className='text-center'>
        <h2 className="text-3xl md:text-5xl font-bold">
          <span className="text-orange-500">Our</span> Products
        </h2>
        <div className="w-24 h-1 bg-orange-400 mt-4 mx-auto"></div>
      </div>

      {/* Tabs */}
      <div className='text-center flex  gap-3 mt-10 justify-center'>
        {catagorys.map((category) => {
          return (
            <button
              key={category}
              onClick={() => settab(category)}
              className={
                tab === category
                  ? "bg-gradient-to-b cursor-pointer from-orange-400 to-orange-500 font-bold text-white px-4 py-2 rounded"
                  : "bg-gray-100 cursor-pointer font-semibold text-gray-800 px-4 py-2 rounded"
              }
            >
              {category}
            </button>
          )
        })}
      </div>
    </section>
  );
}

export default Product;