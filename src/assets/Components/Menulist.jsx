import React from 'react'
import menuData from '../data/menuData'

const Menulist = () => {
  return (
    <div className='bg-green-100 min-h-screen w-full p-10 flex flex-wrap gap-8 justify-center'>
     
      {menuData.map((item) => (
        <div  
          key={item.id} 
          className='w-[300px] h-[450px] bg-amber-50 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300'
        >
          {/* Image Section */}
          <div className='h-[60%]'>
            <img 
              src={item.image} // 👈 FIXED: No longer hardcoded to pasta1
              alt={item.title} 
              className='w-full h-full object-cover p-3 rounded-[2.5rem]'
            />
          </div>

          {/* Content Section */}
          <div className='p-4'>
            <h1 className='font-bold text-xl text-green-800 truncate'>{item.title}</h1>
            
            <p className='text-sm text-gray-600 h-[60px] mt-2 overflow-hidden italic'>
              "{item.description}"
            </p>
            
            <div className='mt-4 flex justify-between items-center'>
                <p className='font-bold text-lg text-orange-600'>${item.price}</p>
                <button className='bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-800 active:scale-95 transition-all'>
                    Add +
                </button>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Menulist;