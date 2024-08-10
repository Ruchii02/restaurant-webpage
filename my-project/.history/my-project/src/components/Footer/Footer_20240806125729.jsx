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
            <h1>Contact Us</h1>

            {/* grid-section */}
            <div className='grid grid-cols-1 sm:grid-cols-2
               md:grid-cols-3 gap-14 border-b-2 
               border-white pb-6'>
                <div>
                    <div>
                      <LocationOnIcon className='text-5xl'/>
                    </div>
                </div>

            </div>
       </div>
    </div>
    </>
  )
}

export default Footer