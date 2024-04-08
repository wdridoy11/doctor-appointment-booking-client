import React from 'react'
import TodayAppoinment from './TodayAppoinment'

const AppoinmentSummaey = () => {
  return (
    <div>
        <div className='grid grid-cols-3 gap-5 bg-white mt-5 p-7 rounded-md'>
            <div></div>
            <div>
                <TodayAppoinment />
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default AppoinmentSummaey