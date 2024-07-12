import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';
import Patients from './Patients';

const Appointment = () => {

  const [patients, setPatients] = useState();
  const [hoverPatientsData,sethoverPatientsData]=useState();
  const {user} = useContext(AuthContext);

  useEffect(()=>{
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
    .then((res)=>res.json())
    .then((data)=>{
      setPatients(data)
      sethoverPatientsData(data[0])
    })
    .catch((error)=>console.log(error.message))
  },[]);

  // const {firstName,lastName,gender,email,date,time,image,phoneNumber} = hoverPatientsData?.newBooking;

  return (
    <div>
        <div className='grid grid-cols-3 gap-5'>
            <div className='col-span-2 bg-white'>
              <div className="overflow-x-auto">
                <table className="table w-full">
                  {/* head */}
                  <thead>
                    <tr className='border-b'>
                      <th className='bg-white capitalize'>Patient</th>
                      <th className='bg-white capitalize'>Name</th>
                      <th className='bg-white capitalize'>App.Date</th>
                      <th className='bg-white capitalize'>Time</th>
                      <th className='bg-white capitalize'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients?.map((patient) =><Patients patient={patient} sethoverPatientsData={sethoverPatientsData}/>)}
                  </tbody>
                </table>
              </div>
            </div>
            <div className='col-span-1 bg-white'>
              <div className='border border-gray-200 p-5 rounded-md'>
                <h4 className='text-lg font-medium mb-3'>Patient Details</h4>
                <div>
                    <div className='grid grid-cols-3 items-center'>
                    {/* <div className='flex justify-between items-center'> */}
                        <div>
                            {/* <img className='w-10 h-10 rounded-full' src={image} alt="" /> */}
                        </div>
                        <div>
                            <h4 className='text-lg font-medium'>Patient Name</h4>
                            {/* <p className='text-base'>{`${firstName} ${lastName}`}</p> */}
                        </div>
                        <div>
                            <h4 className='text-lg font-medium'>Patient ID</h4>
                            {/* <p className='text-base'>{phoneNumber}</p> */}
                        </div>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <div>
                            <h4 className='text-lg font-medium'>Appoinment Date</h4>
                            {/* <p className='text-base'>{date}</p> */}
                        </div>
                        <div>
                            <h4 className='text-lg font-medium'>Appoinment Time</h4>
                            {/* <p className='text-base'>{time}</p> */}
                        </div>
                        <div>
                            <h4 className='text-lg font-medium'>Sex</h4>
                            {/* <p className='text-base'>{gender}</p> */}
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2 mt-5'>
                        {/* <Link className='bg-[#40d0c6] rounded-md text-white px-3 py-2'>{phoneNumber}</Link> */}
                        {/* <Link className='bg-[#40d0c6] rounded-md text-white px-3 py-2'>{time}</Link> */}
                    </div>
                </div>
                {/* <Link className='inline-block mt-2 text-lg font-medium text-white w-full px-5 py-2 rounded-md bg-[#40d0c6]'>{email}</Link> */}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Appointment