import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useLoaderData } from 'react-router-dom'
import Cover from '../../components/shared/cover/Cover';
import { AuthContext } from '../../context/AuthProvider';
const bookingCover =`https://img.freepik.com/free-photo/stethoscope-copy-space_23-2147652347.jpg?w=1380&t=st=1685502964~exp=1685503564~hmac=3401485f1b88a73e110d94f720fac2311403fa16ff197f7c70f6da339d9056fb`

const Booking = () => {


  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  // user login info
const {user} = useContext(AuthContext)
  // doctor data load
const doctorDetails = useLoaderData();
const {image}=doctorDetails;

// calendar value and service data
const [value, onChange] = useState(new Date());
const [servicesData,setServicesData] = useState([]);
  // handle booking send data mongodb database
  const handleBooking=(event)=>{
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const time = form.time.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.tel.value;
    const bookingUser={date,time,name,email,phone,}

    fetch(`https://doctor-booking-server.vercel.app/bookings`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(bookingUser)
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      if(data.insertedId){
        form.reset();
        Swal.fire(
          'Congratulation!',
          'Your appointment booking successful',
          'success'
        )
      }
    })
  }
  // date manage
  const month = months[value.getMonth()];
  const orderDate = `${month} ${value.getDay()}, ${value.getFullYear()}`

  return (
    <div>
      <Cover coverImg={bookingCover} title="Appointment"></Cover>
      <div className='container mx-auto px-5'>
          <div>
              <div>
                  <h3 className='text-2xl font-semibold mb-3'>Select Available Slots</h3>
                  <div className='grid grid-cols-3 gap-5 pb-20'>
                      <div className='col-span-2'>
                        <div className='grid grid-cols-3 gap-5'>
                          <div className='text-center'>
                              <h3 className='text-center text-xl font-semibold mb-3'>Morning</h3>
                              <div className='flex flex-col'>
                                  <button className='booking-time-btn'>09:00 - 09:30</button>
                                  <button className='booking-time-btn'>10:00 - 10:30</button>
                                  <button className='booking-time-btn'>11:00 - 11:30</button>
                              </div>
                          </div>
                          <div>
                              <h3 className='text-center text-xl font-semibold mb-3'>Afternoon</h3>
                              <div className='flex flex-col'>
                                  <button className='booking-time-btn'>12:00 - 12:30</button>
                                  <button className='booking-time-btn'>01:00 - 01:30</button>
                                  <button className='booking-time-btn'>02:00 - 02:30</button>
                              </div>
                          </div>
                          <div>
                              <h3 className='text-center text-xl font-semibold mb-3'>Evening</h3>
                              <div className='flex flex-col'>
                                  <button className='booking-time-btn'>04:00 - 04:30</button>
                                  <button className='booking-time-btn'>05:00 - 05:30</button>
                                  <button className='booking-time-btn'>06:00 - 06:30</button>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-span-1 border'>

                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Booking