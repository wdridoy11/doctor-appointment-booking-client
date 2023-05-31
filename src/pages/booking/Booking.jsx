import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link, useLoaderData, useParams } from 'react-router-dom'
import Cover from '../../components/shared/cover/Cover';
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
  ]

  const availableSlots=[
    {
      icon:"https://cdn-icons-png.flaticon.com/512/4125/4125869.png",
      title:"Teeth Orthodontics",
      time:"8:00 AM - 9:00 AM"
    },
    {
      icon:"https://cdn-icons-png.flaticon.com/512/3124/3124597.png",
      title:"Cosmetic Dentisty",
      time:"10:05 AM - 11:30 AM"
    },
    {
      icon:"https://cdn-icons-png.flaticon.com/512/3124/3124597.png",
      title:"Teeth Cleaning",
      time:"12:00 PM - 1:00 PM"
    },
    {
      icon:"https://cdn-icons-png.flaticon.com/512/3124/3124597.png",
      title:"Cavity Protection",
      time:"2:00 PM - 3:00 PM"
    },
    {
      icon:"https://cdn-icons-png.flaticon.com/512/3124/3124597.png",
      title:"Pediatric Dental",
      time:"3:20 PM - 4:20 PM"
    },
    {
      icon:"https://cdn-icons-png.flaticon.com/512/3124/3124597.png",
      title:"Oral Surgery",
      time:"5:20 PM - 5:20 PM"
    }
  ]

const {id}=useParams();
const data = useLoaderData();
const {image}=data;
const [value, onChange] = useState(new Date());
  const handleBooking=(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.tel.value;
    const services = form.services.value;
    const date = form.date.value;
    const message = form.message.value;
    const bookingUser={name,email,phone,services,date,message}

    fetch(`http://localhost:5000/bookings`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(bookingUser)
    })
    .then((res)=>res.json())
    .then((data)=>{
      // form.reset();
      console.log(data)
      if(data.insertedId){
        Swal.fire(
          'Congratulation!',
          'Your appointment booking successful',
          'success'
        )
      }
    })

  }

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
        <div className='py-20'>
          <h4 className='text-xl font-normal text-orange-500 text-center'>Available Services on April 30, 2022</h4>
          <h3 className='text-4xl font-bold text-black text-center mt-3'>Please select a service.</h3>
          <div className='grid grid-cols-3 gap-5 mt-8'>
              {selectService.map((services,index)=><div key={index} className='shadow-md p-5 rounded-lg flex items-center gap-3'>
                  <img className='w-16 h-16 object-cover' src={services.icon} alt="services icon" />
                  <h3 className='text-2xl font-bold text-black'>{services.title}</h3>
              </div>)}
          </div>
        </div>
        <div className='pt-10 pb-20'>
          <h3 className='text-4xl font-bold text-black text-center mt-3'>Please select a service.</h3>
          <div className='grid grid-cols-3 gap-5 mt-8'>
              {availableSlots.map((services,index)=><div key={index} className='shadow-md py-12 px-10 rounded-lg gap-3 text-center'>
                <div className='bg-[#40d0c6] w-20 p-3 rounded-full mx-auto'>
                  <img className='object-cover mx-auto' src={services.icon} alt="services icon" />
                </div>
                  <h3 className='text-2xl font-bold text-black mt-7'>{services.title}</h3>
                  <h3 className='text-base font-normal text-black'>{services.time}</h3>
                  <label htmlFor="my-modal-3" className='px-5 py-2 mt-10 bg-[#40d0c6] inline-block text-lg font-semibold text-white rounded-md  gap-2 hover:bg-black duration-500'>open modal</label>
              </div>)}
          </div>
          <div>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking}>
                       <div className="form-control mb-4">
                         <label className="label">
                           <span className="label-text text-base font-medium">Name</span>
                         </label>
                         <input type="text" name='name' id="name"className="input input-bordered" placeholder="Your Name"  required/>
                       </div>                    
                       <div className="form-control mb-4">
                         <label className="label">
                           <span className="label-text text-base font-medium">Email</span>
                         </label>
                         <input type="email" name='email' id='email' placeholder="Your email" className="input input-bordered" required/>
                       </div>                   
                       <div className="form-control mb-4">
                         <label className="label">
                           <span className="label-text text-base font-medium">Phone</span>
                         </label>
                         <input type="tel" name='tel' id='tel' placeholder="Your Phone" className="input input-bordered" required/>
                       </div>                    
                       <div className="form-control mb-4">
                         <label className="label">
                           <span className="label-text text-base font-medium">Services Name</span>
                         </label>
                         <input type="text" name='services' id='services' placeholder="Services name" className="input input-bordered" required/>
                       </div>                    
                       <div className="form-control mb-4">
                         <label className="label">
                           <span className="label-text text-base font-medium">Date</span>
                         </label>
                         <input type="date" name="date" id="date" className="input input-bordered" required/>
                       </div>                    
                       <div className="form-control mb-4">
                         <label className="label">
                           <span className="label-text text-base font-medium">Message</span>
                         </label>
                         <textarea name="message" id="message" cols="30" className='textarea textarea-bordered h-32' rows="10" placeholder='Message'></textarea>
                       </div>     
                       <input type="submit" className='bg-[#40d0c6] px-10 py-3 font-medium rounded-md text-white cursor-pointer hover:bg-black duration-500' value="Booking" />               
                    </form>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>






    // <div className='py-20'>
    //     <div className='container mx-auto'>
    //         <div className='w-full md:w-1/2 mx-auto'>
    //             <form onSubmit={handleBooking}>
    //                 <div className="form-control mb-4">
    //                   <label className="label">
    //                     <span className="label-text text-base font-medium">Name</span>
    //                   </label>
    //                   <input type="text" name='name' id="name"className="input input-bordered" placeholder="Your Name"  required/>
    //                 </div>                    
    //                 <div className="form-control mb-4">
    //                   <label className="label">
    //                     <span className="label-text text-base font-medium">Email</span>
    //                   </label>
    //                   <input type="email" name='email' id='email' placeholder="Your email" className="input input-bordered" required/>
    //                 </div>                   
    //                 <div className="form-control mb-4">
    //                   <label className="label">
    //                     <span className="label-text text-base font-medium">Phone</span>
    //                   </label>
    //                   <input type="tel" name='tel' id='tel' placeholder="Your Phone" className="input input-bordered" required/>
    //                 </div>                    
    //                 <div className="form-control mb-4">
    //                   <label className="label">
    //                     <span className="label-text text-base font-medium">Services Name</span>
    //                   </label>
    //                   <input type="text" name='services' id='services' placeholder="Services name" className="input input-bordered" required/>
    //                 </div>                    
    //                 <div className="form-control mb-4">
    //                   <label className="label">
    //                     <span className="label-text text-base font-medium">Date</span>
    //                   </label>
    //                   <input type="date" name="date" id="date" className="input input-bordered" required/>
    //                 </div>                    
    //                 <div className="form-control mb-4">
    //                   <label className="label">
    //                     <span className="label-text text-base font-medium">Message</span>
    //                   </label>
    //                   <textarea name="message" id="message" cols="30" className='textarea textarea-bordered h-32' rows="10" placeholder='Message'></textarea>
    //                 </div>     
    //                 <input type="submit" className='bg-[#40d0c6] px-10 py-3 font-medium rounded-md text-white cursor-pointer hover:bg-black duration-500' value="Booking" />               
    //             </form>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Booking