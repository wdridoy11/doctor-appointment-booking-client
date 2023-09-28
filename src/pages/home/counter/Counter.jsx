import React from 'react'
import counterInfo from './CounterInfo';
import CounterBox from './CounterBox';


const Counter = () => {
  return (
    <div className='py-20'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-4 gap-5'>
                {counterInfo.map((counter,index)=><CounterBox 
                    key={index}
                    headline={counter.headline}
                    icon={counter.icon}
                    counterNumber={counter.countNumber}
                >
                </CounterBox>)}
            </div>
        </div>
    </div>
  )
}

export default Counter