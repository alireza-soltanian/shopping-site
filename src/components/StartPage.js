import React from "react";
import { EffectCards, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./StartPage.css";

export default function StartPage() {
  const images = [
    "/images/start5.avif",
    "/images/start2.jpg",
    "/images/slide3.jpg",
    "/images/start1.avif",
  ];

  return (
      <div className="slider-wrapper">
        
        <div className="slider-container">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Pagination, Autoplay, Navigation]}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="mySwiper"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className="glass-card">
                <div className="image-frame">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="slide-image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
  );
}
