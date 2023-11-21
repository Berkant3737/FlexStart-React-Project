import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

function TestimonialsContent({ Data }) {
  const [activeIndex, setActiveIndex] = useState(Math.floor(Data.length / 2));

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        /* autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }} */
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
        initialSlide={Math.floor(Data.length / 2)}
        centeredSlides={true}
        loop={true} // Slaytları döngü içinde tutar
      >
        {Data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card w-100 ">
              <div className="card-body p-0">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="card-text">{item.description}</p>
                <div className="profile">
                  <img src={item.image} className="testimonial-img" alt="" />
                  <h3>{item.name}</h3>
                  <h4>{item.job}</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default TestimonialsContent;
