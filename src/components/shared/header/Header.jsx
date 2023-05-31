import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo-1.png'
import { AuthContext } from '../../../context/AuthProvider'

const Header = () => {
  
  const {user,logOut} = useContext(AuthContext);
  const userLogout=()=>{
    logOut()
    .then((result)=>console.log(result))
      .catch((error)=>{
        console.log(error.message)
      })
  }

  return (
    <div className='bg-transparent py-5 fixed z-10 bg-opacity-30 bg-base-100 w-full'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <div>
                    <Link to={'/'}><img className='w-32 bg-white' src={Logo} alt="logo" /></Link>
                </div>
                <div className='flex gap-6 items-center'>
                    <Link className='text-base font-medium text-black' to={`/`}>Home</Link>
                    <Link className='text-base font-medium text-black' to={`/`}>About</Link>
                    <Link className='text-base font-medium text-black' to={`/`}>Services</Link>
                    <Link className='text-base font-medium text-black' to={`/`}>Blog</Link>
                    <Link className='text-base font-medium text-black' to={`/`}>Contact</Link>
                     {user ? <div>
                        <Link className='text-base font-medium bg-[#40d0c6] text-white px-7 py-2 rounded-full hover:bg-black duration-500 mr-2' to={'/my_appointment'}>My Appointment</Link>
                        <Link className='text-base font-medium bg-[#40d0c6] text-white px-7 py-2 rounded-full hover:bg-black duration-500' onClick={userLogout}>Logout</Link>
                    </div>:
                    <Link className='text-base font-medium bg-[#40d0c6] text-white px-7 py-2 rounded-full hover:bg-black duration-500' to={`/login`}>Login</Link>
                    } 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header