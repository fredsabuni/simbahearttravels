import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay,EffectFade]);
function Banner4() {
    const banner4Slider = {
        slidesPerView: "auto",
        speed: 1200,
        spaceBetween: 15,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-banner-pagination",
          clickable: true,
        },
    }
  return (
    <div className="banner-section5 sibling-2"> 
  <div className="banner-social-area2">
    <div className="text-dark">1</div>
    <div className="swiper-banner-pagination d-flex flex-column align-items-center gap-4" />
    <ul className="banner-social gap-4">
      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
      <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
      <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li> 
      <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li> 
    </ul>
  </div>
  <Swiper {...banner4Slider} className="swiper banner4-slider">
    <div className="swiper-wrapper">
      <SwiperSlide className="swiper-slide">
        <img src="assets/images/slider/home04/image01.jpg" className="banner-bg11" alt="image" />
        <div className="banner4-content">
          <span>EXPERIENCE ADVENTURE</span>
          <h2>Best  &amp; Amazing Adventure in The World.</h2>
          <p>Treat yourself with a journey to your inner self.</p>
          <Link href="/destination"><a className="eg-btn btn--primary btn--lg">Let’s go Now</a></Link>
        </div>    
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src="assets/images/slider/home04/image02.png" className="banner-bg11" alt="image" />
        <div className="banner4-content">
          <span>EXPERIENCE ADVENTURE</span>
          <h2>Best  &amp; Amazing Adventure in The World.</h2>
          <p>Treat yourself with a journey to your inner self.</p>
          <Link href="/destination"><a  className="eg-btn btn--primary btn--lg">Let’s go Now </a></Link>
        </div>    
      </SwiperSlide>
    </div>
  </Swiper>
</div>

  )
}

export default Banner4