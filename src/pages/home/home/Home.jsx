import React from 'react'
import Banner from '../banner/Banner'
import About from '../../about/About'
import DoctorDataLoad from '../../services/DoctorDataLoad'

const Home = () => {
  return (
    <div>
        {/* <Banner></Banner> */}
        {/* <About></About> */}
        <DoctorDataLoad></DoctorDataLoad>
    </div>
  )
}

export default Home