import React from 'react'

const Popup = ({showPopup , setShowPopup})=>{
    return (
        <>
        {
             (!showPopup) && (
              <div>
                <div className="h-screen w-screen fixed top-0
                  left-0 bg-black/50 z-50 backdrop-blur-sm">

                </div>
              </div>  
            )
        }
        </>
    )
};

export default Popup;