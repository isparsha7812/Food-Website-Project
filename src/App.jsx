import React from 'react'
import Homepage from './assets/Components/Navbar';
import Navbar from './assets/Components/Navbar';
import Landingpage from './assets/Components/Landingpage';
import Features from './assets/Components/Features';
import Feedback from './assets/Components/Feedback';
import About from './assets/Components/About';
import Footer from './assets/Components/Footer';
import Form from './assets/Components/LoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import MainLayout from './assets/layout/MainLayout';
import LoginForm from './assets/Components/LoginForm';
import Menulist from './assets/Components/Menulist';

const App = () => {
  return (
    <div className='h-screen w-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>} />
          <Route path='/features' element={<Features/>} />
          <Route path='/feedback' element={<Feedback/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<LoginForm/>} />
           <Route path='/menulist' element={<Menulist/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;