import React from 'react'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import AppoinmentBoardCard from '../../../../components/DashboardComponents/AppoinmentBoardCard';

const AppoinmentBoard = () => {
  return (
    <div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <AppoinmentBoardCard title="Total Patient" patients="2000" text="Till Today" icon={faCalendarDays} />
            <AppoinmentBoardCard title="Total Patient" patients="2000" text="Till Today" icon={faCalendarDays} />
            <AppoinmentBoardCard title="Total Patient" patients="2000" text="Till Today" icon={faCalendarDays} />
            <AppoinmentBoardCard title="Total Patient" patients="2000" text="Till Today" icon={faCalendarDays} />
        </div>
    </div>
  )
}

export default AppoinmentBoard
