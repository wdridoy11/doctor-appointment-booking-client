import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useLoaderData } from 'react-router-dom'
import Cover from '../../components/shared/cover/Cover';
import { AuthContext } from '../../context/AuthProvider';
const bookingCover =`https://img.freepik.com/free-photo/stethoscope-copy-space_23-2147652347.jpg?w=1380&t=st=1685502964~exp=1685503564~hmac=3401485f1b88a73e110d94f720fac2311403fa16ff197f7c70f6da339d9056fb`

const Booking = () => {

  const selectService=[
    {
      icon:"https://cdn-icons-png.flaticon.com/512/4125/4125869.png",
      title:"Teeth Orthodontics"
    },
    {
      icon:"https://cdn-icons-png.flaticon.com/512/3124/3124597.png",
      title:"Cosmetic Dentisty"
    },
    {
      icon:"https://cdn-icons-png.flaticon.com/512/3124/3124597.png",
      title:"Teeth Cleaning"
    },
    {
      icon:"https://cdn-icons-png.flaticon.com/512/3124/3124597.png",
      title:"Cavity Protection"
    },
    {
      icon:"https://cdn-icons-png.flaticon.com/512/3124/3124597.png",
      title:"Pediatric Dental"
    },
    {
      icon:"https://cdn-icons-png.flaticon.com/512/3124/3124597.png",
      title:"Oral Surgery"
    }
  ];
  const availableSlots=[
    {
      id: "647700e99dbc47631ab75280",
      icon:"https://cdn-icons-png.flaticon.com/512/4125/4125869.png",
      title:"Teeth Orthodontics",
      time:"8:00 AM - 9:00 AM"
    },
    {
      id: "647700ff863de23822205476",
      icon:"https://cdn-icons-png.flaticon.com/512/3124/3124597.png",
      title:"Cosmetic Dentisty",
      time:"10:05 AM - 11:30 AM"
    },
    {
      id: "647700ff4a9f56973d99d8db",
      icon:"https://cdn-icons-png.flaticon.com/512/3124/3124597.png",
      title:"Teeth Cleaning",
      time:"12:00 PM - 1:00 PM"
    },
    {
      id: "647700ff766caef5ca0f3085",
      icon:"https://cdn-icons-png.flaticon.com/512/3124/3124597.png",
      title:"Cavity Protection",
      time:"2:00 PM - 3:00 PM"
    },
    {
      id: "647700ff6ee64e95a809d735",
      icon:"https://cdn-icons-png.flaticon.com/512/3124/3124597.png",
      title:"Pediatric Dental",
      time:"3:20 PM - 4:20 PM"
    },
    {
      id: "647700ffd6f740651c97dc52",
      icon:"https://cdn-icons-png.flaticon.com/512/3124/3124597.png",
      title:"Oral Surgery",
      time:"5:20 PM - 5:20 PM"
    }
  ]
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

    fetch(`http://localhost:5000/bookings`,{
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
  // handleModul
  const handleModul =(id)=>{
    const servicesFilter =  availableSlots.find((services)=>services.id === id);
    setServicesData(servicesFilter);
  }

  // date manage
  const month = months[value.getMonth()];
  const orderDate = `${month} ${value.getDay()}, ${value.getFullYear()}`

  return (
    <div>
      <Cover coverImg={bookingCover} title="Appointment"></Cover>
      <div className='container mx-auto px-5'>
        <div className='grid md:grid-cols-2 items-center gap-7'>
          <div className='mx-auto'>
              <Calendar onChange={onChange} value={value} />
          </div>
          <div>
            <img className='w-full h-96 object-cover object-top rounded-lg' src={image} alt="" />
          </div>
        </div>
        <div className='pt-10 pb-20'>
          <h3 className='text-4xl font-bold text-black text-center mt-3'>Please select a service.</h3>
          <div className='grid grid-cols-3 gap-5 mt-8'>
              {availableSlots.map((services)=><div key={services.id} className='shadow-md py-12 px-10 rounded-lg gap-3 text-center'>
                <div className='bg-[#40d0c6] w-20 p-3 rounded-full mx-auto'>
                  <img className='object-cover mx-auto' src={services.icon} alt="services icon" />
                </div>
                  <h3 className='text-2xl font-bold text-black mt-7'>{services.title}</h3>
                  <h3 className='text-base font-normal text-black'>{services.time}</h3>
                  <label onClick={()=>handleModul(services.id)} htmlFor="my-modal-3" className='px-5 py-2 mt-10 bg-[#40d0c6] inline-block text-lg font-semibold text-white rounded-md  gap-2 hover:bg-black duration-500'>open modal</label>
              </div>)}
          </div>
          {/* modul data */}
          <div>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking}>
                      <h3 className='text-2xl font-bold text-black text-center mb-5 pt-5'>{servicesData.title}</h3>
                      <input type="text" name='date' id="date" className="w-full input input-bordered mb-4" defaultValue={orderDate} disabled/>                
                      <input type="text" name='time' id="time" className="w-full input input-bordered mb-4"  defaultValue={servicesData.time} disabled/>                
                      <input type="email" name='email' id='email' className="w-full input input-bordered mb-4" defaultValue={user?.email} disabled/>                  
                      <input type="text" name='name' id="name" className="w-full input input-bordered mb-4" placeholder="Your Name" required/>
                      <input type="tel" name='tel' id='tel' className="w-full input input-bordered mb-4" placeholder="Your Phone" required/>
                      <input type="submit" className='bg-[#40d0c6] px-10 py-3 font-medium rounded-md text-white cursor-pointer hover:bg-black duration-500' value="Booking" />               
                    </form>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking