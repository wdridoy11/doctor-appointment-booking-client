import React from 'react'
const Cover = ({title,coverImg}) => {
  return (
    <div className="hero h-[400px] mb-20" style={{ backgroundImage: `url(${coverImg})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="py-14  px-10 rounded-lg glass">
            <h1 className='mb-5 text-3xl md:text-5xl font-bold'>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default Cover