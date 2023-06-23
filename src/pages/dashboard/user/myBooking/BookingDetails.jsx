import React from 'react'
const pImg=`https://cdn.pixabay.com/photo/2023/04/11/11/21/butterfly-7916963_960_720.jpg`;

const BookingDetails = ({booking,handleRemoveBooking}) => {
    const {_id,name,phone,date,time }= booking;
  return (
        <>
        <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask w-12 h-12">
                    <img src={pImg} alt="Services img" />
                  </div>
                </div>
              </div>
            </td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>
              <p>{date}</p>
              <p>{time}</p>
            </td>
            <th>
            <button onClick={()=>handleRemoveBooking(_id)} className="btn btn-circle bg-red-500 border-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            </th>
        </tr>    
    </>
  )
}

export default BookingDetails