import React from 'react'

const SideArrow = () => {
  return (
    <div className='mt-32 w-1/6 relative'>
        <img className='mt-12' src="https://tiiny.host/assets/icons/arrow.svg" height="150" width="150" alt="arrow"/>
        <span style={{fontFamily:"cursive"}} className='absolute top-0 right-8 font-thin italic text-[#914ab5] text-2xl'>Try for free</span>
    </div>
  )
}

export default SideArrow