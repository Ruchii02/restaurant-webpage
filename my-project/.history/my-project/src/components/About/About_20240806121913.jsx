import React from 'react'
import BgPolygon from "../../assets/polygon.png"
const bgStyle = {
    backgroundImage: `url(${BgPolygon})`
}
const About = () => {
  return (
    <>
    <div>
        <div className="container">
                <h1 className='pt-20 tracking-wider text-4xl font-semibold 
                 text-white text-center'>
                  About Us
                </h1> 
        </div>
    </div>
    </>
  )
}

export default About