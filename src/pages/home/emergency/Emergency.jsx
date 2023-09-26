import React from 'react'
import Banner from '../../../assets/banner-03.jpg'
const Emergency = () => {
  return (
    <div className='py-10'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 items-center gap-10'>
                <div>
                    <img className='rounded-md' src={Banner} alt="" />
                </div>
                <div>
                    <h1 className='text-5xl font-bold text-black pr-0 lg:pr-20'>What to do in case of a Dental <span class="text-[#40d0c6]">emergency?</span></h1>
                    <p className='text-base font-normal text-slate-500 mb-7 mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi voluptate fuga quos nulla provident dolore a obcaecati soluta. Expedita minima voluptatibus ab totam laboriosam ea, nam delectus dolor et molestiae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi voluptate fuga quos nulla provident dolore a obcaecati soluta. Expedita minima voluptatibus ab totam laboriosam ea, nam delectus dolor et molestiae?</p>
                    <div className='flex gap-2'>
                        <button className='text-base font-medium bg-[#40d0c6] text-white px-10 py-3 rounded-full 
                        hover:bg-black duration-500'>Make An Appointment</button>
                        <button className='text-base font-medium border-2 border-[#40d0c6] text-[#40d0c6] px-10 py-3 rounded-full 
                        hover:bg-[#40d0c6] hover:text-white duration-500'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Emergency