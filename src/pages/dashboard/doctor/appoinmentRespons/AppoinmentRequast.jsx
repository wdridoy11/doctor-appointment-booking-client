import React from 'react'
import { faChartBar, faCheck, faCircleXmark, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const AppoinmentRequast = () => {
    return (
        <div>
            <div className='border border-gray-200 p-5 rounded-md'>
                <h4 className='text-lg font-medium mb-3'>Appoinment Requast</h4>
                <div className="overflow-x-auto">
                    <table className='table w-full'>
                        <thead>
                            <tr>
                                <th className='bg-white'>Image</th>
                                <th className='bg-white'>Name</th>
                                <th className='bg-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='py-1'><img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655320_1280.png" alt="" /></td>
                                <td className='py-1'>Ridoy</td>
                                <td className='py-1'>
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
                                </td>
                            </tr>
                            <tr>
                                <td className='py-1'><img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655320_1280.png" alt="" /></td>
                                <td className='py-1'>Ridoy</td>
                                <td className='py-1'>
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
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Link className='inline-block mt-3 text-lg font-medium text-[#40d0c6]'>See All</Link>
            </div>
        </div>
      )
}

export default AppoinmentRequast