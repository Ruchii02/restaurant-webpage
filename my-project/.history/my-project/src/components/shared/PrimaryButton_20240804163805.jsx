import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const PrimaryButton = () => {
  return (
    <>
    <div className='flex items-center group'>
        <button className='bg-primary h-[40px] text-white px-3 py-2'>
            Choose Your Meal Plan 
        </button>
        <ArrowForwardIcon className='inline-block
         graph-hover:!translate-x-2 duration-200
         p-2 text-base h-[40px]w-[40px] bg-primaryDark text-white'/>
    </div>
    </>
  )
}

export default PrimaryButton