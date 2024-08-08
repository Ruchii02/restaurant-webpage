
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import MainPage from './components/MainPage/MainPage'
import Banner from './components/Banner/Banner'
import WhyChoose from './components/WhyChoose/WhyChoose'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import { duration, easing } from '@mui/material'
import AOS from "aos";
import "aos/dist/aos.css";
 const App = () => {
  const [showPopup , setShowPopup] = useState(false);

  const HandlePopup = ()=>{
    setShowPopup(true);
  };

  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-shine",
      delay : 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Navbar HandlePopup={HandlePopup}/>
      <MainPage/>
      <Banner/>
      <WhyChoose/>
      <About HandlePopup={HandlePopup}/>
      <Footer/>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup}/>
    </div>
  )
}



export default App
