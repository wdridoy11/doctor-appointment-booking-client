import React from 'react'

const BookingDetails = ({booking}) => {
    const {name,email,phone,services,date,message}=booking;
  return (
        <>
        <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src="/tailwind-css-component-profile-4@56w.png" alt="Services img" />
                  </div>
                </div>
              </div>
            </td>
            <td>{services}</td>
            <td>{name}</td>
            <td>{date}</td>
            <th>
            <button className="btn btn-circle bg-red-500 border-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            </th>
        </tr>    
    </>
  )
}

export default BookingDetails