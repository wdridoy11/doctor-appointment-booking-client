import React, { useContext, useEffect, useState } from 'react'
import BookingDetails from './BookingDetails';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthProvider';

const MyAppointment = () => {

const {user}=useContext(AuthContext)

    const [myBooking,setMyBooking] = useState([]);
    const url =`http://localhost:5000/bookings?email=${user.email}`;
    console.log(url)
    useEffect(()=>{
        fetch(url,{
          method:"GET",
          headers:{
            "content-type":"application/json"
          }
        })
        .then((res)=>res.json())
        .then((data)=>setMyBooking(data))
        .catch((error)=>console.log(error.message))
    },[])

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


      fetch(`http://localhost:5000/bookings/${id}`,{
        method:"DELETE",
        headers:{
          'content-type':"application/json"
        },
        body:JSON.stringify(myBooking)
      })
      .then((res)=>res.json())
      .then((data)=>{
      })
      .catch((error)=>console.log(error.message))
      console.log(id)
    }


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
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Cancel</th>
                      </tr>
                    </thead>
                    {/* body */}
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