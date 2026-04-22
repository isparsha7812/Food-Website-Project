import React from 'react'
import feedbackData from '../data/Feedback'

const Feedback = () => {
  return (
    <div className='bg-green-50 min-h-screen w-full p-8'>
      <h1 className='text-4xl font-bold text-center mb-12 text-black'>
        Tasty Feedback
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
        {feedbackData.map((item) => (
          <div key={item.id} className='bg-white rounded-2xl overflow-hidden shadow-lg border border-amber-100 hover:scale-105 transition-transform duration-300'>

            <div className='h-68 w-full'>
              <img
                src={item.image} alt={item.alt} className='w-full h-full object-cover' />
            </div>


            <div className='p-6'>
              <div className='flex text-amber-400 mb-2'>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <h2 className='text-xl font-bold text-gray-800 mb-2'>
                {item.title}
              </h2>

              <p className='text-gray-600 '> "{item.description}" </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feedback