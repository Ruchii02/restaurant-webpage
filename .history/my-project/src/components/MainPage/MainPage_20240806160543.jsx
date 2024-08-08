import React from 'react'
import main_bg from "../../assets/main.png"
import PrimaryButton from '../shared/PrimaryButton'
const MainPage = () => {
  return (
    <>
    <div className='relative z-[-1] bg-gradient-to-r from-pink-100 to-cyan-100'>
        <div className="container py-16 sm:py-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4
                place-items-center min-h-[600px]">
               
               {/*text-content section*/}
               <div className='space-y-7 text-dark order-2 sm:order-1'>
                 <h1 data-aos = "fade-up" className='text-5xl'>Welcome to <span className='text-primary font-cursive text-7xl'>TastyTransit</span> <br /> Fresh & Healthy <br></br> Meal Plan
                       <span className='text-secondary font-cursive text-7xl'>Delivery</span> <br>
                       </br>{"  "}
                        in Your city
                     </h1>
                   <p data-aos = "fade-up" 
                      data-aos-delay="300"
                     className='lg:pr-64'>
                     Delicious Meals Delivered to Your Door
                     From 99$ per month.
                     
                     </p>

                     {/*button section*/}
                     <div data-aos = "fade-up" 
                      data-aos-delay="500">
                     <PrimaryButton/>
                     </div>
               </div>
               {/*image section*/}
                 <div data-aos = "zoom-in" 
                      data-aos-delay="500"
                   className='relative z-30 order-1 sm:order-2'>
                    <img src={main_bg} alt='' className='w-full sm:scale-125 
                          sm:translate-y-16'/>
                 </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default MainPage