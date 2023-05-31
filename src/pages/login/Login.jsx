import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';
const googleIcon=`https://cdn-icons-png.flaticon.com/512/281/281764.png`;

const Login = () => {

    const {loginUser,createUserUsingGoogle,createUserUsingGithub} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate(); 
    const from = location.state?.from?.pathname || '/';
    // handle login
    const  handleLogin=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email,password)
        .then((result)=>{
            const user = result.user;
            console.log(user)
            navigate(from,{replace:true})
        })
        .catch((error)=>console.log(error.message))
    }

  return (
    <div className='w-full items-center py-20'>
    <div className='container mx-auto'>
        <div>
            <div className='w-full lg:w-1/2 mx-auto'>
                <div className='border border-slate-300 p-10 rounded-lg'>
                    <h3 className='text-4xl font-bold mb-10 text-center text-[#40d0c6]'>Login</h3>
                    <form onSubmit={handleLogin}>
                        <input className='w-full border-b border-[#ddd] mb-7 pb-2 text-base outline-none' type="email" name="email" id="email" placeholder='Enter your email' required/>
                        <input className='w-full border-b border-[#ddd] mb-7 pb-2 text-base outline-none' type="password" name="password" id="password" placeholder='Enter your password' required/>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <input className='checkbox' type="checkbox" name="checkbox" id="checkbox"  value="Remember Me"/>
                                <label className='font-medium text-black' htmlFor="checkbox">Remember Me</label>
                            </div>
                            <Link className='text-[#40d0c6] text-base font-medium'>Forgot Password</Link>
                        </div>
                        <button className='btn text-white bg-[#40d0c6] w-full border-0 rounded-none mt-10 mb-4 duration-500'>login</button>
                    </form>
                    <div className='mx-auto text-center flex gap-2 justify-center my-5'>
                        <button className='bg-[#F5F5F8] rounded-full p-2 text-2xl text-[#3B5998]' onClick={createUserUsingGithub}><FaGithub></FaGithub></button>
                        <button className='bg-[#F5F5F8] rounded-full p-2 text-2xl' onClick={createUserUsingGoogle}><img className='w-7' src={googleIcon} alt="" /></button>
                    </div>
                    <p className='text-center text-base font-medium'>Have an account? <Link to={`/registration`} className='text-[#40d0c6]'>Registration</Link></p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login