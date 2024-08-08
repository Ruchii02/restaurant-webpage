import React from 'react'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Footer = () => {
  return (
    <>
    <div className='text-white mt-20'>
       <div data-aos="fade-down"  className="container bg-gradient-to-b
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
                 <div className='text-center space-y-4'>
                    <div className='flex justify-center'>
                      <EmailIcon className='text-5xl'/>
                    </div>
                    <div>
                    <p>Info@goodfood.com</p>
                    <p>Hr@goodfood.com</p>
                    </div>
                </div>
               {/* Number-section */}
               <div className='text-center space-y-4'>
                    <div className='flex justify-center'>
                      <PhoneInTalkIcon className='text-5xl'/>
                    </div>
                    <div>
                    <p>555-123-4567 - Sales and Services</p>
                    <p>917-555-4321 - Queries</p>
                    <p>646-555-9876 - Whatsapp</p>
                    </div>
                </div>
            </div>
            {/* copyright-section */}
            <div className='flex justify-between p-4 items-center'>
                <p><CopyrightIcon/> 2024 TCJ . All rights reserved</p>
                <div className='flex items-center gap-6'>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Terms & Conditions</a>
                </div>
            </div>
       </div>
    </div>
    </>
  )
}

export default Footer