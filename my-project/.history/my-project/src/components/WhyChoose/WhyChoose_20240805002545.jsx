import React from 'react'

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
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Porro necessitatibus officiis 
                            pariatur numquam consequatur! Nesciunt aperiam eum alias
                             voluptatem odit repellendus nisi ipsum qui amet rem, 
                            suscipit facere, ex asperiores!
                            
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