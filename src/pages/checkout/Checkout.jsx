import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Checkout = () => {
    const serviceData = useLoaderData();
    console.log('Hello',serviceData)
  return (
    <div>
        <div className='container mx-auto'>
            <div>
                <form action="">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                    </div>                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Checkout