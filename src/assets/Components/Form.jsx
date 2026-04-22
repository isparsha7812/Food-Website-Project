import React from 'react'

const Form = () => {
  return (
    <div className='bg-amber-100 w-screen h-screen flex justify-center items-center'>
      <div className='bg-green-400 w-[30%] h-[80%] '>
        <h1 className='text-center font-semibold mt-6 text-2xl'>LOGIN TO FINDLY</h1>
        <hr></hr>
       <div className='flex flex-col ml-5 gap-4 '>
     <label className='w-40  h-8 text-lg mt-6'>Email Address</label>
      <input  className=' w-80 h-10 bg-white rounded-xl px-2 text-gray-600' type="text" placeholder='you@yourname.com '/>
   </div>

   <div className='flex flex-col ml-5 gap-4'>
     <label className='w-40 h-8 text-lg mt-4'>Enter Password</label>
      <input  className=' w-80 h-10 bg-white rounded-xl px-2 text-gray-600' type="text" placeholder='enter your password'/>
      
   </div>

  <div className='flex mt-3 w-[98%]'>
 <button  className='hover:scale-100 w-[300px] mt-25 h-10 rounded-xl bg-cyan-900 text-white flex items-center'>LOGIN
 </button>
   
  </div>

      </div>
    </div>
  )
}

export default Form
