import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Home5Destination() {
    const destination5Slider = {
        slidesPerView: "auto",
    speed: 800,
    spaceBetween: 25,
    autoplay: true,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: {
      nextEl: ".destination5-next",
      prevEl: ".destination5-prev",
    },
    breakpoints: {
        280:{
            slidesPerView: 1,
          navigation: false,
          },
          420:{
            slidesPerView: 2,
            navigation: false,
          },
      576:{
        slidesPerView: 2,
        navigation: false,
      },
      768:{
        slidesPerView: 3,
        navigation: false,
      },
      992:{ 
        slidesPerView: 4
      },
      1200:{
        slidesPerView: 4
      },
      1400:{
        slidesPerView: 5
      },
    }
    }
  return (
    <div className="destination-section5 overflow-hidden">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-10 col-md-12">
          <div className="section-title5 text-center">
            <img src="assets/images/icons/sec-title-vector3.svg" alt="image" />
            <span>DESTINATION</span>
            <h2>Find Your Desire <span>Destination</span></h2>
            <p>The Wildlife conservation is long term commitment and journey that requires the cooperation of everyone in the community.</p>
          </div>
        </div>
      </div>
      <div className="row position-relative">
        <div className="col-12 d-flex justify-content-center">
          <Swiper {...destination5Slider} className="swiper destination5-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="destination-single3">
                  <img src="assets/images/bg/destination51.png" className="destination-img img-fluid" alt="image" />
                  <div className="content">
                    <div className="text-wrap">
                      <h4><Link href="/destination-details"><a>Africa Adventure</a></Link></h4>
                      <p>40 Tours Place</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="destination-single3">
                  <img src="assets/images/bg/destination52.png" className="destination-img img-fluid" alt="image" />
                  <div className="content">
                    <div className="text-wrap">
                      <h4><Link href="/destination-details"><a>Wiesbaden Sea</a></Link></h4>
                      <p>40 Tours Place</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="destination-single3">
                  <img src="assets/images/bg/destination53.png" className="destination-img img-fluid" alt="image" />
                  <div className="content">
                    <div className="text-wrap">
                      <h4><Link href="/destination-details"><a>National Park</a></Link></h4>
                      <p>40 Tours Place</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="destination-single3">
                  <img src="assets/images/bg/destination54.png" className="destination-img img-fluid" alt="image" />
                  <div className="content">
                    <div className="text-wrap">
                      <h4><Link href="/destination-details"><a>Safari Park</a></Link></h4>
                      <p>40 Tours Place</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="destination-single3">
                  <img src="assets/images/bg/destination51.png" className="destination-img img-fluid" alt="image" />
                  <div className="content">
                    <div className="text-wrap">
                      <h4><Link href="/destination-details"><a>Africa Adventure</a></Link></h4>
                      <p>40 Tours Place</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="destination-single3">
                  <img src="assets/images/bg/destination53.png" className="destination-img img-fluid" alt="image" />
                  <div className="content">
                    <div className="text-wrap">
                      <h4><Link href="/destination-details"><a>Adventure Park</a></Link></h4>
                      <p>40 Tours Place</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="slider-arrows arrows-style-1 sibling-1 text-center d-lg-flex d-none flex-row justify-content-between align-items-center w-100">
          <div className="destination5-prev swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"> 
            <svg width={20} height={12} viewBox="0 0 20 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.00001 10.573V6L7.00001 1.42701C7.00001 1.25744 6.80224 1.16481 6.67197 1.27336L1 6L6.67197 10.7266C6.80224 10.8352 7.00001 10.7426 7.00001 10.573Z" />
              <path d="M19 6.5C19.2761 6.5 19.5 6.27614 19.5 6C19.5 5.72386 19.2761 5.5 19 5.5V6.5ZM6.67197 10.7266L6.99206 10.3425V10.3425L6.67197 10.7266ZM1 6L0.679909 5.61589L0.218975 6L0.679909 6.38411L1 6ZM6.67197 1.27336L6.35188 0.889252L6.35188 0.889253L6.67197 1.27336ZM19 5.5L7.00001 5.5V6.5L19 6.5V5.5ZM6.50001 6V10.573H7.50001V6H6.50001ZM6.99206 10.3425L1.32009 5.61589L0.679909 6.38411L6.35188 11.1107L6.99206 10.3425ZM1.32009 6.38411L6.99206 1.65747L6.35188 0.889253L0.679909 5.61589L1.32009 6.38411ZM6.50001 1.42701L6.50001 6H7.50001L7.50001 1.42701H6.50001ZM6.99206 1.65747C6.79667 1.82031 6.50001 1.68136 6.50001 1.42701H7.50001C7.50001 0.833523 6.80781 0.509313 6.35188 0.889252L6.99206 1.65747ZM6.50001 10.573C6.50001 10.3186 6.79667 10.1797 6.99206 10.3425L6.35188 11.1107C6.80781 11.4907 7.50001 11.1665 7.50001 10.573H6.50001Z" />
            </svg>    
          </div>
          <div className="destination5-next swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide"> 
            <svg width={20} height={12} viewBox="0 0 20 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1.42701V6V10.573C13 10.7426 13.1978 10.8352 13.328 10.7266L19 6L13.328 1.27336C13.1978 1.16481 13 1.25744 13 1.42701Z" />
              <path d="M1 5.5C0.723858 5.5 0.5 5.72386 0.5 6C0.5 6.27614 0.723858 6.5 1 6.5V5.5ZM13.328 1.27336L13.0079 1.65747V1.65747L13.328 1.27336ZM19 6L19.3201 6.38411L19.781 6L19.3201 5.61589L19 6ZM13.328 10.7266L13.6481 11.1107L13.6481 11.1107L13.328 10.7266ZM1 6.5H13V5.5H1V6.5ZM13.5 6V1.42701H12.5V6H13.5ZM13.0079 1.65747L18.6799 6.38411L19.3201 5.61589L13.6481 0.889253L13.0079 1.65747ZM18.6799 5.61589L13.0079 10.3425L13.6481 11.1107L19.3201 6.38411L18.6799 5.61589ZM13.5 10.573V6H12.5V10.573H13.5ZM13.0079 10.3425C13.2033 10.1797 13.5 10.3186 13.5 10.573H12.5C12.5 11.1665 13.1922 11.4907 13.6481 11.1107L13.0079 10.3425ZM13.5 1.42701C13.5 1.68136 13.2033 1.82031 13.0079 1.65747L13.6481 0.889253C13.1922 0.509312 12.5 0.833522 12.5 1.42701H13.5Z" />
            </svg>    
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Home5Destination