import React from 'react'
import { FaBus } from 'react-icons/fa'

const WhyChoose = () => {
  return (
   <>
   <div className="py-14 md:py-28
   bg-gray-50">
    <div className="container">
        {/*heading section*/}
        <h1 className='pb-16 tracking-wider
            text-2xl font-semibold text-dark 
            text-center'>
                Why Choose Us
                </h1>

                {/*card section*/}
                <div>
                    <div className='grid grid-cols-2
                    md:grid-cols-4 gap-14 sm:gap-4 '>
                    {/*first card*/}
                    <div className='text-center flex justify-center
                        items-center flex-col gap-1 px-2'>
                           <p>
                             Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <p className='text-5xl rotate-90 text-primary'>....</p>
                            <FaBus className='text-5xl text-primary'/>
                    </div>
                    </div>
                </div>
    </div>
   </div>
   </>
  )
}

export default WhyChoose