import React from 'react'
import CountUp from 'react-countup';

const CounterBox = ({headline,icon:Icon,counterNumber}) => {
  return (
    <div>
        <div className='flex gap-5 bg-[#f5f8f9] p-10 rounded-md relative h-44 overflow-hidden'>
            <div>
                <div className='bg-[#40d0c6] p-3 rounded-full ring-4 ring-[#b4ddda]'>
                    <Icon size={26} className='text-2xl text-white'></Icon>
                </div>
            </div>
            <div>
                <h3 className='text-5xl font-bold mb-2'><CountUp end={counterNumber} />k+</h3>
                <p>{headline}</p>
            </div>
            <div className='w-16 h-16 bg-[#40d0c6] rounded-full absolute -bottom-4 -right-4 ring-4 ring-[#b4ddda]'></div>
        </div>
    </div>
  )
}

export default CounterBox