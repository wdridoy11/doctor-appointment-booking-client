import React from 'react'
import { Link } from 'react-router-dom'

const NextPatient = () => {
  return (
    <div>
        <div className='border border-gray-200 p-5 rounded-md'>
            <h4 className='text-lg font-medium mb-3'>Next Patient Details</h4>
            <div>
                <div className='flex justify-between items-center'>
                    <div>
                        <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655320_1280.png" alt="" />
                    </div>
                    <div>
                        <h4 className='text-lg font-medium'>Patient Name</h4>
                        <p className='text-base'>Ridoy Sharif</p>
                    </div>
                    <div>
                        <h4 className='text-lg font-medium'>Patient ID</h4>
                        <p className='text-base'>01722824160</p>
                    </div>
                </div>
                <div className='flex justify-between mt-4'>
                    <div>
                        <h4 className='text-lg font-medium'>Appoinment Date</h4>
                        <p className='text-base'>01722824160</p>
                    </div>
                    <div>
                        <h4 className='text-lg font-medium'>Appoinment Time</h4>
                        <p className='text-base'>01722824160</p>
                    </div>
                    <div>
                        <h4 className='text-lg font-medium'>Sex</h4>
                        <p className='text-base'>Male</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-2 mt-5'>
                    <Link className='bg-[#40d0c6] rounded-md text-white px-3 py-2'>01722824160</Link>
                    <Link className='bg-[#40d0c6] rounded-md text-white px-3 py-2'>01:30PM</Link>
                </div>
            </div>
            <Link className='inline-block mt-2 text-lg font-medium text-white w-full px-5 py-2 rounded-md bg-[#40d0c6]'>wdridoy11@gmail.com</Link>
        </div>
    </div>
  )
}

export default NextPatient