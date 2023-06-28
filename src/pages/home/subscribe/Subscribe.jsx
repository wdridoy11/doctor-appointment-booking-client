import React from 'react'

const Subscribe = () => {
  return (
    <div>
        <div className='container mx-auto bg-[#40d0c6] p-20 rounded-[40px] mb-20'>
            <div className='grid md:grid-cols-2 gap-3'>
                <div>
                    <h1 className='text-4xl font-bold text-white'>Subscribe To <br/>Our Newsletter</h1>
                </div>
                <div>
                    <form className='relative'>
                        <input
                            type="email" 
                            name="subscribe_email" 
                            id="subscribe_email" 
                            className='input input-bordered w-full rounded-full py-5'
                            placeholder='Enter your email'
                            required
                        />
                        <button className='absolute right-0 btn rounded-full bg-black text-white font-medium px-7'>Subscribe </button>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe