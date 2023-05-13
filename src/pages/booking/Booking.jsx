import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Booking = () => {
    const serviceData = useLoaderData();
    console.log('Hello',serviceData)

    

  return (
    <div className='py-20'>
        <div className='container mx-auto'>
            <div className='w-full md:w-1/2 mx-auto'>
                <form action="">
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