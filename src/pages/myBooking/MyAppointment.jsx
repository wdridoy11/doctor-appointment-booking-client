import React, { useEffect, useState } from 'react'
import BookingDetails from './BookingDetails';

const MyAppointment = () => {

    const [myBooking,setMyBooking] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/bookings`)
        .then((res)=>res.json())
        .then((data)=>setMyBooking(data))
        .catch((error)=>console.log(error.message))
    },[])

  return (
    <div className='py-20'>
        <div className='container mx-auto'>
        <div className="overflow-x-auto w-full">
                <table className="table w-full">
                {/* head */}
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Services</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    {/* body */}
                    <tbody>
                        {myBooking.map((booking)=><BookingDetails key={booking._id} booking={booking}></BookingDetails>)}
                    </tbody>
                    
                </table>
            </div>
        </div>
    </div>
  )
}

export default MyAppointment