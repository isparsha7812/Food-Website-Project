import React from 'react'
import pic from '../../assets/pic.jpg'
const About = () => {
  return (
    <div className=' bg-green-100 h-fit w-screen'>
  
<div className='flex gap-0'>
<div className='w-[50%] '>
   

    <div className=" w-full h-screen flex items-center justify-center">
      <div className="max-w-md text-left space-y-4">
        
        <p className="text-sm text-gray-500">
          Flavors that satisfy every craving
        </p>

        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Flavors that bring <br /> people together
        </h1>

        <p className="text-gray-600 text-xl leading-relaxed">
          We provide high-quality catering services with a wide range of menu
          options. Whether it's a small gathering or large event, we ensure great
          taste and excellent service every time.
        </p>

        <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
          Learn More
        </button>

      </div>
    </div>
 

</div>


<div className='w-[40%]'>
    <img src={pic} alt='pics' className=' w-[95%] h-[80%] p-2 mt-4 rounded-3xl'/>
</div>
</div>


    </div>
  )
}

export default About
