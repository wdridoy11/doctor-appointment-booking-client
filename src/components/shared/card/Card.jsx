import React from 'react'
import blogs from '../../../assets/banner-04.jpg'
const Card = ({blog}) => {
    const {image}=blog;
  return (
    <div className=''>
        <img className='w-full h-[250px] object-cover rounded-t-md' src={blogs} alt="Blogs" />
        <div className='border border-slate-200 p-5 rounded-b-md'>
            <h3 className='text-2xl font-semibold text-black mb-3'>Bangladesh is our country</h3>
            <p className='text-base font-normal text-slate-500 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi voluptate fuga quos nulla provident dolore a obcaecati soluta. Expedita minima voluptatibus ab totam laboriosam ea, nam delectus dolor et molestiae?</p>
            <button className='text-base font-medium bg-[#40d0c6] text-white px-7 py-2 rounded-md hover:bg-black duration-500'>Read More</button>
        </div>

    </div>
  )
}

export default Card