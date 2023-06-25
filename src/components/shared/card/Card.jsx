import React from 'react'
import blogs from '../../../assets/banner-04.jpg'
const Card = ({blog}) => {
    const {image}=blog;
  return (
    <div>
        <img src={blogs} alt="" />
    </div>
  )
}

export default Card