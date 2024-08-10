
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import MainPage from './components/MainPage/MainPage'
import Banner from './components/Banner/Banner'
import WhyChoose from './components/WhyChoose/WhyChoose'
 const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <MainPage/>
      <Banner/>
      <WhyChoose/>
    </div>
  )
}



export default App
