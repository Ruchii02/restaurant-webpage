
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import MainPage from './components/MainPage/MainPage'
import Banner from './components/Banner/Banner'
import WhyChoose from './components/WhyChoose/WhyChoose'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
 const App = () => {
  const [showPopup , setShowPopup] = useState(false);

  const HandlePopup = ()=>{
    setShowPopup(true);
  };
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <MainPage/>
      <Banner/>
      <WhyChoose/>
      <About/>
      <Footer/>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup}/>
    </div>
  )
}



export default App
