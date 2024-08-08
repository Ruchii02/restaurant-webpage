
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import MainPage from './components/MainPage/MainPage'
import Banner from './components/Banner/Banner'
 const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <MainPage/>
      <Banner/>
    </div>
  )
}



export default App
