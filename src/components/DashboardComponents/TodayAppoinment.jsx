import React from 'react'
import { Link } from 'react-router-dom'

const TodayAppoinment = () => {
  return (
    <div>
        <div className='border border-[#40d0c6] p-5 rounded-md'>
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
                            <td className='py-1 bg-[#40d0c6] inline-block rounded-md text-white'>01:30PM</td>
                        </tr>
                        <tr>
                            <td className='py-1'><img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655320_1280.png" alt="" /></td>
                            <td className='py-1'>Ridoy</td>
                            <td className='py-1 bg-[#40d0c6] inline-block rounded-md text-white'>01:30PM</td>
                        </tr>
                        <tr>
                            <td className='py-1'><img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655320_1280.png" alt="" /></td>
                            <td className='py-1'>Ridoy</td>
                            <td className='py-1 bg-[#40d0c6] inline-block rounded-md text-white'>01:30PM</td>
                        </tr>
                        <tr>
                            <td className='py-1'><img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655320_1280.png" alt="" /></td>
                            <td className='py-1'>Ridoy</td>
                            <td className='py-1 bg-[#40d0c6] inline-block rounded-md text-white'>01:30PM</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Link className='inline-block mt-5 text-lg font-medium text-[#40d0c6]'>See All</Link>
        </div>
    </div>
  )
}

export default TodayAppoinment