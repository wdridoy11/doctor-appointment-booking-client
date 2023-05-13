import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Services = ({service}) => {
  const {_id,img,title} = service;
  return (
    <div>
        <div>
            <div className='shadow-md rounded-lg'>
                <img className='w-full h-[350px] object-cover rounded-t-lg' src={img} alt="" />
                <div className='px-5 pt-5 pb-10'>
                    <h3 className='text-2xl font-medium mb-2'>{title}</h3>
                    <p className='text-base font-normal text-slate-500'>We job gives you handcrafted such as front admin.</p>
                    <div className='flex justify-between items-center mt-5'>
                        <button className='px-5 py-2 bg-[#40d0c6] text-lg font-semibold text-white rounded-md flex items-center gap-2 hover:bg-black duration-500'>Appointment Now</button>
                        <Link className='font-semibold bg-[#40d0c6] text-xl text-white p-3 rounded-full hover:bg-black duration-500' to={`/checkout/${_id}`}><FaArrowRight /></Link>                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services