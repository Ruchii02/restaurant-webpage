import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const PrimaryButton = () => {
  return (
    <>
    <div className='flex items-center group'>
        <button className='bg-primary h-[40px] text-white px-3 py-2'>
            Choose Your Meal Plan 
        </button>
        <ArrowForwardIcon/>
    </div>
    </>
  )
}

export default PrimaryButton