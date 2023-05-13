import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ServicesDetails = () => {
    const servicesData = useLoaderData();
    console.log(servicesData);
  return (
    <div>ServicesDetails</div>
  )
}

export default ServicesDetails