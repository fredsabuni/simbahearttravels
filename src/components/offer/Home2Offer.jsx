import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([ Autoplay]);
function Home2Offer() {
  const offerSlider = {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 25,
    autoplay: true,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: false,
    breakpoints: {
        280:{
            slidesPerView: "auto",
          navigation: false,
          },
      576:{
        slidesPerView: "auto",
        navigation: false,
      },
      768:{
        slidesPerView: 2,
        navigation: false,
      },
      992:{ 
        slidesPerView: 3
      },
      1200:{
        slidesPerView: 3
      },
    }
  }
  return (
    <div className="offer-section">
  <div className="container">
    <div className="row">
      <div className="col-12 ">
        <Swiper {...offerSlider} className="swiper offer-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="offer-single">
                <img src="assets/images/bg/offer-bg1.png" className="offer-bg" alt="image" />
                <img src="assets/images/bg/offer-badge1.svg" className="offer-badge" alt="image" />
                <div className="content">
                  <div className="review-area sibling-2">
                    <ul className="star-list">
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-half" /></li>
                    </ul>
                    <span>10 Review</span>
                  </div>
                  <Link href="/tour-package-details"><a>Epcot Center Drive, Orlando</a></Link>
                  <span>03 days / from $2500</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="offer-single">
                <img src="assets/images/bg/offer-bg2.png" className="offer-bg" alt="image" />
                <img src="assets/images/bg/offer-badge2.svg" className="offer-badge" alt="image" />
                <div className="content">
                  <div className="review-area sibling-2">
                    <ul className="star-list">
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-half" /></li>
                    </ul>
                    <span>10 Review</span>
                  </div>
                  <Link href="/tour-package-details"><a>A tour of the Amazon Forest. </a></Link>
                  <span>03 days / from $2500</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="offer-single">
                <img src="assets/images/bg/offer-bg3.png" className="offer-bg" alt="image" />
                <img src="assets/images/bg/offer-badge3.svg" className="offer-badge" alt="image" />
                <div className="content">
                  <div className="review-area sibling-2">
                    <ul className="star-list">
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-half" /></li>
                    </ul>
                    <span>10 Review</span>
                  </div>
                  <Link href="/tour-package-details"><a>Antelope cany Arizona US of America</a></Link>
                  <span>03 days / from $2500</span>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        {/* <div className="swiper-pagination sibling-2 d-flex align-items-center justify-content-center mt-60" /> */}
      </div>
    </div>
  </div>
</div>

  )
}

export default Home2Offer