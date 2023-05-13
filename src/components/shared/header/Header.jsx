import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo-1.png'

const Header = () => {
  return (
    <div className='bg-transparent py-5'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='w-32 bg-white' src={Logo} alt="" />
                </div>
                <div className='flex gap-6 items-center'>
                    <Link className='text-base font-medium text-black' to={`/`}>Home</Link>
                    <Link className='text-base font-medium text-black' to={`/news`}>News</Link>
                    <Link className='text-base font-medium text-black' to={`/destination`}>Destination</Link>
                    <Link className='text-base font-medium text-black' to={`/`}>Blog</Link>
                    <Link className='text-base font-medium text-black' to={`/contact`}>Contact</Link>
                    {/* {user ? <>
                        <p className='text-base text-black font-medium'>{user.displayName}</p>
                        <Link className='text-base font-medium bg-[#F9A51A] text-black px-4 py-1 rounded-md'>Logout</Link>
                    </>:
                    <Link className='text-base font-medium bg-[#F9A51A] text-black px-4 py-1 rounded-md' to={`/login`}>Login</Link>
                    } */}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header