import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthProvider';
import BookingDetails from './BookingDetails';
import Cover from '../../components/shared/cover/Cover';
const myAppointmentImg=`https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?w=1380&t=st=1685498764~exp=1685499364~hmac=78483deb71f65efe41779aa38505a83c55123e3b71dc852e96d5f2fd879c9f67`

const MyAppointment = () => {

const {user}= useContext(AuthContext)
    const [myBooking,setMyBooking] = useState([]);
    // specific user data load 
    useEffect(()=>{
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
        .then((res)=>res.json())
        .then((data)=>setMyBooking(data))
        .catch((error)=>console.log(error.message))
    },[])

    // user removeBooking
    const handleRemoveBooking=(id)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You will delete doctor appointment",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#40d0c6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/bookings/${id}`)
          .then((res)=>res.json())
          .then((data)=>{
            if(data.deletedCount>0){
              Swal.fire(
                'Deleted!',
                'You doctor appointment deleted successful.',
                'success'
              )
            }
            const remaining = myBooking.filter((booking)=>booking._id !== id);
            setMyBooking(remaining)
          })
     
        }
      })

    // specific services data
      fetch(`http://localhost:5000/bookings/${id}`,{
        method:"DELETE",
        headers:{
          'content-type':"application/json"
        },
        body:JSON.stringify(myBooking)
      })
      .then((res)=>res.json())
      .then((data)=>console.log(data))
      .catch((error)=>console.log(error.message))
      console.log(id)
    }


  return (
    <div className='py-20'>
      <Cover title="My Appointment" coverImg={myAppointmentImg}></Cover>
        <div className='container mx-auto'>
        <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Services</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Cancel</th>
                      </tr>
                    </thead>
                    <tbody>
                        {myBooking.map((booking)=><BookingDetails 
                            key={booking._id}
                            booking={booking}
                            handleRemoveBooking={handleRemoveBooking}>
                        </BookingDetails>)}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default MyAppointment