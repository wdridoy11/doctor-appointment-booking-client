import React from 'react'
import Header from '../components/shared/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/shared/footer/Footer'

const Main = () => {
  return (
    <div>
        <div className='pb-16'>
          <Header></Header>
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main