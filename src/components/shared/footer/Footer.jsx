import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo-1.png'

const Footer = () => {
  return (
    <div>
      <div className='container mx-auto'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4'>
            <div>
              <Link to={'/'}>
                <img className='w-32' src={logo} alt="" />
              </Link>
              <p className='mt-3 font-medium text-slate-700'>
                Our approach to itis unique around know work an we 
                know doesn’t work verified factors in play.
              </p>
            </div>
            <div>
              
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer