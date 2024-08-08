import React from 'react'
import BgPolygon from "../../assets/polygon.png"
import { positions } from '@mui/system'
const bgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height:"100%",
    position: "relative",
};

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