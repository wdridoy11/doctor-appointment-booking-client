import React from 'react'
import Banner from '../banner/Banner'
import ServicesDataLoad from '../../services/ServicesDataLoad'
import About from '../../about/About'

const Home = () => {
  return (
    <div>
        {/* <Banner></Banner> */}
        <About></About>
        <ServicesDataLoad></ServicesDataLoad>
    </div>
  )
}

export default Home