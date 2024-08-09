import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Home5Partnar() {
  const  partnarSlider =
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
    <div className="row justify-content-center">
      <div className="col-xl-8 col-lg-10 col-md-12">
        <div className="section-title5 text-center">
          <img src="assets/images/icons/sec-title-vector3.svg" alt="image" />
          <span>PARTNERS</span>
          <h2>People <span>Trust Us !</span></h2>
          <p>Unmatched expertise and personalized service you can rely on. We deliver unforgettable travel experiences every time, tailored just for you.</p>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <Swiper {...partnarSlider} className="swiper partner-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="partner-single">
              <img src="assets/images/icons/partner51.svg" alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="partner-single">
              <img src="assets/images/icons/partner52.svg" alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="partner-single">
              <img src="assets/images/icons/partner53.svg" alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="partner-single">
              <img src="assets/images/icons/partner54.svg" alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="partner-single">
              <img src="assets/images/icons/partner55.svg" alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="partner-single">
              <img src="assets/images/icons/partner51.svg" alt="image" />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  </div>
</div>

  )
}

export default Home5Partnar