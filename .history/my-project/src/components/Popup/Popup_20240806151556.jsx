import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
const Popup = ({showPopup , setShowPopup})=>{
    return (
        <>
        {
             !showPopup && (
              <div>
                <div className="h-screen w-screen fixed top-0
                  left-0 bg-black/50 z-50 backdrop-blur-sm">
                    <div className='fixed top-1/2 left-1/2
                       -translate-x-1/2 -translate-y-1/2 p-4
                         shadow-md bg-white rounded-md duration-200 w-[300px]'>
                      {/* header-section */ } 
                       <div className='flex items-center justify-between'>
                        <div>
                            <h1 className='text-2xl font-bold
                               text-dark'>Login</h1>
                        </div>
                        <div>
                            <CloseIcon className='text-2xl cursor-pointer'
                              onClick={()=> setShowPopup(false)} />
                        </div>
                       </div>
                       {/* loginForm-section*/}
                       <div className='mt-4'>
                          <input type='email' placeholder='enter email'
                              className='w-full rounded-md border border-gray-300
                              dark:border-gray-500 px-2 py-1 mb-4'   />
                              
                              <input type='password' placeholder='enter password'
                            className='w-full rounded-md border border-gray-300
                              dark:border-gray-500 px-2 py-1 mb-4'   />

                              {/* loginButton-section*/}
                              <div>
                                <button
                                   className='w-full bg-primary text-white
                                      p-2 rounded-md'  onClick={()=> setShowPopup(false)}>Login Now</button>
                              </div>

                               {/* loginSocial-section*/}

                                 <div className='mt-4'>
                                    <p className='text-center'>or Login with</p>
                                 </div>
                       </div>
                    </div>
                </div>
              </div>  
            )
        }
        </>
    )
};

export default Popup;