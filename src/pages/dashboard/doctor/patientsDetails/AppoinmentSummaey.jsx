import React from 'react'
import TodayAppoinment from './TodayAppoinment'
import NextPatient from './NextPatient'
import PatientsSummaeyChart from './PatientsSummaeyChart'

const AppoinmentSummaey = () => {
  return (
    <div>
        <div className='grid grid-cols-3 gap-5 bg-white mt-5 p-7 rounded-md'>
            <div>
              <PatientsSummaeyChart />
            </div>
            <div>
                <TodayAppoinment />
            </div>
            <div>
              <NextPatient />
            </div>
        </div>
    </div>
  )
}

export default AppoinmentSummaey