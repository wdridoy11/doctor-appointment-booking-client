import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useForm, SubmitHandler } from "react-hook-form"

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
  // const [value, onChange] = useState(new Date());
  const [bookingTime, setBookingTime] = useState();
  // handle booking send data mongodb database
  const handleBookingTime=(event)=>{
    event.preventDefault();
    const bookingTime = event.target.value;
    setBookingTime(bookingTime);
    // console.log(bookingTime)
    

    // fetch(`https://doctor-booking-server.vercel.app/bookings`,{
    //   method:"POST",
    //   headers:{
    //     "content-type":"application/json"
    //   },
    //   body:JSON.stringify(bookingUser)
    // })
    // .then((res)=>res.json())
    // .then((data)=>{
    //   console.log(data)
    //   if(data.insertedId){
    //     form.reset();
    //     Swal.fire(
    //       'Congratulation!',
    //       'Your appointment booking successful',
    //       'success'
    //     )
    //   }
    // })
  }
  // date manage
  // const month = months[value.getMonth()];
  // const orderDate = `${month} ${value.getDay()}, ${value.getFullYear()}`
  const { register, handleSubmit,reset,watch,formState: { errors },} = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <Cover coverImg={bookingCover} title="Appointment"></Cover>
      <div className='container mx-auto px-5'>
          <div>
              <div>
                  <h3 className='text-2xl font-semibold mb-3'>Select Available Slots</h3>
                  <div className='grid grid-cols-3 gap-5 pb-20'>
                      <div className='col-span-2'>
                        {/* <div className='grid grid-cols-3 gap-5'>
                          <div className='text-center'>
                              <h3 className='text-center text-xl font-semibold mb-3'>Morning</h3>
                              <div className='flex flex-col'>
                                  <button className='booking-time-btn' value={'09:00 - 09:30'} onClick={handleBookingTime}>09:00 - 09:30</button>
                                  <button className='booking-time-btn' value={'10:00 - 10:30'} onClick={handleBookingTime}>10:00 - 10:30</button>
                                  <button className='booking-time-btn' value={'11:00 - 11:30'} onClick={handleBookingTime}>11:00 - 11:30</button>
                              </div>
                          </div>
                          <div>
                              <h3 className='text-center text-xl font-semibold mb-3'>Afternoon</h3>
                              <div className='flex flex-col'>
                                  <button className='booking-time-btn' value={'12:00 - 12:30'} onClick={handleBookingTime}>12:00 - 12:30</button>
                                  <button className='booking-time-btn' value={'01:00 - 01:30'} onClick={handleBookingTime}>01:00 - 01:30</button>
                                  <button className='booking-time-btn' value={'02:00 - 02:30'} onClick={handleBookingTime}>02:00 - 02:30</button>
                              </div>
                          </div>
                          <div>
                              <h3 className='text-center text-xl font-semibold mb-3'>Evening</h3>
                              <div className='flex flex-col'>
                                  <button className='booking-time-btn' value={'04:00 - 04:30'} onClick={handleBookingTime}>04:00 - 04:30</button>
                                  <button className='booking-time-btn' value={'05:00 - 05:30'} onClick={handleBookingTime}>05:00 - 05:30</button>
                                  <button className='booking-time-btn' value={'06:00 - 06:30'} onClick={handleBookingTime}>06:00 - 06:30</button>
                              </div>
                          </div>
                        </div> */}
                        <div className='mt-5'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <div className='grid md:grid-cols-2 gap-5'>
                                        <div>
                                            <label className='block mb-1'>First Name</label>
                                            <input className='w-full border border-[#ddd] p-2 rounded-sm text-base    outline-none' {...register("firstName",{required: true})}/>
                                        </div>
                                        <div>
                                            <label className='block mb-1'>Last Name</label>
                                            <input className='w-full border border-[#ddd] p-2 rounded-sm text-base    outline-none' {...register("lastName",{required: true})}/>
                                        </div>
                                    </div>
                                    <div className='grid md:grid-cols-2 gap-5 mt-3'>
                                        <div>
                                            <label className='block mb-1'>Email</label>
                                            <input type='email' className='w-full border border-[#ddd] p-2 rounded-sm text-base outline-none' {...register("email",{required: true})}/>
                                        </div>
                                        <div>
                                          <label className='block mb-1'>Gender Selection</label>
                                          <select className='w-full border border-[#ddd] p-2 rounded-sm text-base    outline-none' {...register("gender")}>
                                            <option value="female">Female</option>
                                            <option value="male">Male</option>
                                            <option value="other">Other</option>
                                          </select>
                                        </div>
                                    </div>
                                    <div className='grid md:grid-cols-2 gap-5 mt-3'>
                                        <div>
                                            <label className='block mb-1'>Date</label>
                                            <input type='date' className='w-full border border-[#ddd] p-2 rounded-sm text-base outline-none' {...register("date",{required: true})}/>
                                        </div>
                                        <div>
                                            <label className='block mb-1'>Gender Selection</label>
                                            <select className='w-full border border-[#ddd] p-2 rounded-sm           text-base outline-none' {...register("time")}>
                                                <option value="09:00 - 09:30 AM">09:00 - 09:30 AM</option>
                                                <option value="10:00 - 10:30 AM">10:00 - 10:30 AM</option>
                                                <option value="11:00 - 11:30 AM">11:00 - 11:30 AM</option>
                                                <option value="12:00 - 12:30 PM">12:00 - 12:30 PM</option>
                                                <option value="01:00 - 01:30 PM">01:00 - 01:30 PM</option>
                                                <option value="02:00 - 02:30 PM">02:00 - 02:30 PM</option>
                                                <option value="04:00 - 04:30 PM">04:00 - 04:30 PM</option>
                                                <option value="05:00 - 05:30 PM">05:00 - 05:30 PM</option>
                                                <option value="06:00 - 06:30 PM">06:00 - 06:30 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='mt-3 mb-5'>
                                        <div>
                                            <label className='block mb-1'>Message or Problem</label>
                                            <textarea className='w-full border border-[#ddd] p-2 rounded-sm text-base outline-none' {...register("date",{required: true})} cols="30" rows="5"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <input className='cursor-pointer w-full text-base font-medium bg-[#40d0c6] text-white px-7 py-2 rounded-md hover:bg-black duration-500' type="submit" />
                            </form>
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