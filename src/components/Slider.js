import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css"; 

const Slider = () => {
  return (
    <Swiper
      modules={[ Pagination, A11y , Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="slider"
    >
      <SwiperSlide>
        <img src="/images/slider1.avif" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slider2.avif" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slider3.avif" alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slider4.avif" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slider5.avif" alt="Slide 1" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
