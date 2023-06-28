import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo-1.png'
import footer from '../../../assets/footer.jpg'
const Footer = () => {
  return (
    <div className='py-20' style={{backgroundImage:`url(${footer})`}}>
      <div className='container mx-auto'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4'>
            <div>
              <Link to={'/'}>
                <img className='w-32' src={logo} alt="Logo" />
              </Link>
              <p className='mt-3 font-medium text-slate-700'>
                Our approach to itis unique around know work an we 
                know doesn’t work verified factors in play.
              </p>
            </div>
            <div>
                <h3>Navigation</h3>
                <div className='flex flex-col'>
                    <Link className='text-base font-medium text-black' to={`/`}>Home</Link>
                    <Link className='text-base font-medium text-black' to={`/`}>About</Link>
                    <Link className='text-base font-medium text-black' to={`/`}>Services</Link>
                    <Link className='text-base font-medium text-black' to={`/`}>Blog</Link>
                    <Link className='text-base font-medium text-black' to={`/`}>Contact</Link>
                </div>
            </div>
            <div>
              <h3>Follow US</h3>
              <div className='flex items-center gap-3'>
                  <Link className='border p-3 rounded-full text-black' to={`https://web.facebook.com/wdridoy11`} target='_blank'>
                      <FaFacebookF className='text-xl'></FaFacebookF>
                  </Link>
                  <Link className='border p-3 rounded-full text-black' to={`https://twitter.com/wdridoy11`} target='_blank'>
                      <FaTwitter className='text-xl'></FaTwitter>
                  </Link>
                  <Link className='border p-3 rounded-full text-black' to={`https://www.instagram.com/wdridoy11/`} target='_blank'>
                      <FaInstagram className='text-xl'></FaInstagram>
                  </Link>
                  <Link className='border p-3 rounded-full text-black' to={`https://www.linkedin.com/in/wdridoy11/`} target='_blank'>
                      <FaLinkedin className='text-xl'></FaLinkedin>
                  </Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer