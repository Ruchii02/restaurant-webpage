import React from 'react'
import main_bg from "../../assets/main.png"
const MainPage = () => {
  return (
    <>
    <div className='relative z-[-1]'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4
                place-items-center min-h-[600px]">
               
               {/*text-content section*/}
               <div className='space-y-7 text-dark order-2 sm:order-1'>
                 <h1 className='text-5xl'>Fresh & Healthy Meal Plan Delivery in Miami</h1>
                   <p>
                     Delicious Meals Delivered to Your Door
                     From $132.95 per 
                     
                     </p>
               </div>
               {/*image section*/}
                 <div className='order-1 sm:order-2'>
                    <img src={main_bg} alt='' />
                 </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default MainPage