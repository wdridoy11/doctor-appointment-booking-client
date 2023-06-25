import React from 'react'
import Banner from '../banner/Banner'
import About from '../../about/About'
import DoctorDataLoad from '../../doctors/DoctorDataLoad'
import Subscribe from '../subscribe/Subscribe'
import Blogs from '../../blogs/Blogs'


const Home = () => {
  return (
    <div>
        {/* <Banner></Banner> */}
        <About></About>
        <DoctorDataLoad></DoctorDataLoad>
        <Blogs></Blogs>
        <Subscribe></Subscribe>
    </div>
  )
}

export default Home