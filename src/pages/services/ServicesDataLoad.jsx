import React, { useEffect, useState } from 'react'
import Services from './Services';

const ServicesDataLoad = () => {

const [services,setServices] = useState([]);

useEffect(()=>{
    fetch(`http://localhost:5000/services`)
    .then((res)=>res.json())
    .then((data)=>setServices(data))
    .catch((error)=>console.log(error.message))
},[])

  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        <div>
            <h1 className='text-5xl font-semibold text-center'>We Provide Assistance in <span className='text-[#40d0c6]'>Service</span> </h1>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
            {services.map((service)=><Services key={service._id} service={service}></Services>)}
        </div>
        </div>
    </div>
  )
}

export default ServicesDataLoad