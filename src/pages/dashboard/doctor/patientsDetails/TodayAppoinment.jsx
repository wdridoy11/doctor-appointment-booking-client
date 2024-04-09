import React from 'react'
import { Link } from 'react-router-dom'

const TodayAppoinment = () => {
  return (
    <div>
        <div className='border border-gray-200 p-5 rounded-md'>
            <h4 className='text-lg font-medium mb-3'>Today Appoinment</h4>
            <div className="overflow-x-auto">
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th className='bg-white'>Patient</th>
                            <th className='bg-white'>Name</th>
                            <th className='bg-white'>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='py-1'><img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655320_1280.png" alt="" /></td>
                            <td className='py-1'>Ridoy</td>
                            <td className='py-1'>
                                <Link className='bg-[#40d0c6] rounded-md text-white px-3 py-2'>01:30PM</Link>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-1'><img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655320_1280.png" alt="" /></td>
                            <td className='py-1'>Ridoy</td>
                            <td className='py-1'>
                                <Link className='bg-[#40d0c6] rounded-md text-white px-3 py-2'>01:30PM</Link>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-1'><img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655320_1280.png" alt="" /></td>
                            <td className='py-1'>Ridoy</td>
                            <td className='py-1'>
                                <Link className='bg-[#40d0c6] rounded-md text-white px-3 py-2'>01:30PM</Link>
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

export default TodayAppoinment