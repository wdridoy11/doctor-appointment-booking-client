import React from 'react'
const text =`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam eum cum harum eveniet repudiandae dignissimos pariatur consequuntur, atque quia repellendus voluptates beatae excepturi unde tempore nobis consectetur. Dolorem minima ipsam distinctio hic facilis eius molestias minus sit quas quia, tempora error reiciendis porro similique deleniti mollitia ipsa harum laboriosam qui? Suscipit doloremque explicabo repudiandae, officia saepe deserunt fugiat, culpa amet tempora sapiente odio iusto minus, ullam minima iure rerum? Ducimus molestiae laboriosam sit quod, incidunt, eaque officiis, inventore omnis voluptates optio dolorem? Nesciunt, alias deleniti aliquid dolore perspiciatis neque atque cum sapiente, culpa adipisci laborum ipsum a necessitatibus ex doloribus!`

const Overview = ({doctorData}) => {
    const {about,education,work_experience, services,awards} = doctorData;
  return (
    <div className='pt-10 pb-20'>
        <div className=''>
            <h3 className='text-xl font-bold mb-1'>About Me</h3>
            <p className='text-base font-normal'>{about}</p>
            <div className='grid grid-cols-3 gap-10'>
                <div>
                    <h3 className='text-xl font-bold my-7'>Education</h3>
                    <h3>{education}</h3>
                    <h3 className='text-xl font-bold my-7'>Work & Experience</h3>
                    <h3>{work_experience}</h3>
                    <h3 className='text-xl font-bold my-7'>Services</h3>
                    {services.map((service,index)=><li key={index}>{service}</li>)}
                </div>
                <div className='col-span-2'>
                    <h3 className='text-xl font-bold my-7'>Awards</h3>
                    {awards && awards.map((award,index)=><div key={index} className='mt-7'>
                        <p className='text-base font-normal'>July 2019</p>
                        <li className='text-lg font-semibold'>Humanitarian Award</li>
                        <p className='text-base font-normal mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    </div>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview;

