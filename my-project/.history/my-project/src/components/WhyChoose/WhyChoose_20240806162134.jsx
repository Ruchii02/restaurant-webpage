import React from 'react'
import { FaBus } from 'react-icons/fa'

const WhyChoose = () => {
  return (
   <>
   <div className="py-14 md:py-28
   bg-gray-50">
    <div className="container">
        {/*heading section*/}
        <h1 data-aos="fade"
          className='pb-16 tracking-wider
            text-2xl font-semibold text-dark 
            text-center'>
                Why Choose Us
                </h1>

                {/*card section*/}
                <div data-aos="fade" data-aos-delay="300" >
                    <div className='grid grid-cols-2
                    md:grid-cols-4 gap-14 sm:gap-4 '>
                    {/*first card*/}
                    <div className='text-center flex justify-center
                        items-center flex-col gap-2 px-2'>
                           <p className='text-dark/70 font-semibold'>
                           Say goodbye to meal planning,
                            grocery shopping, and long hours
                             in the kitchen. With TastyTransit
                             , you can enjoy delicious, ready-to-eat
                              meals with just a few clicks.
                            </p>
                            <p className='text-5xl rotate-90 text-primary text-center
                                 translate-x-5'>....</p>
                            <FaBus className='text-5xl text-primary'/>
                    </div>
                    {/*second card*/}
                    <div className='text-center flex justify-center
                        items-center flex-col gap-1 px-3'>
                           <FaBus className='text-5xl text-secondary'/>
                           <p className='text-5xl rotate-90 text-secondary text-center
                                 translate-x-5'>....</p>
                           <p className='text-dark/70 font-semibold'>
                           We believe that great food should be
                            accessible to everyone. Our pricing is
                             competitive, and we offer various plans and
                              discounts to make our meals affordable for
                               all.
                            </p>
                            
                    </div>
                    {/*third card*/}
                    <div className='text-center flex justify-center
                        items-center flex-col gap-2 px-2'>
                           <p className='text-dark/70 font-semibold'>
                           Our meals are designed to be both tasty 
                           and nutritious. We offer a range of healthy 
                           options, including vegetarian, vegan, 
                           gluten-free, and low-carb meals, 
                           so you can enjoy a balanced diet without
                            compromising on flavor.
                            </p>
                            <p className='text-5xl rotate-90 text-primary text-center
                                 translate-x-5'>....</p>
                            <FaBus className='text-5xl text-primary'/>
                    </div>
                     {/*fourth card*/}
                     <div className='text-center flex justify-center
                        items-center flex-col gap-1 px-3'>
                           <FaBus className='text-5xl text-secondary'/>
                           <p className='text-5xl rotate-90 text-secondary text-center
                                 translate-x-5'>....</p>
                           <p className='text-dark/70 font-semibold'>
                           Customer satisfaction is at the heart of 
                           everything we do. Our dedicated support team 
                           is here to assist you with any questions or 
                           concerns, ensuring a seamless and enjoyable
                            experience every time you order.
                            </p>
                            
                    </div>
                    </div>
                </div>
    </div>
   </div>
   </>
  )
}

export default WhyChoose