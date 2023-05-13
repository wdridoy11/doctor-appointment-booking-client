import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './banner.css'

import banner1 from '../../../assets/banner-01.jpg'
import banner2 from '../../../assets/banner-02.jpg'
import banner3 from '../../../assets/banner-03.jpg'
import banner4 from '../../../assets/banner-04.jpg'

// import required modules
import { Mousewheel, Pagination } from "swiper";
const Banner = () => {
    return (
        <>
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><img className="banner" src={banner1} alt="Banner" /></SwiperSlide>
            <SwiperSlide><img className="banner" src={banner2} alt="Banner" /></SwiperSlide>
            <SwiperSlide><img className="banner" src={banner3} alt="Banner" /></SwiperSlide>
            <SwiperSlide><img className="banner" src={banner4} alt="Banner" /></SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </>
      );
}

export default Banner