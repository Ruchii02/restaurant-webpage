import React from 'react'
import { IoLocateSharp } from 'react-icons/io5'
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Footer = () => {
  return (
    <>
    <div className='text-white mt-20'>
       <div className="container bg-gradient-to-b
            from-primary to-primaryDark rounded-t-3xl">
          {/* heading-section */}
               <h1 className='py-10 text-3xl font-bold
                  text-yellow text-center'>
                  Contact Us
                </h1>

            {/* grid-section */}
            <div className='grid grid-cols-1 sm:grid-cols-2
               md:grid-cols-3 gap-14 border-b-2 
               border-white pb-6'>
                {/* address-section */}
                <div className='text-center space-y-4'>
                    <div className='flex justify-center'>
                      <LocationOnIcon className='text-5xl'/>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet <br />
                        consectetur adipisicing elit. Aliquid 
                        at laudantium 
                    </p>
                </div>
                 {/* email-section */}

            </div>
       </div>
    </div>
    </>
  )
}

export default Footer