import React, { useEffect } from 'react'
import { faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Patients = ({patient, sethoverPatientsData}) => {

  const {firstName,lastName,message,gender,email,date,time,image} = patient.newBooking;
  
  // appoinment approved button handle
  const handelApproved=(id)=>{
    
    console.log(id)
    fetch(`http://localhost:5000/booking/approved/${id}`,{
      method:"PATCH",
      headers:{
        "content-type":"application/json"
      }
    })
    .then((res)=>res.json())
    .then((data)=>console.log("Hello"))
    .catch((err)=>console.log(err.message))
  }

  // appoinment Cancel button handle
  const handelCancel=(id)=>{
    console.log(id)
    fetch(`http://localhost:5000/booking/cancel/${id}`,{
      method:"PATCH",
      headers:{
        "content-type":"application/json"
      }
    })
    .then((res)=>res.json())
    .then((data)=>console.log("Hello"))
    .catch((err)=>console.log(err.message))
  }

  const handleHoverData =()=>{
    sethoverPatientsData(patient)
  }

  return (
    <>
        <tr onMouseOver={handleHoverData} className='hover'>
            <td>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 ring-2 rounded-full">
                    <img className='rounded-full' src={image} alt="profile photo" />
                  </div>
                </div>
              </td>
              <td>{firstName}</td>
              <td>{date}</td>
              <td className='text-sm'>{time}</td>
              <td>
                <div>
                  {patient.status === "approved" ? <p className='text-lg text-[#40d0c6]'>Approved</p>:
                    <div>
                      {patient.status === "cancel" ? <p className='text-lg text-red-500'>Cancel</p>:
                        <div className='flex gap-3'>
                          <div>
                              <button onClick={()=>handelApproved(patient._id)} className='bg-[#40d0c6] px-2 py-1 rounded-md hover:bg-black duration-500'>
                                  <FontAwesomeIcon className='text-white text-lg' icon={faCheck} title='Accept' />
                              </button>
                          </div>
                          <div>
                              <button onClick={()=>handelCancel(patient._id)} className='bg-red-500 px-2 py-1 rounded-md hover:bg-black duration-500'>
                                  <FontAwesomeIcon className='text-white text-lg' icon={faCircleXmark} title='Cancel' />
                              </button>
                          </div>
                          {/* <div>
                              <button className='bg-[#40d0c6] px-2 py-1 rounded-md hover:bg-black duration-500'>
                                  <FontAwesomeIcon className='text-white text-lg' icon={faMessage} title='Message' />
                              </button>
                          </div> */}
                        </div>
                      }
                    </div>
                  }
                </div>
              </td>
            </tr>
        </>
    )
}

export default Patients