import React from 'react'
import AppoinmentBoard from './appoinmentBoard/AppoinmentBoard'
import AppoinmentSummaey from './patientsDetails/AppoinmentSummaey'
import AppoinmentRespons from './appoinmentRespons/AppoinmentRespons'

const DoctorDashboard = () => {
  return (
    <div>
        <AppoinmentBoard />
        <AppoinmentSummaey />
        <AppoinmentRespons />
    </div>
  )
}

export default DoctorDashboard