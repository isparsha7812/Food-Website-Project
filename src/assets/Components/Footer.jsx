import { Globe } from 'lucide-react'
import React from 'react'
import insta from '../../assets/inst.png'
import face from '../../assets/face.png'
import twit from '../../assets/twitter.png'
import play from  '../../assets/plays.png'




const Footer = () => {
  return (
    <div className='bg-green-500 w-screen h-fit flex gap-0'>
      <div className='w-[70%] flex gap-4 ml-18 p-2 '>
       <Globe/> <p>2026 WL Food. All rights reserved. </p>
      </div>
<div className='w-[30%] flex gap-8 mt-3 ml-26'>
   <img src={insta} alt="pic" className='w-50px h-[20px]'/>
   <img src={face} alt="picc" className='w-50px h-[20px]'/>
      <img src={twit} alt="picc" className='w-50px h-[20px]'/>
   <img src={play} alt="picc" className='w-50px h-[20px]'/>

</div>
    </div>
  )
}

export default Footer
