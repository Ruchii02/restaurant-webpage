import React from 'react'
import BgPolygon from "../../assets/polygon.png"
import Vector from"../../assets/vector-wave.png";
import PersonIcon from '@mui/icons-material/Person';
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
    <div style={bgStyle} className='py-14'>
        <div className="container min-h-[500px]
            relative z-10">
                <h1 className='pt-20 tracking-wider text-4xl font-semibold 
                 text-white text-center'>
                  About Us
                </h1> 
                {/*card-section*/}
                <div className='bg-white/80 p-10 my-10'>
                    Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Delectus, rerum saepe. 
                     Officiis aliquid delectus tempore labore esse
                      incidunt neque molestias animi est? Animi voluptates,
                     in at commodi quaerat ullam dolorum!
                     Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Delectus, rerum saepe. 
                     Officiis aliquid delectus tempore labore esse
                      incidunt neque molestias animi est? Animi voluptates,
                     in at commodi quaerat ullam dolorum!
                     Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Delectus, rerum saepe. 
                     Officiis aliquid delectus tempore labore esse
                      incidunt neque molestias animi est? Animi voluptates,
                     in at commodi quaerat ullam dolorum!
                     Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Delectus, rerum saepe. 
                     Officiis aliquid delectus tempore labore esse
                      incidunt neque molestias animi est? Animi voluptates,
                     in at commodi quaerat ullam dolorum!
                     <div className='pt-10 flex justify-center'>
                     <button className='flex justify-center
                    items-center gap-2  
                    bg-primary 
                    h-[40px] text-xl text-white px-5 
                    py-2 hover:scale-105 duration-300'>
                    <PersonIcon/>
                    My Account
                    </button> 
                     </div>
                </div>
        </div>
        {/* wave-vector */}
        <div className='absolute top-0 w-full
              right-0 '>
            <img src={Vector} alt='' className='mx-auto' />
        </div>

    </div>
    </>
  )
}

export default About