import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import Landingpage from '../Components/Landingpage'
import Features from '../Components/Features'
import Feedback from '../Components/Feedback'
import About from '../Components/About'

const MainLayout = () => {
  return (
    <div>

      <Navbar/>
      <Landingpage/>
      <Features/>
      <Feedback/>
      <About/>
      <Footer/>

    </div>
  )
}

export default MainLayout;
