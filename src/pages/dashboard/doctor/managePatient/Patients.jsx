import React from 'react'
import { faChartBar, faCheck, faCircleXmark, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const Patients = ({patient}) => {

    console.log(patient)
    const {firstName,lastName,message,gender,email,date,time,image} =patient

  return (
    <>
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12">
                    <img className='rounded-full' src={image} alt="profile photo" />
                  </div>
                </div>
              </td>
              <td>{firstName}</td>
              <td>date</td>
              <td>Ridoy</td>
              <td className='text-sm'>{time}</td>
              <td>
                <div>
                  <div className='flex gap-3'>
                      <div>
                          <button className='bg-[#40d0c6] px-2 py-1 rounded-md hover:bg-black duration-500'>
                              <FontAwesomeIcon className='text-white text-lg' icon={faCheck} title='Accept' />
                          </button>
                      </div>
                      <div>
                          <button className='bg-red-500 px-2 py-1 rounded-md hover:bg-black duration-500'>
                              <FontAwesomeIcon className='text-white text-lg' icon={faCircleXmark} title='Cancel' />
                          </button>
                      </div>
                      <div>
                          <button className='bg-[#40d0c6] px-2 py-1 rounded-md hover:bg-black duration-500'>
                              <FontAwesomeIcon className='text-white text-lg' icon={faMessage} title='Message' />
                          </button>
                      </div>
                    </div>
                </div>
              </td>
            </tr>
        </>
    )
}

export default Patients