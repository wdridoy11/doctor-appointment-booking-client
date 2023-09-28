import React from 'react'
import error from '../../assets/error.png'
import { Link } from 'react-router-dom'
import Button from '../../components/shared/button/Button'
const Error = () => {
  return (
    <div className='w-full h-screen flex items-center'>
        <div className='container mx-auto'>
            <div className='text-center'>
                <h3 className='text-4xl font-semibold mb-2'>Sorry</h3>
                <p>This page is not found.</p>
                <img className='mx-auto' src={error} alt="error" />
                <Link to={'/'}>
                    <Button buttonText={"Back to home"}></Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Error