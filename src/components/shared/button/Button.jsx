import React from 'react'

const Button = ({buttonText}) => {
  return (
    <>
        <button className='text-base font-medium bg-[#40d0c6] text-white px-7 py-2 rounded-md 
        hover:bg-black duration-500'>{buttonText}</button>
    </>
  )
}

export default Button