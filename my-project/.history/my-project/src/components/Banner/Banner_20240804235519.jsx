import React from 'react'
import Apple from "../../assets/apple.png";
import Kiwi from "../../assets/kiwi.png";
import lemon from "../../assets/lemon.png";
import leaf from "../../assets/leaf.png";
import tomato from "../../assets/tomato.png";
import PrimaryButton from '../shared/PrimaryButton';


const Banner = () => {
  return (
   <>
   <div className="container py-14 relative">
    <div>
        <h1 className='py-8 tracking-wider
            text-2xl font-semibold text-dark 
            text-center'>
            Taste the Healthy Difference
            
            </h1>
          {/*content section*/}
            <div className='space-y-10'>
                <div className='grid grid-cols-1
                sm:grid-cols-2 gap-4 py-10'>
                   <div>
                    <p>
                        {" "}
                        We know that <span className='text-primary'>time</span>{" "}
                        is the greatest value in the modern world.
                        Our healthy meal plan delivery service Good Food in Miami 
                        is the answer for those who want to eat healthy, saving time for buying 
                        food and preparing delicious, healthy meals.  
                    </p>
                   </div>
                   <div></div>

                </div>
                <div className='grid grid-cols-1
                sm:grid-cols-2 gap-4 py-10'>
                    <div></div>
                   <div>
                    <p>
                        {" "}
                        We know that <span className='text-primary'>time</span>{" "}
                        is the greatest value in the modern world.
                        Our healthy meal plan delivery service Good Food in Miami 
                        is the answer for those who want to eat healthy, saving time for buying 
                        food and preparing delicious, healthy meals.  
                    </p>
                   </div>
                  
                   </div>
            </div>
            {/*button section*/}
            <div className='flex justify-center mt-10
                sm:mt-14'>
                <PrimaryButton/>
            </div>
    </div>
   </div>
   </>
  )
}

export default Banner