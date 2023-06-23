import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';
import "./registration.css";
const googleIcon=`https://cdn-icons-png.flaticon.com/512/281/281764.png`;

const Registration = () => {
    const {createUserUsingEmail, createUserUsingGoogle, createUserUsingGithub} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignup =(event)=>{
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUserUsingEmail(email,password)
        .then((result)=>{
          const user = result.user;
          console.log(user)
          navigate('/')
        })
        .catch((error)=>{
          console.log(error.message)
        })
    }

  return (
    <div className='w-full items-center py-20'>
    <div className='container mx-auto'>
        <div>
            <div className='w-full lg:w-1/2 mx-auto'>
                <div className='border border-slate-300 p-10 rounded-lg'>
                    <h3 className='text-4xl font-bold mb-10 text-center text-[#40d0c6]'>Registration</h3>
                    <form onSubmit={handleSignup}>
                        <input className='w-full border-b border-[#ddd] mb-7 pb-2 text-base outline-none' type="name" name="name" id="name" placeholder='Enter your name' required/>
                        <div className='mb-4'>
                            <label className='text-lg font-normal text-slate-500 mb-1 block' htmlFor="photoUpload">Your photo</label>
                            <input className='file-input border-b border-[#40d0c6] text-lg font-normal text-slate-500 w-full' accept="image/gif, image/jpeg, image/png"  type="file" name="file" id="photoUpload" />
                        </div>
                        <input className='w-full border-b border-[#ddd] mb-7 pb-2 text-base outline-none' type="email" name="email" id="email" placeholder='Enter your email' required/>
                        <input className='w-full border-b border-[#ddd] mb-7 pb-2 text-base outline-none' type="password" name="password" id="password" placeholder='Enter your password' required/>
                        <button className='btn text-white bg-[#40d0c6] w-full border-0 rounded-none mt-10 mb-4 duration-500'>Registration</button>
                    </form>
                    <div className='mx-auto text-center flex gap-2 justify-center my-5'>
                        <button className='bg-[#F5F5F8] rounded-full p-2 text-2xl text-[#3B5998]'onClick={createUserUsingGithub}><FaGithub></FaGithub></button>
                        <button className='bg-[#F5F5F8] rounded-full p-2 text-2xl' onClick={createUserUsingGoogle}><img className='w-7' src={googleIcon} alt="" /></button>
                    </div>
                    <p className='text-center text-base font-medium'>Have an account? <Link to={`/login`} className='text-[#40d0c6]'>Login</Link></p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Registration