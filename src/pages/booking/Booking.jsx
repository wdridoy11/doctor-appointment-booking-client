import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';
const Booking = () => {
  const serviceData = useLoaderData();
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
      form.reset();
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
    <div className='py-20'>
        <div className='container mx-auto'>
            <div className='w-full md:w-1/2 mx-auto'>
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
                      <input type="tel" name='tel' id='email' placeholder="Your Phone" className="input input-bordered" required/>
                    </div>                    
                    <div className="form-control mb-4">
                      <label className="label">
                        <span className="label-text text-base font-medium">Services</span>
                      </label>
                      <input type="text" name='services' id='services' placeholder="Services" className="input input-bordered" required/>
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
  )
}

export default Booking