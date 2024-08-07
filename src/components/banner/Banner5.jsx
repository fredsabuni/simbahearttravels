import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([, Autoplay,EffectFade]);
function Banner5() {
    const bannerSlider5 = {
        slidesPerView: "auto",
  speed: 1200,
  spaceBetween: 15,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  loop: true,
  // roundLengths: true,
  pagination: {
    el: ".swiper-pagination-number",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
    }
  return (
    <div className="banner-section5"> 
  <div className="banner-social-area">
    <div className="text-white">1</div>
    <div className="swiper-pagination-number d-flex flex-column align-items-center gap-5" />
    <ul className="banner-social gap-4">
      <li><a href="#"><i className="bx bxl-facebook" /></a></li>
      <li><a href="#"><i className="bx bxl-twitter" /></a></li>
      <li><a href="https://www.instagram.com/simbahearttravelsoffical?utm_source=qr"><i className="bx bxl-instagram" /></a></li> 
    </ul>
  </div>
  <Swiper {...bannerSlider5} className="swiper banner5-slider">
    <div className="swiper-wrapper">
      <SwiperSlide className="swiper-slide">
        <img src="assets/images/slider/home05/image01.jpg" className="banner-bg11" alt="image" />
        <div className="banner5-content">
          <span>DISCOVER LUXURY, EMBRACE PURPOSE</span>
          <h2>Bespoke Travel Experiences</h2>
          <p>At Simba Heart Travels, we specialize in crafting tailor-made journeys that blend opulence with meaningful experiences.  </p>
          <Link href="#safari-section"><a  className="eg-btn btn--primary3 btn--lg">Explore Safari</a></Link>
        </div>    
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src="assets/images/slider/home05/image02.jpg" className="banner-bg11" alt="image" />
        <div className="banner5-content">
          <span>EXPERIENCE WILD LIFE</span>
          <h2>Meet Our Awesome Safari</h2>
          <p>Treat yourself with an unforgettable sailing experience. Grab a last minute bargain with one of our late cruise deals. </p>
          <Link href="#safari-section"><a  className="eg-btn btn--primary3 btn--lg">Explore Safari</a></Link>
        </div>     
      </SwiperSlide>
    </div>
  </Swiper>
</div>

  )
}

export default Banner5