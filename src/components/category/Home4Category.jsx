import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Home4Category() {
    const categirySlider = {
        slidesPerView: "auto",
        speed: 1200,
        spaceBetween: 25,
        // autoplay: true,
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
        }}
  return (
    <div className="trip-category-section overflow-hidden pt-120 pb-120">
  <img src="assets/images/bg/trip-cat-bg.png" className="trip-bg" alt="image" />
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 text-center">
        <div className="section-title4 sibling2">
          <span>Our Activities</span>
          <h2>Enjoy The Adventure Trip</h2>
          <img src="assets/images/icons/section-title-white.svg" className="img-fluid" alt="image" />
        </div>
      </div>
    </div>
    <div className="row ">
      <div className="col-12">
        <Swiper {...categirySlider} className="swiper trip-category-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="trip-category-single">
                <div className="trip-image">
                  <img src="assets/images/bg/trip-img1.png" className="img-fluid" alt="image" />
                  <span className="blog-date">Hiking</span>
                </div>
                <div className="trip-content">
                  <h4><Link href="/blog-details"><a>Free Style Skiing</a></Link></h4>
                  <div className="trip-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                  </div>
                  <div className="trip-bottom">
                    <ul className="trip-meta-list">
                      <li><i className="bx bx-user-circle" />Age 20+</li>
                      <li><i className="bx bx-time-five" />05 Hours</li>
                    </ul>
                    <Link href="/blog-details"><a className="explore-btn">Explorer Now<i className="bi bi-arrow-right" /></a></Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="trip-category-single">
                <div className="trip-image">
                  <img src="assets/images/bg/trip-img2.png" className="img-fluid" alt="image" />
                  <span className="blog-date">Hiking</span>
                </div>
                <div className="trip-content">
                  <h4><Link href="/blog-details"><a>Hikes In The Lake Louise</a></Link></h4>
                  <div className="trip-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                  </div>
                  <div className="trip-bottom">
                    <ul className="trip-meta-list">
                      <li><i className="bx bx-user-circle" />Age 20+</li>
                      <li><i className="bx bx-time-five" />05 Hours</li>
                    </ul>
                    <Link href="/blog-details"><a className="explore-btn">Explorer Now<i className="bi bi-arrow-right" /></a></Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="trip-category-single">
                <div className="trip-image">
                  <img src="assets/images/bg/trip-img3.png" className="img-fluid" alt="image" />
                  <span className="blog-date">Hiking</span>
                </div>
                <div className="trip-content">
                  <h4><Link href="/blog-details"><a>Family Adventure</a></Link></h4>
                  <div className="trip-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                  </div>
                  <div className="trip-bottom">
                    <ul className="trip-meta-list">
                      <li><i className="bx bx-user-circle" />Age 20+</li>
                      <li><i className="bx bx-time-five" />05 Hours</li>
                    </ul>
                    <Link href="/blog-details"><a className="explore-btn">Explorer Now<i className="bi bi-arrow-right" /></a></Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="trip-category-single">
                <div className="trip-image">
                  <img src="assets/images/bg/trip-img1.png" className="img-fluid" alt="image" />
                  <span className="blog-date">Hiking</span>
                </div>
                <div className="trip-content">
                  <h4><Link href="/blog-details"><a>Free Style Skiing</a></Link></h4>
                  <div className="trip-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                  </div>
                  <div className="trip-bottom">
                    <ul className="trip-meta-list">
                      <li><i className="bx bx-user-circle" />Age 20+</li>
                      <li><i className="bx bx-time-five" />05 Hours</li>
                    </ul>
                    <Link href="/blog-details"><a className="explore-btn">Explorer Now<i className="bi bi-arrow-right" /></a></Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
    <div className="row">
      <div className="swiper-pagination sibling-4 d-flex align-items-center justify-content-center mt-60" />
    </div>
  </div>
</div>

  )
}

export default Home4Category