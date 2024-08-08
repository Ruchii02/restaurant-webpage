import React from 'react'
import main_bg from "../../assets/main.png"
import PrimaryButton from '../shared/PrimaryButton'
const MainPage = () => {
  return (
    <>
    <div className='relative z-[-1]'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4
                place-items-center min-h-[600px]">
               
               {/*text-content section*/}
               <div className='space-y-7 text-dark order-2 sm:order-1'>
                 <h1 className='text-5xl'>Fresh & Healthy Meal Plan{" "}
                       <span className='text-secondary font-cursive text-7xl'>Delivery</span>{" "}
                        in Miami
                     </h1>
                   <p className='lg:pr-64'>
                     Delicious Meals Delivered to Your Door
                     From $132.95 per month.
                     
                     </p>

                     {/*button section*/}
                     <PrimaryButton/>
               </div>
               {/*image section*/}
                 <div className='order-1 sm:order-2'>
                    <img src={main_bg} alt='' className='w-full sm:scale-125 sm:translate-y-16'/>
                 </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default MainPage