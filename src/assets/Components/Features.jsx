import React from 'react'
import { featuresData } from '../data/Features'

const Features = () => {
  return (
   
       
  
    <div className='bg-gray-100 min-h-screen w-full p-8 flex flex-wrap justify-center gap-6'>
      
      {featuresData.map((feature, index) => {
     
        const Icon = feature.icon;

        return (
            
          <div key={index} className='bg-white h-72 w-80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 mt-8'>
            <div className='h-[30%] flex justify-center items-center'>
              <div className='p-5 bg-green-200 rounded-full text-green-600'>
                
                <Icon className='h-120px w-160px' />
              </div>
            </div> 

            <h1 className='font-semibold text-center mt-6 text-xl text-gray-800'>
                  {feature.title} </h1>
            
            <p className='text-sm text-center mt-3 text-gray-500 leading-relaxed'>
              {feature.details} </p>
          </div>
        );
      })}

    </div>
  )
}

export default Features;