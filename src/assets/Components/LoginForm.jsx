import React from 'react'

const LoginForm = () => {
  return (
    <div className='bg-amber-100 w-full h-screen flex justify-center items-center p-4'>
      
    
      <div className='bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl border border-green-100'>
        
        <h1 className='text-center font-bold text-3xl text-green-900 mb-2'>Findly</h1>
        <p className='text-center text-gray-500 mb-6 font-medium text-xl'>LOGIN TO YOUR ACCOUNT</p>
        
        <hr className='mb-8 border-gray-400'/>

        <div className='space-y-6'>
         
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-bold text-gray-700 ml-1'>Email Address</label>
            <input 
              className='w-full h-12 bg-gray-100 rounded-2xl px-4 border border-gray-300 outline-none focus:border-green-500  focus:ring-green-200 transition-all text-gray-700'      type="email" placeholder='you@yourname.com' />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-sm font-bold text-gray-700 ml-1'>Enter Password</label>
            <input 
              className='w-full h-12 bg-gray-100 rounded-2xl px-4 border border-gray-300 outline-none focus:border-green-500  focus:ring-green-200 transition-all text-gray-700' 
              type="password" 
              placeholder='***********'
            />
          </div>
          
          <div className='flex justify-end'>
            <p className='text-sm font-semibold text-red-500 cursor-pointer hover:underline'>
              Forgot Password?
            </p>
          </div>

          
          <button className='w-full bg-green-700 py-3 rounded-2xl text-white font-bold tracking-wide cursor-pointer hover:bg-green-800 transform active:scale-95 transition-all shadow-lg shadow-green-200'>
            LOGIN
          </button>
        </div>

    
        <div className='mt-8 text-center'>
          <p className='text-gray-600 font-medium'>
            Don't have an account? <span className='text-green-700 font-bold cursor-pointer hover:underline'>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;