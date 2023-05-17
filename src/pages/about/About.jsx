import React from 'react'
import about1 from '../../assets/about-01.jpg'
import about2 from '../../assets/about-02.jpg'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 items-center gap-10'>
                <div className='grid grid-cols-2 gap-10'>
                    <img className='w-full h-[500px] object-cover rounded-lg' src={about1} alt="about" />
                    <img className='w-full h-[500px] object-cover object-left rounded-lg mt-24' src={about2} alt="about" />
                </div>
                <div>
                    <h4 className='text-[#40d0c6] text-base font-semibold mb-5'>Our About Us</h4>
                    <h1 className='text-5xl font-bold text-black pr-0 lg:pr-20'>About Our Medical Central Hospital This <span className='text-[#40d0c6]'>Doctor</span></h1>
                    <p className='text-base text-slate-500 font-normal my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae cum, dolor at laudantium cumque
                       quia voluptate accusamus culpa hic! Optio, non mollitia. Ex atque, necessitatibus, recusandae
                       exercitationem maxime odit dolor laudantium tempora corporis magnam iure in. Totam error assumenda
                       saepe nam. Veniam ex explicabo iure inventore. Earum, eaque eveniet sed ab magni esse velit molestias
                       delectus amet assumenda nam quasi deleniti vero quae ut! Dicta earum id, non a temporibus fugiat est
                       ducimus nemo atque aliquid voluptatem cupiditate officia obcaecati laboriosam sit similique maiores.
                       Eligendi odit dolores ipsa? Voluptatibus cum, eveniet fugiat odio beatae fugit quos facere debitis commodi!
                    </p>
                    <Link className='px-10 py-3 bg-[#40d0c6] text-lg font-semibold text-white rounded-md gap-2 hover:bg-black duration-500'>Read More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About