import React from 'react'
import p1 from '../../assets/nav.png'

const Navbar = () => {
    return (
        <nav className='bg-white h-18 w-screen flex items-center px-10 shadow-sm'>
            <div className='flex justify-between items-center w-full'>
                
                <div className='flex items-center gap-3 ml-6'>
                    <img src={p1} alt="picc" className='w-[40px] h-auto'/>
                    <p className='text-black font-bold text-2xl'>Findly</p>
                </div>

                <div className='flex items-center gap-10 mr-36'> 
                    <p className='font-bold cursor-pointer'>Home</p>
                    <p className='font-bold cursor-pointer'>Menu</p>
                    <p className='font-bold cursor-pointer'>Recipes</p>
                    <p className='font-bold cursor-pointer'>Features</p>
                    <button className='bg-green-800 rounded-2xl py-2 px-4 text-white font-bold ml-4 mt-1'>
                      Login
                    </button>

                </div>

            </div>
        </nav>
    )
}

export default Navbar;