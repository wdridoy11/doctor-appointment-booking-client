import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const AppoinmentBoard = () => {
  return (
    <div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <div className='bg-white rounded-md p-7 flex items-center gap-5'>
                <div>
                    <FontAwesomeIcon className='text-3xl p-5 ring-2 rounded-full ring-[#40d0c6] text-[#40d0c6]' icon={faCalendarDays} />
                </div>
                <div>
                    <h3 className='text-xl'>Total Patient</h3>
                    <h1 className='text-2xl font-semibold'>2000</h1>
                    <p className='text-base'>Till Today</p>
                </div>
            </div>
            <div className='bg-white rounded-md p-7 flex items-center gap-5'>
                <div>
                    <FontAwesomeIcon className='text-3xl p-5 ring-2 rounded-full ring-[#40d0c6] text-[#40d0c6]' icon={faCalendarDays} />
                </div>
                <div>
                    <h3 className='text-xl'>Total Patient</h3>
                    <h1 className='text-2xl font-semibold'>2000</h1>
                    <p className='text-base'>Till Today</p>
                </div>
            </div>
            <div className='bg-white rounded-md p-7 flex items-center gap-5'>
                <div>
                    <FontAwesomeIcon className='text-3xl p-5 ring-2 rounded-full ring-[#40d0c6] text-[#40d0c6]' icon={faCalendarDays} />
                </div>
                <div>
                    <h3 className='text-xl'>Total Patient</h3>
                    <h1 className='text-2xl font-semibold'>2000</h1>
                    <p className='text-base'>Till Today</p>
                </div>
            </div>
            <div className='bg-white rounded-md p-7 flex items-center gap-5'>
                <div>
                    <FontAwesomeIcon className='text-3xl p-5 ring-2 rounded-full ring-[#40d0c6] text-[#40d0c6]' icon={faCalendarDays} />
                </div>
                <div>
                    <h3 className='text-xl'>Total Patient</h3>
                    <h1 className='text-2xl font-semibold'>2000</h1>
                    <p className='text-base'>Till Today</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppoinmentBoard