import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
  const {_id,image,name} = doctor;
  return (
    <div>
        <div>
            <div className='shadow-md rounded-lg'>
                <img className='w-full h-[350px] object-cover rounded-t-lg' src={image} alt="" />
                <div className='px-5 pt-5 pb-10'>
                    <h3 className='text-2xl font-medium mb-2'>{name}</h3>
                    <div className='flex justify-between items-center mt-5'>
                        <Link className='px-5 py-2 bg-[#40d0c6] text-lg font-semibold text-white rounded-md flex items-center gap-2 hover:bg-black duration-500' to={`/booking/${_id}`}>Appointment Now</Link>
                        <Link className='font-semibold bg-[#40d0c6] text-xl text-white p-3 rounded-full hover:bg-black duration-500' to={`/doctors/${_id}`}><FaArrowRight /></Link>                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Doctor