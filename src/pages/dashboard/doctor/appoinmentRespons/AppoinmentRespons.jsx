import React from 'react'
import AppoinmentRequast from '../AppoinmentRequast'

const AppoinmentRespons = () => {
  return (
    <div>
        <div className='grid grid-cols-3 gap-5 bg-white mt-5 p-7 rounded-md'>
            <div>
                <h1>Hello</h1>
            </div>
            <div>
                <AppoinmentRequast />
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default AppoinmentRespons