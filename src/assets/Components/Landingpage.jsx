import React from 'react'

import home from '../../assets/home.jpg'

const Landingpage = () => {
  return (
    <div className='bg-gray-100 h-screen w-screen '>
     <div className='flex '>
       <div className=' w-[50%] h-full  '>


    <div className="bg-gray-100 px-6 md:px-16 py-12 md:py-20">
      

      <p className="text-green-600 font-semibold md:text-base">
        Honest, Fresh & Delicious
      </p>

    
      <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mt-3 leading-tight">
        Fresh. Finest. <br /> Fast.
      </h1>

    
      <p className="text-gray-800 text-sm md:text-base leading-relaxed max-w-md mt-4 ">
       Fresh flavors, delivered with care. From intimate gatherings to grand celebrations, we provide high-quality dining solutions designed to satisfy every palate
      </p>

      
      <div className="flex gap-4 mt-6">
        <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition font-semibold">
          Explore Our Menu
        </button>
        <button className="border border-green-600 text-green-600 px-5 py-2 rounded-full hover:bg-green-100 transition font-semibold">
          Contact Us
        </button>
      </div>

    </div>
     </div>


     <div className=' w-[50%]' >
  <img src={home} alt="pic" className='w-[90%] h-[69%] bg-white'/>
     </div>
     </div>

    </div>
  )
}

export default Landingpage;
