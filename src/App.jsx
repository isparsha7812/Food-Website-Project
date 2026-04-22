import React from 'react'
import Homepage from './assets/Components/Navbar';
import Navbar from './assets/Components/Navbar';
import Landingpage from './assets/Components/Landingpage';
import Features from './assets/Components/Features';
import Feedback from './assets/Components/Feedback';
import About from './assets/Components/About';
import Footer from './assets/Components/Footer';
import Form from './assets/Components/Form';


const App = () => {
  return (
    <div>
     
  <Navbar/>  
 <Landingpage/>
 <Features/>
 <Feedback/>
 <About/>
 <Footer/>
 {/* <Form/> */}


    </div>
  )
}

export default App;
