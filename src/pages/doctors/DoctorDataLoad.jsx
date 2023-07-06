import React, { useEffect, useState } from 'react'
import Doctor from './Doctor'
const DoctorDataLoad = () => {

const [doctor,setDoctor] = useState([]);
useEffect(()=>{
    fetch(`https://doctor-booking-server.vercel.app/doctors`)
    .then((res)=>res.json())
    .then((data)=>setDoctor(data))
    .catch((error)=>console.log(error.message))
},[])

  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        <div>
            <h1 className='text-5xl font-semibold text-center'>We Provide Assistance in <span className='text-[#40d0c6]'>Service</span> </h1>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
            {doctor.map((doctor)=><Doctor key={doctor._id} doctor={doctor}></Doctor>)}
        </div>
        </div>
    </div>
  )
}

export default DoctorDataLoad