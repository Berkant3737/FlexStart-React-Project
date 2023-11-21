import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

function OurClientsContent({ Data }) {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={40}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {Data.map((item) => (
        <SwiperSlide>
          <img src={item.image} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default OurClientsContent;
