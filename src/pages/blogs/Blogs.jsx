import React from 'react'
import Card from '../../components/shared/card/Card'

const Blogs = () => {

const blogContent=[
    {
        id:1,
        image:"",
    },
    {
        id:2,
        image:"",
    },
    {
        id:3,
        image:"",
    }
]


  return (
    <div className='py-20'>
        <div className='container mx-auto'>
        <h1 className='text-5xl font-semibold text-center'>Our<span className='text-[#40d0c6]'> Blogs</span> </h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {blogContent.map((blog)=><Card key={blog.id} blog={blog}></Card>)}
            </div>
        </div>
    </div>
  )
}

export default Blogs