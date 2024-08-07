import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Home2Package2() {
  const packageSlider = {
    slidesPerView: "auto",
      speed: 1200,
      spaceBetween: 20,
      autoplay: true,
      loop: true,
      roundLengths: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: 'true',
      },
      navigation: {
        nextEl: ".package1-next",
        prevEl: ".package1-prev",
      },
      breakpoints: {
          280:{
              slidesPerView: "auto",
            navigation: false,
          },
          386:{
            slidesPerView: "auto",
            navigation: false,
          },
        576:{
          slidesPerView: 2,
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
        1400:{
          slidesPerView: 4
        },
      }
  }
  return (
    <div className="tour-package-section pt-120">
  <div className="container-fluid">
    <div className="row justify-content-start align-items-start">
      <div className="col-lg-6 col-md-8 text-md-start text-center">
        <div className="section-title2 d-flex flex-column justify-content-center">
          <span>Choose Your’s</span>
          <h2>Get The Best Astrip Tour’s</h2>
        </div>
      </div>
      <div className="col-lg-6 col-md-4">
        <div className="slider-arrows arrows-style-4 text-center d-md-flex d-none flex-row gap-5 justify-content-end align-items-center pt-1">
          <div className="package1-prev swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"> 
            <i className="bi bi-arrow-left" />
          </div>
          <div className="package1-next swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide"> 
            <i className="bi bi-arrow-right" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Swiper {...packageSlider} className="swiper tour-package-selider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="tour-package-single">
                <img src="assets/images/bg/package11.png" className="img-fluid" alt="image" />
                <div className="package-content">
                  <Link href="/tour-package-details"><a><h4>Aegean Adventure Beach!</h4></a></Link>
                  <p>Lorem ipsum dolor sit amet, consectetur adi- piscing elit.</p>
                  <span className="price">From $250</span>
                </div>
                <Link href="/tour-package-details"><a className="explore-btn">Explore Now</a></Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="tour-package-single">
                <img src="assets/images/bg/package12.png" className="img-fluid" alt="image" />
                <div className="package-content">
                  <Link href="/tour-package-details"><a><h4>Family Tour With America!</h4></a></Link>
                  <p>Lorem ipsum dolor sit amet, consectetur adi- piscing elit.</p>
                  <span className="price">From $250</span>
                </div>
                <Link href="/tour-package-details"><a className="explore-btn">Explore Now</a></Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="tour-package-single">
                <img src="assets/images/bg/package13.png" className="img-fluid" alt="image" />
                <div className="package-content">
                  <Link href="/tour-package-details"><a><h4>South America City Tour!</h4></a></Link>
                  <p>Lorem ipsum dolor sit amet, consectetur adi- piscing elit.</p>
                  <span className="price">From $250</span>
                </div>
                <Link href="/tour-package-details"><a className="explore-btn">Explore Now</a></Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="tour-package-single">
                <img src="assets/images/bg/package11.png" className="img-fluid" alt="image" />
                <div className="package-content">
                  <Link href="/tour-package-details"><a><h4>Aegean Adventure Beach!</h4></a></Link>
                  <p>Lorem ipsum dolor sit amet, consectetur adi- piscing elit.</p>
                  <span className="price">From $250</span>
                </div>
                <Link href="/tour-package-details"><a className="explore-btn">Explore Now</a></Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="tour-package-single">
                <img src="assets/images/bg/package14.png" className="img-fluid" alt="image" />
                <div className="package-content">
                  <Link href="/tour-package-details"><a><h4>Tours in Ethuopia City!</h4></a></Link>
                  <p>Lorem ipsum dolor sit amet, consectetur adi- piscing elit.</p>
                  <span className="price">From $250</span>
                </div>
                <Link href="/tour-package-details"><a className="explore-btn">Explore Now</a></Link>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home2Package2