import React from 'react'
import Banner from '../banner/Banner'
import About from '../../about/About'
import DoctorDataLoad from '../../doctors/DoctorDataLoad'
import Subscribe from '../subscribe/Subscribe'
import Blogs from '../../blogs/Blogs'
import Emergency from '../emergency/Emergency'
import Counter from '../counter/Counter'


const Home = () => {
  return (
    <div>
        {/* <Banner></Banner> */}
        <About></About>
        <Counter></Counter>
        <DoctorDataLoad></DoctorDataLoad>
        <Emergency></Emergency>
        <Blogs></Blogs>
        <Subscribe></Subscribe>
    </div>
  )
}

export default Home