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
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {blogContent.map((blog)=><Card key={blog.id} blog={blog}></Card>)}
            </div>
        </div>
    </div>
  )
}

export default Blogs