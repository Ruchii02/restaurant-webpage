import React from 'react'
import IoLocationSharp from "react-icons/105"
const Footer = () => {
  return (
    <>
    <div className='text-white mt-20'>
       <div className="container bg-gradient-to-b
            from-primary to-primaryDark rounded-t-3xl">
        <div>
            <h1>Contact Us</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2
               md:grid-cols-3 gap-14 border-b-2 
               border-white pb-6'>
                <div>
                    <div>
                       <IoLocationSharp/> 
                    </div>
                </div>

            </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default Footer