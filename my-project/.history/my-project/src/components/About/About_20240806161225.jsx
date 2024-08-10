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

const About = ({HandlePopup}) => {
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
                <div data-aos="fade"
                      data-aos-delay="300" 
                     className='bg-white/80 p-10 my-10'>
                          Welcome to TastyTransit, your premier meal delivery
                           service designed to bring delicious, nutritious
                            meals right to your doorstep. Our mission is
                             to make dining convenient, healthy, and 
                             delightful for everyone. Whether you're a
                              busy professional, a family with a hectic
                               schedule, or someone who simply enjoys great
                                food without the hassle of cooking, we are
                                 here for you.
                                 We understand the challenges of 
                                 balancing a busy lifestyle with maintaining a 
                                 healthy diet. That's why we set out to create a
                                  service that offers a diverse menu of gourmet meals,
                                   prepared with the freshest ingredients,
                                  and delivered with speed and care.
                     <div className='pt-10 flex justify-center'>
                     <button onClick={HandlePopup} className='flex justify-center
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