import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Sponsor({children}) {
    const  sponsorSlider =
     {
        slidesPerView: "auto",
        speed: 1200,
        spaceBetween: 20,
        autoplay: true,
        loop: true,
        roundLengths: true,
        
        breakpoints: {
          280:{
              slidesPerView: 2,
            navigation: false,
            },
            320:{
              slidesPerView: 2,
            navigation: false,
            },
          576:{
            slidesPerView: 3,
            navigation: false,
          },
          768:{
            slidesPerView: 4,
            navigation: false,
          },
          992:{ 
            slidesPerView: 5
          },
          1200:{
            slidesPerView: 5
          },
          1400:{
            slidesPerView: 6
          },
        }
     }
  return (
    <div className="partner-section pb-120">
  <div className="container">
    {children}
    <div className="row justify-content-center">
      <Swiper {...sponsorSlider} className="swiper partner-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="partner-single">
              <img src="assets/images/icons/partner1.svg" alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="partner-single">
              <img src="assets/images/icons/partner2.svg" alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="partner-single">
              <img src="assets/images/icons/partner3.svg" alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="partner-single">
              <img src="assets/images/icons/partner4.svg" alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="partner-single">
              <img src="assets/images/icons/partner5.svg" alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="partner-single">
              <img src="assets/images/icons/partner1.svg" alt="image" />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  </div>
</div>

  )
}

export default Sponsor