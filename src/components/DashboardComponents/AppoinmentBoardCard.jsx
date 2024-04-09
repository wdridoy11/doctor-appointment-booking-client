import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AppoinmentBoardCard = ({icon,title,patients,text}) => {
  return (
    <div>
        <div className='bg-white rounded-md p-7 flex items-center gap-5'>
            <div>
                <FontAwesomeIcon className='text-3xl p-5 ring-2 rounded-full ring-[#40d0c6] text-[#40d0c6]' icon={icon} />
            </div>
            <div>
                <h3 className='text-xl'>{title}</h3>
                <h1 className='text-2xl font-semibold'>{patients}</h1>
                <p className='text-base'>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default AppoinmentBoardCard